import React from "react";
import AboutImage from "../assets/vk-about.png";

const About = () => {
  const config ={
    line1: ' Hi, My name is Vasanthakumar, I am Full stack Developer. I built beautiful Websites with Reactjs and Tailwind CSS.',
    line2: 'I am proficient in Frontend skills like React.js, Redux, Redux Tool Kit, Axiosm, Tailwind CSS, Sass, Css3 and many more.',
    line3: 'In backend, I know Node.js, Express.js, MongoDB.'
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
          <p className=" pb-3">{config.line2}</p>
          <p className=" pb-3">{config.line3}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
