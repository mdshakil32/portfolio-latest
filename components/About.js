import React from "react";
import { Fredoka } from "@next/font/google";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const About = () => {
  return (
    <div id="about" className="bg-[#f9f9f9] py-20">
      <div className="container">
        <h1
          className={`${fredoka.className} text-center text-4xl font-semibold`}
        >
          About Me
        </h1>

        <p className="text-center pt-2">⭐</p>
        <p className={`${fredoka.className} text-center pt-10`}>
          Graduate of computer science with full time work experience across the
          frontend web development. Looking for a role where I can grow and
          learn from experienced team members while drawing on project
          experience I have already successfully executed. My new ideas show me,
          how to be professional and to much originative. Proper activity in a
          work is important. That's why I always try to give more attention to
          my work.
        </p>

        <div className="md:grid grid-cols-2 pt-10">
          <div className=" ">
            <h1 className={`${fredoka.className} text-2xl font-semibold pt-10`}>
              Education 📒
            </h1>

            <div className="mt-10 border-l-4 border-yellow-400 pl-2">
              <h1 className="text-lg font-semibold mulish-font text-[#555] ">
                Bachelor's Degree
              </h1>
              <p className="mulish-font text-[#555]">Year: 2021</p>
              <p className="mulish-font text-[#555]">Department: CSE</p>
            </div>
            <div className="mt-10 border-l-4 border-yellow-400 pl-2">
              <h1 className="text-lg font-semibold mulish-font text-[#555] ">
                Higher Secondary School Certificate
              </h1>
              <p className="mulish-font text-[#555]">Year: 2016</p>
              <p className="mulish-font text-[#555]">Section: Science</p>
            </div>
            <div className="mt-10 border-l-4 border-yellow-400 pl-2">
              <h1 className="text-lg font-semibold mulish-font text-[#555] ">
                Secondary School Certificate
              </h1>
              <p className="mulish-font text-[#555]">Year: 2014</p>
              <p className="mulish-font text-[#555]">Section: Science</p>
            </div>
          </div>
          <div className=" ">
            <h1 className={`${fredoka.className} text-2xl font-semibold pt-10`}>
              Experience 💻
            </h1>

            <div className="mt-10 border-l-4 border-sky-400 pl-2">
              <h1 className="text-lg font-semibold mulish-font text-[#555] ">
                Singularity Limited
              </h1>
              <p className="mulish-font text-[#555]">
                Position : Jr Frontend Developer
              </p>
              <p className="mulish-font text-[#555]">
                Duration : 03 April 2022 - present
              </p>
              <p className="mulish-font text-[#555]">
                Technology : React Js | Vue Js
              </p>
            </div>

            <div className="mt-10 border-l-4 border-sky-400 pl-2">
              <h1 className="text-lg font-semibold mulish-font text-[#555] ">
                Shodaimama
              </h1>
              <p className="mulish-font text-[#555]">
                Position : Frontend Developer Intern
              </p>
              <p className="mulish-font text-[#555]">
                Duration : 05 January 2022 - 31 March 2022
              </p>
              <p className="mulish-font text-[#555]">Technology : React Js</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
