import React from "react";
import Experiences from "../assets/experience.png";

const Experience = () => {
  const config = {
    experiece:{
      line1: "PANTECH SOLUTIONS, VIRTUAL - INTERNSHIP ON AI ",
      date1: '20 DEC 2023 - 20 JAN 2024',
      line2: "PANTECH SOLUTIONS, VIRTUAL - INTERNSHIP ON DATA ANALYTICS ",
      date2: '26 JAN 2024 - 26 FEB 2024',
      line3: "PANTECH SOLUTIONS, VIRTUAL - INTERNSHIP ON MI ",
      date3: '1 MAR 2024 - 1 APR 2024'
    }
    
  }
  return (
    <section
      id="experience"
      className="flex flex-col md:flex-row px-5 py-10 bg-secondary justify-center"
    >
      <div className=" md:w-1/2 py-10 flex  justify-center">
        <img src={Experiences} alt="experience" className=" w-[300px]" />
      </div>
      <div className="md:w-1/2 flex justify-center text-[#edf2fc]">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl border-b-4 mb-5  border-[#FFC55A] font-bold w-[205px]">
            Experience
          </h1>
          <ul className=" pb-5">
            <li className="pb-3">
             {config.experiece.line1} <br />
              <span>{config.experiece.date1}</span>
            </li>
            <li className="pb-3">
             {config.experiece.line2} <br />
              <span>{config.experiece.date2}</span>
            </li>
            <li>
              {config.experiece.line3}<br />
              <span>{config.experiece.date3}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
