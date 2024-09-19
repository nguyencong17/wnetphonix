import React from "react";
import { Social } from "../Social/Social";

function Footer() {
  return (
    <footer className="bg-[#0F0F0F] py-[128px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-6">
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
          </div>
          <div>
            <h5 className="mb-4">Subcription</h5>
            <p className="mb-4">Plans</p>
            <p className="mb-4">Features</p>
          </div>
          <Social />
        </div>

        <div className="flex justify-between pt-8">
          <p className="mb-4">@2023 streamvib, All Rights Reserved</p>
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
