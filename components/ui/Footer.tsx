"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { footerLinks } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full bg-blue-700 text-white" id="makipagugnayan">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2 xl:col-span-1 flex justify-center md:justify-start mb-8 xl:mb-0">
            <div className="relative w-40 h-20">
              <Image  
                className="bg-white rounded-lg p-2" 
                src="/logo-footer.svg"
                alt="Company Logo"
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 768px) 160px, 160px"
                priority
              />
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.id} className="flex flex-col gap-4">
              <h2 className="text-lg font-semibold text-white mb-2">
                {section.title}
              </h2>

              {section.links && (
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.id}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-200 hover:text-white transition-colors duration-200 hover:underline"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              {section.contacts && (
                <div className="space-y-3">
                  <div>
                    <h3 className="text-sm font-medium text-gray-200">
                      Email:
                    </h3>
                    <Link
                      href={section.contacts[0].href}
                      className="text-sm text-white hover:text-gray-200 transition-colors duration-200 break-all text-nowrap"
                    >
                      {section.contacts[0].title}
                    </Link>
                  </div>
                  {section.contacts[1] && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-200">
                        Phone:
                      </h3>
                      <p className="text-sm text-white">
                        {section.contacts[1].title}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-blue-600 text-center">
          <p className="text-sm text-gray-200">
            © {new Date().getFullYear()} E-Pandayalita. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;