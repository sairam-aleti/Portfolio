import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const descriptions = [
  'Explore my projects and feel free to get in touch.',
  'Discover innovative solutions and creative designs.',
  'Let’s collaborate and bring your ideas to life!',
  'Check out my latest work and see what’s new.',
  'Your feedback is valuable! Let’s build something great together.'
];

const RightBanner = () => {
  const [greeting, setGreeting] = useState('');
  const [description, setDescription] = useState(descriptions[0]);

  useEffect(() => {
    const updateGreeting = () => {
      const now = new Date();
      const hours = now.getHours();
      let newGreeting;

      if (hours < 12) {
        newGreeting = 'Good Morning!';
      } else if (hours < 18) {
        newGreeting = 'Good Afternoon!';
      } else {
        newGreeting = 'Good Evening!';
      }

      setGreeting(newGreeting);
    };

    updateGreeting(); // Set initial greeting
    const intervalId = setInterval(updateGreeting, 30000); // Update every minute

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const changeDescription = () => {
      const randomIndex = Math.floor(Math.random() * descriptions.length);
      setDescription(descriptions[randomIndex]);
    };

    changeDescription(); // Set initial description
    const descriptionIntervalId = setInterval(changeDescription, 7000); // Change description every 7 seconds

    return () => clearInterval(descriptionIntervalId);
  }, []);

  return (
    <div className="relative w-3/4 flex justify-center items-center py-6 px-4">
      <motion.div
        className="relative w-full max-w-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] rounded-lg p-8 shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] rounded-lg z-0"></div>
        <div className="relative z-10 flex flex-col justify-center items-center space-y-4">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 text-center leading-tight">
            {greeting}
          </h1>
          <p className="text-white text-sm md:text-base lg:text-lg text-center">
            {description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default RightBanner;
