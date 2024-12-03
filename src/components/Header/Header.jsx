"use client";
import * as React from "react";
import Logo from "../../../public/logo/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import { MagnifyingGlassIcon, BellAlertIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import movieAPIs from "@/apis/movieAPIs";
import { useRouter } from "next/navigation";

export const Header = () => {
  // Get current pathname
  const pathname = usePathname();

  // State
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  // Navigate to movie
  const router = useRouter();

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

  useEffect(() => {
    const searchMovie = async () => {
      if (searchTerm.trim()) {
        try {
          const searchResult = await movieAPIs.searchMovies(searchTerm);
          setSearchResult(searchResult.data.items);
          console.log(searchResult);
        } catch (error) {
          console.log(error);
        }
      }
    };

    searchMovie();
  }, [searchTerm]);

  return (
    <header
      className={`top-0 left-0  right-0 z-10 ${
        pathname === "/" ? "fixed" : ""
      }`}
    >
      <div className="container py-6 relative z-10  backdrop-blur-[5px] opacity-90;">
        <div className="flex justify-between items-center">
          <div className="flex gap-8 items-center">
            {/* Logo */}
            <Link href={"/"}>
              <Image
                src={Logo}
                alt="Logo"
                width={200}
                height={60}
                priority={true}
                className="w-[150px] lg:w-[150px]"
              />
            </Link>
            {/* Menu */}
            <ul className="hidden lg:flex rounded-lg gap-4 menu">
              <li
                className={`p-4 rounded-lg ${
                  pathname === "/"
                    ? "active text-white !bg-transparent font-bold"
                    : ""
                }`}
              >
                <Link href={"/"}>Home</Link>
              </li>
              <li
                className={`p-4 rounded-lg ${
                  pathname === "/movies"
                    ? "active text-white !bg-transparent font-bold"
                    : ""
                }`}
              >
                <Link href={"/movies"}>Movies & Show</Link>
              </li>
              <li
                className={`p-4 rounded-lg ${
                  pathname === "/support"
                    ? "active text-white !bg-transparent font-bold"
                    : ""
                }`}
              >
                <Link href={"/support"}>Support</Link>
              </li>
              <li
                className={`p-4 rounded-lg ${
                  pathname === "/pricing"
                    ? "active text-white !bg-transparent font-bold"
                    : ""
                }`}
              >
                <Link href={"/pricing"}>Pricing</Link>
              </li>
            </ul>
          </div>
          {/* Action */}
          <div className="flex gap-6 items-end">
            <div className="hidden lg:flex gap-6 text-white relative">
              <form onSubmit={handleSubmit} className="flex items-center gap-4">
                <input
                  type="text"
                  placeholder="Dead or Alive"
                  className="bg-[rgba(255,255,255,0.2)] text-[rgba(255,255,255,0.6)] w-[20rem] border rounded-[8px] relative p-3 outline-none"
                  onChange={handleChange}
                  value={searchTerm}
                />
                <button type="submit" className="absolute z-2 right-[10px]">
                  <MagnifyingGlassIcon className="h-6 w-6" />
                </button>
              </form>
              {searchResult && searchResult.length > 0 && (
                <ul className="absolute top-12 left-0 bg-[#1a1a1a] w-full p-4 rounded-lg max-h-[600px] overflow-y-scroll no-scrollbar">
                  {searchResult.map((item) => (
                    <li key={item.id}>
                      <div
                        className="flex gap-4 mb-4 cursor-pointer"
                        onClick={() => handleNavigateToMovie(item)}
                      >
                        <Image
                          src={item.poster_url}
                          width={80}
                          height={60}
                          alt={item.title || item.name}
                        />
                        {item.title || item.name}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="lg:hidden">
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
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>

            <div className="hidden lg:flex flex-col items-center text-[12px]">
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
            </div>

            <div className="hidden lg:flex flex-col items-center text-[12px]">
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
              <p>My Account</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
