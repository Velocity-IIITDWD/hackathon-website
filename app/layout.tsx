"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { Analytics } from "@vercel/analytics/react";
import { NavbarContext } from "./context/navbarContext";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  useEffect(() => {
    if (typeof window !== "undefined") {
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
                if (scrollY > window.innerHeight) // for skipping front section
                  for (const sec of sectionRects) {
                    if (
                      scrollY > sec.y + window.innerHeight / 2 && // top part of section is 50% visible
                      (sec.y > 0 || sec.bottom > 0.5 * window.innerHeight) // either top part is visible OR bottom part is at 50% screen height
                    )
                      break;
                    else if (sec.top > scrollY) { // top is not reached yet
                      i = 0;
                    } else {
                      i++;
                    }
                  }
                if (i == 5) i = 0; // no section is visible
                if (pathname !== "/team")
                  navHighlighter.style.transform = `translateX(${100 * i}%)`;
                else
                  navHighlighter.style.transform = `translateX(${
                    100 * sections.length
                  }%)`;
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
      };
  }, [pathname]);
}
