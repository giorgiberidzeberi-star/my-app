import type { Metadata } from "next";
import Footer from "./components/Footer";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "ჩემი პირველი პროექტი | გიორგი ბერიძე",
  description: "გიორგი ბერიძის პირველი ვებპროექტი",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Suspense fallback={<div aria-hidden="true" style={{ height: 60 }} />}>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
