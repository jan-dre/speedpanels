import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Speed Panels - Real-time Speed Monitoring",
  description: "Monitor your speed in real-time with Speed Panels. Track GPS speed, altitude, and performance with customizable displays and privacy-first design.",
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/AppIconLight.png', sizes: '32x32', type: 'image/png' },
      { url: '/AppIconLight.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/AppIconLight.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/AppIconLight.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: 'cover',
  },
  other: {
    'apple-mobile-web-app-status-bar-style': 'default',
    'theme-color': '#f8fafc',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-r from-blue-100 to-purple-100`}
        suppressHydrationWarning={true}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
