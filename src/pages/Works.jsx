// import React from "react";
// import { FaGithub } from "react-icons/fa";
// import { IoLogoLinkedin } from "react-icons/io5";
// import { MdEmail } from "react-icons/md";
// import { useLocation } from "react-router-dom";
// import videoWorks from "../assets/videos/workVideo.mp4";
// import data from "../json/data.json";
// import images from "../constant/images";
// import icons from '../constant/icons';
// import { motion } from "framer-motion";



// const Works = () => {
//   const location = useLocation();

//   // default color
//   let iconColor = "black";

//   switch (location.pathname) {
//     case "/works":
//       iconColor = "#C0C0C2";
//       break;
//     default:
//       iconColor = "black";
//   }

//   return (
//     <>
//       <motion.div className="relative w-full h-screen">
//         <video
//           className="absolute top-0 left-0 w-full h-full object-cover z-0"
//           autoPlay
//           loop
//           muted
//         >
//           <source src={videoWorks} type="video/mp4" />
//         </video>

//         {/* Projects Section - Above title */}
//         <div className="w-full relative z-10 flex justify-center pt-[80px]">
//           <div className="overflow-y-scroll h-[calc(100vh-200px)] w-full flex items-start hide-scrollbar pl-[5vw]">
//             <div className="flex overflow-x-auto snap-x snap-mandatory space-x-6 scrollbar-hide">
//               {data.map((d, index) => (
//                 <motion.div
//                   key={index}
//                   whileHover={{ 
//                 scale: 1,
//                 rotateY: 8,
//                 rotateX: 5,
//                 z: 50,
                
//                 transition: { 
//                   type: "spring", 
//                   stiffness: 200, 
//                   damping: 10 
//                 }
//               }}
//               whileTap={{ scale: 0.95 }}
//               style={{
//                 transformStyle: "preserve-3d",
//                 perspective: "1000px"
//               }}
//                   className="snap-start flex-shrink-0 w-[400px] divWork rounded-lg p-4 shadow-md"
//                 >
//                   <img
//                     src={images[d.image]}
//                     alt={d.name}
//                     className="w-full h-40 object-cover roundedImg"
//                   />
//                   <div className="flex items-center justify-between pt-3">
//                     <h2 className="font-bold text-lg mb-2 font-mono uppercase pt-2">{d.name}</h2>
//                     <div className="flex space-x-2 mb-2">
//                       {d.icons && d.icons.map((iconData, iconIndex) => {
//                         const IconComponent = icons[iconData.name];
//                         return IconComponent ? (
//                           <IconComponent 
//                             key={iconIndex} 
//                             size={24} 
//                             style={{ color: iconData.color }}
//                           />
//                         ) : null;
//                       })}
//                     </div>
//                   </div>
//                   <p className="mt-2 text-[#C0C0C2] font-mono">{d.description}</p>
//                   <button className="mt-4 px-4 py-2 bg-black text-[#C0C0C2] rounded font-mono">
//                     Visit
//                   </button>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className=" z-10 absolute bottom-[40px] right-0">
//           <h1 className="pl-[10px] title">WORKS</h1>
//         </div>

//         <div className="contactIcons work" style={{ color: iconColor }}>
//           <div className="absolute bottom-5 left-2 z-20">
//             <a href="https://github.com/ELBOUHEMIAmal" target="_blank" rel="noopener noreferrer">
//                     <FaGithub size={35} className="pb-2 icon" />
//                   </a>
//                          <a href="https://www.linkedin.com/in/amal-elbouhemi-5200a0228/" target="_blank" rel="noopener noreferrer">
//                     <IoLogoLinkedin size={35} className="pb-2 icon" />
//                   </a>
//                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=amalelbouhemi4@gmail.com" target="_blank" rel="noopener noreferrer">
//               <MdEmail size={35} className="pb-2 icon" />
//             </a>
//             <div className="w-[2px] h-30 bg-current mt-2 ml-[17px]"></div>
//           </div>
//         </div>
//       </motion.div>
//     </>
//   );
// };

// export default Works;



import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { useLocation } from "react-router-dom";
import videoWorks from "../assets/videos/workVideo.mp4";
import data from "../json/data.json";
import images from "../constant/images";
import icons from '../constant/icons';
import { motion } from "framer-motion";

const Works = () => {
    const location = useLocation();
    let iconColor = location.pathname === "/works" ? "#C0C0C2" : "black";

    return (
        <>
            <motion.div className="relative w-full h-screen">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    autoPlay
                    loop
                    muted
                >
                    <source src={videoWorks} type="video/mp4" />
                </video>

                {/* Desktop Projects Layout */}
                <div className="hidden md:block w-full relative z-10 flex justify-center pt-[80px]">
                    <div className="overflow-y-scroll h-[calc(100vh-200px)] w-full flex items-start hide-scrollbar pl-[5vw]">
                        <div className="flex overflow-x-auto snap-x snap-mandatory space-x-6 scrollbar-hide">
                            {data.map((d, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{
                                        scale: 1,
                                        rotateY: 8,
                                        rotateX: 5,
                                        z: 50,
                                        transition: {
                                            type: "spring",
                                            stiffness: 200,
                                            damping: 10
                                        }
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        transformStyle: "preserve-3d",
                                        perspective: "1000px"
                                    }}
                                    className="snap-start flex-shrink-0 w-[400px] divWork rounded-lg p-4 shadow-md"
                                >
                                    <img
                                        src={images[d.image]}
                                        alt={d.name}
                                        className="w-full h-40 object-cover roundedImg"
                                    />
                                    <div className="flex items-center justify-between pt-3">
                                        <h2 className="font-bold text-lg mb-2 font-mono uppercase pt-2">{d.name}</h2>
                                        <div className="flex space-x-2 mb-2">
                                            {d.icons && d.icons.map((iconData, iconIndex) => {
                                                const IconComponent = icons[iconData.name];
                                                return IconComponent ? (
                                                    <IconComponent
                                                        key={iconIndex}
                                                        size={24}
                                                        style={{ color: iconData.color }}
                                                    />
                                                ) : null;
                                            })}
                                        </div>
                                    </div>
                                    <p className="mt-2 text-[#C0C0C2] font-mono">{d.description}</p>
                                    <button className="mt-4 px-4 py-2 bg-black text-[#C0C0C2] rounded font-mono">
                                        Visit
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile Projects Layout */}
                <div className="md:hidden w-full relative z-10 pt-16 px-4">
                    <div className="overflow-y-auto h-[calc(100vh-160px)] space-y-4">
                        {data.map((d, index) => (
                            <motion.div
                                key={index}
                                whileTap={{ scale: 0.95 }}
                                className="divWork rounded-lg p-4 shadow-md bg-black/30 backdrop-blur-sm"
                            >
                                <img
                                    src={images[d.image]}
                                    alt={d.name}
                                    className="w-full h-32 object-cover rounded-lg mb-3"
                                />
                                <div className="flex items-start justify-between mb-2">
                                    <h2 className="font-bold text-lg font-mono uppercase text-white">{d.name}</h2>
                                    <div className="flex space-x-2">
                                        {d.icons && d.icons.map((iconData, iconIndex) => {
                                            const IconComponent = icons[iconData.name];
                                            return IconComponent ? (
                                                <IconComponent
                                                    key={iconIndex}
                                                    size={20}
                                                    style={{ color: iconData.color }}
                                                />
                                            ) : null;
                                        })}
                                    </div>
                                </div>
                                <p className="text-[#C0C0C2] font-mono text-sm mb-3">{d.description}</p>
                                <button className="w-full px-4 py-2 bg-black text-[#C0C0C2] rounded font-mono">
                                    Visit
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="z-10 absolute bottom-[40px] right-4 md:right-0">
                    <h1 className="title text-2xl md:text-4xl">WORKS</h1>
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
            </motion.div>
        </>
    );
};

export default Works;