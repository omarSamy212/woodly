"use client";

import { FOOTER_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer id="contact" className="bg-brown-900 text-cream-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <svg width="32" height="32" viewBox="0 0 60 60" fill="none">
                <rect x="2" y="4" width="12" height="12" rx="2" fill="#E8762A" />
                <path d="M16 54C16 32 24 10 42 10" stroke="#E8762A" strokeWidth="7" strokeLinecap="round" fill="none" />
                <path d="M28 54C28 36 34 18 50 18" stroke="#E8762A" strokeWidth="7" strokeLinecap="round" fill="none" />
              </svg>
              <div className="leading-none">
                <span className="block text-white tracking-widest text-lg font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                  WOODLY
                </span>
                <span className="block text-cream-600 text-[9px] tracking-[0.25em] uppercase">
                  Woods &amp; More
                </span>
              </div>
            </div>
            <p className="text-cream-500 text-sm leading-relaxed max-w-sm mb-6">
              WOODLY has transformed the sourcing experience in Egypt,
              connecting premium wood suppliers with contractors, workshop
              owners, and craftsmen across the country.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {["facebook", "instagram", "twitter", "linkedin"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full bg-brown-700/60 hover:bg-orange-500 flex items-center justify-center text-cream-400 hover:text-white transition-all duration-300"
                  aria-label={social}
                >
                  <SocialIcon name={social} />
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-cream-200 font-semibold text-sm mb-4 tracking-wide uppercase">
              Categories
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.categories.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-cream-500 hover:text-orange-400 text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Vendors */}
          <div>
            <h4 className="text-cream-200 font-semibold text-sm mb-4 tracking-wide uppercase">
              Vendors
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.vendors.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-cream-500 hover:text-orange-400 text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cream-200 font-semibold text-sm mb-4 tracking-wide uppercase">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-cream-500 text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                {FOOTER_LINKS.contact.phone}
              </li>
              <li className="flex items-center gap-2 text-cream-500 text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                {FOOTER_LINKS.contact.email}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-6 border-t border-brown-700/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cream-600 text-xs">
            Trusted by Egypt&apos;s top suppliers
          </p>
          <p className="text-cream-700 text-xs">
            Luxury Industrial
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  const size = 16;
  switch (name) {
    case "facebook":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      );
    case "instagram":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case "twitter":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z" />
        </svg>
      );
    default:
      return null;
  }
}
