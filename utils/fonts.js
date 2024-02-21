import { Inter, Playfair_Display } from "next/font/google";

const sans = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-sans",
});

const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-merriweather",
});

export { sans, serif };
