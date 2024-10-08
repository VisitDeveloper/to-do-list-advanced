import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <nav className="container mx-auto lg:px-18 md:px-16 px-0 w-full md:w-10/12 h-full ">
          <Navbar />
        </nav>
        <div className="container mx-auto lg:px-18 md:px-16 px-0 w-full md:w-10/12 h-full">
          <div className="h-[88vh] ">
            {children}
          </div>
        </div>
        <footer className="container mx-auto lg:px-18 md:px-16 px-0 w-full md:w-10/12 h-full ">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
