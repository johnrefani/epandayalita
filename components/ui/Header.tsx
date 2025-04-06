"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";
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
    className="relative h-12 w-40 md:h-14 md:w-48 lg:h-16 lg:w-56 transition-opacity hover:opacity-90"
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
    className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 lg:hidden"
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
  <div className="relative w-full">
    <button
      onClick={(e) => {
        e.preventDefault();
        onToggle();
      }}
      className={`flex items-center gap-1 px-4 py-3 w-full text-left justify-between ${
        pathname === link.href || activeSection === link.href
          ? "text-green-700 bg-green-50 font-medium"
          : "text-gray-700 hover:text-green-700 hover:bg-green-50"
      }`}
      aria-label={`Toggle ${link.title} dropdown menu`}
      aria-expanded={isOpen}
      aria-haspopup="true"
    >
      {link.title}
      <RiArrowDownSLine
        className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
      />
    </button>
    {isOpen && link.dropdown && (
      <ul className="w-full bg-white lg:absolute lg:top-full lg:mt-1 lg:min-w-[200px] lg:shadow-lg lg:rounded-md lg:border lg:border-gray-100">
        {link.dropdown.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className={`block px-4 py-2.5 text-sm transition-colors ${
                pathname === item.href
                  ? "bg-green-100 text-green-800"
                  : "text-gray-700 hover:bg-green-50"
              }`}
              onClick={onItemClick}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    )}
  </div>
);

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const sections = navLinks.map((link) => link.href).filter((href) => href.startsWith("#"));

    const handleScrollEvent = () => {
      setIsScrolled(window.scrollY > 10);
      const current = sections.find((href) => {
        const section = document.querySelector(href);
        if (section) {
          const rect = section.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      }) || "";
      setActiveSection(current);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
      if (mobileMenuRef.current && 
          !mobileMenuRef.current.contains(e.target as Node) && 
          !(e.target as HTMLElement).closest('button[aria-label="Toggle menu"]')) {
        setMenuOpen(false);
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
    <header 
      className={`fixed top-0 left-0 z-50 w-full bg-white transition-all duration-300 ${
        isScrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="mx-[1rem] md:mx-[3.75rem] lg:mx-[6.25rem] xl:mx-[7.5rem]">
        <div className="flex justify-between items-center py-4">
          <Logo />
          <nav className="hidden lg:block">
            <ul className="flex gap-4 xl:gap-6 items-center">
              {navLinks.map((link) => (
                <li key={link.id} className="relative">
                  {link.dropdown ? (
                    <div
                      onMouseEnter={() => setOpenDropdown(link.id)}
                      onMouseLeave={() => setOpenDropdown(null)}
                      ref={dropdownRef}
                    >
                      <DropdownMenu
                        link={link}
                        isOpen={openDropdown === link.id}
                        onToggle={() => setOpenDropdown(openDropdown === link.id ? null : link.id)}
                        pathname={pathname}
                        activeSection={activeSection}
                        onItemClick={() => setOpenDropdown(null)}
                      />
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`px-3 py-2 rounded-md transition-colors ${
                        pathname === link.href || activeSection === link.href
                          ? "text-green-700 bg-green-50 font-medium"
                          : "text-gray-700 hover:text-green-700 hover:bg-green-50"
                      }`}
                    >
                      {link.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <MenuToggle isOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
        </div>

        <div
          ref={mobileMenuRef}
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="pb-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.id} className="w-full">
                  {link.dropdown ? (
                    <DropdownMenu
                      link={link}
                      isOpen={openDropdown === link.id}
                      onToggle={() => setOpenDropdown(openDropdown === link.id ? null : link.id)}
                      pathname={pathname}
                      activeSection={activeSection}
                      onItemClick={() => {
                        setOpenDropdown(null);
                        setMenuOpen(false);
                      }}
                    />
                  ) : (
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`block px-4 py-3 w-full ${
                        pathname === link.href || activeSection === link.href
                          ? "text-green-700 bg-green-50"
                          : "text-gray-700 hover:text-green-700"
                      }`}
                    >
                      {link.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;