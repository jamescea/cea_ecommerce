import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { formatPrice } from "../utils/formatPrice";

function Cart({
  cart,
  onIncrease,
  onDecrease,
  onRemove,
  cartTotal,
}) {
  if (cart.length === 0) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="mx-auto max-w-md rounded-2xl border border-[#b2f7ef] bg-white px-6 py-12 text-center shadow-sm">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#eff7f6]">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#263238" strokeWidth="1.8">
              <path d="M6 6h15l-1.5 9h-12z" />
              <path d="M6 6L5 3H2" />
              <circle cx="9" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>
          </div>
          <h1 className="mb-2 text-2xl font-semibold text-[#263238]">Your Cart is Empty</h1>
          <p className="mb-6 text-sm text-[#263238]/70">
            Looks like you haven&apos;t added anything yet.
          </p>
          <Link
            to="/"
            className="inline-block rounded-full bg-[#7bdff2] px-6 py-2.5 text-sm font-semibold text-[#263238] transition hover:bg-[#b2f7ef]"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-10">
      <h1 className="mb-6 text-2xl font-semibold text-[#263238]">Shopping Cart</h1>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          {cart.map((item) => (
            <CartItem
              key={item.product.id}
              item={item}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
              onRemove={onRemove}
            />
          ))}
        </div>

        <aside className="h-fit rounded-2xl border border-[#b2f7ef] bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-[#263238]">Order Summary</h2>
          <div className="mb-2 flex items-center justify-between text-sm text-[#263238]/80">
            <span>Subtotal</span>
            <span className="font-medium text-[#263238]">{formatPrice(cartTotal)}</span>
          </div>
          <div className="mb-4 flex items-center justify-between text-sm text-[#263238]/80">
            <span>Shipping</span>
            <span className="font-medium text-[#263238]">Free Shipping</span>
          </div>
          <div className="mb-5 flex items-center justify-between border-t border-[#eff7f6] pt-4">
            <span className="font-semibold text-[#263238]">Total</span>
            <span className="text-lg font-semibold text-[#263238]">{formatPrice(cartTotal)}</span>
          </div>
          <Link
            to="/checkout"
            className="block w-full rounded-full bg-[#7bdff2] py-2.5 text-center text-sm font-semibold text-[#263238] transition hover:bg-[#b2f7ef]"
          >
            Proceed to Checkout
          </Link>
          <Link
            to="/"
            className="mt-3 block w-full rounded-full border border-[#b2f7ef] bg-[#eff7f6] py-2.5 text-center text-sm font-medium text-[#263238] transition hover:bg-[#b2f7ef]/50"
          >
            Continue Shopping
          </Link>
        </aside>
      </div>
    </div>
  );
}

export default Cart;
