import React from "react";
import Cards from "./Cards";
const Project = () => {
  return (
    <div className="project w-full h-auto p-10">
      <h1 className="text-center text-4xl md:text-5xl mb-10 text-white">
        My Projects
      </h1>
      <p className="mt-2 text-lg mb-3 text-white capitalize ">
        I take pride in paying attention to the smallest details and making sure
        that work is pixel perfect.i am excited to bring my skills and
        experience to help businesses to achieve their goals and create a strong
        online presence
      </p>
      <div className="works w-full h-auto  mt-4 p-10 flex md:flex-row flex-col flex-wrap justify-between">
        <Cards name={"Crework"} desc={"(An E-Learning Website)"} />
        <Cards name={"todo list"} desc={"(A daily task holder)"} />
        <Cards name={"VILLA "} desc={"(A RealEstate Website)"} />
        <Cards name={"portfolio"} desc={"(My Own Portfolio)"} />
      </div>
    </div>
  );
};

export default Project;
