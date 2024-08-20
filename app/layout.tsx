"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { Analytics } from "@vercel/analytics/react";
import { NavbarContext } from "./context/navbarContext";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [option, setOption] = useState(0);
  Observers();
  return (
    <html lang="en">
      <body className={inter.className + "w-screen overflow-x-hidden"}>
        <NavbarContext.Provider value={{ option, setOption }}>
          <SmoothScroll>
            <Navbar />
            {children}
            <Footer />
          </SmoothScroll>
          <Analytics />
        </NavbarContext.Provider>
      </body>
    </html>
  );
}

function Observers() {
  if (typeof window !== "undefined")
    window.addEventListener("load", () => {
      const sections = document.querySelectorAll("#main > [data-idx]");
      const navHighlighter = document.getElementById("nav-highlight");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting && navHighlighter) {
              let scrollY = window.scrollY;
              let sectionRects = Array.from(sections.values()).map((el) => {
                return el.getBoundingClientRect();
              });
              let i = 0;
              if (scrollY > window.innerHeight)
                for (const sec of sectionRects) {
                  if (
                    scrollY > sec.y + window.innerHeight / 2 &&
                    (sec.y > 0 || sec.bottom > 0.7 * window.innerHeight)
                  )
                    break;
                  i++;
                }
              if (i == 5) i = 0;

              if (window.location.href !== "/team")
                navHighlighter.style.transform = `translateX(${100 * i}%)`;
              else
                navHighlighter.style.transform = `translateX(${100 * sections.length}%)`;
            }
          });
        },
        {
          threshold: Array.from(Array(10).keys()).map((num) => num / 20),
          rootMargin: "0px 0px 0px 0px",
        }
      );
      sections.forEach((section) => {
        observer.observe(section);
      });
    });
}
