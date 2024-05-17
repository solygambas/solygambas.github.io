import "../styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Radio_Canada } from "next/font/google";

const font = Radio_Canada({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
      <GoogleAnalytics gaId="G-7QK8X84PDZ" />
    </main>
  );
}

export default appWithTranslation(MyApp);
