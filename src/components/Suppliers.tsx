"use client";

import { useInView } from "@/lib/useInView";
import { SUPPLIERS } from "@/lib/data";

export default function Suppliers() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section
      id="suppliers"
      ref={ref}
      className="py-20 sm:py-28 bg-cream-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <p
          className={`text-center text-brown-400 text-sm tracking-widest uppercase mb-3 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          Partnerships
        </p>
        <h2
          className={`text-center text-3xl sm:text-4xl font-bold text-brown-800 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
          style={{
            fontFamily: "var(--font-heading)",
            letterSpacing: "1px",
            animationDelay: "0.1s",
          }}
        >
          Trusted by Industry Leaders
        </h2>
      </div>

      {/* Scrolling Supplier Cards */}
      <div
        className={`relative ${isVisible ? "animate-fade-in" : "opacity-0"}`}
        style={{ animationDelay: "0.25s" }}
      >
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {[...SUPPLIERS, ...SUPPLIERS].map((supplier, i) => (
            <div
              key={`${supplier.name}-${i}`}
              className="flex-shrink-0 w-[260px] mx-3 group"
            >
              <div className="bg-brown-800 rounded-2xl p-6 h-full border border-brown-700/50 hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brown-900/20">
                {/* Supplier Logo Placeholder */}
                <div className="w-16 h-16 rounded-xl bg-cream-200/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/10 transition-colors">
                  <span
                    className="text-cream-200 font-bold text-sm text-center leading-tight"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {supplier.logo}
                  </span>
                </div>
                <h3 className="text-cream-100 font-semibold text-base mb-1.5">
                  {supplier.name}
                </h3>
                <p className="text-cream-500 text-sm leading-relaxed mb-4">
                  {supplier.description}
                </p>
                <button className="inline-flex items-center gap-1.5 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold rounded-lg transition-all hover:scale-[1.03] active:scale-[0.97]">
                  Top Supplier
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-cream-100 to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-cream-100 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
