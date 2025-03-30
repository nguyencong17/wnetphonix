"use client";
import * as React from "react";
import Logo from "../../../public/logo/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import movieAPIs from "@/apis/movieAPIs";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { mycountry, mygenres } from "@/apis/mydata";

export const Header = () => {
  // Get current pathname
  const pathname = usePathname();

  // State
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  // Navigate to movie
  const router = useRouter();

  // Off dropdown at every click outside
  const dropdownGenresRef = useRef(null);
  const dropdownCountryRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  // Handle when user type in search input
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle when user submit search form
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Navigate to the search page
    if (searchTerm.trim()) {
      await router.push(`/search?search=${searchTerm}`);
      setSearchTerm("");
      setSearchResult([]);
    }
  };

  // Handle when user click on search result
  const handleNavigateToMovie = (item) => {
    router.push(`/movie/${item.slug}`);
    setSearchTerm("");
    setSearchResult([]);
  };

  // Search movie
  useEffect(() => {
    const searchMovie = async () => {
      if (searchTerm.trim()) {
        try {
          const searchResult = await movieAPIs.searchMovies(searchTerm);
          setSearchResult(searchResult.data.items);
          // console.log(searchResult);
        } catch (error) {
          console.log(error);
        }
      }
    };

    searchMovie();
  }, [searchTerm]);

  // Close dropdown when click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownGenresRef.current &&
        !dropdownGenresRef.current.contains(event.target)
      ) {
        dropdownGenresRef.current.classList.add("hidden");
      }
      if (
        dropdownCountryRef.current &&
        !dropdownCountryRef.current.contains(event.target)
      ) {
        dropdownCountryRef.current.classList.add("hidden");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // handle toggle dropdown
  const handleToggleDropdownGenres = (e) => {
    dropdownCountryRef.current.classList.add("hidden"); // Ẩn dropdown quốc gia
    dropdownGenresRef.current.classList.toggle("hidden"); // Chuyển đổi dropdown thể loại
  };

  const handleToggleDropdownCountry = (e) => {
    dropdownGenresRef.current.classList.add("hidden"); // Ẩn dropdown thể loại
    dropdownCountryRef.current.classList.toggle("hidden"); // Chuyển đổi dropdown quốc gia
  };

  // handle when click menu on mobile
  const handleCloseToggleMenu = () => {
    setIsOpen(false);
  };

  const accessToken = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  return (
    <header
      className={`bg-foreground top-0 left-0 right-0 z-10 text-[12px] 2xl:text-[14px] p-2 ${
        pathname === "/" ? "fixed" : ""
      }`}
    >
      <div className="container relative z-10 py-4 xl:py-0">
        <div className="flex justify-between items-center relative">
          <li className="flex gap-8 items-center">
            {/* Logo Wnetphonix */}
            <Link href={"/"}>
              <Image
                src={Logo}
                alt="Logo wnetphonix"
                width={200}
                height={60}
                priority={true}
                className="w-[120px]"
              />
            </Link>
            {/* Menu on PC */}
            <ul className="hidden xl:flex menu">
              <li
                className={`p-2 2xl:p-4 ${
                  pathname === "/" ? "active text-white !bg-background" : ""
                }`}
              >
                <Link href={"/"}>Trang Chủ</Link>
              </li>
              <li
                className={`p-2 2xl:p-4 ${
                  pathname === "/movies"
                    ? "active text-white !bg-background"
                    : ""
                }`}
              >
                <Link href={"/movies"}>Phim HOT</Link>
              </li>
              <li
                className={`p-2 2xl:p-4 ${
                  pathname === "/tvseries"
                    ? "active text-white !bg-background"
                    : ""
                }`}
              >
                <Link href={"/tvseries"}>Phim bộ</Link>
              </li>
              <li
                className={`p-2 2xl:p-4 ${
                  pathname === "/films"
                    ? "active text-white !bg-background"
                    : ""
                }`}
              >
                <Link href={"/films"}>Phim lẻ</Link>
              </li>
              <li
                className={`p-2 2xl:p-4 ${
                  pathname === "/tvshows"
                    ? "active text-white !bg-background"
                    : ""
                }`}
              >
                <Link href={"/tvshows"}>TV shows</Link>
              </li>
              <li
                className={`p-2 2xl:p-4 ${
                  pathname === "/cartoons"
                    ? "active text-white !bg-background"
                    : ""
                }`}
              >
                <Link href={"/cartoons"}>Hoạt hình</Link>
              </li>
              <li
                className={`p-2 2xl:p-4 ${
                  pathname === "/upcommings"
                    ? "active text-white !bg-background"
                    : ""
                }`}
              >
                <Link href={"/upcommings"}>Phim đang chiếu</Link>
              </li>
              <li
                className={`p-2 2xl:p-4 flex gap-2 items-center relative cursor-pointer`}
                onClick={handleToggleDropdownGenres}
              >
                Thể loại
                <ChevronDownIcon className="h-4 w-4" />
                <ul
                  ref={dropdownGenresRef}
                  className="absolute top-[53px] left-0 xl:left-[-200px] shadow-md bg-[#111111] w-[700px] pb-4 border-b-2 border-primary
                  hidden"
                >
                  <div className="grid grid-cols-4">
                    {mygenres.map((genre) => (
                      <li
                        key={genre.id}
                        className="flex gap-2 py-2 px-4 cursor-pointer hover:bg-foreground"
                      >
                        <Link href={`/list/${genre.id}`}>{genre.name}</Link>
                      </li>
                    ))}
                  </div>
                </ul>
              </li>
              <li
                className={`p-2 2xl:p-4 flex gap-2 items-center relative cursor-pointer`}
                onClick={handleToggleDropdownCountry}
              >
                Quốc gia
                <ChevronDownIcon className="h-4 w-4" />
                <ul
                  ref={dropdownCountryRef}
                  className="absolute top-[53px] left-0 xl:left-[-300px] shadow-md bg-[#111111] w-[700px] pb-4 border-b-2 border-primary
                  hidden"
                >
                  <div className="grid grid-cols-4">
                    {mycountry.map((country) => (
                      <li
                        key={country.id}
                        className="flex gap-2 py-2 px-4 cursor-pointer hover:bg-foreground"
                      >
                        <Link href={`/list/${country.id}`}>{country.name}</Link>
                      </li>
                    ))}
                  </div>
                </ul>
              </li>
            </ul>

            {/* Menu on Mobile */}
            {isOpen && (
              <ul className="xl:hidden border grid grid-cols-2 absolute top-[70px] left-0 right-0 rounded-lg menu max-w-full bg-[rgba(0,0,0,1)] p-4 items-center">
                <li
                  className={`p-4 ${
                    pathname === "/" ? "active text-white !bg-background" : ""
                  }`}
                  onClick={handleCloseToggleMenu}
                >
                  <Link href={"/"}>Trang Chủ</Link>
                </li>
                <li
                  className={`p-4 ${
                    pathname === "/movies"
                      ? "active text-white !bg-background"
                      : ""
                  }`}
                  onClick={handleCloseToggleMenu}
                >
                  <Link href={"/movies"}>Phim HOT</Link>
                </li>
                <li
                  className={`p-4 ${
                    pathname === "/tvseries"
                      ? "active text-white !bg-background"
                      : ""
                  }`}
                  onClick={handleCloseToggleMenu}
                >
                  <Link href={"/tvseries"}>Phim bộ</Link>
                </li>
                <li
                  className={`p-4 ${
                    pathname === "/films"
                      ? "active text-white !bg-background"
                      : ""
                  }`}
                  onClick={handleCloseToggleMenu}
                >
                  <Link href={"/films"}>Phim lẻ</Link>
                </li>
                <li
                  className={`p-4 ${
                    pathname === "/tvshows"
                      ? "active text-white !bg-background"
                      : ""
                  }`}
                  onClick={handleCloseToggleMenu}
                >
                  <Link href={"/tvshows"}>TV shows</Link>
                </li>
                <li
                  className={`p-4 ${
                    pathname === "/cartoons"
                      ? "active text-white !bg-background"
                      : ""
                  }`}
                  onClick={handleCloseToggleMenu}
                >
                  <Link href={"/cartoons"}>Hoạt hình</Link>
                </li>
                <li
                  className={`p-4 ${
                    pathname === "/upcommings"
                      ? "active text-white !bg-background"
                      : ""
                  }`}
                  onClick={handleCloseToggleMenu}
                >
                  <Link href={"/upcommings"}>Phim đang chiếu</Link>
                </li>
                <li
                  className={`p-4 flex gap-2 cursor-pointer relative`}
                  onClick={handleToggleDropdownGenres}
                >
                  Thể loại
                  <ChevronDownIcon className="h-4 w-4" />
                  <ul
                    ref={dropdownGenresRef}
                    className="absolute top-[46px] !w-[280px] h-[300px] left-[-150px] overflow-y-scroll bg-[#111] pb-4 border-b-2 border-primary z-20 rounded-lg hidden"
                  >
                    <div className="grid grid-cols-2">
                      {mygenres.map((genre) => (
                        <li
                          key={genre.id}
                          className="flex gap-2 py-2 px-4 cursor-pointer hover:bg-foreground"
                          onClick={handleCloseToggleMenu}
                        >
                          <Link href={`/list/${genre.id}`}>{genre.name}</Link>
                        </li>
                      ))}
                    </div>
                  </ul>
                </li>
                <li
                  className={`p-4 flex gap-2 relative cursor-pointer`}
                  onClick={handleToggleDropdownCountry}
                >
                  Quốc gia
                  <ChevronDownIcon className="h-4 w-4" />
                  <ul
                    ref={dropdownCountryRef}
                    className="absolute top-[46px] !w-[280px] h-[300px] overflow-y-scroll bg-[#111] pb-4 border-b-2 border-primary z-20 rounded-lg
                  hidden"
                  >
                    <div className="grid grid-cols-2">
                      {mycountry.map((country) => (
                        <li
                          key={country.id}
                          className="flex gap-2 py-2 px-4 cursor-pointer hover:bg-foreground"
                          onClick={handleCloseToggleMenu}
                        >
                          <Link href={`/list/${country.id}`}>
                            {country.name}
                          </Link>
                        </li>
                      ))}
                    </div>
                  </ul>
                </li>

                {/* Language */}
                <li className="p-4" onClick={handleCloseToggleMenu}>
                  <p>Language</p>
                </li>

                {/* Account */}
                <li className="p-4" onClick={handleCloseToggleMenu}>
                  <Link href={"/login"} className="">
                    <span className="text-[12px]">Tài khoản</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          {/* Action */}
          <div className="flex gap-6 items-center">
            {/* Search Input */}
            <div className="hidden xl:flex gap-6 text-white relative">
              <form onSubmit={handleSubmit} className="flex items-center gap-4">
                <input
                  type="text"
                  placeholder="Dead or Alive"
                  className="bg-[rgba(255,255,255,0.2)] text-[rgba(255,255,255,0.6)] w-[15rem] h-[36px] border rounded-[8px] relative p-3 outline-none"
                  onChange={handleChange}
                  value={searchTerm}
                />
                <button type="submit" className="absolute z-2 right-[10px]">
                  <MagnifyingGlassIcon className="h-6 w-6" />
                </button>
              </form>
              {searchResult && searchResult.length > 0 && (
                <ul className="absolute top-12 left-0 bg-[#1a1a1a] flex flex-col gap-2 w-[300px] p-4 max-h-[600px] overflow-y-scroll no-scrollbar rounded-lg">
                  {searchResult.map((item) => (
                    <li
                      key={item.id}
                      className="flex gap-4 mb-4:not(:first-child) cursor-pointer text-[16px] items-center"
                      onClick={() => handleNavigateToMovie(item)}
                    >
                      <Image
                        src={item.poster_url}
                        width={150}
                        height={150}
                        alt={item.title || item.name}
                        className="w-[100px] aspect-[16/9] object-cover object-top rounded-lg"
                      />
                      {item.title || item.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Language */}
            {/* <div className="hidden xl:flex flex-col items-center text-[12px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              <p>Language</p>
            </div> */}

            {/* Account */}
            <div className="hidden xl:flex">
              {accessToken ? (
                <Link href={"/logout"} className="flex-col items-center text-[10px] flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  <span className="text-[12px]">Xin chào User</span>
                </Link>
              ) : (
                <Link
                  href={"/login"}
                  className="flex-col items-center text-[10px] flex"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  <p className="text-[12px]">Tài khoản</p>
                </Link>
              )}
            </div>

            {/* Toogle menu on mobile */}
            <button className="xl:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
