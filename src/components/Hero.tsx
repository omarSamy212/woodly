"use client";

import { useInView } from "@/lib/useInView";

export default function Hero() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[100vh] flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&h=1080&fit=crop')",
        }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brown-900/92 via-brown-900/75 to-brown-900/40" />

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern
              id="hero-pat"
              x="0"
              y="0"
              width="140"
              height="120"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M12 96C12 60 30 24 58 24"
                stroke="#E8762A"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M30 96C30 64 44 34 68 34"
                stroke="#E8762A"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              <rect
                x="2"
                y="10"
                width="10"
                height="10"
                rx="2"
                stroke="#8B6340"
                strokeWidth="1.5"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-pat)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full mb-6 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            <WoodlyMiniLogo />
            <span className="text-cream-200 text-sm font-medium tracking-wide">
              Egypt&apos;s First Wood Marketplace
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{
              fontFamily: "var(--font-heading)",
              letterSpacing: "1px",
              animationDelay: "0.12s",
            }}
          >
            Build Better with{" "}
            <span className="text-orange-400">Premium</span>
            <br />
            Wood Materials
          </h1>

          {/* Subtitle */}
          <p
            className={`text-cream-300 text-lg sm:text-xl mb-2 max-w-lg ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.24s" }}
          >
            High-quality wood and kitchen accessories
          </p>
          <p
            className={`text-cream-400 text-base mb-8 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.3s", direction: "rtl" }}
          >
            مباشرة من أفضل الموردين
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-wrap gap-4 mb-6 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#categories"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/25 active:scale-[0.98]"
            >
              Shop Now
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#suppliers"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 backdrop-blur-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Explore Vendors
            </a>
          </div>

          {/* Trust line */}
          <p
            className={`text-cream-500 text-sm ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.5s" }}
          >
            Trusted by Egypt&apos;s top suppliers
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          opacity="0.5"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

function WoodlyMiniLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 60 60" fill="none">
      <rect x="2" y="4" width="12" height="12" rx="2" fill="#E8762A" />
      <path
        d="M16 54C16 32 24 10 42 10"
        stroke="#E8762A"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M28 54C28 36 34 18 50 18"
        stroke="#E8762A"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
