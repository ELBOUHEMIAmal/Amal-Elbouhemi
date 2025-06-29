import React from "react";
import Work from "./Works";
import { Images } from "../constant";
// import { useEffect } from 'react';

const WhoAmI = ( ) => {
//      useEffect(() => {
//     setBgColor('linear-gradient(  90deg,  rgba(192, 192, 194, 1) 50%,  rgba(215, 215, 216, 1) 75%, rgba(219, 219, 219, 1) 100%, rgba(67, 25, 30, 1) 50%, rgba(99, 35, 41, 1) 25%, rgba(131, 61, 69, 1) 50%,');
//   }, []);
  return (
    <>
      <div className="flex w-[100%] h-[100vh] justify-center 
 items-center " >
        <div className=" w-[50%] h-[100%] flex flex-col gap-2  items-end justify-center bgDesc">
          <div className="border-3 border-r-0  w-[32vw] h-[41vh]  flex flex-col gap-2 justify-center pl-4 text-[#C0C0C2]">
            <h1 className="text-5xl uppercase font-bold font-mono">
              I'm Amal Elbouhemi.
            </h1>
            <h1 className="text-3xl font-mono">I'm a Developer.</h1>
            <p className="text-2xl font-mono">Designing with heart, coding with care.</p>
          </div>
        </div>

        <div className="  w-[50%] h-[100%] flex items-center   ">
          <div className="border-3 border-l-0 w-[32vw] border-[#541f24] h-[41vh] flex justify-center">
            <img
              src={Images.profile}
              alt=""
              className="w-70 h-70 object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoAmI;
