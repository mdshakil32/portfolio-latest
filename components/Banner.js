"use client";

import { useEffect, useState } from "react";
import waving from "../public/assets/waving.png";
import GithubSVG from "./SVG/GithubSVG";
import LinkedinSVG from "./SVG/LinkedinSVG";
import Link from "next/link";
import { Fredoka } from "@next/font/google";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Banner = () => {
  return (
    <div id="home" className="sm:pt-20 pt-16 min-h-screen flex items-center">
      <div className="container mx-auto lg:grid grid-cols-2 items-center ">
        <div className="order-2 ">
          <div className="profile_img order-1 mx-auto"></div>
        </div>

        <div className="order-1">
          <h1
            className={`${fredoka.className} md:text-6xl text-2xl font-semibold text-[#2d2e32] mt-2`}
          >
            Frontend Engineer
          </h1>
          <div className="flex items-center space-x-4 mt-2">
            <h1
              className={`${fredoka.className} md:text-6xl text-2xl font-semibold text-[#2d2e32]`}
            >
              React-Vue
            </h1>
            <img className="md:w-[80px] w-[50px]" src={waving.src}></img>
          </div>

          <h1 className=" md:text-[20px] text-base mulish-font text-[#555] leading-relaxed my-4">
            Hi, I'm Md Shakil Chowdhury. A passionate Frontend Engineer (React
            and Vue) based in Dhaka, Bangladesh. 📍
          </h1>

          <Link
            href="https://drive.google.com/file/d/1py8WUvftNmlFW7XDORNfs9Ng5cc3LbXM/view?pli=1"
            target="_blank"
          >
            <button className=" bg-sky-400 border-2 border-sky-400 hover:bg-white hover:text-sky-400 text-white p-2 rounded shadow hover:shadow-xl duration-200">
              Open Resume
            </button>
          </Link>
          <div className="flex items-center space-x-2 mt-4">
            <Link
              href="https://www.linkedin.com/in/mdshakil32/"
              target="_blank"
            >
              <LinkedinSVG />
            </Link>
            <Link href="https://github.com/mdshakil32" target="_blank">
              <GithubSVG />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
