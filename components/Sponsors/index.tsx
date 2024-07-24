'use client'

import { SponsorCard } from './SponsorCard';
import { SponsorCardProps } from './SponsorCard';

const sponsorsTier1 : SponsorCardProps[] = [
  {
    id: "sponsor-1-1",
    name: 'Amazon',
    website: 'https://www.amazon.com',
    logo: '/amazonlogo.png',
    bgColor1: '#000',
    bgColor2: '#ccc'
  },
  {
    id: "sponsor-1-2",
    name: 'Amazon',
    website: 'https://www.amazon.com',
    logo: '/amazonlogo.png',
    bgColor1: '#000',
    bgColor2: '#ccc'
  },
  {
    id: "sponsor-1-3",
    name: 'Amazon',
    website: 'https://www.amazon.com',
    logo: '/amazonlogo.png',
    bgColor1: '#000',
    bgColor2: '#ccc'
  }
];

const sponsorsTier2 : SponsorCardProps[] = [
  {
    id: "sponsor-2-1",
    name: 'Devfolio',
    website: 'https://www.amazon.com',
    logo: '/devfolio.png',
    bgColor1: '#fff',
    bgColor2: '#fff',
    fillOpacity: '1',
    logoSize: 'full'
  },
  {
    id: "sponsor-2-2",
    name: 'Devfolio',
    website: 'https://www.amazon.com',
    logo: '/devfolio.png',
    bgColor1: '#fff',
    bgColor2: '#fff',
    fillOpacity: '1',
    logoSize: 'full'
  }
];

const Sponsors: React.FC = () => (
  <div className="bg-gradient-to-b from-gray-900 to-black text-white py-16 min-h-screen flex flex-col items-center">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-8 z-10" style={{ textShadow: "0 0 4px #fff" }}>
      Sponsors
    </h1>
    <h1 className="text-xl md:text-2xl text-center mb-12" style={{ textShadow: "0 0 4px #fff" }}>
      Tier 1
    </h1>
    <div className="flex gap-4 justify-around flex-wrap w-full max-w-2xl items-center">
      {sponsorsTier1.map((sponsor, index) => (
        <SponsorCard key={index} {...sponsor} />
      ))}
    </div>
    <h1 className="text-xl md:text-2xl text-center mb-12 mt-8" style={{ textShadow: "0 0 4px #fff" }}>
      Tier 2
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 place-items-center">
      {sponsorsTier2.map((sponsor, index) => (
        <SponsorCard key={index} {...sponsor} />
      ))}
    </div>
  </div>
);

export default Sponsors;