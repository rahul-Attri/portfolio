import React from "react";
import Rahul from "../assests/rahul.jpeg";

const Home = () => {
  return (
    <div className="Home md:h-[113vh]  w-full  mt-[13vh] flex md:flex-row flex-col   bg-[rgb(30,30,30)]">
      <div className="left-cont h-[100%] md:w-[60%] w-[80%]  p-10 text-white pt-40  bg-transparent   md:ml-[10%] sm:ml-[13%] mt-[1%] ">
        <p className="md:text-lg font-light text-2xl mb-[10px]">hello,</p>
        <h1 className="text-4xl ">
          I'm <span className="text-[yellow] text-4xl">Rahul</span>
        </h1>
        <h1 className="text-4xl  mt-4">Website Developer</h1>
        <p className="text-lg  font-poppins font-extralight mt-3 bg-transparent">
          Aspiring web developer with strong skills in HTML, CSS, and
          JavaScript, dedicated to building responsive and visually appealing
          websites. Passionate about continuous learning and eager to contribute{" "}
          <br />
          to innovative web projects.
        </p>
        <button className="bg-white text-black rounded-2xl p-3 mt-[10px] font-semibold hover:cursor-pointer">
          Hireme
        </button>
        <button className="bg-white rounded-2xl p-3 mt-[10px] md:ml-[20px] sm:ml-[10px]  hover:cursor-pointer">
          <a href="resume.pdf" download className="text-black font-semibold">
            download resume
          </a>
        </button>
      </div>

      <div className="right-cont h-[100%] md:w-[40%] ml-[20%] w-[60%] md:m-0">
        <img
          src={Rahul}
          className="lg:h-[50%] lg:w-[60%] md:h-[40%] md:w-[80%] m-auto mt-[20vh] rounded-3xl md:block hidden "
        ></img>
      </div>
    </div>
  );
};

export default Home;
