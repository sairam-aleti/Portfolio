import React from 'react';
import { FaInstagram, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiJavascript, SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Media = () => {
  const handleIconClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div className="xl:mr-10">
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon" onClick={() => handleIconClick('https://www.instagram.com/sairam_aleti/')}>
            <FaInstagram />
          </span>
          <span className="bannerIcon" onClick={() => handleIconClick('https://x.com/sairam_aleti')}>
            <FontAwesomeIcon icon={faXTwitter} />
          </span>
          <span className="bannerIcon" onClick={() => handleIconClick('https://www.linkedin.com/in/sairam-aleti/')}>
            <FaLinkedinIn />
          </span>
        </div>
      </div>
      <div className="xl:ml-10">
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiJavascript />
          </span>
          <span className="bannerIcon">
            <FaJava />
          </span>
          <span className="bannerIcon">
            <SiMysql />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Media;
