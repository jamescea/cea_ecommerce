import { categories } from "../data/products";

function CategoryFilter({ selectedCategory, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => {
        const isActive = selectedCategory === category;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelect(category)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              isActive
                ? "bg-[#7bdff2] text-[#263238] shadow-sm"
                : "bg-white text-[#263238]/80 ring-1 ring-[#b2f7ef] hover:bg-[#b2f7ef]/40"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
