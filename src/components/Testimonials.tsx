"use client";

import { useState, useEffect, useCallback } from "react";
import { useInView } from "@/lib/useInView";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  const { ref, isVisible } = useInView(0.1);
  const [active, setActive] = useState(0);
  const total = TESTIMONIALS.length;

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % total);
  }, [total]);

  const prev = () => {
    setActive((prev) => (prev - 1 + total) % total);
  };

  // Auto-rotation
  useEffect(() => {
    if (!isVisible) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isVisible, next]);

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p
            className={`text-brown-400 text-sm tracking-widest uppercase mb-3 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            Testimonials
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
            Social Proof
          </h2>
        </div>

        {/* Carousel */}
        <div
          className={`max-w-3xl mx-auto ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          <div className="relative bg-cream-50 rounded-3xl p-8 sm:p-12 border border-cream-400/40">
            {/* Quote icon */}
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              className="text-orange-200 mb-4"
            >
              <path
                d="M14 28c-3.3 0-6-2.7-6-6s2.7-6 6-6c1 0 2 .3 2.8.7C18.5 12.3 22 8 22 8s-8.2 3-12 10c-1.3 2.5-2 5.2-2 8 0 5 4 9 9 9s7-3 7-7-3.7-7-7-7h-3zM38 28c-3.3 0-6-2.7-6-6s2.7-6 6-6c1 0 2 .3 2.8.7C42.5 12.3 46 8 46 8s-8.2 3-12 10c-1.3 2.5-2 5.2-2 8 0 5 4 9 9 9s7-3 7-7-3.7-7-7-7h-3z"
                fill="currentColor"
              />
            </svg>

            {/* Quote text */}
            <div className="relative h-24 sm:h-20 overflow-hidden">
              {TESTIMONIALS.map((t, i) => (
                <p
                  key={i}
                  className={`absolute inset-0 text-brown-700 text-lg sm:text-xl leading-relaxed transition-all duration-500 ${
                    i === active
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
              ))}
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 mt-8">
              <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-lg">
                {TESTIMONIALS[active].avatar}
              </div>
              <div>
                <p className="text-brown-800 font-semibold">
                  {TESTIMONIALS[active].name}
                </p>
                <p className="text-brown-400 text-sm">
                  {TESTIMONIALS[active].role}
                </p>
              </div>
            </div>

            {/* Nav arrows */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2">
              <button
                onClick={prev}
                className="w-9 h-9 rounded-full bg-cream-200 hover:bg-orange-500 text-brown-500 hover:text-white flex items-center justify-center transition-all"
                aria-label="Previous testimonial"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 15l-6-6-6 6" />
                </svg>
              </button>
              <button
                onClick={next}
                className="w-9 h-9 rounded-full bg-cream-200 hover:bg-orange-500 text-brown-500 hover:text-white flex items-center justify-center transition-all"
                aria-label="Next testimonial"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === active
                    ? "w-8 h-2.5 bg-orange-500"
                    : "w-2.5 h-2.5 bg-brown-200 hover:bg-brown-300"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
