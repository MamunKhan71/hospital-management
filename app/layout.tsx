import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TopNotification from "./(homepage)/_components/TopNotification";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";
import { Navbar } from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Asgar Ali Hospital",
  description: "An all in one hospital management solution tailorated by the latest tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased px-4 md:px-0`}
        >
          <TopNotification />
          <div className="container mx-auto">
            <Navbar />
          </div>
          {children}
          <Footer />
        </body>
      </html>
    </SessionWrapper>
  );
}
