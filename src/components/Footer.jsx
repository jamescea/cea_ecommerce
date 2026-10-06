import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-auto border-t border-[#b2f7ef]/70 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3 md:px-6">
        <div>
          <h3 className="mb-2 text-lg font-semibold tracking-wide text-[#263238]">JEMSHOP</h3>
          <p className="text-sm leading-relaxed text-[#263238]/75">
            Thoughtfully designed essentials for everyday style. Soft, modern pieces made to feel good and look refined.
          </p>
        </div>
        <div>
          <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#263238]">Explore</h4>
          <ul className="space-y-1.5 text-sm text-[#263238]/75">
            <li>
              <Link to="/" className="hover:text-[#263238]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-[#263238]">
                Shop Collection
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-[#263238]">
                Cart
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#263238]">Good to Know</h4>
          <ul className="space-y-1.5 text-sm text-[#263238]/75">
            <li>Free shipping on all orders</li>
            <li>Cash on Delivery available</li>
            <li>Friendly customer support</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#eff7f6] bg-[#eff7f6] py-3 text-center text-xs text-[#263238]/60">
        © {new Date().getFullYear()} JEMSHOP. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
