"use client";

import "./index.css";
import Flow1 from "@/public/flow1.svg";
import Flow2 from "@/public/flow2.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useState } from "react";
import Stars from "@/public/Stars Animate.svg"

function Loader({ rendering }: { rendering?: boolean }) {
  useGSAP(() => {
    const img1 = document.getElementById("loader-img1");
    const img2 = document.getElementById("loader-img2");
    const loadingScreen = document.querySelectorAll(".loader");
    gsap.set(img1, {
      x: "-480px",
    });
    gsap.set(img2, {
      x: "10px",
    });
    gsap.to(img1, {
      x: "0px",
      y: "0",
      ease: "sine.inOut",
      duration: 5,
      yoyo: true,
      repeat: -1,
    });
    gsap.to(img2, {
      x: "-580px",
      y: "0",
      ease: "sine.inOut",
      duration: 5,
      yoyo: true,
      repeat: -1,
    });
    if (rendering) {
      loadingScreen.forEach(el => {
        gsap.to(el, {
          y: "-100%",
          delay: 4.5,
          duration: 1,
          ease: "power1.in"
        })
      })
    }
  });

  return (
    <div className="loader z-40 loading-background fixed">
      <div className="loader z-50 fixed h-screen w-screen backdrop-blur-3xl grid place-items-center">
        <Image src={Stars} alt="stars bg" className="-z-10 absolute" />
        <div className="rounded-full size-40 loading-bg relative overflow-hidden">
          <Image id="loader-img1" src={Flow1} alt="landing bg" className="z-10 absolute bottom-0 min-w-[700px] translate-y-[60%]" />
          <Image id="loader-img2" src={Flow2} alt="landing bg" className="z-0 absolute bottom-0 min-w-[700px] translate-y-[60%]" />
        </div>
      </div>
      <div className="loader z-40 fixed w-screen h-screen loading-background background-bg">
        <div className="w-60 h-10 blur-3xl bg-gradient-to-r from-[#5200FF] to-[#921BBC] translate-x-[20vw] translate-y-[15vh]" />
        <div className="w-60 h-10 blur-3xl bg-gradient-to-r from-[#5200FF] to-[#921BBC] translate-x-[75vw] translate-y-[80vh]" />
        <div className="w-60 h-10 blur-3xl bg-gradient-to-r from-[#5200FF] to-[#921BBC] translate-x-[80vw] translate-y-[5vh]" />
        <div className="w-60 h-10 blur-3xl bg-gradient-to-r from-[#5200FF] to-[#921BBC] translate-x-[10vw] translate-y-[75vh]" />
      </div>
    </div>
  );
}

export default function Page({ rendering = false }: { rendering?: boolean }) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (rendering) {
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [rendering]);

  return showLoader && <Loader rendering={rendering} />
}
