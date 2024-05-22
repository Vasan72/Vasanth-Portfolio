import React from "react";
import vkBullet from "../assets/vk-images.png";
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineGithub} from "react-icons/ai";

const Vasanth = () => {
  const config = {
    subtitle: 'Im a Full stack developer and Designer'
  }
  return (
    <section id="vasanth" className="flex flex-col md:flex-row px-5 py-26 bg-primary justify-center">
      <div className="md:w-1/2 flex flex-col pt-20">
        <h1 className=" text-black text-5xl md:text-6xl font-vasanth-font">
          Hi,<br />Im <span className="text-[#ff4321]">Vasanthakumar</span>
          <p className="text-2xl">{config.subtitle}</p>
        </h1>
        <div className="flex py-10">
          <a target="_blank" href="https://www.linkedin.com/in/vasanthakumar-nagarajan-413326270/" className="pr-5 hover:text-white">
            <AiOutlineLinkedin size={40} />
          </a>
          <a  target="_blank" href="https://github.com/Vasan72" className="pr-5 hover:text-white">
            <AiOutlineGithub size={40}/>
          </a>
          <a  target="_blank" href="https://www.instagram.com/vasanth__nj/"className="hover:text-white">
            <AiOutlineInstagram size={40}/>
          </a>
        </div>
      </div>
      <img className="md:w-1/3 vasanth-img shadow-sm" src={vkBullet} alt="vasanth" />
    </section>
  );
};

export default Vasanth;
