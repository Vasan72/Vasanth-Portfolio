import React from "react";
import vkBullet from "../assets/vk-images.png";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

const Vasanth = () => {
  const config = {
    subtitle: "Im a Full stack developer and Designer",
    link: "https://drive.google.com/file/d/1LJoT2vOicWX2RCQNaIUDDRXhlF3Jejx6/view?usp=drive_link",
  };
  return (
    <section
      id="vasanth"
      className="flex mt-15 pt-10 md:mt-18 flex-col md:flex-row px-5  bg-primary justify-center"
    >
      <div className="md:w-1/2 flex flex-col pt-20">
        <h1 className=" text-black text-5xl md:text-6xl font-vasanth-font">
          Hi,
          <br />
          Im <span className="text-[#ff4321]">Vasanthakumar</span>
          <p className="text-2xl">{config.subtitle}</p>
          <a
            href={config.link}
            target="_blank"
            className="text-xl bg-[#212121] text-[#fff] rounded-md py-[3px] px-4"
          >
            Download CV
          </a>
        </h1>
        <div className="flex pt-20 pb-1">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/vasanthakumar-nagarajan-413326270/"
            className="pr-5 hover:text-[#ff4321]"
          >
            <AiOutlineLinkedin size={40} />
          </a>
          <a
            target="_blank"
            href="https://github.com/Vasan72"
            className="pr-5 hover:text-[#ff4321]"
          >
            <AiOutlineGithub size={40} />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/vasanth__nj/"
            className="hover:text-[#ff4321]"
          >
            <AiOutlineInstagram size={40} />
          </a>
        </div>
      </div>
      <img
        className="md:w-1/3 pt-10 vasanth-img  "
        src={vkBullet}
        alt="vasanth"
      />
    </section>
  );
};

export default Vasanth;
