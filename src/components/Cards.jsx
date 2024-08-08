import React from "react";
import { CiShare1 } from "react-icons/ci";
const Cards = (props) => {
  const show = () => {
    alert("link is in under process!");
  };
  return (
    <div className="card border-white border-2 xl:h-[50vh] h-[40vh] xl:w-[25%] w-[100%] p-10 rounded-2xl ml-[10px] mr-[10px] mt-[30px] flex justify-center items-center flex-col  text-[yellow] ">
      <h1 className="sm:text-3xl md:text-2xl lg:text-2xl 2xl:text-xl capitalize">
        {props.name} <br /> <span className="text-lg">{props.desc}</span>
      </h1>
      <CiShare1
        className="text-3xl mt-[20px] font-bolder cursor-pointer text-white"
        onClick={show}
      />
    </div>
  );
};

export default Cards;
