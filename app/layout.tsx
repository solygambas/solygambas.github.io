import type { Metadata } from "next";
import { Radio_Canada } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "../styles/globals.css";

const font = Radio_Canada({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Developer portfolio showcasing projects and case studies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={font.className}>
        {children}
        <GoogleAnalytics gaId="G-7QK8X84PDZ" />
      </body>
    </html>
  );
}
