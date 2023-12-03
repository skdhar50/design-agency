"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import "./globals.css";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={``}>
        <ProgressBar
          color="#20B15A"
          height="4px"
          options={{ showSpinner: false }}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
