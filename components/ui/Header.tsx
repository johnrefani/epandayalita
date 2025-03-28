"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data";
import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full bg-secondary shadow-md">
      <div className="px-4 md:px-16 lg:px-24 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link href={"/home"}>
          <Image src="/logo.svg" alt="logo" width={250} height={100} />
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex text-base items-center gap-6 text-primary">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li key={link.id} className="relative">
                  {/* Categories Button */}
                  <button
                    className="flex items-center gap-1 px-4  cursor-pointer hover:border-b-2 hover:border-green-600"
                    onClick={() =>
                      setOpenDropdown((prev) =>
                        prev === link.id ? null : link.id
                      )
                    }
                  >
                    {link.title}
                    <RiArrowDownSLine
                      className={`text-lg transition-transform duration-300 ${
                        openDropdown === link.id ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu (Controlled by openDropdown) */}
                  {openDropdown === link.id && (
                    <div
                      ref={dropdownRef}
                      className="absolute left-0 mt-2 w-60 bg-white shadow-md rounded-md overflow-hidden"
                    >
                      <ul>
                        {link.dropdown.map((item) => (
                          <li key={item.id}>
                            <Link
                              href={item.href}
                              className="block px-4 py-2 text-primary hover:bg-green-100"
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
                <li
                  key={link.id}
                  className={`border-b-2 transition-all duration-300 ${
                    pathname === link.href
                      ? "border-green-600"
                      : "border-transparent hover:border-green-600"
                  }`}
                >
                  <Link className="p-[10px]" href={link.href}>
                    {link.title}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-4">
          <button
            className="text-primary cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } lg:hidden transition-all duration-300`}
      >
        <ul className="flex flex-col items-center text-primary text-base gap-4 p-4">
          {navLinks.map((link) =>
            link.dropdown ? (
              <li key={link.id} className="relative w-full text-center">
                <button
                  className="flex-center gap-1 w-full px-4 py-2"
                  onClick={() =>
                    setOpenDropdown((prev) =>
                      prev === link.id ? null : link.id
                    )
                  }
                >
                  {link.title}
                  <RiArrowDownSLine
                    className={`text-lg transition-transform duration-300 ${
                      openDropdown === link.id ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                {openDropdown === link.id && (
                  <ul className="block w-full space-y-4">
                    {link.dropdown.map((item) => (
                      <li key={item.id}>
                        <Link
                          href={item.href}
                          className="px-4 py-2 hover:border-b-2 hover:border-green-600"
                          onClick={() => {
                            setOpenDropdown(null);
                            setMenuOpen(false);
                          }}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={link.id} className="w-full text-center">
                <Link
                  href={link.href}
                  className="px-4 py-2 hover:border-b-2 hover:border-green-600  "
                  onClick={() => setMenuOpen(false)}
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
