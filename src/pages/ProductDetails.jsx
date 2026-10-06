import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import products from "../data/products";
import QuantityControl from "../components/QuantityControl";
import { formatPrice } from "../utils/formatPrice";

function ProductDetails({ onAddToCart }) {
  const { id } = useParams();
  const product = useMemo(
    () => products.find((item) => String(item.id) === String(id)),
    [id]
  );

  const [quantity, setQuantity] = useState(1);
  const [addedMessage, setAddedMessage] = useState("");

  if (!product) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16 text-center md:px-6">
        <h1 className="mb-3 text-2xl font-semibold text-[#263238]">Product not found</h1>
        <p className="mb-6 text-sm text-[#263238]/70">
          The item you are looking for may have been removed.
        </p>
        <Link
          to="/"
          className="inline-block rounded-full bg-[#7bdff2] px-5 py-2 text-sm font-semibold text-[#263238]"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  const inStock = product.stock > 0;
  const maxQty = product.stock;

  const handleDecrease = () => {
    setQuantity((q) => Math.max(1, q - 1));
  };

  const handleIncrease = () => {
    setQuantity((q) => Math.min(maxQty, q + 1));
  };

  const handleAdd = () => {
    if (!inStock) return;
    onAddToCart(product, quantity);
    setAddedMessage(`Added ${quantity} to cart`);
    setTimeout(() => setAddedMessage(""), 2000);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12">
      <Link to="/" className="mb-6 inline-block text-sm font-medium text-[#263238]/70 hover:text-[#263238]">
        ← Back to Shop
      </Link>

      <div className="grid gap-8 md:grid-cols-2 md:gap-10">
        <div className="overflow-hidden rounded-2xl border border-[#b2f7ef] bg-[#eff7f6] shadow-sm">
          <img
            src={product.image}
            alt={product.name}
            className="aspect-square w-full object-cover"
          />
        </div>

        <div>
          <span className="mb-2 inline-block rounded-full bg-[#b2f7ef] px-3 py-0.5 text-xs font-medium text-[#263238]">
            {product.category}
          </span>
          <h1 className="mb-2 text-2xl font-semibold text-[#263238] md:text-3xl">{product.name}</h1>
          <p className="mb-4 text-2xl font-semibold text-[#263238]">{formatPrice(product.price)}</p>
          <p className="mb-6 leading-relaxed text-[#263238]/80">{product.description}</p>

          <div className="mb-6 rounded-xl border border-[#b2f7ef] bg-white px-4 py-3">
            <p className="text-sm text-[#263238]">
              <span className="font-medium">Stock availability: </span>
              {inStock ? (
                <span className="text-[#263238]">In Stock — {product.stock} items</span>
              ) : (
                <span className="text-[#f2b5d4]">Out of Stock</span>
              )}
            </p>
          </div>

          <div className="mb-6">
            <p className="mb-2 text-sm font-medium text-[#263238]">Quantity</p>
            <QuantityControl
              quantity={quantity}
              min={1}
              max={maxQty || 1}
              onDecrease={handleDecrease}
              onIncrease={handleIncrease}
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              disabled={!inStock}
              onClick={handleAdd}
              className="rounded-full bg-[#7bdff2] px-6 py-2.5 text-sm font-semibold text-[#263238] transition hover:bg-[#b2f7ef] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Add to Cart
            </button>
            <Link
              to="/cart"
              className="rounded-full border border-[#f2b5d4] bg-[#f7d6e0] px-6 py-2.5 text-sm font-semibold text-[#263238] transition hover:bg-[#f2b5d4]"
            >
              Go to Cart
            </Link>
          </div>

          {addedMessage && (
            <p className="mt-4 text-sm font-medium text-[#263238]">{addedMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
