import { Lenis } from "@/app/(components)/lenis";
import Header from "@/components/header";
import { geistSans, neutralface } from "@/styles/fonts";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { ReactTempus } from "tempus/react";

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
      <body className={`${geistSans.variable} ${neutralface.variable} antialiased`}>
        <Header />
        {children}
        <Lenis root={true} options={{}} />
        <ReactTempus patch />
      </body>
    </html>
  );
}
