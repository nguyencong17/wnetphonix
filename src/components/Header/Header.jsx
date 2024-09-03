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
    router.push(`/movie/${item.id}`);
    setSearchTerm("");
    setSearchResult([]);
  };

  useEffect(() => {
    const searchMovie = async () => {
      if (searchTerm.trim()) {
        try {
          const searchResult = await movieAPIs.searchMovies(searchTerm);
          setSearchResult(searchResult.data.results);
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
      <div className="container mx-auto py-8 relative z-10">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Image src={Logo} alt="Logo" width={200} height={60} priority={true}/>
          {/* Menu */}
          <ul className="flex bg-[#050505] rounded-lg p-2 gap-4 menu">
            <li
              className={`p-4 rounded-lg hover:bg-[#1a1a1a] ${
                pathname === "/" ? "active text-white" : ""
              }`}
            >
              <Link href={"/"}>Home</Link>
            </li>
            <li
              className={`p-4 rounded-lg hover:bg-[#1a1a1a] ${
                pathname === "/movies" ? "active text-white" : ""
              }`}
            >
              <Link href={"/movies"}>Movie & Show</Link>
            </li>
            <li
              className={`p-4 rounded-lg hover:bg-[#1a1a1a] ${
                pathname === "/support" ? "active text-white" : ""
              }`}
            >
              <Link href={"/support"}>Support</Link>
            </li>
            <li
              className={`p-4 rounded-lg hover:bg-[#1a1a1a] ${
                pathname === "/subscription" ? "active text-white" : ""
              }`}
            >
              <Link href={"/subscription"}>Subscriptions</Link>
            </li>
          </ul>
          {/* Action */}
          <div className="flex gap-6 text-white relative">
            <form onSubmit={handleSubmit} className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Search"
                className="bg-[#1a1a1a] p-2 rounded-lg"
                onChange={handleChange}
                value={searchTerm}
              />
              <button type="submit">
                <MagnifyingGlassIcon className="h-8 w-8" />
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
                        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                        width={50}
                        height={50}
                        alt={item.title || item.name}
                      />
                      {item.title || item.name}
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <BellAlertIcon className="h-8 w-8" />
          </div>
        </div>
      </div>
    </header>
  );
};
