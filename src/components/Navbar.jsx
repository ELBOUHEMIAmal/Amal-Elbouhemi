import React from "react";
import myLogo from "../assets/images/myLogo.png";
import { FaPowerOff } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Navbar({ c }) {
        const n = useNavigate()
    
  return (
    <nav className="z-50 absolute bg-amber-600/0 w-full"  >
      <div className="flex justify-between px-[20px] pt-2">
        <div className="">
          <img src={myLogo} className="h-[42px] w-auto" alt="My Logo" />
        </div>
        <div className="">
          <button onClick={() => n('/')} className="bg-[#C0C0C2] rounded-[50%]">
           
            <FaPowerOff
              size={25}
              className="border-2 rounded-[50%] w-[30px] h-[30px] p-[5px] turnOffIcon cursor-pointer"
            />
          </button>
        </div>
        <div className="">
          <Link to={"/emailForm"}>
          <h1 className=" hi text-[20px] cursor-pointer font-mono" style={{ color: c }}>Say Hi...</h1>
          </Link>
        </div>
      </div>
    </nav>
  );
}
