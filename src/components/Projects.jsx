import weatherApp from "../assets/weather.jpg";
import currencyConverter from "../assets/currencyConverter.jpg";
import qrCode from "../assets/qr-code.jpg";
import password from "../assets/password_generator.jpeg";
import clock from "../assets/digitalClock.jpeg";
import React from "react";

const Projects = () => {
  const config = {
    projects: [
      {
        pName:'Weather App',
        image: weatherApp ,
        description: "Weather App, Built with HTML CSS and React js",
        link: "https://weather-app-two-iota-90.vercel.app/",
      },
      {
        pName:'Currency Converter',
        image: currencyConverter ,
        description: "Currency Converter App, Built with HTML CSS and React js",
        link: "https://currency-conventor.vercel.app/",
      },
      {
        pName:'Qrcode Generator',
        image: qrCode,
        description: "QR Code Gernerator, Built with HTML CSS and React js",
        link: "https://qrcode-generator-orpin-alpha.vercel.app/",
      },
      {
        pName:'Password Generator',
        image: password,
        description:
          "Password Gernerator App, Built with HTML CSS and React js",
        link: "",
      },
      {
        pName:'Digital Clock',
        image: clock,
        description: "Digital Clock, Built with HTML CSS and React js",
        link: "https://digital-clock-wu8u.vercel.app/",
      },
    ],
  };
  return (
    <section
      id="project"
      className="flex flex-col py-20 px-5 justify-center bg-primary text-[#212121]"
    >
      <div className=" flex w-full">
        <div className="px-10 pb-5 flex flex-col">
          <h1 className="text-4xl border-b-4 border-[#ff4321] font-bold mb-5 w-[150px] ">
            Projects
          </h1>
          <p>
            These are some of my best project, I have built with React js HTML
            and CSS. Check them out.
          </p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex px-10 gap-5 flex-col md:flex-row ">
          {config.projects.map((project) => (  
            <div className="relative">
              <img className="h-[200px] w-[500px] rounded-md" src={project.image} />
              <div className="project-des ">
                <p className="text-center py-5">{project.description}</p>
              <div className="flex justify-center">
                <a target="_blank" className="btn" href={project.link}>View Project</a>
              </div>
              </div>
              <h4 className=" py-2 text-center font-bold">{project.pName}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
