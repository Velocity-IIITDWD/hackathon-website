'use client'

import { SponsorCard } from './SponsorCard';
import { SponsorCardProps } from './SponsorCard';

const sponsorsTier1: SponsorCardProps[] = [
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

const sponsorsTier2: SponsorCardProps[] = [
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
  <div id="sponsors" className="scroll-mt-12 text-white pt-16 pb-20 px-2 h-fit flex flex-col items-center relative overflow-hidden">
    {/* Dimmer color patches */}
    <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#9B4E9D] opacity-7 rounded-full blur-[160px]"></div>

    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-8 z-10" style={{ textShadow: "0 0 4px rgba(183, 69, 186, 0.4)" }}>
      Sponsors
    </h1>
    <div className='flex w-full gap-4 items-center mb-12 mt-8 max-w-4xl z-10'>
      <div className="relative flex grow">
        <svg width={'10px'} height={'10px'} className="fill-[#B745BA] opacity-50 absolute top-[-4px] left-0 rotate-45" viewBox="0 0 10 10">
          <rect width={'10px'} height={'10px'} />
        </svg>
        <hr className="flex-grow border-t-2 border-[#B745BA] opacity-50" />
      </div>
      <h1 className="text-xl md:text-2xl text-center" style={{ textShadow: "0 0 2px rgba(183, 69, 186, 0.3)" }}>
        Tier 1
      </h1>
      <div className="relative flex grow">
        <svg width={'10px'} height={'10px'} className="fill-[#B745BA] opacity-50 absolute top-[-4px] right-0 rotate-45" viewBox="0 0 10 10">
          <rect width={'10px'} height={'10px'} />
        </svg>
        <hr className="flex-grow border-t-2 border-[#B745BA] opacity-50" />
      </div>
    </div>
    <div className="flex gap-x-8 gap-y-8 justify-center flex-wrap w-full max-w-2xl items-center z-10">
      {sponsorsTier1.map((sponsor, index) => (
        <SponsorCard key={index} {...sponsor} />
      ))}
    </div>
    <div className='flex w-full gap-4 items-center mb-12 mt-12 max-w-4xl z-10'>
      <div className="relative flex grow">
        <svg width={'10px'} height={'10px'} className="fill-[#B745BA] opacity-50 absolute top-[-9px] left-0 rotate-45" viewBox="0 0 10 10">
          <rect width={'10px'} height={'10px'} />
        </svg>
        <hr className="flex-grow border-t-2 border-[#B745BA] opacity-50" />
      </div>
      <h1 className="text-xl md:text-2xl text-center" style={{ textShadow: "0 0 2px rgba(183, 69, 186, 0.3)" }}>
        Tier 2
      </h1>
      <div className="relative flex grow">
        <svg width={'10px'} height={'10px'} className="fill-[#B745BA] opacity-50 absolute top-[-4px] right-0 rotate-45" viewBox="0 0 10 10">
          <rect width={'10px'} height={'10px'} />
        </svg>
        <hr className="flex-grow border-t-2 border-[#B745BA] opacity-50" />
      </div>
    </div>
    <div className="flex gap-x-8 gap-y-8 justify-center flex-wrap w-full max-w-2xl items-center z-10">
      {sponsorsTier2.map((sponsor, index) => (
        <SponsorCard key={index} {...sponsor} />
      ))}
    </div>
  </div>
);

export default Sponsors;