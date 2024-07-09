import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

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
  return (
    <div className="w-80 bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-gray-700 rounded-lg shadow-xl p-6 flex flex-col justify-between transform transition duration-500 hover:scale-105">
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 flex justify-center items-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-2 border-gray-300 shadow-md overflow-hidden">
          <img src={logo} alt={`${name} logo`} className="w-full h-full object-cover" />
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
