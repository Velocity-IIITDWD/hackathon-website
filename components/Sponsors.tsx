import React from 'react';
import SponsorCard from './SponsorCard';

const sponsorsTier1 = [
  {
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
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white py-16 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-8">Sponsors</h1>
      <h2 className="text-2xl text-center mb-12">Tier 1</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sponsorsTier1.map((sponsor, index) => (
          <SponsorCard key={index} {...sponsor} />
        ))}
      </div>
      <h2 className="text-2xl text-center mb-12 mt-8">Tier 2</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sponsorsTier2.map((sponsor, index) => (
          <SponsorCard key={index} {...sponsor}/>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
