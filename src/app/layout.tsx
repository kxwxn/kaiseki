import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/variables.css";
import "@/styles/reset.css";
import { DAppLayout } from "@/components/layouts/DAppLayout";
import { WebLayout } from "@/components/layouts/WebLayout";
import { isLineDApp } from "@/utils/environment";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kaiseki DApp",
  description: "LINE DApp for Kaiseki",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {isLineDApp() ? (
          <DAppLayout>{children}</DAppLayout>
        ) : (
          <WebLayout>{children}</WebLayout>
        )}
      </body>
    </html>
  );
}
