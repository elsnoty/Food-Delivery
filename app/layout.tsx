import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/Components/NavBar/NavBar";
import Footer from "@/Components/Footer/Footer";
import { Providers } from "@/Components/store/Provider";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Resturant X",
  description: "Food Delivery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        <NavBar />
        {children}
        <Footer />
        </Providers>
        </body>
    </html>
  );
}