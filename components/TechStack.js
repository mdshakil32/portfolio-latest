import React from "react";
import bootstrap from "../public/assets/bootstrap.png";
import css from "../public/assets/css.png";
import html from "../public/assets/html-5.png";
import jquery from "../public/assets/jquery.png";
import js from "../public/assets/js.png";
import mongo from "../public/assets/mongo.png";
import mui from "../public/assets/mui.png";
import next from "../public/assets/next.jpg";
import node from "../public/assets/node.png";
import nuxtIcon from "../public/assets/nuxtIcon.png";
import react from "../public/assets/react.png";
import mobile from "../public/assets/mobile.png";
import tailwind from "../public/assets/tailwind.jpg";
import vuexIcon from "../public/assets/vuex.png";
import redux from "../public/assets/redux.png";
import pinia from "../public/assets/pinia.jpg";
import vue from "../public/assets/vue.png";

import { Fredoka } from "@next/font/google";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const TechStack = () => {
  return (
    <div
      id="tech-stack"
      className="py-20 min-h-screen flex items-center justify-center"
    >
      <div className="container">
        <h1
          className={`${fredoka.className} text-center text-4xl font-semibold`}
        >
          Tech Stack
        </h1>
        <p className="text-center pt-2">⭐</p>
        <p className={`${fredoka.className} text-center pt-10`}>
          As a skilled frontend developer, my technology stack encompasses a
          powerful set of tools and frameworks tailored to crafting captivating
          user experiences and responsive interfaces. My proficiency lies in a
          combination of fundamental web technologies and modern libraries that
          enable me to bring designs to life seamlessly.
        </p>
        <div className="flex flex-wrap items-center justify-center pt-10 ">
          <div className="flex flex-col items-center justify center p-1">
            <img
              title="HTML"
              className="w-20 h-20 m-2 shadow hover:shadow-xl p-1 duration-200 rounded-lg"
              src={html.src}
            />
            <p className={fredoka.className}>HTML</p>
          </div>
          <div className="flex flex-col items-center justify center p-1">
            <img
              title="CSS"
              className="w-20 h-20 m-2 shadow hover:shadow-xl p-1 duration-200 rounded-lg"
              src={css.src}
            />
            <p className={fredoka.className}>CSS</p>
          </div>
          <div className="flex flex-col items-center justify center p-1">
            <img
              title="Jquery"
              className="w-20 h-20 m-2 shadow hover:shadow-xl p-1 duration-200 rounded-lg"
              src={jquery.src}
            />
            <p className={fredoka.className}>Jquery</p>
          </div>
          <div className="flex flex-col items-center justify center p-1">
            <img
              title="Js"
              className="w-20 h-20 m-2 shadow hover:shadow-xl p-1 duration-200 rounded-lg"
              src={js.src}
            />
            <p className={fredoka.className}>Javascript</p>
          </div>
          <div className="flex flex-col items-center justify center p-1">
            <img
              title="React Js"
              className="w-20 h-20 m-2 shadow hover:shadow-xl p-1 duration-200 rounded-lg"
              src={react.src}
            />
            <p className={fredoka.className}>React Js</p>
          </div>
          <div className="flex flex-col items-center justify center p-1">
            <img
              title="Next Js"
              className="w-20 h-20 m-2 shadow hover:shadow-xl p-1 duration-200 rounded-lg"
              src={next.src}
            />
            <p className={fredoka.className}>Next Js</p>
          </div>
          <div className="flex flex-col items-center justify center p-1">
            <img
              title="Redux Storage"
              className="w-20 h-20 m-2 shadow hover:shadow-xl p-1 duration-200 rounded-lg"
              src={redux.src}
            />
            <p className={fredoka.className}>Redux</p>
          </div>
          <div className="flex flex-col items-center justify center p-1">
            <img
              title="Vue Js"
              className="w-20 h-20 m-2 shadow hover:shadow-xl p-1 duration-200 rounded-lg"
              src={vue.src}
            />
            <p className={fredoka.className}>Vue Js</p>
          </div>
          <div className="flex flex-col items-center justify center p-1">
            <img
              title="Nuxt Js"
              className="w-20 h-20 m-2 shadow hover:shadow-xl p-1 duration-200 rounded-lg"
              src={nuxtIcon.src}
            />
            <p className={fredoka.className}>Nuxt Js</p>
          </div>
          <div className="flex flex-col items-center justify center p-1">
            <img
              title="Vuex Storage"
              className="w-20 h-20 m-2 shadow hover:shadow-xl p-1 duration-200 rounded-lg"
              src={vuexIcon.src}
            />
            <p className={fredoka.className}>Vuex</p>
          </div>
          <div className="flex flex-col items-center justify center p-1">
            <img
              title="Pinia Storage"
              className="w-20 h-20 m-2 shadow hover:shadow-xl p-1 duration-200 rounded-lg"
              src={pinia.src}
            />
            <p className={fredoka.className}>Pinia</p>
          </div>
          <div className="flex flex-col items-center justify center p-1">
            <img
              title="Mongo"
              className="w-20 h-20 m-2 shadow hover:shadow-xl p-1 duration-200 rounded-lg"
              src={mongo.src}
            />
            <p className={fredoka.className}>Mongo</p>
          </div>
          <div className="flex flex-col items-center justify center p-1">
            <img
              title="Node"
              className="w-20 h-20 m-2 shadow hover:shadow-xl p-1 duration-200 rounded-lg"
              src={node.src}
            />
            <p className={fredoka.className}>Node</p>
          </div>
          <div className="flex flex-col items-center justify center p-1">
            <img
              title="Material UI"
              className="w-20 h-20 m-2 shadow hover:shadow-xl p-1 duration-200 rounded-lg"
              src={mui.src}
            />
            <p className={fredoka.className}>Material UI</p>
          </div>
          <div className="flex flex-col items-center justify center p-1">
            <img
              title="Tailwind"
              className="w-20 h-20 m-2 shadow hover:shadow-xl p-1 duration-200 rounded-lg"
              src={tailwind.src}
            />
            <p className={fredoka.className}>Tailwind</p>
          </div>
          <div className="flex flex-col items-center justify center p-1">
            <img
              title="Bootstrap"
              className="w-20 h-20 m-2 shadow hover:shadow-xl p-1 duration-200 rounded-lg"
              src={bootstrap.src}
            />
            <p className={fredoka.className}>Bootstrap</p>
          </div>
          <div className="flex flex-col items-center justify center p-1">
            <img
              title="Responsive"
              className="w-20 h-20 m-2 shadow hover:shadow-xl p-1 duration-200 rounded-lg"
              src={mobile.src}
            />
            <p className={fredoka.className}>Responsive</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
