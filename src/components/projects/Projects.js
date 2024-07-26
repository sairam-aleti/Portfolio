import React from 'react';
import Title from '../layouts/Title';
import { chat, urbanspoon, ecg, rental, space } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Economy Rental Platform"
          des="Developed a MERN stack platform for short-term rentals with robust registration, secure login features, and user reviews."
          src={rental}
          githubUrl="https://github.com/sairam-aleti/Rental-Platform"
          liveUrl="https://airbnb-clone-hn68.onrender.com/listings"
        />
        <ProjectsCard
          title="Chat Spark"
          des="Engineered a real-time messaging app using the MERN stack with secure user authentication."
          src={chat}
          githubUrl="https://github.com/sairam-aleti/chat-app"
          liveUrl="https://messanger-app-is2w.onrender.com/login"
        />
        <ProjectsCard
          title="Space Explorer"
          des="Created an interactive space exploration website offering users a visually appealing and informative experience."
          src={space}
          githubUrl="https://github.com/sairam-aleti/space-web"
          liveUrl="https://my-space-website.netlify.app/"
        />
        <ProjectsCard
          title="Urban Spoon"
          des="Developed a service-oriented web application using HTML, CSS, and Java to facilitate food donation and reduce wastage."
          src={urbanspoon}
        />
        <ProjectsCard
          title="ECG Classification"
          des="Innovated a neural network model for detecting cardiac arrhythmia, improving efficiency and sustainability."
          src={ecg}
        />
      </div>
    </section>
  );
}

export default Projects;
