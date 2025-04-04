"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";
import { navLinks } from "@/data";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith("#")) {
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setActiveSection(href);
      }
    } else {
      window.location.href = href;
    }
  };

  useEffect(() => {
    const sections = navLinks.map((link) => link.href).filter((href) => href.startsWith("#"));

    const handleScrollEvent = () => {
      let current = "";
      sections.forEach((href) => {
        const section = document.querySelector(href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = href;
          }
        }
      });
      setActiveSection(current);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };

    window.addEventListener("scroll", handleScrollEvent);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <div className="px-4 md:px-16 lg:px-24 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/home">
          <Image src="/logo.svg" alt="logo" width={250} height={100} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:block">
          <ul className="flex gap-6 text-base items-center">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li
                  key={link.id}
                  className="relative"
                >
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.id ? null : link.id)}
                    className={`flex items-center gap-1 px-2 py-1 border-b-2 transition duration-300 ${
                      pathname === link.href || activeSection === link.href
                        ? "border-green-600"
                        : "border-transparent hover:border-green-600"
                    }`}
                  >
                    {link.title}
                    <RiArrowDownSLine
                      className={`transition-transform duration-300 ${
                        openDropdown === link.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === link.id && (
                    <div
                      ref={dropdownRef}
                      className="absolute top-full left-0 mt-2 w-48 bg-white shadow-md rounded-md overflow-hidden z-50"
                    >
                      <ul>
                        {link.dropdown.map((item) => (
                          <li key={item.id}>
                            <Link
                              href={item.href}
                              className="block px-4 py-2 hover:bg-green-100"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ) : (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className={`px-3 py-1 border-b-2 transition ${
                      pathname === link.href
                        ? "border-green-600"
                        : "border-transparent hover:border-green-600"
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav className={`${menuOpen ? "block" : "hidden"} lg:hidden bg-white`}>
        <ul className="flex flex-col gap-4 px-4 pb-4">
          {navLinks.map((link) =>
            link.dropdown ? (
              <li key={link.id}>
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === link.id ? null : link.id)
                  }
                  className="flex justify-between w-full items-center py-2"
                >
                  {link.title}
                  <RiArrowDownSLine
                    className={`transition-transform duration-300 ${
                      openDropdown === link.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === link.id && (
                  <ul className="ml-4 space-y-2">
                    {link.dropdown.map((item) => (
                      <li key={item.id}>
                        <Link
                          href={item.href}
                          onClick={() => {
                            setOpenDropdown(null);
                            setMenuOpen(false);
                          }}
                          className="block py-1 text-sm hover:text-green-600"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={link.id}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 hover:text-green-600"
                >
                  {link.title}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
