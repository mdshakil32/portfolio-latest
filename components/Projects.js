import React from "react";
import singularity from "../public/assets/singularity.png";
import bhn from "../public/assets/bhn.png";
import bom from "../public/assets/bom.png";
import tralive from "../public/assets/tralive.png";
import orion from "../public/assets/orion.png";
import Link from "next/link";
const Projects = () => {
  return (
    <div id="projects" className="bg-[#f9f9f9] py-20 min-h-screen">
      <div className="container">
        <h1 className="text-center text-4xl font-bold">Projects </h1>
        <p className="lilita-font text-center pt-2">⭐</p>
        <h1 className=" font-bold lilita-font text-[#2d2e32] text-center ">
          (Each project is a unique piece of development)
        </h1>
        {/* ======== single item  */}
        <div className="mt-20 lg:grid grid-cols-2 items-center shadow-lg p-3 rounded-xl">
          <div class="shadow-xl rounded-lg">
            <div class="screen">
              <img src={singularity.src} className="bottom-[-1500px]" />
            </div>
          </div>

          <div className="p-3 text-center">
            <h1 className="text-lg font-bold lilita-font text-[#2d2e32]">
              Singularity Limited
            </h1>
            <h1 className=" mulish-font text-[#555] font-semibold mt-3">
              This is singularity Ltd's official website which is one of my very
              first professional project. Through this site, an user will get a
              basic overall idea about Singularity Ltd.
            </h1>
            <div className="my-4 flex items-center flex-wrap justify-center">
              <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                Vue 2
              </button>
              <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                Nuxt js
              </button>
              <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                Vuex
              </button>
              <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                Firebase
              </button>
            </div>
            <Link
              href="https://singularitybd.com/"
              target="_blank"
              className="font-bold text-lg hover:underline"
            >
              🌐Live
            </Link>
          </div>
        </div>

        {/* ======== single item  */}
        <div className="mt-10 lg:grid grid-cols-2 items-center shadow-lg p-3 rounded-xl">
          <div class="shadow-xl rounded-lg order-2">
            <div class="screen">
              <img
                src={bhn.src}
                className="lg:bottom-[-400px] bottom-[-250px]"
              />
            </div>
          </div>

          <div className="p-3 text-center order-1">
            <h1 className="text-lg font-bold lilita-font text-[#2d2e32]">
              BHN Reservations
            </h1>
            <h1 className=" mulish-font text-[#555] font-semibold mt-3">
              This is online food ordering & reservation system. <br />
              <br />
              Customer can Reserve a table for any any specific date with time
              in a available restaurant Along with reservation, customer can
              preorder food items Customar can also place takeway food order
              without any reservation
            </h1>
            <div className="my-4 flex items-center flex-wrap justify-center">
              <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                Vue Js
              </button>
              <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                Nuxt js
              </button>
              <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                Vuex
              </button>
              <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                Node Js
              </button>
            </div>
            <Link
              href="https://reservation.buyherenow.com.bd/"
              target="_blank"
              className="font-bold text-lg hover:underline"
            >
              🌐Live
            </Link>
          </div>
        </div>

        {/* ======== single item  */}
        <div className="mt-10 lg:grid grid-cols-2 items-center shadow-lg p-3 rounded-xl">
          <div class="shadow-xl rounded-lg ">
            <div class="screen">
              <img
                src={bom.src}
                className="lg:bottom-[-680px] bottom-[-450px]"
              />
            </div>
          </div>

          <div className="p-3 text-center ">
            <h1 className="text-lg font-bold lilita-font text-[#2d2e32]">
              Battle of Minds
            </h1>
            <h1 className=" mulish-font text-[#555] font-semibold mt-3">
              This is a product of British American Tobacco, Bangladesh. Its
              about BAT's competition & Game
            </h1>
            <div className="my-4 flex items-center flex-wrap justify-center">
              <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                Vanila js
              </button>
              <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                Jquery
              </button>

              <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                Larrable
              </button>
            </div>
            <Link
              href="https://battleofminds.org/"
              target="_blank"
              className="font-bold text-lg hover:underline"
            >
              🌐Live
            </Link>
          </div>
        </div>

        {/* ======== single item  */}
        <div className="mt-10 lg:grid grid-cols-2 items-center shadow-lg p-3 rounded-xl">
          <div class="shadow-xl rounded-lg order-2">
            <div class="screen">
              <img
                src={tralive.src}
                className="lg:bottom-[-950px] bottom-[-750px]"
              />
            </div>
          </div>

          <div className="p-3 text-center order-1 ">
            <h1 className="text-lg font-bold lilita-font text-[#2d2e32]">
              Tralive
            </h1>
            <h1 className=" mulish-font text-[#555] font-semibold mt-3">
              This was a practice project as beginner While I was learning
              React.
              <br /> <br />
              This is a simple website about Tourism where people can book their
              currently offering packages. Popular tourist spots are in those
              packages and their prices.
            </h1>
            <div className="my-4 flex items-center flex-wrap justify-center">
              <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                React
              </button>
              <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                Bootstrap
              </button>
              <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                Node
              </button>
              <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                Firebase Authentication
              </button>
            </div>
            <Link
              href="https://tralive-5a85c.web.app/"
              target="_blank"
              className="font-bold text-lg hover:underline"
            >
              🌐Live
            </Link>
          </div>
        </div>

        {/* ======== single item  */}
        <div className="mt-10 lg:grid grid-cols-2 items-center shadow-lg p-3 rounded-xl">
          <div class="shadow-xl rounded-lg ">
            <div class="screen">
              <img src={orion.src} className="bottom-[-800px]" />
            </div>
          </div>

          <div className="p-3 text-center ">
            <h1 className="text-lg font-bold lilita-font text-[#2d2e32]">
              Orion Safety
            </h1>
            <h1 className=" mulish-font text-[#555] font-semibold mt-3">
              This was a practice project as beginner While I was learning
              React.
              <br /> <br />
              Its about company who make safety equipments.
            </h1>
            <div className="my-4 flex items-center flex-wrap justify-center">
              <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                React Js
              </button>

              <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                javascript
              </button>
            </div>
            <Link
              href="https://shakil-instalogic.netlify.app/"
              target="_blank"
              className="font-bold text-lg hover:underline"
            >
              🌐Live
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;