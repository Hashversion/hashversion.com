import { Lenis } from "@/app/(components)/lenis";
import Header from "@/components/header";
import { fontsVariable } from "@/styles/fonts";
import "@/styles/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { LazyMotion, domAnimation } from "motion/react";
import * as m from "motion/react-m";
import type { Metadata } from "next";
import { ReactTempus } from "tempus/react";

export const metadata: Metadata = {
  title: "Hashversion",
  description: "I'm Jay Krishna, a multidisciplinary designer, product engineer, and polymath",
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
          transition={{ duration: 1.23, ease: [0.455, 0.03, 0.515, 0.955] }}
          className={`font-sans antialiased`}
        >
          <Header />
          {children}
          <Lenis root={true} options={{}} />
          <ReactTempus patch />
        </m.body>
        <GoogleAnalytics gaId="G-QX3F7Q4FR3" />
      </LazyMotion>
    </html>
  );
}
