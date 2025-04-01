"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { footerLinks } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full bg-green-700 px-4 md:px-16 lg:px-24 py-16 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-8">
        {/* Logo */}
        <div className="relative w-52 min-h-28 justify-self-center md:justify-self-start">
          <Image
            className="bg-white rounded-md"
            src={"/logo-footer.svg"}
            alt="logo"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Footer Links */}
        {footerLinks.map((section) => (
          <div key={section.id} className="flex flex-col gap-2.5">
            <h2 className="text-base text-white">{section.title}</h2>

            {/* Links Section */}
            {section.links &&
              section.links.map((link) => (
                <h3 className="text-sm text-white" key={link.id}>
                  <Link
                    key={link.id}
                    href={link.href}
                    className=" hover:underline"
                  >
                    {link.title}
                  </Link>
                </h3>
              ))}

            {/* Contacts Section */}
            {section.contacts && (
              <div className="flex flex-col">
                <h2 className="text-sm text-white">Email Address:</h2>
                <Link
                  key={section.contacts[0].id}
                  href={section.contacts[0].href}
                  className="text-sm text-white hover:underline"
                >
                  {section.contacts[0].title}
                </Link>
                <h2 className="text-sm text-white mt-2">
                  Contact Number: {section.contacts[1]?.title}
                </h2>
              </div>
            )}

            {/* Socials Section */}
            {section.icons && (
              <div className="flex gap-3 mt-2">
                {section.icons.map((icon) => (
                  <Link
                    key={icon.id}
                    href={icon.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={icon.icon}
                      alt={icon.alt}
                      width={32}
                      height={32}
                      className="hover:opacity-80 transition"
                    />
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
