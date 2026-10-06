function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full max-w-sm">
      <svg
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#263238]/50"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="M20 20l-3-3" />
      </svg>
      <input
        type="search"
        placeholder="Search products..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-full border border-[#b2f7ef] bg-white py-2.5 pl-10 pr-4 text-sm text-[#263238] outline-none transition focus:border-[#7bdff2] focus:ring-2 focus:ring-[#7bdff2]/35"
      />
    </div>
  );
}

export default SearchBar;
