import React, { useRef } from "react";
// import insta from "../assests/insta.png"
import instagram from "../assests/instagram.png";
// import linkedin from "../assests/linkedin.png"
import email from "../assests/email.webp";
import linkedin from "../assests/linkedin.webp";
const Contact = () => {
  const send = () => {
    var input = document.getElementsByTagName("input");
    if (input.value === "") {
      alert("enter details properly");
    } else {
      alert("form submitted");
    }
  };

  return (
    <div className="contact h-auto w-full p-10 flex flex-col items-center ">
      <h1 className="text-center text-4xl md:text-5xl mb-10 text-white">
        Contact Me
      </h1>
      <p className="text-center text-lg mt-2 mb-3 text-white">
        Please Fill out the form below to discuss any work opportunities.
      </p>
      <form className=" flex w-[48%] flex-col gap-[10px] h-auto">
        <input
          type="text"
          placeholder="your name"
          className="w-full  p-2 rounded-lg border-none bg-[rgb(40,40,40)] text-white"
        ></input>
        <input
          type="email"
          placeholder="your Email"
          className="w-full p-2 rounded-lg focus:border-blue-500 border-none bg-[rgb(40,40,40)] text-white"
        ></input>
        <textarea
          className="w-full p-2 h-40 rounded-lg focus:border-blue-500 border-none bg-[rgb(40,40,40)] text-white"
          placeholder="your message"
        ></textarea>
        <button
          className="text-center md:mt-[10vh] mt-[4vh] bg-white p-3 text-lg rounded-lg w-[140px] md:ml-[17vw] ml-[4vw]"
          type="submit"
          value="Send"
          onClick={send}
        >
          Submit
        </button>
      </form>

      <div className=" hidden md:h-auto md:w-full md:mt-3 mt-2 md:flex md:gap-[10px] justify-center items-center">
        <p className="text-white md:text-xl text-lg capitalize">
          for futher details contact me on :
        </p>
        <a
          className="cursor-pointer"
          href="https://www.instagram.com/sharma__2101_/"
          target="_blank"
        >
          <img
            src={instagram}
            alt="insta"
            className="md:h-[40px] h-[20px] md:w-[40px] w-[20px]"
          ></img>
        </a>
        <a
          className="cursor-pointer"
          href="https://www.linkedin.com/in/rahul-sharma-a10b2b239/"
          target="_blank"
        >
          <img
            src={linkedin}
            alt="linkedin"
            className="md:h-[40px] h-[20px] md:w-[40px] w-[20px]"
          ></img>
        </a>
        <a
          className="cursor-pointer"
          href="mailto:rahulasharma2101@gmail.com"
          target="_blank"
        >
          <img
            src={email}
            alt="email"
            className="md:h-[40px] h-[20px] md:w-[40px] w-[20px]"
          ></img>
        </a>
      </div>
    </div>
  );
};

export default Contact;
