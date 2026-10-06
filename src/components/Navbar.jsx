import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar({ cartItemCount, searchTerm, setSearchTerm }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSearch, setMobileSearch] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (setSearchTerm) {
      setSearchTerm(searchTerm || mobileSearch);
    }
    navigate("/");
    setMenuOpen(false);
  };

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? "text-[#263238] border-b-2 border-[#7bdff2]" : "text-[#263238]/80 hover:text-[#263238]"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-[#b2f7ef]/60 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        {/* Brand */}
        <Link
          to="/"
          className="shrink-0 text-xl font-semibold tracking-wide text-[#263238]"
          onClick={() => setMenuOpen(false)}
        >
          JEMSHOP
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden items-center gap-6 md:flex">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <a
            href="/#shop"
            className="text-sm font-medium text-[#263238]/80 transition-colors hover:text-[#263238]"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
              setTimeout(() => {
                document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
              }, 50);
            }}
          >
            Shop
          </a>
          <NavLink to="/cart" className={linkClass}>
            Cart
          </NavLink>
        </nav>

        {/* Desktop search + cart */}
        <div className="hidden items-center gap-3 md:flex">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="search"
              placeholder="Search products..."
              value={searchTerm || ""}
              onChange={(e) => setSearchTerm && setSearchTerm(e.target.value)}
              className="w-44 rounded-full border border-[#b2f7ef] bg-[#eff7f6] px-4 py-1.5 text-sm text-[#263238] outline-none transition focus:border-[#7bdff2] focus:ring-2 focus:ring-[#7bdff2]/40 lg:w-56"
            />
          </form>
          <Link
            to="/cart"
            className="inline-flex items-center gap-2 rounded-full bg-[#7bdff2] px-4 py-1.5 text-sm font-medium text-[#263238] transition hover:bg-[#b2f7ef]"
          >
            <CartIcon />
            <span>Cart ({cartItemCount})</span>
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            to="/cart"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#7bdff2] px-3 py-1.5 text-sm font-medium text-[#263238]"
          >
            <CartIcon />
            <span>({cartItemCount})</span>
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded-lg border border-[#b2f7ef] p-2 text-[#263238]"
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-[#b2f7ef]/60 bg-white px-4 py-4 md:hidden">
          <nav className="mb-4 flex flex-col gap-3">
            <NavLink to="/" end className={linkClass} onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
            <a
              href="/#shop"
              className="text-sm font-medium text-[#263238]/80"
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
                navigate("/");
                setTimeout(() => {
                  document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
                }, 50);
              }}
            >
              Shop
            </a>
            <NavLink to="/cart" className={linkClass} onClick={() => setMenuOpen(false)}>
              Cart ({cartItemCount})
            </NavLink>
          </nav>
          <form onSubmit={handleSearchSubmit}>
            <input
              type="search"
              placeholder="Search products..."
              value={mobileSearch}
              onChange={(e) => {
                setMobileSearch(e.target.value);
                if (setSearchTerm) setSearchTerm(e.target.value);
              }}
              className="w-full rounded-full border border-[#b2f7ef] bg-[#eff7f6] px-4 py-2 text-sm text-[#263238] outline-none focus:border-[#7bdff2] focus:ring-2 focus:ring-[#7bdff2]/40"
            />
          </form>
        </div>
      )}
    </header>
  );
}

function CartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M6 6h15l-1.5 9h-12z" />
      <path d="M6 6L5 3H2" />
      <circle cx="9" cy="20" r="1" />
      <circle cx="18" cy="20" r="1" />
    </svg>
  );
}

export default Navbar;
