import { Link } from "react-router-dom";
import QuantityControl from "./QuantityControl";
import { formatPrice } from "../utils/formatPrice";

function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  const { product, quantity } = item;
  const subtotal = product.price * quantity;

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-[#b2f7ef]/80 bg-white p-4 shadow-sm sm:flex-row sm:items-center">
      <Link to={`/product/${product.id}`} className="shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="h-24 w-24 rounded-xl object-cover sm:h-28 sm:w-28"
        />
      </Link>

      <div className="flex min-w-0 flex-1 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <Link to={`/product/${product.id}`}>
            <h3 className="truncate font-semibold text-[#263238] hover:underline">{product.name}</h3>
          </Link>
          <p className="mt-0.5 text-sm text-[#263238]/65">{product.category}</p>
          <p className="mt-1 text-sm font-medium text-[#263238]">{formatPrice(product.price)}</p>
        </div>

        <div className="flex flex-wrap items-center gap-3 sm:justify-end">
          <QuantityControl
            quantity={quantity}
            min={1}
            max={product.stock}
            onDecrease={() => onDecrease(product.id)}
            onIncrease={() => onIncrease(product.id)}
          />
          <p className="min-w-[6.5rem] text-sm font-semibold text-[#263238]">
            Subtotal: {formatPrice(subtotal)}
          </p>
          <button
            type="button"
            onClick={() => onRemove(product.id)}
            className="rounded-full bg-[#f7d6e0] px-3 py-1.5 text-sm font-medium text-[#263238] transition hover:bg-[#f2b5d4]"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
