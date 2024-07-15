'use client'

import { useState } from 'react';
import { SponsorCard } from './SponsorCard';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const sponsorsTier1 = [
  {
    id: "sponsor-1-1",
    name: 'Amazon',
    website: 'www.amazon.com',
    logo: '/amazonlogo.png',
    socialLinks: {
      youtube: 'https://www.youtube.com/amazon',
      facebook: 'https://www.facebook.com/amazon',
      twitter: 'https://twitter.com/amazon',
      instagram: 'https://www.instagram.com/amazon',
    },
  },
  {
    id: "sponsor-1-2",
    name: 'Amazon',
    website: 'www.amazon.com',
    logo: '/amazonlogo.png',
    socialLinks: {
      youtube: 'https://www.youtube.com/amazon',
      facebook: 'https://www.facebook.com/amazon',
      twitter: 'https://twitter.com/amazon',
      instagram: 'https://www.instagram.com/amazon',
    },
  },
  {
    id: "sponsor-1-3",
    name: 'Amazon',
    website: 'www.amazon.com',
    logo: '/amazonlogo.png',
    socialLinks: {
      youtube: 'https://www.youtube.com/amazon',
      facebook: 'https://www.facebook.com/amazon',
      twitter: 'https://twitter.com/amazon',
      instagram: 'https://www.instagram.com/amazon',
    },
  }
];

const sponsorsTier2 = [
  {
    id: "sponsor-2-1",
    name: 'Amazon',
    website: 'www.amazon.com',
    logo: '/amazonlogo.png',
    socialLinks: {
      youtube: 'https://www.youtube.com/amazon',
      facebook: 'https://www.facebook.com/amazon',
      twitter: 'https://twitter.com/amazon',
      instagram: 'https://www.instagram.com/amazon',
    },
  },
  {
    id: "sponsor-2-2",
    name: 'Amazon',
    website: 'www.amazon.com',
    logo: '/amazonlogo.png',
    socialLinks: {
      youtube: 'https://www.youtube.com/amazon',
      facebook: 'https://www.facebook.com/amazon',
      twitter: 'https://twitter.com/amazon',
      instagram: 'https://www.instagram.com/amazon',
    },
  }
];

const Sponsors: React.FC = () => {
  const [activeCard, setActiveCard] = useState('') // just the id : string

  useGSAP(() => {
    sponsorsTier1.forEach(el => animateSponsorCard(el))
    sponsorsTier2.forEach(el => animateSponsorCard(el))

    function animateSponsorCard(el: typeof sponsorsTier1[0]) {
      const id = el.id
      const bgCard = document.getElementById(`${id}-svg`);
      const bgCardBorder = document.getElementById(`${id}-svgPath`);
      const container = document.getElementById(`${id}-container`);
      const logoContainer = document.getElementById(`${id}-logoContainer`);
      const contentContainer = document.getElementById(`${id}-contentContainer`);
      const logos = logoContainer?.children;

      if (logoContainer && logos && contentContainer && container) {


        // resetting card state
        gsap.to(logos[0], { xPercent: 0, yPercent: 0, ease: "power2.inOut" })
        gsap.to(logos[1], { xPercent: 0, yPercent: 0, ease: "power2.inOut" })
        gsap.to(logos[2], { xPercent: 0, yPercent: 0, ease: "power2.inOut" })
        gsap.to(bgCardBorder, { strokeWidth: '0', ease: "power1.inOut" })
        gsap.to(bgCard, { skewX: 0 })
        gsap.to(container, { skewX: 0, duration: 0 })


        logoContainer.onmouseenter = () => {
          // animating
          gsap.to(logos[0], { xPercent: -15, yPercent: -15, ease: "power1.inOut" })
          gsap.to(logos[1], { xPercent: -10, yPercent: -10, ease: "power1.inOut" })
          gsap.to(logos[2], { xPercent: -5, yPercent: -5, ease: "power1.inOut" })
          gsap.to(bgCard, { skewX: -12 })
          gsap.to(container, { skewX: -12, duration: 0.5 })

          // resetting
          gsap.to(bgCardBorder, { strokeWidth: '0', ease: "power1.inOut" })
        }
        contentContainer.onmouseenter = () => {
          // animating
          gsap.to(bgCardBorder, { strokeWidth: '6', ease: "power1.inOut" })
          gsap.to(bgCard, { skewX: 12 })
          gsap.to(container, { skewX: 12, duration: 0.5 })

          // resetting
          gsap.to(logos[0], { xPercent: 0, yPercent: 0, ease: "power1.inOut" })
          gsap.to(logos[1], { xPercent: 0, yPercent: 0, ease: "power1.inOut" })
          gsap.to(logos[2], { xPercent: 0, yPercent: 0, ease: "power1.inOut" })
        }
        container.onmouseleave = () => {
          setActiveCard(el.id);
          gsap.to(logos[0], { xPercent: 0, yPercent: 0, ease: "power2.inOut" })
          gsap.to(logos[1], { xPercent: 0, yPercent: 0, ease: "power2.inOut" })
          gsap.to(logos[2], { xPercent: 0, yPercent: 0, ease: "power2.inOut" })
          gsap.to(bgCardBorder, { strokeWidth: '0', ease: "power1.inOut" })
          gsap.to(bgCard, { skewX: 0 })
          gsap.to(container, { skewX: 0, duration: 0 })
        }
        container.onmouseout = () => {
          setActiveCard(el.id);
          gsap.to(logos[0], { xPercent: 0, yPercent: 0, ease: "power2.inOut" })
          gsap.to(logos[1], { xPercent: 0, yPercent: 0, ease: "power2.inOut" })
          gsap.to(logos[2], { xPercent: 0, yPercent: 0, ease: "power2.inOut" })
          gsap.to(bgCardBorder, { strokeWidth: '0', ease: "power1.inOut" })
          gsap.to(bgCard, { skewX: 0 })
          gsap.to(container, { skewX: 0, duration: 0 })
        }
      }
    }
  }, [activeCard])

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white py-16 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-8">Sponsors</h1>
      <h2 className="text-2xl text-center mb-12">Tier 1</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {sponsorsTier1.map((sponsor, index) => (
          <SponsorCard key={index} {...sponsor} />
        ))}
      </div>
      <h2 className="text-2xl text-center mb-12 mt-8">Tier 2</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 place-items-center">
        {sponsorsTier2.map((sponsor, index) => (
          <SponsorCard key={index} {...sponsor} />
        ))}
      </div>
    </div>
  );
};

export default Sponsors;