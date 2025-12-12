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

export const krylon = localFont({
  src: [{ path: "../../public/fonts/Krylon-Regular.woff2" }],
  variable: "--font-krylon",
  preload: true,
});

const fonts = [geistSans, neutralface, krylon];
export const fontsVariable = fonts.map((font) => font.variable).join(" ");
