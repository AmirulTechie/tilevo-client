import dns from "node:dns";
dns.setServers(['8.8.8.8', '8.8.4.4']);
import { Analytics } from "@vercel/analytics/next"
import { Geist} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: {
        template: '%s — Tilevo',
        default: 'Tilevo',
    },
  description: "Next.js tile gallery app with Google OAuth, private routes, JSON Server API, and a clean responsive UI.",
  icons:{
    icon: '/tilevo-favicon.svg'
  }
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
