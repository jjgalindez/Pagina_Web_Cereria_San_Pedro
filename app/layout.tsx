import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE, getSiteUrl } from "@/lib/config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

export function generateMetadata(): Metadata {
  return {
    metadataBase: getSiteUrl(),
    title: {
      default: `${SITE.name} | Velas artesanales en Popayán`,
      template: `%s | ${SITE.name}`,
    },
    description: SITE.description,
    keywords: ["velas artesanales", "cerería", "Popayán", "velas para celebraciones"],
    openGraph: {
      type: "website",
      locale: "es_CO",
      siteName: SITE.name,
      title: SITE.name,
      description: SITE.description,
      images: [{ url: "/assets/logo1.png", alt: SITE.name }],
    },
    twitter: {
      card: "summary",
      title: SITE.name,
      description: SITE.description,
      images: ["/assets/logo1.png"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable}`}
    >
      <body className="flex min-h-dvh flex-col">
        <Header />
        <main id="main-content" tabIndex={-1} className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
