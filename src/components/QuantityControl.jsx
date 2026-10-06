function QuantityControl({ quantity, min = 1, max, onDecrease, onIncrease }) {
  const atMin = quantity <= min;
  const atMax = quantity >= max;

  return (
    <div className="inline-flex items-center overflow-hidden rounded-full border border-[#b2f7ef] bg-white">
      <button
        type="button"
        onClick={onDecrease}
        disabled={atMin}
        aria-label="Decrease quantity"
        className="flex h-9 w-9 items-center justify-center text-[#263238] transition hover:bg-[#eff7f6] disabled:cursor-not-allowed disabled:opacity-40"
      >
        −
      </button>
      <span className="min-w-[2rem] text-center text-sm font-medium text-[#263238]">{quantity}</span>
      <button
        type="button"
        onClick={onIncrease}
        disabled={atMax}
        aria-label="Increase quantity"
        className="flex h-9 w-9 items-center justify-center text-[#263238] transition hover:bg-[#eff7f6] disabled:cursor-not-allowed disabled:opacity-40"
      >
        +
      </button>
    </div>
  );
}

export default QuantityControl;
