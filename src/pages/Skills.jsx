import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { useLocation } from "react-router-dom";
import skillsVideo from "../assets/videos/skillsVideo.mp4";
import icons from "../constant/icons";

const Skills = () => {
  const location = useLocation();

  // default color
  let iconColor = "black";

  // define color per page
  switch (location.pathname) {
    case "/skills":
      iconColor = "#C0C0C2"; // skills example
      break;

    default:
      iconColor = "black";
  }

  return (
    <div className="relative w-full h-screen ">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source src={skillsVideo} type="video/mp4" />
      </video>
      <div className="z-30  w-full relative  flex justify-center pt-[100px]">
        <div className=" w-[70vw] flex flex-wrap gap-6 justify-center items-center">
          <div className="iconsSkills ">
            <icons.FaHtml5 className="icon text-[#E34F26]" />
             <h1 className="font-mono text-2xl font-semibold">HTML</h1>
          </div>
          <div className="iconsSkills">
            <icons.FaCss3 className="icon text-[#1572B6]" />
             <h1 className="font-mono text-2xl font-semibold">CSS</h1>
          </div>
          <div className="iconsSkills">
            <icons.BsFiletypeScss className="icon text-[#CF649A]" />
             <h1 className="font-mono text-2xl font-semibold">SCSS</h1>
          </div>
          <div className="iconsSkills">
            <icons.FaBootstrap className="icon text-[#7952B3]" />
             <h1 className="font-mono text-2xl font-semibold">BOOTSTRAP</h1>
          </div>
          <div className="iconsSkills">
            <icons.FaGitAlt className="icon text-[#F05032]" />
             <h1 className="font-mono text-2xl font-semibold">GIT</h1>
          </div>
          <div className="iconsSkills">
            <icons.FaGithub className="icon text-[#ffffff]" />
             <h1 className="font-mono text-2xl font-semibold">GitHub</h1>
          </div>
          <div className="iconsSkills">
            <icons.FaJs className="icon text-[#F7DF1E]" />
             <h1 className="font-mono text-2xl font-semibold">JavaScript</h1>
          </div>
          <div className="iconsSkills">
            <icons.FaReact className="icon text-[#61DAFB]" />
             <h1 className="font-mono text-2xl font-semibold">REACT</h1>
          </div>
          <div className="iconsSkills">
            <icons.FaSass className="icon text-[#CC6699]" />
             <h1 className="font-mono text-2xl font-semibold">SASS</h1>
          </div>
          <div className="iconsSkills">
            <icons.RiTailwindCssFill className="icon text-[#06B6D4]" />
             <h1 className="font-mono text-2xl font-semibold">TAILWIND</h1>
          </div>
          <div className="iconsSkills">
            <icons.SiGnubash className="icon text-[#bcc3c9]" />
             <h1 className="font-mono text-2xl font-semibold">BASH</h1>
          </div>
        </div>
      </div>
      <div className=" z-10 absolute bottom-[40px] right-0">
        <h1 className="pl-[10px] title">SKILLS</h1>
      </div>

      <div className=" contactIcons work" style={{ color: iconColor }}>
        <div className="absolute bottom-5 left-2 z-20">
          <FaGithub size={35} className="pb-2 icon" />
          <IoLogoLinkedin size={35} className="pb-2 icon" />
          <MdEmail size={35} className="pb-2 icon" />
          <div className="w-[2px] h-30 bg-current mt-2 ml-[17px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
