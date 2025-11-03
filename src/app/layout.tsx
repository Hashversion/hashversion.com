import { Lenis } from "@/app/(components)/lenis";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ReactTempus } from "tempus/react";
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
  title: "Hashversion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Lenis root={true} options={{}} />
        <ReactTempus patch />
      </body>
    </html>
  );
}
