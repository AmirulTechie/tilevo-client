import { Geist} from "next/font/google";
import "./globals.css";

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
      
      <body className="flex flex-col" suppressHydrationWarning>
        {children}
      </body>
      
    </html>
  );
}
