import { Lenis } from "@/app/(components)/lenis";
import Header from "@/components/header";
import { fontsVariable } from "@/styles/fonts";
import "@/styles/globals.css";
import { LazyMotion, domAnimation } from "motion/react";
import * as m from "motion/react-m";
import type { Metadata } from "next";
import { ReactTempus } from "tempus/react";

export const metadata: Metadata = {
  title: "Hashversion",
  icons: [
    {
      media: "(prefers-color-scheme: light)",
      url: "/images/favicon-dark.png",
      href: "/images/favicon-dark.png",
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: "/images/favicon-light.png",
      href: "/images/favicon-light.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={fontsVariable}>
      <LazyMotion features={domAnimation}>
        <m.body
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.23 }}
          className={`font-sans antialiased`}
        >
          <Header />
          {children}
          <Lenis root={true} options={{}} />
          <ReactTempus patch />
        </m.body>
      </LazyMotion>
    </html>
  );
}
