import React from "react";
import { Social } from "../Social/Social";

function Footer() {
  return (
    <footer className="bg-[#0F0F0F] py-[128px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-6">
          <div>
            <h5>Home</h5>
            <p>Categories</p>
            <p>Devices</p>
            <p>Pricing</p>
            <p>FAQ</p>
          </div>
          <div>
            <h5>Movies</h5>
            <p>Genres</p>
            <p>Trending</p>
            <p>New Release</p>
            <p>Popular</p>
          </div>
          <div>
            <h5>Shows</h5>
            <p>Genres</p>
            <p>Trending</p>
            <p>New Release</p>
            <p>Popular</p>
          </div>
          <div>
            <h5>Support</h5>
            <p>Contact Us</p>
          </div>
          <div>
            <h5>Subcription</h5>
            <p>Plans</p>
            <p>Features</p>
          </div>
          <Social />
        </div>

        <div className="flex justify-between pt-8">
          <p>@2023 streamvib, All Rights Reserved</p>
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
