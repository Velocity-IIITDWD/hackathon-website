'use client'

import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

interface SponsorCardProps {
  name: string;
  website: string;
  logo: string;
  socialLinks: {
    youtube: string;
    facebook: string;
    twitter: string;
    instagram: string;
  };
}

const SponsorCard: React.FC<SponsorCardProps> = ({ name, website, logo, socialLinks }) => {
  const [logoHovered, setLogoHovered] = useState(false);
  const [contentHovered, setContentHovered] = useState(false);
  const containerRef = useRef(null);
  const logoRef1 = useRef(null);
  const logoRef2 = useRef(null);
  const logoRef3 = useRef(null);
  const bgRef = useRef(null);
  const bgBorderRef = useRef(null);

  useGSAP(() => {
    if (contentHovered) {
      gsap.to(bgBorderRef.current, { strokeWidth: '6', ease: "power1.inOut" })
      gsap.to(bgRef.current, { skewX: 12 })
      gsap.to(containerRef.current, { skewX: 12, duration: 0.5 })
    }
    else if (logoHovered) {
      gsap.to(logoRef1.current, { xPercent: -15, yPercent: -15, ease: "power1.inOut" })
      gsap.to(logoRef2.current, { xPercent: -10, yPercent: -10, ease: "power1.inOut" })
      gsap.to(logoRef3.current, { xPercent: -5, yPercent: -5, ease: "power1.inOut" })
      gsap.to(bgRef.current, { skewX: -12 })
      gsap.to(containerRef.current, { skewX: -12, duration: 0.5 })
    } else {
      gsap.to(logoRef1.current, { xPercent: 0, yPercent: 0, ease: "power2.inOut" })
      gsap.to(logoRef2.current, { xPercent: 0, yPercent: 0, ease: "power2.inOut" })
      gsap.to(logoRef3.current, { xPercent: 0, yPercent: 0, ease: "power2.inOut" })
      gsap.to(bgBorderRef.current, { strokeWidth: '0', ease: "power1.inOut" })
      gsap.to(bgRef.current, { skewX: 0 })
      gsap.to(containerRef.current, { skewX: 0, duration: 0 })
    }
  }, [logoHovered, contentHovered])
  const Bg = () => {
    return (
      <svg ref={bgRef} className='size-full -z-50' width="550" height="308" viewBox="0 0 550 308" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5">
          <path d="M33.8296 116.854L33.6858 188.547C33.6846 189.171 33.4925 189.788 33.1203 190.364C32.7481 190.94 32.2034 191.463 31.5169 191.902C30.8305 192.342 30.016 192.691 29.1198 192.928C28.2236 193.165 27.2633 193.285 26.2939 193.284L26.4567 112.088C27.4262 112.09 28.386 112.215 29.2812 112.455C30.1764 112.696 30.9896 113.048 31.6742 113.49C32.3588 113.933 32.9015 114.458 33.2714 115.035C33.6412 115.612 33.8308 116.23 33.8296 116.854Z" fill="#0088BE" />
          <path d="M515.821 189.108L515.965 117.415C515.966 116.791 516.158 116.174 516.53 115.598C516.902 115.023 517.447 114.5 518.133 114.06C518.82 113.62 519.634 113.272 520.531 113.035C521.427 112.798 522.387 112.677 523.357 112.679L523.194 193.874C522.224 193.872 521.264 193.748 520.369 193.507C519.474 193.266 518.661 192.915 517.976 192.472C517.292 192.03 516.749 191.505 516.379 190.927C516.009 190.35 515.82 189.732 515.821 189.108Z" fill="#0088BE" />
          <path d="M310.794 277.626L239.013 277.482C238.388 277.481 237.769 277.644 237.191 277.964C236.613 278.284 236.088 278.753 235.645 279.345C235.202 279.937 234.85 280.641 234.61 281.415C234.369 282.189 234.244 283.019 234.243 283.858L315.539 284.021C315.54 283.182 315.419 282.352 315.182 281.576C314.944 280.801 314.595 280.097 314.154 279.503C313.714 278.909 313.19 278.437 312.614 278.115C312.037 277.793 311.419 277.627 310.794 277.626Z" fill="#0088BE" />
          <path d="M311.295 28.0544L239.513 27.9104C238.888 27.9092 238.27 27.7428 237.694 27.4208C237.117 27.0987 236.594 26.6273 236.153 26.0335C235.712 25.4396 235.363 24.7349 235.126 23.9597C234.888 23.1844 234.767 22.3537 234.769 21.5151L316.065 21.6782C316.063 22.5168 315.938 23.347 315.698 24.1212C315.457 24.8955 315.105 25.5988 314.662 26.1909C314.219 26.783 313.694 27.2523 313.116 27.572C312.538 27.8918 311.919 28.0556 311.295 28.0544Z" fill="#0088BE" />
        </g>
        <path ref={bgBorderRef} opacity="0.8" d="M10.5812 8.0001L9.58118 7.99809L9.57918 8.99809L9.06433 265.716L9.06342 266.173L9.40861 266.473L46.4292 298.625L46.7105 298.87L47.0829 298.87L538.958 299.857L539.958 299.859L539.96 298.859L540.475 42.1416L540.476 41.6844L540.131 41.3846L503.11 9.23154L502.829 8.9873L502.456 8.98655L10.5812 8.0001ZM15.393 13.3164L500.49 14.2892L534.649 43.9568L534.146 294.541L49.0493 293.568L14.8905 263.9L15.393 13.3164Z" fill="#0088BE" stroke="#0088BE" stroke-width="0" />
      </svg>
    )
  }

  return (
    <div className="relative w-80 h-[179.2px]">
      <div className='absolute w-full top-0 left-0'>
        <Bg />
      </div>
      <div ref={containerRef} className='flex gap-8 justify-center items-center size-full'>
        <div onMouseOver={() => setLogoHovered(true)} onMouseLeave={() => setLogoHovered(false)} className="select-none w-20 h-20 flex justify-center items-center rounded-full shadow-md relative">
          <Image ref={logoRef1} height={80} width={80} src={logo} alt={`${name} logo`} className="opacity-100 z-30 w-full h-full object-cover absolute top-0 left-0 rounded-full" />
          <Image ref={logoRef2} height={80} width={80} src={logo} alt={`${name} logo`} className="opacity-80 z-20 w-full h-full object-cover absolute top-0 left-0 rounded-full" />
          <Image ref={logoRef3} height={80} width={80} src={logo} alt={`${name} logo`} className="opacity-60 z-10 w-full h-full object-cover absolute top-0 left-0 rounded-full" />
          <Image height={50} width={50} src={logo} alt={`${name} logo`} className="opacity-40 w-full h-full object-cover absolute top-0 left-0 rounded-full" />
        </div>
        <div onMouseOver={() => setContentHovered(true)} onMouseLeave={() => setContentHovered(false)} className="z-0 flex flex-col items-center gap-4 text-center size-fit">
          <div className='z-10'>
            <h2 className="text-white text-2xl font-semibold">{name}</h2>
            <a href={website} target="_blank" rel="noopener noreferrer" className="text-blue-400 text-sm">
              {website}
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 gap-x-8">
            <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
              <FontAwesomeIcon icon={faYoutube} className="text-gray-100 transition duration-300 transform hover:text-red-600" />
            </a>
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
              <FontAwesomeIcon icon={faFacebook} className="text-gray-100 transition duration-300 transform hover:text-blue-600" />
            </a>
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
              <FontAwesomeIcon icon={faTwitter} className="text-gray-100 transition duration-300 transform hover:text-blue-400" />
            </a>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
              <FontAwesomeIcon icon={faInstagram} className="text-gray-100 transition duration-300 transform hover:text-pink-600" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorCard;
