import React from "react";
import Flipflop from "./Flipflop";
import data from "../assests/data";

const Skills = () => {
  return (
    <div className="skils h-auto w-full bg-[rgb(30,30,30)] pt-20 pl-20 pr-20">
      <h1 className="text-center text-4xl md:text-5xl mb-10 text-white">
        My Skills
      </h1>
      <p className="mt-2 md:text-lg mb-3 text-white text-sm ">
        As a frontend developer, I specialize in creating visually stunning and
        highly interactive web applications. My expertise lies in leveraging
        modern web technologies such as HTML5, CSS3, and JavaScript to build
        responsive and user-friendly interfaces. I am proficient in using
        frameworks and libraries like React,Bootstrap to enhance the
        functionality and performance of web applications.
      </p>
      <div className="sub-cont  h-auto mt-[4vh] w-full flex items-center flex-col justify-left p-7">
        {/* <Flipflop title={data[0].title} desc={data[0].desc} />
        <Flipflop title={data[1].title} desc={data[1].desc} />
        <Flipflop title={data[2].title} desc={data[2].desc} />
        <Flipflop title={data[3].title} desc={data[3].desc} />
        <Flipflop title={data[4].title} desc={data[4].desc} />
        <Flipflop title={data[5].title} desc={data[5].desc} />
        <Flipflop title={data[6].title} desc={data[6].desc} />
        <Flipflop title={data[7].title} desc={data[7].desc} />
        <Flipflop title={data[8].title} desc={data[8].desc} /> */}
        {data.map((item,i)=>{
          return(
            <Flipflop key={i} title={item.title} desc={item.desc} />
          )
        })}


      </div>
    </div>
  );
};

export default Skills;
