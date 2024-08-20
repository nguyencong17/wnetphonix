"use client";
import * as React from "react";
import Logo from "../../../public/logo/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import { MagnifyingGlassIcon, BellAlertIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  return (
    <header className={`top-0 left-0  right-0 z-10 ${pathname === "/" ? "fixed" : ""}`}>
      <div className="container mx-auto py-8 relative z-10">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Image src={Logo} alt="Logo" width={200} height={60} />
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
          <div className="flex gap-6 text-white">
            <MagnifyingGlassIcon className="h-8 w-8" />
            <BellAlertIcon className="h-8 w-8" />
          </div>
        </div>
      </div>
    </header>
  );
};
