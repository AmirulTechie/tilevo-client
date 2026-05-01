import { Geist} from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
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
      
      <body className="flex flex-col">
        <NavBar></NavBar>
        {children}
        <Footer></Footer>
      </body>
      
    </html>
  );
}
