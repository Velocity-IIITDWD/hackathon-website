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
    const tl = gsap.timeline({defaults: {duration: 0.5, stagger: 0}});

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

  return (
    <div className="w-80 bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-gray-700 rounded-lg shadow-xl p-6 flex flex-col justify-between transform transition duration-500">
      <div className="flex items-center mb-6">
        <div onMouseOver={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="w-16 h-16 flex justify-center items-center rounded-full shadow-md relative">
          <Image ref={logoRef1} height={50} width={50} src={logo} alt={`${name} logo`} className="opacity-100 z-30 w-full h-full object-cover absolute top-0 left-0 rounded-full" />
          <Image ref={logoRef2} height={50} width={50} src={logo} alt={`${name} logo`} className="opacity-80 z-20 w-full h-full object-cover absolute top-0 left-0 rounded-full" />
          <Image ref={logoRef3} height={50} width={50} src={logo} alt={`${name} logo`} className="opacity-60 z-10 w-full h-full object-cover absolute top-0 left-0 rounded-full" />
          <Image height={50} width={50} src={logo} alt={`${name} logo`} className="opacity-40 w-full h-full object-cover absolute top-0 left-0 rounded-full" />
        </div>
        <div className="ml-4">
          <h2 className="text-white text-2xl font-semibold">{name}</h2>
          <a href={website} target="_blank" rel="noopener noreferrer" className="text-blue-400 text-sm hover:underline">
            {website}
          </a>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
          <FontAwesomeIcon icon={faYoutube} className="text-2xl text-gray-400 transition duration-300 transform hover:scale-110 hover:text-red-600" />
        </a>
        <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
          <FontAwesomeIcon icon={faFacebook} className="text-2xl text-gray-400 transition duration-300 transform hover:scale-110 hover:text-blue-600" />
        </a>
        <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
          <FontAwesomeIcon icon={faTwitter} className="text-2xl text-gray-400 transition duration-300 transform hover:scale-110 hover:text-blue-400" />
        </a>
        <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
          <FontAwesomeIcon icon={faInstagram} className="text-2xl text-gray-400 transition duration-300 transform hover:scale-110 hover:text-pink-600" />
        </a>
      </div>
    </div>
  );
};

export default SponsorCard;
