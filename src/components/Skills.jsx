import React from "react";
import skill from "../assets/skill.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import python from "../assets/python.png";
import git from "../assets/git.png";
import nodejs from "../assets/node-js.png";
import tailwind from "../assets/tailwind-css.png";
import mongodb from "../assets/mongodb.png";

const Skills = () => {
  return (
    <section id="skills" className="flex flex-col md:flex-row justify-between bg-primary px-5 py-20 ">
      <div className="md:w-1/2 flex justify-center ">
        <div className="flex flex-col flex-box justify-center align-center">
          <h1 className="text-4xl border-b-4 mb-5  border-[#ff4321] font-bold w-[100px]">
            Skills
          </h1>
          <div className="w-[300px] flex flex-wrap flex-row flex-box gap-5 py-3 ">
            <img src={html} className="icon-skill"/>
            <img src={css} className="icon-skill" />
            <img src={js} className="icon-skill" />
            <img src={react} className="icon-skill" />
            <img src={python} className="icon-skill" />
            <img src={git} className="icon-skill" />
            <img src={nodejs} className="icon-skill" />
            <img src={tailwind} className="icon-skill" />
            <img src={mongodb} className="icon-skill" />
          </div>
        </div>
      </div>

      <div className="md:w-1/2 flex flex-row justify-center pt-10 md:py-5 px-15">
        <img src={skill} alt="experience" className=" w-[300px]" />
      </div>
    </section>
  );
};

export default Skills;
