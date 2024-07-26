import React from 'react'
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'; 

const ContactLeft = () => {
    const handleIconClick = (url) => {
        window.open(url, '_blank');
    };

  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Sai Ram</h3>
        <p className="text-lg font-normal text-gray-400">
          FullStack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Enthusiastic FullStack Developer with a passion for creating dynamic and responsive web applications. Adept at both front-end and back-end technologies, with a keen eye for detail and a commitment to delivering high-quality, user-centric solutions.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2 flex-wrap">
          Phone: <span className="text-lightText break-words">+91 9063575721</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2 flex-wrap">
          Email: <span className="text-lightText break-words">sairamreddyaleti99@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
    </div>
  );
}

export default ContactLeft;
