// import React from "react";
// import { FaYinYang } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import Contact from '../components/Contact';
// // import { useEffect } from 'react';





// export default function Home() {
//     const n = useNavigate()
// //     useEffect(() => {
// //     setBgColor(); // bg dyal home
// //   }, []);
    
//   return (
//     <>

//       <motion.div initial={{ opacity: 0, y: 50 }}   // menin kaybdaw
//       animate={{ opacity: 1, y: 0 }}    // fin ghadi ywaslo
//       transition={{ duration: 0.8 }} >
//         <div className="  absolute w-[100vw] h-[100vh] left-0 top-0 flex items-center justify-center">
//           <motion.div
//             // initial={{ rotate: "0deg", scale: 0 }}
//             // animate={{ rotate: "360deg", scale: 1 }}
//             // transition={{ duration: 2, delay: 0.5 }}
//             animate={{ rotate: 360 }}
//             transition={{
//               repeat: Infinity,
//               duration: 5, 
//               ease: "linear",
//             }}
//           >
//             <button onClick={() => n('WhoAmI/')}>
//                 <FaYinYang size={200} className="yinyang cursor-pointer relative" />
//             </button>
//           </motion.div>
//           <h1 className="hi text-[20px] cursor-pointer absolute bottom-[30%] font-mono">Who Am I ?</h1>
//         </div>
//         <div >
//           <Link to={"/works"}>
//             <h1 className="hi text-[20px] cursor-pointer rotate-270 absolute top-[50%] left-0 font-mono">
//               Works
//             </h1>
//           </Link>
//           <Contact />
//           <Link to={"/about"}>
//             <h1 className="hi text-[20px] cursor-pointer rotate-90 absolute top-[50%] right-0 font-mono">
//               About Me
//             </h1>
//           </Link>
//           <Link to={"/skills"}>
//             <h1 className="hi text-[20px] cursor-pointer absolute right-[50%] bottom-0 font-mono">
//               Skills
//             </h1>
//           </Link>
//         </div>
//       </motion.div>
//     </>
//   );
// }




import React from "react";
import { FaYinYang } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Contact from '../components/Contact';

export default function Home() {
    const n = useNavigate();
    
    return (
        <>
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="absolute w-full h-screen left-0 top-0 flex items-center justify-center">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                            repeat: Infinity,
                            duration: 5,
                            ease: "linear",
                        }}
                    >
                        <button onClick={() => n('WhoAmI/')}>
                            <FaYinYang 
                                size={window.innerWidth < 768 ? 120 : 200} 
                                className="yinyang cursor-pointer relative" 
                            />
                        </button>
                    </motion.div>
                    <h1 className="hi text-base md:text-xl cursor-pointer absolute bottom-[30%] font-mono">
                        Who Am I ?
                    </h1>
                </div>
                
                {/* Desktop Navigation */}
                <div className="hidden md:block">
                    <Link to={"/works"}>
                        <h1 className="hi text-xl cursor-pointer rotate-270 absolute top-[50%] left-0 font-mono">
                            Works
                        </h1>
                    </Link>
                    <Contact />
                    <Link to={"/about"}>
                        <h1 className="hi text-xl cursor-pointer rotate-90 absolute top-[50%] right-0 font-mono">
                            About Me
                        </h1>
                    </Link>
                    <Link to={"/skills"}>
                        <h1 className="hi text-xl cursor-pointer absolute right-[50%] bottom-0 font-mono">
                            Skills
                        </h1>
                    </Link>
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden">
                    <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-4">
                        <Link to={"/works"}>
                            <h1 className="hi text-lg cursor-pointer font-mono hover:scale-110 transition-transform">
                                Works
                            </h1>
                        </Link>
                        <Link to={"/about"}>
                            <h1 className="hi text-lg cursor-pointer font-mono hover:scale-110 transition-transform">
                                About Me
                            </h1>
                        </Link>
                        <Link to={"/skills"}>
                            <h1 className="hi text-lg cursor-pointer font-mono hover:scale-110 transition-transform">
                                Skills
                            </h1>
                        </Link>
                    </div>
                    <Contact />
                </div>
            </motion.div>
        </>
    );
}