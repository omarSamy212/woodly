"use client";

import { useState } from "react";
import { useInView } from "@/lib/useInView";
import { FEATURED_PRODUCTS } from "@/lib/data";

export default function FeaturedProducts() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
          <div>
            <p
              className={`text-brown-400 text-sm tracking-widest uppercase mb-3 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
            >
              Top Picks
            </p>
            <h2
              className={`text-3xl sm:text-4xl font-bold text-brown-800 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{
                fontFamily: "var(--font-heading)",
                letterSpacing: "1px",
                animationDelay: "0.1s",
              }}
            >
              Featured Materials
            </h2>
          </div>
          <a
            href="#"
            className={`text-orange-500 hover:text-orange-600 font-medium text-sm flex items-center gap-1 transition-colors ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.15s" }}
          >
            View all products
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {FEATURED_PRODUCTS.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              isVisible={isVisible}
              delay={0.15 + i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  isVisible,
  delay,
}: {
  product: (typeof FEATURED_PRODUCTS)[number];
  isVisible: boolean;
  delay: number;
}) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div
      className={`group bg-cream-100 rounded-2xl overflow-hidden border border-cream-400/50 hover:border-orange-500/20 hover:shadow-xl hover:shadow-brown-900/5 transition-all duration-300 hover:-translate-y-1 ${
        isVisible ? "animate-scale-in" : "opacity-0"
      }`}
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-cream-300">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url('${product.image}')` }}
        />
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-brown-800 font-semibold text-sm leading-snug mb-1 line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-baseline gap-1 mb-1">
          <span className="text-orange-500 font-bold text-base">
            From {product.price.toLocaleString()}
          </span>
          <span className="text-brown-400 text-xs">EGP</span>
        </div>
        <p className="text-brown-400 text-xs mb-3">{product.vendor}</p>

        <button
          onClick={handleAdd}
          className={`w-full py-2 rounded-lg text-xs font-semibold transition-all duration-300 ${
            added
              ? "bg-green-600 text-white scale-[0.97]"
              : "bg-orange-500 hover:bg-orange-600 text-white hover:scale-[1.02] active:scale-[0.97]"
          }`}
        >
          {added ? (
            <span className="flex items-center justify-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M5 13l4 4L19 7" />
              </svg>
              Added!
            </span>
          ) : (
            "Add to cart"
          )}
        </button>
      </div>
    </div>
  );
}
