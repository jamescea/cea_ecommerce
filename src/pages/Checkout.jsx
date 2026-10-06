import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";

function Checkout({ cart, cartTotal, onPlaceOrder }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "Cash on Delivery",
  });

  const [errors, setErrors] = useState({});

  // Redirect empty cart users
  if (cart.length === 0) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16 text-center md:px-6">
        <h1 className="mb-3 text-2xl font-semibold text-[#263238]">Nothing to checkout</h1>
        <p className="mb-6 text-sm text-[#263238]/70">Your cart is empty. Add items before placing an order.</p>
        <Link
          to="/"
          className="inline-block rounded-full bg-[#7bdff2] px-5 py-2 text-sm font-semibold text-[#263238]"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for the field being edited
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  // Validate Philippine phone numbers (09xxxxxxxxx or +639xxxxxxxxx)
  const isValidPHPhone = (phone) => {
    const cleaned = phone.replace(/[\s-]/g, "");
    return /^(09\d{9}|\+639\d{9})$/.test(cleaned);
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.fullName.trim()) {
      nextErrors.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Please enter a valid email address.";
    } else if (!isValidEmail(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = "Please enter a valid Philippine phone number.";
    } else if (!isValidPHPhone(formData.phone)) {
      nextErrors.phone = "Please enter a valid Philippine phone number.";
    }

    if (!formData.address.trim()) {
      nextErrors.address = "Delivery address is required.";
    }

    if (formData.paymentMethod !== "Cash on Delivery") {
      nextErrors.paymentMethod = "Please select Cash on Delivery.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Create order in memory and clear cart via parent
    const order = {
      customer: { ...formData },
      items: cart.map((item) => ({
        product: item.product,
        quantity: item.quantity,
      })),
      total: cartTotal,
    };

    onPlaceOrder(order);
    navigate("/success");
  };

  const inputClass = (field) =>
    `w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-[#263238] outline-none transition focus:ring-2 ${
      errors[field]
        ? "border-[#f2b5d4] focus:border-[#f2b5d4] focus:ring-[#f2b5d4]/40"
        : "border-[#b2f7ef] focus:border-[#7bdff2] focus:ring-[#7bdff2]/35"
    }`;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-10">
      <h1 className="mb-6 text-2xl font-semibold text-[#263238]">Checkout</h1>

      <form onSubmit={handleSubmit} noValidate>
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Customer information */}
          <div className="rounded-2xl border border-[#b2f7ef] bg-white p-5 shadow-sm lg:col-span-3">
            <h2 className="mb-5 text-lg font-semibold text-[#263238]">Customer Information</h2>

            <div className="space-y-4">
              <div>
                <label htmlFor="fullName" className="mb-1.5 block text-sm font-medium text-[#263238]">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={inputClass("fullName")}
                  placeholder="Juan Dela Cruz"
                />
                {errors.fullName && (
                  <p className="mt-1.5 text-sm text-[#c2185b]">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[#263238]">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass("email")}
                  placeholder="example@email.com"
                />
                {errors.email && (
                  <p className="mt-1.5 text-sm text-[#c2185b]">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-[#263238]">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass("phone")}
                  placeholder="09171234567 or +639171234567"
                />
                {errors.phone && (
                  <p className="mt-1.5 text-sm text-[#c2185b]">{errors.phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="address" className="mb-1.5 block text-sm font-medium text-[#263238]">
                  Delivery Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows={3}
                  value={formData.address}
                  onChange={handleChange}
                  className={inputClass("address")}
                  placeholder="Street, Barangay, City, Province"
                />
                {errors.address && (
                  <p className="mt-1.5 text-sm text-[#c2185b]">{errors.address}</p>
                )}
              </div>

              <div>
                <label htmlFor="paymentMethod" className="mb-1.5 block text-sm font-medium text-[#263238]">
                  Payment Method
                </label>
                <select
                  id="paymentMethod"
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                  className={inputClass("paymentMethod")}
                >
                  <option value="Cash on Delivery">Cash on Delivery</option>
                </select>
                {errors.paymentMethod && (
                  <p className="mt-1.5 text-sm text-[#c2185b]">{errors.paymentMethod}</p>
                )}
              </div>
            </div>
          </div>

          {/* Order summary */}
          <div className="h-fit rounded-2xl border border-[#b2f7ef] bg-white p-5 shadow-sm lg:col-span-2">
            <h2 className="mb-4 text-lg font-semibold text-[#263238]">Order Summary</h2>

            <ul className="mb-4 max-h-64 space-y-3 overflow-y-auto">
              {cart.map((item) => (
                <li key={item.product.id} className="flex gap-3">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="h-14 w-14 rounded-lg object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-[#263238]">{item.product.name}</p>
                    <p className="text-xs text-[#263238]/65">
                      Qty {item.quantity} × {formatPrice(item.product.price)}
                    </p>
                    <p className="text-sm font-medium text-[#263238]">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="space-y-2 border-t border-[#eff7f6] pt-4 text-sm">
              <div className="flex justify-between text-[#263238]/80">
                <span>Subtotal</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>
              <div className="flex justify-between text-[#263238]/80">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between border-t border-[#eff7f6] pt-3 text-base font-semibold text-[#263238]">
                <span>Total</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>
            </div>

            <button
              type="submit"
              className="mt-5 w-full rounded-full bg-[#7bdff2] py-2.5 text-sm font-semibold text-[#263238] transition hover:bg-[#b2f7ef]"
            >
              Place Order
            </button>
            <Link
              to="/cart"
              className="mt-3 block w-full rounded-full border border-[#b2f7ef] bg-[#eff7f6] py-2.5 text-center text-sm font-medium text-[#263238]"
            >
              Back to Cart
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
