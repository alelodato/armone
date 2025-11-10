import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { href: "#chi-siamo", label: "Chi Siamo" },
  { href: "#classi", label: "Classi" },
  { href: "#contatti", label: "Contattaci" },
];

const NAVBAR_H = 64; // h-16 = 64px

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // chiudi il menu se cambi route o clicchi fuori
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    function onClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
    }
    if (open) document.addEventListener("click", onClickOutside);
    return () => document.removeEventListener("click", onClickOutside);
  }, [open]);

  const scrollOrNavigate = (e, href) => {
    if (pathname === "/") {
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      const top =
        el.getBoundingClientRect().top + window.scrollY - NAVBAR_H - 8; // piccolo margine
      window.scrollTo({ top, behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[9999] bg-brand-100/90 backdrop-blur-md border-b border-brand-100">
      <div className="container h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="font-heading tracking-wide text-xl md:text-2xl text-brand-400 hover:opacity-80 transition"
        >
          ARMONĒ STUDIO
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => scrollOrNavigate(e, item.href)}
                className="font-body text-brand-400 hover:opacity-70 transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <div className="md:hidden relative" ref={menuRef}>
          <button
            aria-label="Apri menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="px-3 py-2 rounded border border-brand-400 text-brand-400 hover:bg-brand-100 transition"
          >
            Menu
          </button>

          {open && (
            <ul className="absolute right-0 top-[calc(100%+8px)] w-48 bg-brand-100 border border-brand-100 rounded-xl p-2 shadow-xl z-[9999]">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => scrollOrNavigate(e, item.href)}
                    className="block px-3 py-2 rounded hover:bg-brand-100 text-brand-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
