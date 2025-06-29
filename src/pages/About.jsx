// import React from "react";
// import { FaGithub } from "react-icons/fa";
// import { IoLogoLinkedin } from "react-icons/io5";
// import { MdEmail } from "react-icons/md";
// import { useLocation } from "react-router-dom";
// import { Images } from "../constant";


// const Contact = () => {
//   const location = useLocation();

//   // default color
//   let iconColor = "black";

//   // define color per page
//   switch (location.pathname) {
//     case "/about":
//       iconColor = "#C0C0C2"; // about
//       break;

//     default:
//       iconColor = "black";
//   }

//   return (
//     <>
//       <div
//         className=" relative  contactIcons about"
//         style={{ color: iconColor }}
//       >
//         <div className="pt-[80px] relative flex gap-[35vw]">
//           <h1 className="pl-[10px] title"> ABOUT</h1>
//           <div className="border-2 border-[#C0C0C2] w-[50vw] absolute top-[30vh] px-[2vw] py-[15px]  ml-[15vw] text-2xl descAbout leading-relaxed font-semibold font-mono">
//             <p  className="">I’m a passionate front-end developer based in Morocco. I love crafting clean, simple, and beautiful websites with smooth user experiences.

// I enjoy exploring the entire frontend stack, experimenting with new tools, and bringing ideas to life through my projects. I’m also a freelancer and a lifelong learner who loves sharing knowledge and reading inspiring books.

// I believe that every line of code is a form of art when you write it with intention and creativity. Feel free to connect with me through my social links below.</p>
//           </div>
//           <div className="pt-[15vh]">

//             <img src={Images.aboutImg} alt="" />
//           </div>
//         </div>
//         <div className=" absolute bottom-5 left-2">
//           <a href="https://github.com/ELBOUHEMIAmal" target="_blank" rel="noopener noreferrer">
//                   <FaGithub size={35} className="pb-2 icon" />
//                 </a>
//                        <a href="https://www.linkedin.com/in/amal-elbouhemi-5200a0228/" target="_blank" rel="noopener noreferrer">
//                   <IoLogoLinkedin size={35} className="pb-2 icon" />
//                 </a>
//                      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=amalelbouhemi4@gmail.com" target="_blank" rel="noopener noreferrer">
//             <MdEmail size={35} className="pb-2 icon" />
//           </a>
//                     <div className="w-[2px] h-30 bg-current mt-2 ml-[17px]"></div>

//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;


import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { Images } from "../constant";

const About = () => {
    const location = useLocation();
    let iconColor = location.pathname === "/about" ? "#C0C0C2" : "black";

    return (
        <>
            <div className="relative contactIcons about" style={{ color: iconColor }}>
                {/* Desktop Layout */}
                <div className="hidden md:block">
                    <div className="pt-[80px] relative flex gap-[35vw]">
                        <h1 className="pl-[10px] title">ABOUT</h1>
                        <div className="border-2 border-[#C0C0C2] w-[50vw] absolute top-[30vh] px-[2vw] py-[15px] ml-[15vw] text-2xl descAbout leading-relaxed font-semibold font-mono">
                            <p>I'm a passionate front-end developer based in Morocco. I love crafting clean, simple, and beautiful websites with smooth user experiences.

I enjoy exploring the entire frontend stack, experimenting with new tools, and bringing ideas to life through my projects. I'm also a freelancer and a lifelong learner who loves sharing knowledge and reading inspiring books.

I believe that every line of code is a form of art when you write it with intention and creativity. Feel free to connect with me through my social links below.</p>
                        </div>
                        <div className="pt-[15vh]">
                            <img src={Images.aboutImg} alt="" />
                        </div>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden px-4 py-8">
                    <h1 className="pl-[10px] text-xl title">ABOUT</h1>
                    <div className="flex flex-col items-center space-y-6">
                        <div className="border-2 border-[#C0C0C2] w-full p-4 text-sm leading-relaxed font-semibold font-mono">
                            <p>I'm a passionate front-end developer based in Morocco. I love crafting clean, simple, and beautiful websites with smooth user experiences.

I enjoy exploring the entire frontend stack, experimenting with new tools, and bringing ideas to life through my projects. I'm also a freelancer and a lifelong learner who loves sharing knowledge and reading inspiring books.

I believe that every line of code is a form of art when you write it with intention and creativity. Feel free to connect with me through my social links below.</p>
                        </div>
                        <div className="w-full max-w-sm flex justify-center">
                            <img src={Images.aboutImg} alt="" className="w-[150px] h-[150px] rounded-lg " />
                        </div>
                    </div>
                </div>

                {/* Social Links */}
                <div className="absolute bottom-5 left-2 md:left-2">
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
        </>
    );
};

export default About;
