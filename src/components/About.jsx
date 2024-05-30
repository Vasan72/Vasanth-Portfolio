import React from "react";
import AboutImage from "../assets/vk-about.png";

const About = () => {
  const config ={
    line1: 'Aspiring to be a full-stack developer, I am currently diving deep into React.js, Node.js, Express.js and MongoDB, building on my foundation in HTML5, CSS3, JavaScript, and Tailwind CSS. My journey is fueled by a passion for creating dynamic and responsive web applications. With each project, I am honing my skills and getting closer to achieving my goal.',
  }
  return (
    <section id="about" className="flex flex-col md:flex-row px-5 py-20 bg-secondary justify-between">
      <div className=" md:w-1/3 py-10 mx-0 md:mx-1">
        <img src={AboutImage} alt="Aboutme"  className="about-img  bg-[#FFC55A] "/>
      </div>
      <div className="md:w-1/2 flex justify-center text-[#edf2fc]">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl border-b-4 mb-5  border-[#FFC55A] font-bold w-[190px]">About Me</h1>
          <p className=" pb-3">
           {config.line1}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
