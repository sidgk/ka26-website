import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ಕೆA-26 | Empowering Local Communities Through Technology",
    template: "%s | ಕೆA-26",
  },
  description:
    "ಕೆA-26 is a unified digital ecosystem connecting consumers, local stores, restaurants, and delivery partners across North Karnataka. Shop, order food, access health records, and discover local businesses — all in one platform.",
  keywords: [
    "ಕೆA-26", "ka26", "local marketplace", "North Karnataka", "Gadag",
    "online ordering", "local stores", "food delivery", "pharmacy",
    "community platform", "digital ecosystem",
  ],
  openGraph: {
    title: "ಕೆA-26 | Empowering Local Communities",
    description: "A unified digital ecosystem for local communities in North Karnataka.",
    url: "https://ka-26.com",
    siteName: "ಕೆA-26",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
