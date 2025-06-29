import React from 'react';
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.div 
        initial={{ opacity: 0, x: 100 }}  // menin kaybdaw
      animate={{ opacity: 1, x: 0 }}    // f waqt l display
      exit={{ opacity: 0, x: -100 }}    // menin katsali
      transition={{ duration: 0.5 }}    // duration smooth
        className=" w-fit absolute bottom-[5px] left-4  contactIcons " >
             
             <a href="https://github.com/ELBOUHEMIAmal" target="_blank" rel="noopener noreferrer">
        <FaGithub size={35} className="pb-2 icon" />
      </a>
             <a href="https://www.linkedin.com/in/amal-elbouhemi-5200a0228/" target="_blank" rel="noopener noreferrer">
        <IoLogoLinkedin size={35} className="pb-2 icon" />
      </a>
           <a href="https://mail.google.com/mail/?view=cm&fs=1&to=amalelbouhemi4@gmail.com" target="_blank" rel="noopener noreferrer">
  <MdEmail size={35} className="pb-2 icon" />
</a>
                      <div className="w-[2px] h-30 bg-current mt-2 ml-[17px]"></div>

        </motion.div>
    );
};

export default Contact;