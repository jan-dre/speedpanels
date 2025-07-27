import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Speed Panels - Real-time Speed Monitoring",
  description: "Monitor your speed in real-time with Speed Panels. Track GPS speed, altitude, and performance with customizable displays and privacy-first design.",
  manifest: '/manifest.json',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: 'cover',
    minimumScale: 1,
  },
  other: {
    'apple-mobile-web-app-status-bar-style': 'default',
    'theme-color': '#f8fafc',
    'viewport-fit': 'cover',
    'apple-mobile-web-app-capable': 'yes',
    'format-detection': 'telephone=no',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="iphone-landscape-fix" strategy="beforeInteractive">
          {`
            // iPhone Landscape Fix
            function fixIPhoneLandscape() {
              if (window.innerWidth <= 926 && window.innerHeight < window.innerWidth) {
                document.documentElement.style.width = '100vw';
                document.documentElement.style.height = '100vh';
                document.documentElement.style.background = 'linear-gradient(to right, #dbeafe, #e9d5ff)';
                document.body.style.width = '100vw';
                document.body.style.height = '100vh';
                document.body.style.background = 'linear-gradient(to right, #dbeafe, #e9d5ff)';
                document.body.style.margin = '0';
                document.body.style.padding = '0';
                document.body.style.overflowX = 'hidden';
              }
            }
            
            // Run on load and orientation change
            window.addEventListener('load', fixIPhoneLandscape);
            window.addEventListener('orientationchange', fixIPhoneLandscape);
            window.addEventListener('resize', fixIPhoneLandscape);
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-r from-blue-100 to-purple-100`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
