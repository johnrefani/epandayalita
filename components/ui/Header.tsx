"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { navLinks } from "@/data";

interface NavLink {
  id: number;
  title: string;
  href: string;
  dropdown?: { id: number; title: string; href: string }[];
}

const Logo = () => (
  <Link 
    href="/" 
    className="relative w-full h-10 md:h-11 lg:h-12"
    aria-label="Home"
  >
    <Image 
      src="/logo.svg" 
      alt="Company Logo" 
      fill
      className="object-contain object-left"
      priority
    />
  </Link>
);

const MenuToggle = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="p-2 rounded-lg text-blue-50 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 lg:hidden"
    aria-label={isOpen ? "Close menu" : "Open menu"}
    aria-expanded={isOpen}
  >
    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
  </button>
);

const DropdownMenu = ({
  link,
  isOpen,
  onToggle,
  pathname,
  activeSection,
  onItemClick
}: {
  link: NavLink;
  isOpen: boolean;
  onToggle: () => void;
  pathname: string;
  activeSection: string;
  onItemClick?: () => void;
}) => (
  <div className="relative group">
    <button
      onClick={onToggle}
      className={`flex items-center justify-between gap-1 px-4 py-2 w-full rounded-lg transition-all duration-200 ${
        pathname === link.href || activeSection === link.href
          ? "text-blue-600 bg-blue-50 font-medium"
          : "text-blue-50 hover:text-blue-600 hover:bg-blue-50 group-hover:text-blue-600"
      }`}
      aria-haspopup="true"
      aria-expanded={isOpen}
      aria-controls={`dropdown-${link.id}`}
    >
      {link.title}
      <RiArrowDropDownLine
        className={`transition-transform duration-300 text-xl ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
      />
    </button>
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } lg:absolute lg:top-full lg:left-0 lg:mt-1 lg:bg-blue-950 lg:shadow-lg lg:rounded-lg lg:min-w-[200px] lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible lg:transition-all lg:duration-200`}
      id={`dropdown-${link.id}`}
      role="menu"
    >
      {link.dropdown?.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          onClick={onItemClick}
          className="block px-4 py-2 text-sm text-blue-50 hover:text-blue-600 hover:bg-blue-50 first:rounded-t-lg last:rounded-b-lg transition-colors duration-200 lg:whitespace-nowrap"
          role="menuitem"
        >
          {item.title}
        </Link>
      ))}
    </div>
  </div>
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpenId, setDropdownOpenId] = useState<number | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState("");

  const toggleDropdown = (id: number) => {
    setDropdownOpenId(dropdownOpenId === id ? null : id);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setDropdownOpenId(null);
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
    setDropdownOpenId(null);
  };

  const handleNavClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    const sectionId = link.replace("#", "");
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${sectionId}`);
    }
    setMenuOpen(false);
  };

  return (
    <header className="w-full bg-blue-950 border-b border-gray-100 fixed top-0 left-0 z-50">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Logo />
        <MenuToggle isOpen={menuOpen} onClick={() => setMenuOpen((prev) => !prev)} />
        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } lg:flex lg:items-center absolute lg:relative top-full left-0 w-full lg:w-auto bg-blue-950 lg:bg-transparent border-t lg:border-0 border-gray-100 lg:mt-0 py-4 lg:py-0 transition-all duration-300`}
          ref={menuRef}
        >
          <ul className="flex flex-col lg:flex-row w-full lg:w-auto gap-2 lg:gap-4 px-4 lg:px-0">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li key={link.id} className="w-full lg:w-auto">
                  <DropdownMenu
                    link={link}
                    isOpen={dropdownOpenId === link.id}
                    onToggle={() => toggleDropdown(link.id)}
                    pathname={pathname}
                    activeSection={activeSection}
                    onItemClick={handleLinkClick}
                  />
                </li>
              ) : (
                <li key={link.id}>
                  {link.id === 1 || link.id === 3 ? (
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`block px-4 py-2 rounded-lg transition-all duration-200 ${
                        pathname === link.href || activeSection === link.href
                          ? "text-blue-600 bg-blue-50 font-medium"
                          : "text-blue-50 hover:text-blue-600 hover:bg-blue-50"
                      }`}
                    >
                      {link.title}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={handleLinkClick}
                      className={`block px-4 py-2 rounded-lg transition-all duration-200 ${
                        pathname === link.href || activeSection === link.href
                          ? "text-blue-600 bg-blue-50 font-medium"
                          : "text-blue-50 hover:text-blue-600 hover:bg-blue-50"
                      }`}
                    >
                      {link.title}
                    </Link>
                  )}
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;