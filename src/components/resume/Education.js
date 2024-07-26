import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 py-15">
          <ResumeCard
            title="BTech in Computer Science"
            subTitle="Anurag College of Engineering (2020-2024)"
            result="7.4/10"
            des="Gained expertise in C++, Java and the MERN stack. Developed innovative solutions like an economy platform for rentals and an ECG classification system."
          />
          <ResumeCard
            title="Higher Secondary Education"
            subTitle="Delhi Public School (2019-2020)"
            result="8.4/10"
            des="Completed higher secondary education with a focus on science, securing a strong foundation for a career in technology."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Delhi Public School (2017 - 2018)"
            result="8.8/10"
            des="Excelled in secondary education with a comprehensive understanding of fundamental subjects, preparing for advanced studies."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education;
