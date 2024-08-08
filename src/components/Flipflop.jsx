import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
// import { FaAngleUp } from "react-icons/fa6";
import { FaSortUp } from "react-icons/fa6";
// import data from '../assests/data';
{
  /* <FaAngleUp /> */
}

const Flipflop = (props) => {
  const [toggle, settoggle] = useState(false);
  return (
    <div
      className={` relative lg:h-[8vh] md:h-[6vh] sm:h-[4vh]  sm:w-[15vh] md:w-[30vh] lg:w-full bg-white flex items-center justify-between pl-10 pr-10 rounded-lg mb-5 ${
        toggle ? `mb-[18vh]  ` : `mb-5`
      }`}
    >
      <h1 className="lg:text-2xl md:text-xl sm:text-lg  sm:text-center ">
        {props.title}
      </h1>
      {toggle ? (
        <FaSortUp
          className="lg:text-xl  md:text-lg sm:text-sm text-black hover:cursor-pointer  "
          onClick={() => settoggle(!toggle)}
        />
      ) : (
        <MdArrowDropDown
          className="text-3xl text-black hover:cursor-pointer hidden md:block"
          onClick={() => settoggle(!toggle)}
        />
      )}
      <div
        className={`absolute h-auto flex items-center text-[yellow] rounded-lg mb-[20px] pr-10 pl-6 text-lg bg-[rgb(30,30,30)] w-full top-10 ${
          toggle
            ? `lg:top-[75px] md:top-[60px] md:text-sm lg:text-lg left-0 sm:top-[60px] top-[50px]  text-xs  sm:text-sm`
            : `hidden`
        }`}
      >
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default Flipflop;
