import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Axon Digital",
  description: "Web Services startup",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors duration-300">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
