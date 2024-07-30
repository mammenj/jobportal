import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Job Portal",
  description: "Job dream",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <main className="py-4 px-4">
          <Header />
          {children}
          <footer className="container py-8 text-gray-500">
            Job Portal &copy; 2024 - All rights reserved
          </footer>
        </main>
      </body>
    </html >
  );
}
