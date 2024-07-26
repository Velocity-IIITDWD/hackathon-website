import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Landing/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hack to the future",
  description: "This event aims to cultivate innovation and collaboration among participants by providing a platform for tackling real-world challenges through coding and creative problem-solving. With a focus on fostering a supportive environment for learning and networking, the Hackathon will empower participants to develop prototypes and explore cutting-edge technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className + "w-screen overflow-x-hidden h-screen"}
      >
        <div className="flex flex-col">
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
