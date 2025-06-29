import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { useLocation } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";


const EmailForm = () => {

const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
     e.preventDefault();
    //* get the serviceId, templateId, publickey from your EmailJs  account
    const serviceId = "service_9ij51vf";
    const templateId = "template_q3hdsb7";
    const publikKey = "v4v10O3dgoFHqNSUD";

    //* creare Template Params Object
    const tempalteParams = {
        form_name: name,
        form_email: email,
        to_name: 'Amal Elbouhemi',
        message: message
    }

    //* Send Email Via email js
    emailjs.send(serviceId, templateId,tempalteParams, publikKey)
        .then((response) => {
            console.log("Email Sent Successfully", response);
            setName('')
            setEmail('')
            setMessage('')   
        }).catch((error) => {
            console.log("Error Sending Email", error);
        })
  };

   const location = useLocation();
  
      // default color
      let iconColor = 'black';
  
      // define color per page
      switch(location.pathname){
        
          case '/sayHi':
              iconColor = 'black'; // sayHi example
              break;
         
          default:
              iconColor = 'black';
}
  return (
  <>

   <motion.div className='flex justify-center items-center pt-[60px]'>
     <div className=" w-200 h-150 sayHi flex justify-center items-center flex-col">
      <form className='flex flex-col gap-10 p-5' onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Your Name" className='font-mono inputContact' value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="text" placeholder="Enter Your Email" className='font-mono inputContact' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <textarea name="" id="" placeholder="Message" className='font-mono inputContact h-55' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
      <button className="buttonContact " type='submit'>Send</button>
      </form>
    </div>
   </motion.div>
   <div className=" relative  contactIcons " style={{ color: iconColor }}>
              <div className=" w-fit absolute bottom-[5px] left-4  contactIcons " >
                           
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

              </div>
           </div>
  </>
  );
};

export default EmailForm;
