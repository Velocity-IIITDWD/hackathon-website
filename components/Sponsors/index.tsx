"use client";

import { SponsorCard } from "./SponsorCard";
import { SponsorCardProps } from "./SponsorCard";

const sponsorsTier1: SponsorCardProps[] = [
  {
    id: "sponsor-1-1",
    name: "Revealing soon",
    website: "https://devfolio.co/",
    logo: "/Revealing.png",
    bgColor1: "#000",
    bgColor2: "#ccc",
  },
  {
    id: "sponsor-1-2",
    name: "Revealing soon",
    website: "/",
    logo: "/Revealing.png",
    bgColor1: "#000",
    bgColor2: "#ccc",
  },
  {
    id: "sponsor-1-3",
    name: "Revealing soon",
    website: "/",
    logo: "/Revealing.png",
    bgColor1: "#000",
    bgColor2: "#ccc",
  },
];

const sponsorsTier2: SponsorCardProps[] = [];
const sponsorsTier3: SponsorCardProps[] = [
  {
    id: "sponsor-1-1",
    name: "DEVFOLIO LOGO",
    website: "https://devfolio.co/",
    logo: "/devfolio-image.png",
    bgColor1: "#000",
    bgColor2: "#ccc",
  },
  {
    id: "sponsor-1-2",
    name: "BEECEPTOR LOGO",
    website:
      "https://beeceptor.com/?utm_source=hackathon&utm_medium=email&utm_campaign=hack2future",
    logo: "/beeceptor.png",
    bgColor1: "#000",
    bgColor2: "#ccc",
  },
];
const sponsorsTier4: SponsorCardProps[] = [
  {
    id: "sponsor-1-1",
    name: "POLYGON LOGO",
    website: "https://polygon.technology/",
    logo: "/polygon.png",
    bgColor1: "#000",
    bgColor2: "#ccc",
  },
  {
    id: "sponsor-1-2",
    name: "ETHINDIA LOGO",
    website: "https://ethindia.co/",
    logo: "/ETHIndia.png",
    bgColor1: "#000",
    bgColor2: "#ccc",
  },
  {
    id: "sponsor-1-3",
    name: "GIVE MY CERTIFICATE LOGO",
    website: "https://givemycertificate.com/",
    logo: "/give-my-certificate.png",
    bgColor1: "#000",
    bgColor2: "#ccc",
  },
];
const sponsorsTier5: SponsorCardProps[] = [
  {
    id: "sponsor-1-1",
    name: "JETBRAINS LOGO",
    website: "https://www.jetbrains.com/",
    logo: "/jetbrains.png",
    bgColor1: "#000",
    bgColor2: "#ccc",
  },
];

const sponsorsTier6: SponsorCardProps[] = [
  {
    id: "sponsor-1-1",
    name: "GDG Hubli",
    website: "https://gdg.community.dev/gdg-hubli/",
    logo: "/gdg-hubli-logo-square-transparent.png",
    bgColor1: "#fff",
    bgColor2: "#fff",
  },
  {
    id: "sponsor-1-2",
    name: "IIIT Society",
    website: "https://in.linkedin.com/company/iiitians-network",
    logo: "/IIITians_Logo.png",
    bgColor1: "#000",
    bgColor2: "#ccc",
  },
];

const SponsorsOriginal: React.FC = () => (
  <div
    id="sponsors"
    className="scroll-mt-12 text-white pt-16 pb-20 px-2 bg-[#070b0d] h-fit w-full flex flex-col items-center"
  >
    <h1 className="text-[3rem] left-8 mt-28 mb-8 sm:left-20 w-full relative md:text-[90px] leading-[1] z-[2] uppercase font-anton">
      Sponsors
      <span className="absolute -left-2 md:-left-8 font-anton -bottom-4 z-[-1] text-[6rem] md:text-[200px] text-[#1b1e24]">
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
      <div className="flex gap-x-8 gap-y-8 justify-center flex-wrap w-full max-w-2xl items-center">
        {sponsorsTier2.map((sponsor, index) => (
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
          Gold
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
        {sponsorsTier3.map((sponsor, index) => (
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
          Silver
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
        {sponsorsTier4.map((sponsor, index) => (
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
          Bronze
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
        {sponsorsTier5.map((sponsor, index) => (
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
          Community Partners
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
        {sponsorsTier6.map((sponsor, index) => (
          <SponsorCard key={index} {...sponsor} />
        ))}
      </div>
    </div>
  </div>
);

const Sponsors: React.FC = () => (
  <div
    id="sponsors"
    className="scroll-mt-12 text-white pt-16 pb-20 px-2 bg-[#070b0d] h-fit w-full flex flex-col items-center"
    data-idx="4"
  >
    <h1 className="text-[3rem] left-8 mt-28 mb-8 sm:left-20 w-full relative md:text-[90px] leading-[1] z-[2] uppercase font-anton">
      Sponsors
      <span className="absolute -left-2 md:-left-8 font-anton -bottom-4 z-[-1] text-[6rem] md:text-[200px] text-[#1b1e24]">
        Sponsors
      </span>
    </h1>
    <div className="grid place-items-center">
      <h1 className="text-[3rem] left-8 mt-28 mb-8 sm:left-20 w-full relative md:text-[40px] leading-[1] z-[2] uppercase font-anton">
        Revealing Soon
        <span className="absolute min-w-fit text-nowrap -left-2 md:-left-8 font-anton -bottom-4 z-[-1] text-[6rem] md:text-[80px] text-[#1b1e24]">
          Revealing Soon
        </span>
      </h1>
    </div>
  </div>
);

export default SponsorsOriginal;
