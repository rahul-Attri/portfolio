import React, { useState } from "react";
import { Link } from "react-scroll";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import logo from "../assests/logo.png";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);

  return (
    <div className="h-[10vh] w-[100%]  fixed top-0  flex items-center justify-between text-white z-10 p-10 backdrop-blur-lg font-thin ">
      <div className="logo bg-transparent ">
        {/* <h1 className="text-2xl cursor-pointer md:text-lg lg:text-xl">logo</h1> */}
        <img src={logo} className="h-[40px] w-[40px] rounded-2xl"></img>
      </div>

      <div className="links  p-3 hidden md:block bg-transparent">
        <Link
          activeClass="active"
          to="Home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="mx-[15px]  md:text-lg lg:text-xl  hover:text-yellow-300 hover:cursor-pointer bg-transparent"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="About"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="mx-[15px]  md:text-lg lg:text-xl  hover:text-yellow-300 hover:cursor-pointer bg-transparent"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="Skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="mx-[15px]  md:text-lg lg:text-xl  hover:text-yellow-500 hover:cursor-pointer bg-transparent"
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="Project"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="mx-[15px]  md:text-lg lg:text-xl  hover:text-yellow-500 hover:cursor-pointer bg-transparent"
        >
          Project
        </Link>
      </div>

      <div className="contact bg-white opacity-90 text-black  rounded-2xl border-none font-semibold ">
        <button className="p-2 px-3 hidden md:block md:text-lg lg:text-xl">
          <Link
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="mx-[15px]  md:text-lg lg:text-xl  hover:text-yellow-500 hover:cursor-pointer bg-transparent"
          >
            Contact
          </Link>
        </button>
      </div>

      {/* to make responisve */}

      <div
        className={`links p-10 md:hidden text-white h-auto gap-4 text-2xl flex flex-col bg-black bg-tran fixed rounded-2xl opacity-75
                                                                                            ${
                                                                                              toggle
                                                                                                ? `right-[3%]`
                                                                                                : `right-[400%]`
                                                                                            } top-[100%] w-auto`}
      >
        <Link
          className="mx-[15px]  hover:text-yellow-300 hover:cursor-pointer bg-transparent"
          activeClass="active"
          to="Home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Home
        </Link>
        <Link
          className="mx-[15px] hover:text-yellow-300 hover:cursor-pointer bg-transparent"
          activeClass="active"
          to="About"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          About
        </Link>
        <Link
          className="mx-[15px] hover:text-yellow-500 hover:cursor-pointer bg-transparent"
          activeClass="active"
          to="Skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Skills
        </Link>
        <Link
          className="mx-[15px] hover:text-yellow-500 hover:cursor-pointer bg-transparent"
          activeClass="active"
          to="Project"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Project
        </Link>
        <Link
          className="mx-[15px] hover:text-yellow-500 hover:cursor-pointer bg-transparent"
          activeClass="active"
          to="Contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Contact
        </Link>
      </div>

      {toggle ? (
        <IoMdClose
          onClick={() => settoggle(!toggle)}
          className="text-2xl md:hidden block"
        />
      ) : (
        <IoMdMenu
          onClick={() => settoggle(!toggle)}
          className="text-2xl md:hidden block"
        />
      )}
    </div>
  );
};

export default Navbar;
