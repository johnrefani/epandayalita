{/* NavLinks */}
export const navLinks = [
  {
    id: 1,
    title: "Pangunahing Pahina",
    href: "#pangunahingpahina",
  },
  {
    id: 2,
    title: "Mga Kategoriya",
    href: "#mgakategoriya",
    dropdown: [
      { id: 1, title: "Mga Bahagi", href: "/part" },
      { id: 2, title: "Proseso", href: "/process" },
      { id: 3, title: "Mga Produkto", href: "/product" },
      { id: 4, title: "Mga Kasangkapan at Materyales", href: "/tools" },
    ],
  },
  {
    id: 3,
    title: "Impormasyon",
    href: "#impormasyon",
    dropdown: [
      { id: 1, title: "Mananaliksik", href: "/mananaliksik" },
      { id: 2, title: "Tagapayo", href: "/tagapayo"},
    ]
  },
  {
    id: 4,
    title: "Tungkol",
    href: "/tungkol",
  },
  {
    id: 5,
    title: "Makipag-ugnayan",
    href: "#makipagugnayan",
  },
];


export const footerLinks = [
  {
    id:1,
    title: "Mga Ugnay",
    links: [
      { id: 1, title: "Tungkol sa Amin  ", href: "/tungkol" },
      { id: 2, title: "Patakaran sa Pagkapribado", href: "/patakaransapagkapribado" },
      { id: 3, title: "Mga Tuntunin ng Paggamit", href: "/mgatuntuninngpaggamit" },
    ],
  },
  {
    id:2,
    title: "Makipag-ugnayan",
    contacts: [
      { id: 1, title: "info@pandayalitadictionary.com", href: "mailto:info@pandayalitadictionary.com" },
      { id: 2, title: "09519713078", href: "tel:09519713078" },
    ],
  },
  
];

export const terms = [
  { id: 1, word: 'Maso', link: '/tools/maso' },
  { id: 2, word: 'Mulye', link: '/tools/mulye' },
  { id: 3, word: 'Palihan', link: '/tools/palihan' },
  { id: 4, word: 'Balalong', link: '/tools/balalong' },
  { id: 5, word: 'Kinabase', link: '/product/kinabase' },
  { id: 6, word: 'Sungot-hipon', link: '/product/sungot-hipon' },
  { id: 7, word: 'Gapas', link: '/product/gapas' },
  { id: 8, word: 'Ginunting', link: '/product/ginunting' },
  { id: 9, word: 'Lukas', link: '/process/lukas' },
  { id: 10, word: 'Mulyonan', link: '/tools/mulyonan' },
];

