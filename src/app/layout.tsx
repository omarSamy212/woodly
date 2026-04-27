import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WOODLY — Egypt's First Wood Marketplace",
  description:
    "Build Better with Premium Wood Materials. High-quality wood and kitchen accessories direct from Egypt's top suppliers.",
  keywords: [
    "wood",
    "MDF",
    "HDF",
    "kitchen accessories",
    "hardware",
    "Egypt",
    "marketplace",
    "suppliers",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
