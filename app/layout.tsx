import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import "./globals.css";

const montSerrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', "200", "300", "400", "500", "600", "700","800","900"], 
  display: 'swap',
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Marvel",
  description: "TheWorks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montSerrat} ${montSerrat} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
