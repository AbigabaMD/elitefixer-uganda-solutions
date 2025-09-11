import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EliteFixers - Premium Uganda Concierge Services",
  description: "Premium concierge services for elite clients in Uganda.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "EliteFixers - Premium Uganda Concierge Services",
    description: "Connecting clients with trusted local experts in Uganda.",
    url: "https://www.elitefixers.com",
    siteName: "EliteFixers",
    images: [
      {
        url: "https://www.elitefixers.com/placeholder.svg", // fallback image
        width: 1200,
        height: 630,
        alt: "EliteFixers Uganda",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "EliteFixers - Premium Uganda Concierge Services",
    description: "Connecting clients with trusted local experts in Uganda.",
    images: ["https://www.elitefixers.com/placeholder.svg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}