// import React from "react";
// import { FaGithub } from "react-icons/fa";
// import { IoLogoLinkedin } from "react-icons/io5";
// import { MdEmail } from "react-icons/md";
// import { useLocation } from "react-router-dom";
// import skillsVideo from "../assets/videos/skillsVideo.mp4";
// import icons from "../constant/icons";

// const Skills = () => {
//   const location = useLocation();

//   // default color
//   let iconColor = "black";

//   // define color per page
//   switch (location.pathname) {
//     case "/skills":
//       iconColor = "#C0C0C2"; // skills example
//       break;

//     default:
//       iconColor = "black";
//   }

//   return (
//     <div className="relative w-full h-screen ">
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//         autoPlay
//         loop
//         muted
//       >
//         <source src={skillsVideo} type="video/mp4" />
//       </video>
//       <div className="z-30  w-full relative  flex justify-center pt-[100px]">
//         <div className=" w-[70vw] flex flex-wrap gap-6 justify-center items-center">
//           <div className="iconsSkills ">
//             <icons.FaHtml5 className="icon text-[#E34F26]" />
//              <h1 className="font-mono text-2xl font-semibold">HTML</h1>
//           </div>
//           <div className="iconsSkills">
//             <icons.FaCss3 className="icon text-[#1572B6]" />
//              <h1 className="font-mono text-2xl font-semibold">CSS</h1>
//           </div>
//           <div className="iconsSkills">
//             <icons.BsFiletypeScss className="icon text-[#CF649A]" />
//              <h1 className="font-mono text-2xl font-semibold">SCSS</h1>
//           </div>
//           <div className="iconsSkills">
//             <icons.FaBootstrap className="icon text-[#7952B3]" />
//              <h1 className="font-mono text-2xl font-semibold">BOOTSTRAP</h1>
//           </div>
//           <div className="iconsSkills">
//             <icons.FaGitAlt className="icon text-[#F05032]" />
//              <h1 className="font-mono text-2xl font-semibold">GIT</h1>
//           </div>
//           <div className="iconsSkills">
//             <icons.FaGithub className="icon text-[#ffffff]" />
//              <h1 className="font-mono text-2xl font-semibold">GitHub</h1>
//           </div>
//           <div className="iconsSkills">
//             <icons.FaJs className="icon text-[#F7DF1E]" />
//              <h1 className="font-mono text-2xl font-semibold">JavaScript</h1>
//           </div>
//           <div className="iconsSkills">
//             <icons.FaReact className="icon text-[#61DAFB]" />
//              <h1 className="font-mono text-2xl font-semibold">REACT</h1>
//           </div>
//           <div className="iconsSkills">
//             <icons.FaSass className="icon text-[#CC6699]" />
//              <h1 className="font-mono text-2xl font-semibold">SASS</h1>
//           </div>
//           <div className="iconsSkills">
//             <icons.RiTailwindCssFill className="icon text-[#06B6D4]" />
//              <h1 className="font-mono text-2xl font-semibold">TAILWIND</h1>
//           </div>
//           <div className="iconsSkills">
//             <icons.SiGnubash className="icon text-[#bcc3c9]" />
//              <h1 className="font-mono text-2xl font-semibold">BASH</h1>
//           </div>
//         </div>
//       </div>
//       <div className=" z-10 absolute bottom-[40px] right-0">
//         <h1 className="pl-[10px] title">SKILLS</h1>
//       </div>

//       <div className=" contactIcons work" style={{ color: iconColor }}>
//         <div className="absolute bottom-5 left-2 z-20">
//           <a href="https://github.com/ELBOUHEMIAmal" target="_blank" rel="noopener noreferrer">
//                   <FaGithub size={35} className="pb-2 icon" />
//                 </a>
//                        <a href="https://www.linkedin.com/in/amal-elbouhemi-5200a0228/" target="_blank" rel="noopener noreferrer">
//                   <IoLogoLinkedin size={35} className="pb-2 icon" />
//                 </a>
//                      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=amalelbouhemi4@gmail.com" target="_blank" rel="noopener noreferrer">
//             <MdEmail size={35} className="pb-2 icon" />
//           </a>
//           <div className="w-[2px] h-30 bg-current mt-2 ml-[17px]"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;
import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { useLocation } from "react-router-dom";
import skillsVideo from "../assets/videos/skillsVideo.mp4";
import icons from "../constant/icons";

const Skills = () => {
    const location = useLocation();
    let iconColor = location.pathname === "/skills" ? "#C0C0C2" : "black";

    return (
        <div className="relative w-full h-screen">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                autoPlay
                loop
                muted
            >
                <source src={skillsVideo} type="video/mp4" />
            </video>
            
            <div className="z-30 w-full relative flex justify-center pt-[110px] md:pt-[100px] px-4">
                <div className="w-full md:w-[70vw] flex flex-wrap gap-3 md:gap-6 justify-center items-center">
                    <div className="iconsSkills flex flex-col items-center p-2 md:p-4">
                        <icons.FaHtml5 className="text-4xl md:text-6xl text-[#E34F26] mb-2" />
                        <h1 className="font-mono text-sm md:text-2xl font-semibold">HTML</h1>
                    </div>
                    <div className="iconsSkills flex flex-col items-center p-2 md:p-4">
                        <icons.FaCss3 className="text-4xl md:text-6xl text-[#1572B6] mb-2" />
                        <h1 className="font-mono text-sm md:text-2xl font-semibold">CSS</h1>
                    </div>
                    <div className="iconsSkills flex flex-col items-center p-2 md:p-4">
                        <icons.BsFiletypeScss className="text-4xl md:text-6xl text-[#CF649A] mb-2" />
                        <h1 className="font-mono text-sm md:text-2xl font-semibold">SCSS</h1>
                    </div>
                    <div className="iconsSkills flex flex-col items-center p-2 md:p-4">
                        <icons.FaBootstrap className="text-4xl md:text-6xl text-[#7952B3] mb-2" />
                        <h1 className="font-mono text-sm md:text-2xl font-semibold">BOOTSTRAP</h1>
                    </div>
                    <div className="iconsSkills flex flex-col items-center p-2 md:p-4">
                        <icons.FaGitAlt className="text-4xl md:text-6xl text-[#F05032] mb-2" />
                        <h1 className="font-mono text-sm md:text-2xl font-semibold">GIT</h1>
                    </div>
                    <div className="iconsSkills flex flex-col items-center p-2 md:p-4">
                        <icons.FaGithub className="text-4xl md:text-6xl text-[#ffffff] mb-2" />
                        <h1 className="font-mono text-sm md:text-2xl font-semibold">GitHub</h1>
                    </div>
                    <div className="iconsSkills flex flex-col items-center p-2 md:p-4">
                        <icons.FaJs className="text-4xl md:text-6xl text-[#F7DF1E] mb-2" />
                        <h1 className="font-mono text-sm md:text-2xl font-semibold">JavaScript</h1>
                    </div>
                    <div className="iconsSkills flex flex-col items-center p-2 md:p-4">
                        <icons.FaReact className="text-4xl md:text-6xl text-[#61DAFB] mb-2" />
                        <h1 className="font-mono text-sm md:text-2xl font-semibold">REACT</h1>
                    </div>
                    <div className="iconsSkills flex flex-col items-center p-2 md:p-4">
                        <icons.FaSass className="text-4xl md:text-6xl text-[#CC6699] mb-2" />
                        <h1 className="font-mono text-sm md:text-2xl font-semibold">SASS</h1>
                    </div>
                    <div className="iconsSkills flex flex-col items-center p-2 md:p-4">
                        <icons.RiTailwindCssFill className="text-4xl md:text-6xl text-[#06B6D4] mb-2" />
                        <h1 className="font-mono text-sm md:text-2xl font-semibold">TAILWIND</h1>
                    </div>
                    <div className="iconsSkills flex flex-col items-center p-2 md:p-4">
                        <icons.SiGnubash className="text-4xl md:text-6xl text-[#bcc3c9] mb-2" />
                        <h1 className="font-mono text-sm md:text-2xl font-semibold">BASH</h1>
                    </div>
                </div>
            </div>
            
            <div className="z-10 absolute bottom-[40px] right-4 md:right-0">
                <h1 className="title text-2xl md:text-4xl">SKILLS</h1>
            </div>

            <div className="contactIcons work" style={{ color: iconColor }}>
                <div className="absolute bottom-5 left-2 z-20">
                    <a href="https://github.com/ELBOUHEMIAmal" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={window.innerWidth < 768 ? 28 : 35} className="pb-2 icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/amal-elbouhemi-5200a0228/" target="_blank" rel="noopener noreferrer">
                        <IoLogoLinkedin size={window.innerWidth < 768 ? 28 : 35} className="pb-2 icon" />
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=amalelbouhemi4@gmail.com" target="_blank" rel="noopener noreferrer">
                        <MdEmail size={window.innerWidth < 768 ? 28 : 35} className="pb-2 icon" />
                    </a>
                    <div className="w-[2px] h-30 bg-current mt-2 ml-[17px]"></div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
