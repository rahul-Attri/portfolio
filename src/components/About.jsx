import React from "react";

const About = () => {
  return (
    <div className="About h-full w-full bg-[rgb(30,30,30)] md:p-20  p-[13px] flex ">
      <div className="sub-cont border-2 border-black rounded-lg w-full p-10 text-white">
        <h1 className="text-center text-3xl md:text-5xl mb-10 capitalize">
          About me
        </h1>
        <p className="mt-2  text-sm md:text-lg mb-3">
          Hi, I'm Rahul, a passionate and dedicated web developer with a knack
          for creating beautiful, user-friendly, and highly functional websites.
          I've honed my skills in front-end development, allowing me to deliver
          comprehensive web solutions that meet diverse client needs.
        </p>
        <h1 className="font-semibold text-xl mt-1 mb-5 text-[yellow] capitalize">
          my journey:
        </h1>
        <p className="mt-2  text-sm md:text-lg mb-3">
          I started my journey in web development out of a love for technology
          and a desire to create impactful digital experiences. I've worked on a
          variety of projects.
        </p>
        <h1 className="font-semibold text-xl mt-1 mb-5 text-[yellow] capitalize">
          My Approach:
        </h1>
        <p className="mt-2  text-sm md:text-lg mb-3">
          I believe in a user-centric approach to web development, ensuring that
          every project I work on is not only technically sound but also
          provides a seamless user experience. I am committed to writing clean,
          efficient, and maintainable code, and I stay up-to-date with the
          latest industry trends and best practices.
        </p>
        <h1 className="font-semibold text-xl mt-1 mb-5 text-[yellow] capitalize">
          Why Work With Me?
        </h1>
        <ul style={{ listStyleType: "disc" }}>
          <li className="ml-7 mt-1">Attention to Detail</li>
          <li className="ml-7 mt-1">Collaboration</li>
          <li className="ml-7 mt-1">Problem-Solving</li>
          <li className="ml-7 mt-1">Continuous Learning</li>
        </ul>

        <h1 className="font-semibold text-xl mt-1 mb-5 text-[yellow] capitalize">
          Let's Connect
        </h1>
        <p className="mt-2  text-sm md:text-lg mb-3">
          I'm always open to new opportunities and collaborations.connect with
          me on LinkedIn, instagram, Email.
        </p>
      </div>
    </div>
  );
};

export default About;
