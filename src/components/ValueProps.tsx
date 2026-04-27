"use client";

import { useInView } from "@/lib/useInView";
import { VALUE_PROPS } from "@/lib/data";

const ICONS: Record<string, React.ReactNode> = {
  supplier: (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 40V18L24 6L40 18V40H8Z" />
      <rect x="18" y="26" width="12" height="14" rx="1" />
      <line x1="24" y1="26" x2="24" y2="40" />
    </svg>
  ),
  shield: (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 4L6 12V22C6 34 14 42 24 46C34 42 42 34 42 22V12L24 4Z" />
      <path d="M16 24L22 30L34 18" strokeWidth="2.5" />
    </svg>
  ),
  click: (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="24" r="16" />
      <circle cx="24" cy="24" r="6" />
      <path d="M24 2V8M24 40V46M2 24H8M40 24H46" />
    </svg>
  ),
  truck: (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="12" width="24" height="18" rx="2" />
      <path d="M28 18H36L42 26V30H28V18Z" />
      <circle cx="14" cy="34" r="3" fill="currentColor" />
      <circle cx="36" cy="34" r="3" fill="currentColor" />
    </svg>
  ),
};

export default function ValueProps() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p
          className={`text-center text-brown-400 text-sm tracking-widest uppercase mb-3 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          Value Proposition
        </p>
        <h2
          className={`text-center text-3xl sm:text-4xl font-bold text-brown-800 mb-16 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
          style={{
            fontFamily: "var(--font-heading)",
            letterSpacing: "1px",
            animationDelay: "0.1s",
          }}
        >
          Why WOODLY?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUE_PROPS.map((prop, i) => (
            <div
              key={prop.title}
              className={`group bg-cream-100 rounded-2xl p-6 text-center border border-cream-400/50 hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 hover:-translate-y-1 ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.15 + i * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-cream-200 flex items-center justify-center text-orange-500 group-hover:bg-orange-100 group-hover:scale-110 transition-all duration-300">
                {ICONS[prop.icon]}
              </div>
              <h3 className="text-brown-800 font-semibold text-base mb-2">
                {prop.title}
              </h3>
              <p className="text-brown-400 text-sm leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
