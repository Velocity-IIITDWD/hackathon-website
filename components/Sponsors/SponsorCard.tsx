"use client";

import Image from "next/image";
import Link from "next/link";

const sizeVariants = {
  full: "size-[calc(100%-50px)]",
  "size-20": "size-20",
};

export interface SponsorCardProps {
  id: string;
  name: string;
  website: string;
  logo: string;
  bgColor1?: string;
  bgColor2?: string;
  fillOpacity?: string;
  logoSize?: keyof typeof sizeVariants;
}

export const SponsorCard: React.FC<SponsorCardProps> = ({
  id,
  name,
  website,
  logo,
  bgColor1,
  bgColor2,
  fillOpacity = "0.11",
  logoSize = "size-20",
}) => {
  const Bg = () => {
    return (
      <svg
        className="group-hover:rotate-[10deg] group-hover:-skew-x-2 group-hover:-skew-y-2"
        viewBox="0 0 347 339"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="z-0"
          fill={`url(#${id}-paint0_linear_122_1942)`}
          d="M0.37852 -6.88733e-05L0.0362666 304.947L20.9059 337.335L345.699 338.499L346.041 33.5523L325.172 1.16385L0.37852 -6.88733e-05Z"
          fillOpacity={fillOpacity}
        />
        <defs>
          <linearGradient
            id={`${id}-paint0_linear_122_1942`}
            x1="-43.2627"
            y1="-41.0764"
            x2="390.606"
            y2="418.491"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={bgColor1} />
            <stop offset="1" stopColor={bgColor2} />
          </linearGradient>
        </defs>
        <g opacity="0.8" className="z-10">
          <rect className="size-full top-0 left-0 bg-green-400" />
          <path
            d="M16.1049 133.289L16.024 204.981C16.0233 205.605 15.8978 206.223 15.6547 206.798C15.4116 207.374 15.0557 207.896 14.6071 208.336C14.1586 208.776 13.6263 209.124 13.0407 209.36C12.455 209.597 11.8275 209.718 11.1939 209.715L11.2856 128.52C11.9192 128.522 12.5465 128.647 13.1316 128.888C13.7167 129.129 14.2482 129.481 14.6957 129.924C15.1432 130.367 15.498 130.892 15.7398 131.469C15.9816 132.046 16.1057 132.665 16.1049 133.289Z"
            fill="#b9f2ff"
          />
          <path
            d="M331.12 205.697L331.201 134.005C331.201 133.381 331.327 132.763 331.57 132.188C331.813 131.612 332.169 131.089 332.618 130.65C333.066 130.21 333.598 129.862 334.184 129.625C334.77 129.389 335.397 129.268 336.031 129.27L335.939 210.466C335.306 210.464 334.678 210.339 334.093 210.098C333.508 209.857 332.977 209.505 332.529 209.062C332.081 208.619 331.727 208.094 331.485 207.517C331.243 206.94 331.119 206.321 331.12 205.697Z"
            fill="#b9f2ff"
          />
          <path
            d="M209.775 315.424L137.993 315.168C137.369 315.166 136.75 315.357 136.172 315.729C135.595 316.102 135.069 316.649 134.627 317.34C134.184 318.031 133.833 318.852 133.593 319.756C133.353 320.66 133.229 321.629 133.228 322.609L214.523 322.898C214.524 321.919 214.402 320.948 214.164 320.043C213.926 319.137 213.577 318.314 213.136 317.62C212.695 316.926 212.171 316.375 211.594 315.998C211.018 315.621 210.399 315.426 209.775 315.424Z"
            fill="#b9f2ff"
          />
          <path
            d="M210.103 23.9701L138.322 23.7145C137.697 23.7123 137.079 23.5173 136.502 23.1404C135.925 22.7636 135.401 22.2124 134.96 21.5184C134.519 20.8243 134.17 20.0009 133.932 19.0952C133.694 18.1895 133.572 17.2193 133.573 16.2399L214.869 16.5294C214.868 17.5087 214.743 18.4781 214.503 19.3821C214.263 20.2861 213.912 21.107 213.469 21.7979C213.027 22.4889 212.502 23.0363 211.924 23.409C211.347 23.7817 210.728 23.9723 210.103 23.9701Z"
            fill="#b9f2ff"
          />
          <path
            className="group-hover:stroke-[10px] group-hover:fill-[##0088BE]"
            fill="#0088BE"
            strokeWidth="2"
            stroke="#1D98C9"
            d="M3.40995 4.3806L321.339 5.51268L344.073 40.7937L343.74 335.132L25.811 334L3.07749 298.718L3.40995 4.3806ZM0.916141 0.510193L0.577515 300.309L24.7719 337.857L346.234 339.002L346.573 39.2031C337.124 24.5395 331.827 16.3185 322.378 1.65486L0.916141 0.510193Z"
          />
        </g>
      </svg>
    );
  };

  return (
    <Link
      id={id}
      href={website}
      className="relative size-40 group [&_*]:transition-all ease-out [&_*]:duration-500"
    >
      <div
        id={`${id}-container`}
        className="flex gap-8 justify-center items-center size-full"
      >
        <div
          id={`${id}-logoContainer`}
          className={`select-none flex justify-center items-center rounded-full shadow-md relative ${sizeVariants[logoSize]}`}
        >
          <Image
            height={80}
            width={80}
            src={logo}
            alt={`${name} logo`}
            className="group-hover:-skew-x-2 group-hover:-skew-y-2 group-hover:rotate-[10deg] group-hover:translate-x-[-8%] group-hover:translate-y-[-10%] opacity-100 z-30 w-full h-full object-cover absolute top-0 left-0 rounded-full"
          />
          <Image
            height={80}
            width={80}
            src={logo}
            alt={`${name} logo`}
            className="group-hover:hue-rotate-30 group-hover:-skew-x-2 group-hover:-skew-y-2 group-hover:rotate-[10deg] group-hover:translate-x-[-6%] group-hover:translate-y-[-6%] opacity-80 z-20 w-full h-full object-cover absolute top-0 left-0 rounded-full"
          />
          <Image
            height={80}
            width={80}
            src={logo}
            alt={`${name} logo`}
            className="group-hover:hue-rotate-30 group-hover:-skew-x-2 group-hover:-skew-y-2 group-hover:rotate-[10deg] group-hover:translate-x-[-4%] group-hover:translate-y-[-3%] opacity-60 z-10 w-full h-full object-cover absolute top-0 left-0 rounded-full"
          />
          <Image
            height={50}
            width={50}
            src={logo}
            alt={`${name} logo`}
            className="group-hover:hue-rotate-30 group-hover:-skew-x-2 group-hover:-skew-y-2 group-hover:rotate-[10deg] opacity-40 w-full h-full object-cover absolute top-0 left-0 rounded-full"
          />
        </div>
      </div>
      <div className="absolute w-full top-0 left-0 z-10">
        <Bg />
      </div>
    </Link>
  );
};
