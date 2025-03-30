{/* NavLinks */}
export const navLinks = [
  {
    id: 1,
    title: "Home",
    href: "/#",
  },
  {
    id: 2,
    title: "Categories",
    href: "#",
    dropdown: [
      { id: 1, title: "Parts", href: "/parts" },
      { id: 2, title: "Process", href: "/process" },
      { id: 3, title: "Products", href: "/products" },
      { id: 4, title: "Tools & Materials", href: "/toolsandmaterials" },
    ],
  },
  {
    id: 3,
    title: "About",
    href: "/#",
  },
  {
    id: 4,
    title: "Contact",
    href: "/#",
  },
];


export const footerLinks = [
  {
    id:1,
    title: "Links",
    links: [
      { id: 1, title: "About Us", href: "/about" },
      { id: 2, title: "Privacy Policy", href: "/privacy-policy" },
      { id: 3, title: "Terms of Use", href: "/terms-of-use" },
    ],
  },
  {
    id:2,
    title: "Contact",
    contacts: [
      { id: 1, title: "info@pandayalitadictionary.com", href: "mailto:info@pandayalitadictionary.com" },
      { id: 2, title: "+123 456 7890", href: "tel:+1234567890" },
    ],
  },
  {
    id:3,
    title: "Socials",
    icons: [
      { id: 1, icon: "/icons/facebook.svg", alt: "facebook" ,href: "https://www.facebook.com/pandayalitadictionary" },
      { id: 2, icon: "/icons/linkedin.svg", alt: "linkedin" ,href: "https://www.linkedin.com/pandayalitadictionary"},
      { id: 3, icon: "/icons/twitter.svg", alt: "twitter",href: "https://www.x.com/pandayalitadictionary" },
      { id: 4, icon: "/icons/instagram.svg", alt: "instagram" ,href: "https://www.instagram.com/pandayalitadictionary"},
    ],
  },
];