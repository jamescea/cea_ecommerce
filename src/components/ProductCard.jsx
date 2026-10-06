import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";

function ProductCard({ product, onAddToCart }) {
  const inStock = product.stock > 0;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#b2f7ef]/80 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <Link to={`/product/${product.id}`} className="relative block aspect-square overflow-hidden bg-[#eff7f6]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full bg-[#7bdff2] px-2.5 py-0.5 text-xs font-medium text-[#263238]">
          {product.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="mb-1 text-base font-semibold text-[#263238] transition hover:text-[#263238]/80">
            {product.name}
          </h3>
        </Link>
        <p className="mb-3 line-clamp-2 flex-1 text-sm leading-relaxed text-[#263238]/70">
          {product.shortDescription}
        </p>

        <div className="mb-3 flex items-center justify-between gap-2">
          <span className="text-base font-semibold text-[#263238]">{formatPrice(product.price)}</span>
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-medium ${
              inStock ? "bg-[#b2f7ef] text-[#263238]" : "bg-[#f7d6e0] text-[#263238]"
            }`}
          >
            {inStock ? `In stock: ${product.stock}` : "Out of stock"}
          </span>
        </div>

        <div className="flex gap-2">
          <Link
            to={`/product/${product.id}`}
            className="flex-1 rounded-full border border-[#b2f7ef] bg-[#eff7f6] px-3 py-2 text-center text-sm font-medium text-[#263238] transition hover:bg-[#b2f7ef]"
          >
            View Details
          </Link>
          <button
            type="button"
            disabled={!inStock}
            onClick={() => onAddToCart(product)}
            className="flex-1 rounded-full bg-[#7bdff2] px-3 py-2 text-sm font-medium text-[#263238] transition hover:bg-[#b2f7ef] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
