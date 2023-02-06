import "@/styles/globals.css";
import globalStyles from "../styles/globalStyles";
import type { AppProps } from "next/app";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <main className={` ${roboto.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
