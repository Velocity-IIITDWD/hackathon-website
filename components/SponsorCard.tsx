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
  const [hovered, setHovered] = useState(false);
  const logoRef1 = useRef(null);
  const logoRef2 = useRef(null);
  const logoRef3 = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.5, stagger: 0 } });

    if (hovered) {
      gsap.to(logoRef1.current, { xPercent: -15, yPercent: -15, ease: "power1.inOut" })
      gsap.to(logoRef2.current, { xPercent: -10, yPercent: -10, ease: "power1.inOut" })
      gsap.to(logoRef3.current, { xPercent: -5, yPercent: -5, ease: "power1.inOut" })
    } else {
      gsap.to(logoRef1.current, { xPercent: 0, yPercent: 0, ease: "power2.inOut" })
      gsap.to(logoRef2.current, { xPercent: 0, yPercent: 0, ease: "power2.inOut" })
      gsap.to(logoRef3.current, { xPercent: 0, yPercent: 0, ease: "power2.inOut" })
    }
  }, [hovered])
  const Bg = () => {
    return (
      <svg className='size-full -z-50' width="550" height="308" viewBox="0 0 550 308" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5">
          <path d="M33.8301 116.854L33.6863 188.547C33.685 189.171 33.4929 189.788 33.1208 190.364C32.7486 190.94 32.2038 191.463 31.5174 191.902C30.831 192.342 30.0165 192.691 29.1203 192.928C28.2241 193.165 27.2638 193.285 26.2944 193.284L26.4572 112.088C27.4267 112.09 28.3865 112.215 29.2817 112.455C30.1769 112.696 30.99 113.048 31.6747 113.49C32.3593 113.933 32.902 114.458 33.2719 115.035C33.6417 115.612 33.8313 116.23 33.8301 116.854Z" fill="#0088BE" />
          <path d="M515.821 189.108L515.965 117.415C515.966 116.791 516.158 116.174 516.53 115.598C516.902 115.023 517.447 114.5 518.134 114.06C518.82 113.62 519.635 113.272 520.531 113.035C521.427 112.798 522.387 112.677 523.357 112.679L523.194 193.874C522.224 193.872 521.265 193.748 520.369 193.507C519.474 193.266 518.661 192.915 517.976 192.472C517.292 192.03 516.749 191.505 516.379 190.927C516.009 190.35 515.82 189.732 515.821 189.108Z" fill="#0088BE" />
          <path d="M310.795 277.626L239.013 277.482C238.388 277.481 237.769 277.644 237.192 277.964C236.614 278.284 236.088 278.753 235.645 279.345C235.202 279.937 234.851 280.641 234.61 281.415C234.369 282.189 234.245 283.019 234.243 283.858L315.539 284.021C315.541 283.182 315.419 282.352 315.182 281.576C314.944 280.801 314.595 280.097 314.155 279.503C313.714 278.909 313.191 278.437 312.614 278.115C312.038 277.793 311.419 277.627 310.795 277.626Z" fill="#0088BE" />
          <path d="M311.295 28.0544L239.513 27.9104C238.889 27.9092 238.27 27.7428 237.694 27.4208C237.117 27.0987 236.594 26.6273 236.153 26.0335C235.713 25.4396 235.364 24.7349 235.126 23.9597C234.889 23.1844 234.767 22.3537 234.769 21.5151L316.065 21.6782C316.063 22.5168 315.939 23.347 315.698 24.1212C315.457 24.8955 315.106 25.5988 314.663 26.1909C314.22 26.783 313.694 27.2523 313.117 27.572C312.539 27.8918 311.92 28.0556 311.295 28.0544Z" fill="#0088BE" />
        </g>
        <g opacity="0.8">
          <mask id="path-5-inside-1_398_1087" fill="white">
            <path d="M14.3952 12.3144L500.864 13.29L535.65 43.5015L535.144 295.543L48.675 294.567L13.8897 264.356L14.3952 12.3144ZM10.5793 9.00009L10.0645 265.718L47.0851 297.87L538.96 298.857L539.475 42.1396C525.018 29.5829 516.912 22.5431 502.454 9.98654L10.5793 9.00009Z" />
          </mask>
          <path d="M14.3952 12.3144L14.4112 4.31439L6.41122 4.29834L6.39517 12.2983L14.3952 12.3144ZM500.864 13.29L506.11 7.24998L503.86 5.29597L500.88 5.28999L500.864 13.29ZM535.65 43.5015L543.65 43.5176L543.657 39.86L540.896 37.4615L535.65 43.5015ZM535.144 295.543L535.128 303.543L543.128 303.559L543.144 295.559L535.144 295.543ZM48.675 294.567L43.4291 300.607L45.679 302.561L48.6589 302.567L48.675 294.567ZM13.8897 264.356L5.88971 264.339L5.88237 267.997L8.64387 270.396L13.8897 264.356ZM10.5793 9.00009L10.5953 1.00011L2.59536 0.984064L2.57931 8.98405L10.5793 9.00009ZM10.0645 265.718L2.06447 265.701L2.05713 269.359L4.81865 271.758L10.0645 265.718ZM47.0851 297.87L41.8393 303.91L44.0891 305.864L47.069 305.87L47.0851 297.87ZM538.96 298.857L538.944 306.857L546.944 306.873L546.96 298.873L538.96 298.857ZM539.475 42.1396L547.475 42.1556L547.482 38.498L544.721 36.0996L539.475 42.1396ZM502.454 9.98654L507.7 3.94658L505.45 1.99253L502.47 1.98656L502.454 9.98654ZM14.3791 20.3144L500.848 21.29L500.88 5.28999L14.4112 4.31439L14.3791 20.3144ZM495.619 19.33L530.404 49.5415L540.896 37.4615L506.11 7.24998L495.619 19.33ZM527.65 43.4855L527.144 295.527L543.144 295.559L543.65 43.5176L527.65 43.4855ZM535.16 287.543L48.691 286.567L48.6589 302.567L535.128 303.543L535.16 287.543ZM53.9208 288.527L19.1355 258.316L8.64387 270.396L43.4291 300.607L53.9208 288.527ZM21.8897 264.372L22.3951 12.3304L6.39517 12.2983L5.88971 264.339L21.8897 264.372ZM2.57931 8.98405L2.06447 265.701L18.0644 265.734L18.5793 9.01614L2.57931 8.98405ZM4.81865 271.758L41.8393 303.91L52.3309 291.83L15.3103 259.678L4.81865 271.758ZM47.069 305.87L538.944 306.857L538.976 290.857L47.1011 289.87L47.069 305.87ZM546.96 298.873L547.475 42.1556L531.475 42.1235L530.96 298.841L546.96 298.873ZM544.721 36.0996C530.264 23.5433 522.157 16.5028 507.7 3.94658L497.209 16.0265C511.666 28.5835 519.771 35.6226 534.229 48.1795L544.721 36.0996ZM502.47 1.98656L10.5953 1.00011L10.5633 17.0001L502.438 17.9865L502.47 1.98656Z" fill="#0088BE" mask="url(#path-5-inside-1_398_1087)" />
        </g>
      </svg>
    )
  }

  return (
    <div className="flex gap-8 justify-center items-center relative w-80 h-[179.2px]">
      <div className='absolute w-full top-0 left-0'>
        <Bg />
      </div>
      <div onMouseOver={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="w-20 h-20 flex justify-center items-center rounded-full shadow-md relative">
        <Image ref={logoRef1} height={80} width={80} src={logo} alt={`${name} logo`} className="opacity-100 z-30 w-full h-full object-cover absolute top-0 left-0 rounded-full" />
        <Image ref={logoRef2} height={80} width={80} src={logo} alt={`${name} logo`} className="opacity-80 z-20 w-full h-full object-cover absolute top-0 left-0 rounded-full" />
        <Image ref={logoRef3} height={80} width={80} src={logo} alt={`${name} logo`} className="opacity-60 z-10 w-full h-full object-cover absolute top-0 left-0 rounded-full" />
        <Image height={50} width={50} src={logo} alt={`${name} logo`} className="opacity-40 w-full h-full object-cover absolute top-0 left-0 rounded-full" />
      </div>
      <div className="flex flex-col items-center gap-4 text-center">
        <div>
          <h2 className="text-white text-2xl font-semibold">{name}</h2>
          <a href={website} target="_blank" rel="noopener noreferrer" className="text-blue-400 text-sm hover:underline">
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
  );
};

export default SponsorCard;
