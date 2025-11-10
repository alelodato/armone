import { Link, useLocation } from "react-router-dom"

const NAV_ITEMS = [
  { href: "#chi-siamo", label: "Chi Siamo" },
  { href: "#classi", label: "Classi" },
  { href: "#contatti", label: "Contattaci" },
]

export default function Navbar() {
  const { pathname } = useLocation()

  const scrollOrNavigate = (e, href) => {
    if (pathname === "/") {
      e.preventDefault()
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="sticky top-0 z-100 bg-brand-100 backdrop-blur border-b border-brand-100">
      <div className="container h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="font-heading tracking-wide text-xl md:text-2xl text-brand-400 hover:opacity-80 transition"
        >
          ARMONĒ STUDIO
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollOrNavigate(e, item.href)}
              className="font-body text-brand-400 hover:opacity-70 transition"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile menu */}
        <details className="md:hidden relative">
          <summary className="cursor-pointer px-3 py-2 rounded border border-brand-100 text-brand-400 hover:bg-brand-100 transition">
            Menu
          </summary>
          <div className="absolute right-0 mt-2 w-48 bg-brand-50 border border-brand-100 rounded-xl p-2 shadow">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollOrNavigate(e, item.href)}
                className="block px-3 py-2 rounded hover:bg-brand-100 text-brand-400"
              >
                {item.label}
              </a>
            ))}
          </div>
        </details>
      </div>
    </nav>
  )
}
