import React from "react";
import Resumes from "../assets/resume.jpg";

const Resume = () => {
  const config = {
    link: 'https://drive.google.com/file/d/1LJoT2vOicWX2RCQNaIUDDRXhlF3Jejx6/view?usp=drive_link'
  }
  return (
    <section id="resume" className="flex flex-col md:flex-row px-5 py-10 bg-secondary justify-center">
      <div className=" md:w-1/2 py-10 flex  justify-center">
        <img src={Resumes} alt="Aboutme"  className="shadow-md w-[300px]"/>
      </div>
      <div className="md:w-1/2 flex justify-center text-[#edf2fc]">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl border-b-4 mb-5  border-[#FFC55A] font-bold w-[160px]">Resume</h1>
          <p className=" pb-5">
            You can view my resume 
          </p>
          <p><a target="_blank" href={config.link} className="resume-btn text-[#2C4E80]">Download</a></p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
