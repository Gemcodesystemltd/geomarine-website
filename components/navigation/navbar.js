"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

export function Navbar() {
  const pathname = usePathname(); // Get the current route
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
  ];

  const isActive = (path) => pathname === path;

  return (
    <div className="fixed top-0 z-50 w-full">
      <section className="flex items-center justify-between px-4 lg:px-16 py-5 text-white backdrop-blur-md bg-black/40">
        <div>
          <Link href="/">
            <img src="/logo.jpg" alt="Geomarine Logo" className="w-full h-14" />
          </Link>
        </div>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                className={`transition-all duration-200 ease-in-out px-4 py-3 rounded-sm cursor-pointer ${
                  isActive(link.path) ? "bg-white/20" : "hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop button */}
        <div className="hidden lg:block">
          <Link href="/contact-us">
            <button className="bg-[#092656] text-white rounded-md px-8 py-3 hover:bg-gray-800 transition-all ease-in-out duration-200 cursor-pointer">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <LuX size={36} className="text-white cursor-pointer" />
            ) : (
              <LuMenu size={36} className="text-white cursor-pointer" />
            )}
          </button>
        </div>
      </section>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="text-white lg:hidden backdrop-blur-md bg-black/40 px-6 py-4 space-y-4">
          {navLinks.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-2 rounded-sm cursor-pointer transition ${
                isActive(link.path) ? "bg-white/20" : "hover:bg-white/10"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact-us" onClick={() => setMenuOpen(false)}>
            <button className="block w-full bg-[#092656] text-white rounded-md px-4 py-3 hover:bg-gray-800 transition cursor-pointer">
              Contact Us
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
