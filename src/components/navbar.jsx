import React, { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Our Vehicles", href: "#vehicles" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* ── Mobile Overlay ── */}
      {menuOpen && <div onClick={() => setMenuOpen(false)} className='fixed inset-0 z-40 bg-black/40' style={{ backdropFilter: "blur(4px)" }} />}

      {/* ── Mobile Drawer ── */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-2xl flex flex-col pt-6 px-6 pb-8 transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className='flex items-center justify-between mb-8'>
          <div className='flex items-center gap-3'>
            <img src='src/assets/logo.png' alt='Logo' className='h-12' />
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className='p-2 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors'
            aria-label='Close menu'
          >
            <svg
              width='18'
              height='18'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M18 6L6 18M6 6l12 12' />
            </svg>
          </button>
        </div>

        <div className='h-px bg-gray-100 mb-6' />

        {/* Mobile Links */}
        <ul className='flex flex-col gap-1 flex-1'>
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => {
                  setActiveLink(link.label);
                  setMenuOpen(false);
                }}
                className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium border-l-4 transition-all duration-200 ${
                  activeLink === link.label ?
                    "bg-red-50 text-red-600 border-red-500"
                  : "text-gray-600 border-transparent hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className='h-px bg-gray-100 mb-6' />

        <a
          href='#contact'
          onClick={() => setMenuOpen(false)}
          className='flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold text-sm shadow-lg transition-all duration-200'
        >
          Contact Us
          <svg
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M5 12h14M12 5l7 7-7 7' />
          </svg>
        </a>

        <div className='mt-6 space-y-2'>
          <p className='text-[9px] text-gray-400 uppercase tracking-[2px] font-semibold'>Get In Touch</p>
          <a href='tel:+1234567890' className='flex items-center gap-2 text-xs text-gray-500 hover:text-red-600 transition-colors'>
            <span>📞</span> +1 (234) 567-890
          </a>
          <a href='mailto:info@sas.com' className='flex items-center gap-2 text-xs text-gray-500 hover:text-red-600 transition-colors'>
            <span>✉️</span> info@sas.com
          </a>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-30 bg-white transition-all duration-300 ${
          scrolled ? "shadow-md border-b border-gray-100 py-3" : "shadow-sm py-4"
        }`}
      >
        <div className='max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between'>
          {/* Logo */}
          <a href='#home' className='flex items-center gap-3 group flex-shrink-0' aria-label='SAS Home'>
            <div className='flex flex-col leading-none'>
                <img src='src/assets/logo.png' alt='Logo' className='h-12' />
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className='hidden md:block' aria-label='Main navigation'>
            <ul className='flex items-center gap-1'>
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setActiveLink(link.label)}
                    className='relative group px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 block'
                    style={{
                      color: activeLink === link.label ? "#dc2626" : "#4b5563",
                      fontWeight: activeLink === link.label ? 600 : 500,
                    }}
                  >
                    <span className='relative z-10 transition-colors duration-200 group-hover:text-gray-900'>{link.label}</span>
                    {/* Underline */}
                    <span
                      className='absolute bottom-1.5 left-1/2 -translate-x-1/2 h-0.5 bg-red-500 rounded-full transition-all duration-300'
                      style={{ width: activeLink === link.label ? "60%" : "0%", opacity: activeLink === link.label ? 1 : 0 }}
                    />
                    <span
                      className='absolute inset-0 rounded-lg bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200'
                      style={{ zIndex: 0 }}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA + Hamburger */}
          <div className='flex items-center gap-3'>
            {/* Desktop CTA */}
            <a
              href='#contact'
              className='hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-sm font-semibold tracking-wide shadow-md shadow-red-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg group'
            >
              Contact Us
              <svg
                width='14'
                height='14'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='transition-transform duration-200 group-hover:translate-x-1'
              >
                <path d='M5 12h14M12 5l7 7-7 7' />
              </svg>
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label='Toggle navigation menu'
              aria-expanded={menuOpen}
              className='md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors'
            >
              <div className='flex flex-col gap-1.5 w-5'>
                <span
                  className='block h-0.5 bg-current rounded-full transition-all duration-300 origin-center'
                  style={{ transform: menuOpen ? "translateY(8px) rotate(45deg)" : "none" }}
                />
                <span
                  className='block h-0.5 bg-current rounded-full transition-all duration-300'
                  style={{ opacity: menuOpen ? 0 : 1, transform: menuOpen ? "scaleX(0)" : "scaleX(1)" }}
                />
                <span
                  className='block h-0.5 bg-current rounded-full transition-all duration-300 origin-center'
                  style={{ transform: menuOpen ? "translateY(-8px) rotate(-45deg)" : "none" }}
                />
              </div>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
