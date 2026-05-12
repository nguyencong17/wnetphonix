"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MagnifyingGlassIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { Menu, X } from "lucide-react";
import Logo from "../../../public/logo/Logo.svg";
import movieAPIs from "@/apis/movieAPIs";
import { mycountry, mygenres } from "@/apis/mydata";
import { useDebounce } from "@/hooks/useDebounce";

const NAV_LINKS = [
  { name: "Trang Chủ", href: "/" },
  { name: "Phim bộ", href: "/phim-bo" },
  { name: "Phim lẻ", href: "/phim-le" },
  { name: "TV shows", href: "/tvshows" },
  { name: "Hoạt hình", href: "/cartoons" },
  { name: "Phim đang chiếu", href: "/upcommings" },
];

export const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchPopupOpen, setIsSearchPopupOpen] = useState(false);
  
  const debouncedQuery = useDebounce(searchTerm, 500);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?keyword=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
      setSearchResult([]);
      setIsSearchPopupOpen(false);
    }
  };

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setSearchResult([]);
      return;
    }
    movieAPIs.searchMovies(debouncedQuery)
      .then(res => setSearchResult(res.data.items))
      .catch(console.error);
  }, [debouncedQuery]);

  const accessToken = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  return (
    <header className={`bg-[#141414] w-full z-50 transition-all ${pathname === "/" ? "fixed" : "sticky top-0 shadow-lg"}`}>
      <div className="container mx-auto px-4">
        {/* Giữ nguyên flex-row để Logo luôn ở bên trái */}
        <div className="flex flex-row items-center justify-between h-[70px]">
          
          {/* CỤM TRÁI: Logo -> Search -> Menu (PC) */}
          <div className="flex items-center gap-6 flex-1">
            <Link href="/" className="shrink-0">
              <Image src={Logo} alt="Logo" width={120} height={40} priority />
            </Link>

            {/* Thanh Search PC */}
            <div className="hidden xl:block relative group">
              <form onSubmit={handleSubmit} className="relative">
                <input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Tìm kiếm phim..."
                  className="bg-white/10 text-sm border border-white/20 rounded-full py-2 px-4 pr-10 w-[200px] focus:w-[300px] focus:border-primary outline-none transition-all"
                />
                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 opacity-60 hover:opacity-100">
                  <MagnifyingGlassIcon className="h-5 w-5" />
                </button>
              </form>
              
              {searchResult.length > 0 && (
                <ul className="absolute top-full mt-2 bg-[#1a1a1a] w-[350px] rounded-lg shadow-2xl border border-white/10 overflow-hidden z-[60]">
                  {searchResult.slice(0, 6).map(movie => (
                    <li key={movie.id} onClick={() => { router.push(`/movie/${movie.slug}`); setSearchResult([]); }} className="flex gap-3 p-3 hover:bg-white/5 cursor-pointer items-center border-b border-white/5">
                      <img src={movie.poster_url} className="w-10 h-14 object-cover rounded" alt="p" />
                      <span className="text-sm truncate text-white">{movie.title || movie.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Menu điều hướng PC */}
            <ul className="hidden xl:flex items-center text-[13px] font-medium">
              {NAV_LINKS.map(link => (
                <li key={link.href} className={`px-3 py-4 hover:text-white transition-colors ${pathname === link.href ? "text-white border-b-2 border-primary" : "text-gray-400"}`}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
              
              {[ {title: "Thể loại", data: mygenres}, {title: "Quốc gia", data: mycountry} ].map(dropdown => (
                <li key={dropdown.title} className="group relative px-3 py-4 cursor-pointer text-gray-400 hover:text-white">
                  <div className="flex items-center gap-1">{dropdown.title} <ChevronDownIcon className="h-4 w-4" /></div>
                  <div className="hidden group-hover:grid grid-cols-4 absolute top-full left-[-150px] bg-[#111] w-[600px] p-6 shadow-2xl border-t-2 border-primary z-50 animate-in fade-in zoom-in-95 duration-200">
                    {dropdown.data.map(item => (
                      <Link key={item.id} href={`/list/${item.id}`} className="p-2 text-sm text-gray-400 hover:text-primary transition-colors">{item.name}</Link>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* CỤM PHẢI: Account + Mobile Icons */}
          <div className="flex items-center gap-4">
            <div className="hidden xl:block">
              <Link href={accessToken ? "/logout" : "/login"} className="flex flex-col items-center opacity-70 hover:opacity-100 transition">
                <span className="text-[11px] font-bold uppercase">{accessToken ? "Thoát" : "Tài khoản"}</span>
              </Link>
            </div>

            {/* Mobile Icons (Luôn nằm bên phải) */}
            <div className="xl:hidden flex items-center gap-4">
              <button onClick={() => setIsSearchPopupOpen(true)} className="p-1">
                <MagnifyingGlassIcon className="h-6 w-6 text-white" />
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-1">
                {isMenuOpen ? <X size={26} className="text-white" /> : <Menu size={26} className="text-white" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* POPUP SEARCH MOBILE */}
      {isSearchPopupOpen && (
        <div className="fixed inset-0 bg-[#0f0f0f] z-[100] flex flex-col p-6 animate-in fade-in slide-in-from-top duration-300">
          <div className="flex justify-end mb-10">
            <button onClick={() => setIsSearchPopupOpen(false)} className="p-2 bg-white/5 rounded-full">
              <X size={30} className="text-white" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="relative border-b-2 border-primary pb-2">
            <input
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm phim, diễn viên..."
              className="w-full bg-transparent py-4 text-2xl outline-none text-white placeholder:text-gray-600"
            />
            <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2">
              <MagnifyingGlassIcon className="h-8 w-8 text-primary" />
            </button>
          </form>
          <div className="mt-8 overflow-y-auto no-scrollbar flex-1">
            {searchResult.length > 0 && (
              <ul className="flex flex-col gap-4 pb-10">
                {searchResult.map((movie) => (
                  <li key={movie.id} onClick={() => { router.push(`/movie/${movie.slug}`); setIsSearchPopupOpen(false); }} className="flex items-center gap-4 p-2 bg-white/5 rounded-lg active:scale-95 transition">
                    <img src={movie.poster_url} className="w-12 h-16 object-cover rounded" alt="" />
                    <span className="text-white font-medium">{movie.title || movie.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}

      {/* MENU MOBILE OVERLAY */}
      {isMenuOpen && (
        <div className="xl:hidden fixed inset-0 top-[70px] bg-black/95 z-[90] p-6 animate-in slide-in-from-right duration-300">
          <ul className="flex flex-col gap-6 text-lg font-semibold text-right">
            {NAV_LINKS.map(link => (
              <li key={link.href} onClick={() => setIsMenuOpen(false)} className="border-b border-white/5 pb-2">
                <Link href={link.href} className={pathname === link.href ? "text-primary" : "text-white"}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};