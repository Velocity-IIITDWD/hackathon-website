'use client';

import { SponsorCard, SponsorCardProps } from './SponsorCard';

const sponsorsTier1: SponsorCardProps[] = [
  {
    id: 'sponsor-1-1',
    name: 'Revealing soon',
    website: 'https://devfolio.co/',
    logo: '/Revealing.png',
    bgColor1: '#000',
    bgColor2: '#ccc',
  },
  {
    id: 'sponsor-1-2',
    name: 'Revealing soon',
    website: '/',
    logo: '/Revealing.png',
    bgColor1: '#000',
    bgColor2: '#ccc',
  },
  {
    id: 'sponsor-1-3',
    name: 'Revealing soon',
    website: '/',
    logo: '/Revealing.png',
    bgColor1: '#000',
    bgColor2: '#ccc',
  },
];

const sponsorsTier2: SponsorCardProps[] = [];
const sponsorsTier3: SponsorCardProps[] = [
  {
    id: 'sponsor-1-1',
    name: 'DEVFOLIO LOGO',
    website: 'https://devfolio.co/',
    logo: '/devfolio-image.png',
    bgColor1: '#000',
    bgColor2: '#ccc',
  },
  {
    id: 'sponsor-1-2',
    name: 'BEECEPTOR LOGO',
    website:
      'https://beeceptor.com/?utm_source=hackathon&utm_medium=email&utm_campaign=hack2future',
    logo: '/beeceptor.png',
    bgColor1: '#000',
    bgColor2: '#ccc',
  },
];
const sponsorsTier4: SponsorCardProps[] = [
  {
    id: 'sponsor-1-1',
    name: 'POLYGON LOGO',
    website: 'https://polygon.technology/',
    logo: '/polygon.png',
    bgColor1: '#000',
    bgColor2: '#ccc',
  },
  {
    id: 'sponsor-1-2',
    name: 'ETHINDIA LOGO',
    website: 'https://ethindia.co/',
    logo: '/ETHIndia.png',
    bgColor1: '#000',
    bgColor2: '#ccc',
  },
  {
    id: 'sponsor-1-3',
    name: 'GIVE MY CERTIFICATE LOGO',
    website: 'https://givemycertificate.com/',
    logo: '/give-my-certificate.png',
    bgColor1: '#000',
    bgColor2: '#ccc',
  },
];
const sponsorsTier5: SponsorCardProps[] = [
  {
    id: 'sponsor-1-1',
    name: 'JETBRAINS LOGO',
    website: 'https://www.jetbrains.com/',
    logo: '/jetbrains.png',
    bgColor1: '#000',
    bgColor2: '#ccc',
  },
];

const sponsorsTier6: SponsorCardProps[] = [
  {
    id: 'sponsor-1-1',
    name: 'GDG Hubli',
    website: 'https://gdg.community.dev/gdg-hubli/',
    logo: '/gdg-hubli-logo-square-transparent.png',
    bgColor1: '#fff',
    bgColor2: '#fff',
  },
  {
    id: 'sponsor-1-2',
    name: 'IIIT Society',
    website: 'https://in.linkedin.com/company/iiitians-network',
    logo: '/IIITians_Logo.png',
    bgColor1: '#000',
    bgColor2: '#ccc',
  },
  {
    id: 'sponsor-1-3',
    name: 'theDevArmy',
    website: 'https://thedevarmy.com/',
    logo: '/theDevArmy.jpg',
    bgColor1: '#000',
    bgColor2: '#ccc',
  },
  {
    id: 'sponsor-1-4',
    name: 'IRIDESCENCE LOGO',
    website:
      'https://www.instagram.com/iridescence.iiitdwd?igsh=MWVocmEwcHRteXVteQ==',
    logo: '/iridescence.jpg',
    bgColor1: '#000',
    bgColor2: '#ccc',
  },
  {
    id: 'sponsor-1-5',
    name: 'NEXUS SWARM',
    website: 'https://linktr.ee/nexus_swarm',
    logo: '/nexus_swarm.jpg',
    bgColor1: '#000',
    bgColor2: '#ccc',
  },
];

const Sponsors: React.FC = () => (
  <div
    id="sponsors"
    data-idx="5"
    className="flex h-fit w-full scroll-mt-12 flex-col items-center bg-[#070b0d] px-2 pb-20 pt-16 text-white"
  >
    <h1 className="font-anton relative left-8 z-[2] mb-8 mt-28 w-full text-[3rem] uppercase leading-[1] sm:left-20 md:text-[90px]">
      Sponsors
      <span className="font-anton absolute -bottom-4 -left-2 z-[-1] text-[6rem] text-[#1b1e24] md:-left-8 md:text-[200px]">
        Sponsors
      </span>
    </h1>
    <div className="w-fit">
      {/* <div className="flex w-full gap-4 items-center mb-12 mt-8 max-w-4xl">
        <div className="relative flex grow">
          <svg
            width={"10px"}
            height={"10px"}
            className="fill-teamBorderLine absolute top-[-4px] left-0 rotate-45"
            viewBox="0 0 10 10"
          >
            <rect width={"10px"} height={"10px"} />
          </svg>
          <hr className="flex-grow border-t-2 border-teamBorderLine" />
        </div>
        <h1 className="text-xl md:text-2xl font-anton uppercase text-center">
          Diamond
        </h1>
        <div className="relative flex grow">
          <svg
            width={"10px"}
            height={"10px"}
            className="fill-teamBorderLine absolute top-[-4px] right-0 rotate-45"
            viewBox="0 0 10 10"
          >
            <rect width={"10px"} height={"10px"} />
          </svg>
          <hr className="flex-grow border-t-2 border-teamBorderLine" />
        </div>
      </div>
      <div className="flex gap-x-8 gap-y-8 justify-center flex-wrap w-full max-w-2xl items-center">
        {sponsorsTier1.map((sponsor, index) => (
          <SponsorCard key={index} {...sponsor} />
        ))}
      </div>
      <div className="flex w-full gap-4 items-center mb-12 mt-12 max-w-4xl">
        <div className="relative flex grow">
          <svg
            width={"10px"}
            height={"10px"}
            className="fill-teamBorderLine absolute top-[-4px] left-0 rotate-45"
            viewBox="0 0 10 10"
          >
            <rect width={"10px"} height={"10px"} />
          </svg>
          <hr className="flex-grow border-t-2 border-teamBorderLine" />
        </div>
        <h1 className="text-xl md:text-2xl font-anton uppercase text-center">
          Platinum
        </h1>

        <div className="relative flex grow">
          <svg
            width={"10px"}
            height={"10px"}
            className="fill-teamBorderLine absolute top-[-4px] right-0 rotate-45"
            viewBox="0 0 10 10"
          >
            <rect width={"10px"} height={"10px"} />
          </svg>
          <hr className="flex-grow border-t-2 border-teamBorderLine" />
        </div>
      </div> */}
      <div className="flex w-full max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-8">
        {sponsorsTier2.map((sponsor, index) => (
          <SponsorCard key={index} {...sponsor} />
        ))}
      </div>

      <div className="mb-12 mt-12 flex w-full max-w-4xl items-center gap-4">
        <div className="relative flex grow">
          <svg
            width={'10px'}
            height={'10px'}
            className="fill-teamBorderLine absolute left-0 top-[-4px] rotate-45"
            viewBox="0 0 10 10"
          >
            <rect width={'10px'} height={'10px'} />
          </svg>
          <hr className="border-teamBorderLine flex-grow border-t-2" />
        </div>
        <h1 className="font-anton text-center text-xl uppercase md:text-2xl">
          Gold
        </h1>

        <div className="relative flex grow">
          <svg
            width={'10px'}
            height={'10px'}
            className="fill-teamBorderLine absolute right-0 top-[-4px] rotate-45"
            viewBox="0 0 10 10"
          >
            <rect width={'10px'} height={'10px'} />
          </svg>
          <hr className="border-teamBorderLine flex-grow border-t-2" />
        </div>
      </div>
      <div className="flex w-full max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-8">
        {sponsorsTier3.map((sponsor, index) => (
          <SponsorCard key={index} {...sponsor} />
        ))}
      </div>

      <div className="mb-12 mt-12 flex w-full max-w-4xl items-center gap-4">
        <div className="relative flex grow">
          <svg
            width={'10px'}
            height={'10px'}
            className="fill-teamBorderLine absolute left-0 top-[-4px] rotate-45"
            viewBox="0 0 10 10"
          >
            <rect width={'10px'} height={'10px'} />
          </svg>
          <hr className="border-teamBorderLine flex-grow border-t-2" />
        </div>
        <h1 className="font-anton text-center text-xl uppercase md:text-2xl">
          Silver
        </h1>

        <div className="relative flex grow">
          <svg
            width={'10px'}
            height={'10px'}
            className="fill-teamBorderLine absolute right-0 top-[-4px] rotate-45"
            viewBox="0 0 10 10"
          >
            <rect width={'10px'} height={'10px'} />
          </svg>
          <hr className="border-teamBorderLine flex-grow border-t-2" />
        </div>
      </div>
      <div className="flex w-full max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-8">
        {sponsorsTier4.map((sponsor, index) => (
          <SponsorCard key={index} {...sponsor} />
        ))}
      </div>

      <div className="mb-12 mt-12 flex w-full max-w-4xl items-center gap-4">
        <div className="relative flex grow">
          <svg
            width={'10px'}
            height={'10px'}
            className="fill-teamBorderLine absolute left-0 top-[-4px] rotate-45"
            viewBox="0 0 10 10"
          >
            <rect width={'10px'} height={'10px'} />
          </svg>
          <hr className="border-teamBorderLine flex-grow border-t-2" />
        </div>
        <h1 className="font-anton text-center text-xl uppercase md:text-2xl">
          Bronze
        </h1>

        <div className="relative flex grow">
          <svg
            width={'10px'}
            height={'10px'}
            className="fill-teamBorderLine absolute right-0 top-[-4px] rotate-45"
            viewBox="0 0 10 10"
          >
            <rect width={'10px'} height={'10px'} />
          </svg>
          <hr className="border-teamBorderLine flex-grow border-t-2" />
        </div>
      </div>
      <div className="flex w-full max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-8">
        {sponsorsTier5.map((sponsor, index) => (
          <SponsorCard key={index} {...sponsor} />
        ))}
      </div>

      <div className="mb-12 mt-12 flex w-full max-w-4xl items-center gap-4">
        <div className="relative flex grow">
          <svg
            width={'10px'}
            height={'10px'}
            className="fill-teamBorderLine absolute left-0 top-[-4px] rotate-45"
            viewBox="0 0 10 10"
          >
            <rect width={'10px'} height={'10px'} />
          </svg>
          <hr className="border-teamBorderLine flex-grow border-t-2" />
        </div>
        <h1 className="font-anton text-center text-xl uppercase md:text-2xl">
          Community Partners
        </h1>

        <div className="relative flex grow">
          <svg
            width={'10px'}
            height={'10px'}
            className="fill-teamBorderLine absolute right-0 top-[-4px] rotate-45"
            viewBox="0 0 10 10"
          >
            <rect width={'10px'} height={'10px'} />
          </svg>
          <hr className="border-teamBorderLine flex-grow border-t-2" />
        </div>
      </div>
      <div className="flex w-full max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-8">
        {sponsorsTier6.map((sponsor, index) => (
          <SponsorCard key={index} {...sponsor} />
        ))}
      </div>
    </div>
  </div>
);

export default Sponsors;
