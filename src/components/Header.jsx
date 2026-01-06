import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, School } from "lucide-react"

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const nav = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Facilities", path: "/facilities" },
    { name: "Contact", path: "/contact" }
  ]

  const active = (p) => location.pathname === p

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 bg-navy-primary rounded-lg flex items-center justify-center shrink-0">
              <School className="w-6 h-6 text-white" />
            </div>

            <div className="min-w-0">
              <h1 className="text-sm sm:text-base font-bold text-navy-primary truncate">
                Our Lady of Grace & Compassion School
              </h1>
              <p className="text-xs text-text-muted truncate">
                Mundika, Busia County
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-8">
            {nav.map((n) => (
              <Link
                key={n.name}
                to={n.path}
                className={`font-medium transition ${
                  active(n.path)
                    ? "text-navy-primary border-b-2 border-gold-accent"
                    : "text-text-body hover:text-navy-primary"
                }`}
              >
                {n.name}
              </Link>
            ))}
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-background-card"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden border-t pb-4">
            <div className="flex flex-col gap-2 pt-4">
              {nav.map((n) => (
                <Link
                  key={n.name}
                  to={n.path}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium ${
                    active(n.path)
                      ? "bg-navy-primary text-white"
                      : "hover:bg-background-card"
                  }`}
                >
                  {n.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
