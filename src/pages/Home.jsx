import { useMemo } from "react";
import { Link } from "react-router-dom";
import products, { categories } from "../data/products";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";

function Home({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  visibleCount,
  setVisibleCount,
  onAddToCart,
}) {
  // Filter products by category and search term
  const filteredProducts = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      const matchesSearch =
        term === "" ||
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term) ||
        product.shortDescription.toLowerCase().includes(term);

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setVisibleCount(6);
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    setVisibleCount(6);
  };

  const scrollToShop = () => {
    const el = document.getElementById("shop");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Featured category cards (exclude "All")
  const featuredCategories = categories.filter((c) => c !== "All");

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-[#b2f7ef]/50 bg-gradient-to-br from-[#eff7f6] via-white to-[#f7d6e0]/40">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 md:grid-cols-2 md:px-6 md:py-16">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-[#f2b5d4]">
              Lifestyle Essentials
            </p>
            <h1 className="mb-3 text-3xl font-semibold leading-tight text-[#263238] md:text-4xl">
              Discover Your Everyday Style
            </h1>
            <p className="mb-6 max-w-md text-base leading-relaxed text-[#263238]/75">
              Thoughtfully designed essentials made for everyday moments. Soft colors, clean lines, and pieces you will reach for again and again.
            </p>
            <button
              type="button"
              onClick={scrollToShop}
              className="rounded-full bg-[#7bdff2] px-6 py-2.5 text-sm font-semibold text-[#263238] shadow-sm transition hover:bg-[#b2f7ef]"
            >
              Shop Collection
            </button>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -right-4 -top-4 h-40 w-40 rounded-full bg-[#b2f7ef]/50" />
            <div className="absolute -bottom-6 left-8 h-28 w-28 rounded-full bg-[#f7d6e0]/70" />
            <div className="relative overflow-hidden rounded-2xl border border-[#b2f7ef] bg-white shadow-md">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&h=700&fit=crop"
                alt="JEMSHOP lifestyle collection"
                className="h-64 w-full object-cover lg:h-72"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#263238]/50 to-transparent p-4">
                <p className="text-sm font-medium text-white">New season favorites</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <h2 className="mb-5 text-center text-xl font-semibold text-[#263238]">Shop by Category</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {featuredCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => {
                handleCategorySelect(category);
                scrollToShop();
              }}
              className={`rounded-2xl border px-3 py-5 text-center text-sm font-semibold transition ${
                selectedCategory === category
                  ? "border-[#7bdff2] bg-[#7bdff2] text-[#263238] shadow-sm"
                  : "border-[#b2f7ef] bg-white text-[#263238] hover:bg-[#b2f7ef]/40"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Product listing */}
      <section id="shop" className="mx-auto max-w-6xl px-4 pb-14 md:px-6">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-[#263238]">Featured Collection</h2>
            <p className="mt-1 text-sm text-[#263238]/65">
              Showing {visibleProducts.length} of {filteredProducts.length} products
            </p>
          </div>
          <SearchBar value={searchTerm} onChange={handleSearchChange} />
        </div>

        <div className="mb-6">
          <CategoryFilter selectedCategory={selectedCategory} onSelect={handleCategorySelect} />
        </div>

        {visibleProducts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-[#f2b5d4] bg-[#f7d6e0]/30 px-6 py-14 text-center">
            <h3 className="mb-2 text-lg font-semibold text-[#263238]">No products found</h3>
            <p className="mb-4 text-sm text-[#263238]/70">
              Try a different search term or category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
                setVisibleCount(6);
              }}
              className="rounded-full bg-[#7bdff2] px-5 py-2 text-sm font-medium text-[#263238]"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
              ))}
            </div>

            {hasMore && (
              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  onClick={() => setVisibleCount((count) => count + 6)}
                  className="rounded-full bg-[#f2b5d4] px-6 py-2.5 text-sm font-semibold text-[#263238] transition hover:bg-[#f7d6e0]"
                >
                  View More
                </button>
              </div>
            )}
          </>
        )}
      </section>

      {/* Promo band */}
      <section className="bg-[#f7d6e0]/50">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-8 md:flex-row md:items-center md:px-6">
          <div>
            <h3 className="text-lg font-semibold text-[#263238]">Free Shipping Nationwide</h3>
            <p className="text-sm text-[#263238]/75">
              Enjoy free delivery on every JEMSHOP order. Cash on Delivery available at checkout.
            </p>
          </div>
          <Link
            to="/cart"
            className="rounded-full bg-[#7bdff2] px-5 py-2 text-sm font-semibold text-[#263238] transition hover:bg-[#b2f7ef]"
          >
            View Cart
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
