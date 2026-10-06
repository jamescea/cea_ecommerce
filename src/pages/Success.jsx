import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";

function Success({ lastOrder }) {
  if (!lastOrder) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16 text-center md:px-6">
        <h1 className="mb-3 text-2xl font-semibold text-[#263238]">No order found</h1>
        <p className="mb-6 text-sm text-[#263238]/70">
          Place an order from checkout to see your confirmation here.
        </p>
        <Link
          to="/"
          className="inline-block rounded-full bg-[#7bdff2] px-5 py-2 text-sm font-semibold text-[#263238]"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-lg rounded-2xl border border-[#b2f7ef] bg-white p-8 text-center shadow-sm">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#b2f7ef]">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#263238" strokeWidth="2.2">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="mb-2 text-2xl font-semibold text-[#263238]">Order Confirmed</h1>
        <p className="mb-1 text-[#263238]/80">Thank you for your purchase!</p>
        <p className="mb-6 text-sm text-[#263238]/65">
          Your order has been successfully placed.
        </p>

        <div className="mb-6 space-y-3 rounded-xl bg-[#eff7f6] px-5 py-4 text-left text-sm">
          <div className="flex justify-between gap-4">
            <span className="text-[#263238]/70">Customer</span>
            <span className="font-medium text-[#263238]">{lastOrder.customer.fullName}</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-[#263238]/70">Payment Method</span>
            <span className="font-medium text-[#263238]">{lastOrder.customer.paymentMethod}</span>
          </div>
          <div className="flex justify-between gap-4 border-t border-[#b2f7ef]/80 pt-3">
            <span className="text-[#263238]/70">Order Total</span>
            <span className="text-base font-semibold text-[#263238]">
              {formatPrice(lastOrder.total)}
            </span>
          </div>
        </div>

        <Link
          to="/"
          className="inline-block rounded-full bg-[#7bdff2] px-6 py-2.5 text-sm font-semibold text-[#263238] transition hover:bg-[#b2f7ef]"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default Success;
