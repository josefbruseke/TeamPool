import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TeamPool",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-gray-800 p-4">
          <div className="flex items-center justify-between">
            <span className="text-white font-semibold">Meu Site</span>
            <ul className="flex">
              <li><a href="#" className="text-gray-300 hover:text-white px-3 py-2">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white px-3 py-2">Sobre</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white px-3 py-2">Contato</a></li>
            </ul>
          </div>
        </nav>
        {children}</body>
    </html>
  );
}
