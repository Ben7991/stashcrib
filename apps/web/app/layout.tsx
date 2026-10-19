import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "StashCrib",
  description:
    "Considered wardrobe pieces with a calm, editorial shopping experience.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
