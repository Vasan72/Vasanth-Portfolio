import React, { useState } from "react";
import { RxDoubleArrowLeft } from "react-icons/rx";
import { RxDoubleArrowRight } from "react-icons/rx";
import accenture from "../assets/certificates/accenture.jpg";
import guvi from "../assets/certificates/guvi-ai.jpg";
import ideathon from "../assets/certificates/ideathon.jpg";
import learnathon from "../assets/certificates/learnathon.jpg";
import panAi from "../assets/certificates/pan-ai.jpg";
import panData from "../assets/certificates/pan-data.jpg";
import panMl from "../assets/certificates/pan-ml.jpg";
import python from "../assets/certificates/python.jpg";
import skillAi from "../assets/certificates/skill-ai.jpg";
import tnsdc from "../assets/certificates/tnsdc-ai.jpg";

const Certification = () => {
  let [current, setCurrent] = useState(0);
  let PreviousSlide = () => {
    if (current === 0) setCurrent(images.length - 1);
    else setCurrent(current - 1);
  };
  let nextslide = () => {
    if (current === images.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  const images = [
    accenture,
    guvi,
    ideathon,
    learnathon,
    panAi,
    panData,
    panMl,
    python,
    skillAi,
    tnsdc,
  ];

  return (
    <section
      id="certification"
      className="flex flex-col md:flex-row w-full justify-between bg-secondary px-4 md:px-16 py-14">
      <div className="md:w-1/3  flex flex-col justify-center items-center pb-5 ">
        <h1 className="text-4xl text-[#edf2fc] border-b-4 border-[#FFC55A] font-bold mb-5 w-[230px] ">
          Certification
        </h1>
      </div>
      <div className="md:w-[500px] py-5 overflow-hidden relative flex flex-col justify-center items-center">
        <div
          className={`flex transition ease-out duration-400`}
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {images.map((image) => (
            <img src={image}  />
          ))}
        </div>
        <div className="absolute h-full w-full top-0 justify-between items-center flex text-[#212121]  px-5 text-4xl">
          <button onClick={PreviousSlide} className="hover:bg-[#edf2fc] rounded-lg hover:text-5xl ">
            <RxDoubleArrowLeft />
          </button>
          <button onClick={nextslide} className="hover:bg-[#edf2fc] rounded-lg hover:text-5xl">
            <RxDoubleArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certification;
