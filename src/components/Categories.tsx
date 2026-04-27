"use client";

import { useInView } from "@/lib/useInView";
import { CATEGORIES } from "@/lib/data";

export default function Categories() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section
      id="categories"
      ref={ref}
      className="py-20 sm:py-28 bg-cream-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p
            className={`text-brown-400 text-sm tracking-widest uppercase mb-3 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            Browse Categories
          </p>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl text-brown-800 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{
              fontFamily: "var(--font-heading)",
              letterSpacing: "1px",
              animationDelay: "0.1s",
            }}
          >
            Everything for
            <br />
            <span className="italic">the Modern Craftsman</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {CATEGORIES.map((cat, i) => (
            <a
              key={cat.name}
              href="#"
              className={`group relative overflow-hidden rounded-2xl aspect-[16/10] cursor-pointer ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.15 + i * 0.08}s` }}
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${cat.image}')` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900/80 via-brown-900/30 to-transparent group-hover:from-brown-900/90 transition-all duration-300" />
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3
                  className="text-white text-2xl sm:text-3xl font-bold mb-1"
                  style={{ fontFamily: "var(--font-heading)", letterSpacing: "0.5px" }}
                >
                  {cat.name}
                </h3>
                <p className="text-cream-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-2 group-hover:translate-y-0">
                  {cat.description}
                </p>
              </div>
              {/* Arrow */}
              <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-orange-500">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
