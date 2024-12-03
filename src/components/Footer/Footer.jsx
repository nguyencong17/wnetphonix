import React from "react";
import { Social } from "../Social/Social";
import Logo from "../../../public/logo/Logo.svg";
import Link from "next/link";
import Image from "next/image";
function Footer() {
  return (
    <footer className="bg-foreground border-t py-[64px] lg:py-[128px]">
      <div className="container mx-auto">
        <div className="flex justify-start">
        {/* Logo */}
        <Link href={"/"}>
          <Image
            src={Logo}
            alt="Logo"
            width={200}
            height={60}
            priority={true}
            className="w-[150px] lg:w-[200px] mb-[64px] lg:mb-[32px]"
          />
        </Link>
        </div>
        <div className="flex flex-col lg:flex-row">
        <div className="basis-3/4 grid grid-cols-2 lg:grid-cols-4 mb-8">
          <div>
            <h5 className="mb-4">Home</h5>
            <p className="mb-4">Categories</p>
            <p className="mb-4">Devices</p>
            <p className="mb-4">Pricing</p>
            <p className="mb-4">FAQ</p>
          </div>
          <div>
            <h5 className="mb-4">Movies</h5>
            <p className="mb-4">Genres</p>
            <p className="mb-4">Trending</p>
            <p className="mb-4">New Release</p>
            <p className="mb-4">Popular</p>
          </div>
          <div>
            <h5 className="mb-4">Shows</h5>
            <p className="mb-4">Genres</p>
            <p className="mb-4">Trending</p>
            <p className="mb-4">New Release</p>
            <p className="mb-4">Popular</p>
          </div>
          <div>
            <h5 className="mb-4">Support</h5>
            <p className="mb-4">Contact Us</p>
            <p className="mb-4">Plans</p>
            <p className="mb-4">Features</p>
          </div>
        </div>
        <Social className="flex-1" />
        </div>
        <div className="grid grid-cols-1 2xl:grid-cols-2 justify-between pt-8">
          <p className="mb-4">@2024 streamvib, All Rights Reserved</p>
          <ul className="flex gap-4">
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
