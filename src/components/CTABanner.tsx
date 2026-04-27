"use client";

import { useInView } from "@/lib/useInView";

export default function CTABanner() {
  const { ref, isVisible } = useInView(0.15);

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-brown-800">
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-[0.06]">
            <svg width="100%" height="100%">
              <defs>
                <pattern
                  id="cta-pat"
                  x="0"
                  y="0"
                  width="120"
                  height="100"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M10 80C10 50 25 20 50 20"
                    stroke="#E8762A"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M25 80C25 55 38 30 60 30"
                    stroke="#E8762A"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <rect
                    x="0"
                    y="8"
                    width="9"
                    height="9"
                    rx="2"
                    stroke="#8B6340"
                    strokeWidth="1.2"
                    fill="none"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-pat)" />
            </svg>
          </div>

          {/* Wood texture side */}
          <div
            className="absolute right-0 top-0 bottom-0 w-1/3 bg-cover bg-center opacity-20 hidden lg:block"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=500&fit=crop')",
            }}
          />
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-brown-800 to-transparent hidden lg:block" />

          {/* Content */}
          <div className="relative z-10 py-16 sm:py-20 px-8 sm:px-14 text-center lg:text-left max-w-2xl lg:max-w-none">
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl text-white font-bold mb-4 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{
                fontFamily: "var(--font-heading)",
                letterSpacing: "1px",
              }}
            >
              Start Building with{" "}
              <span className="text-orange-400">Premium</span>
              <br />
              Materials Today
            </h2>
            <p
              className={`text-cream-400 text-lg mb-8 max-w-md mx-auto lg:mx-0 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.12s" }}
            >
              Join thousands of Egyptian craftsmen who trust WOODLY for their
              material sourcing.
            </p>
            <div
              className={`flex flex-wrap gap-4 justify-center lg:justify-start ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.24s" }}
            >
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/25 active:scale-[0.98]"
              >
                Shop Now
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#suppliers"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Explore Vendors
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
