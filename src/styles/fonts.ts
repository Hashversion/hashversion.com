import { Geist } from "next/font/google";
import localFont from "next/font/local";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const neutralface = localFont({
  src: [{ path: "../../public/fonts/NeutralFaceRegular.woff2" }],
  variable: "--font-neutralface",
  preload: true,
});
