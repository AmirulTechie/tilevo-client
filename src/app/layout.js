import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tilevo - Home",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html
      data-theme="light"
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <NavBar></NavBar>
      <body className="min-h-full flex flex-col">{children}</body>
      <Footer></Footer>
    </html>
  );
}
