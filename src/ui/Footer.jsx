import { FaEnvelope, FaPhone } from "react-icons/fa";

import { NavLink } from "react-router";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-14 px-6">
      <div className="max-w-7xl mx-auto">
        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* 1. BRAND SECTION */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.jpeg"
                alt="Snow Sanchar Logo"
                className="w-10 h-10 object-contain"
              />
              <h2 className="text-xl font-bold text-[#ffbf00]">Snow Sanchar</h2>
            </div>

            <p className="text-sm leading-relaxed">
              A creative event management organization dedicated to discovering
              and promoting talent across Nepal through events, pageants, and
              artistic platforms.
            </p>
          </div>

          {/* 2. QUICK LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/home" className="hover:text-[#ffbf00]">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-[#ffbf00]">
                  Contestants
                </NavLink>
              </li>
              <li>
                <NavLink to="/events" className="hover:text-[#ffbf00]">
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-[#ffbf00]">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* 3. CONTACT SECTION */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>

            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-2">
                <FaEnvelope /> snowsancharproduction@gmail.com
              </p>

              <p className="flex items-center gap-2">
                <FaPhone /> 9842112050
              </p>
              <p className="flex items-center gap-2">
                <FaPhone /> 9765256682
              </p>
            </div>
          </div>

          {/* 4. SOCIAL MEDIA */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <SocialMedia />
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Snow Sanchar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
