import React from "react";
import PhoneSVG from "./SVG/PhoneSVG";

import { Fredoka } from "@next/font/google";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Contact = () => {
  return (
    <div id="contact" className="py-20">
      <div className="container mx-auto">
        <div>
          <h1
            className={`${fredoka.className} md:text-3xl text-2xl font-medium mulish-font text-[#2d2e32] mt-2 text-center`}
          >
            Let's build something
          </h1>
          <h1
            className={`${fredoka.className} md:text-4xl text-2xl font-semibold text-[#2d2e32] mt-2 text-center`}
          >
            Great together 👇
          </h1>
          <h1
            className={`${fredoka.className} text-center text-lg font-semibold text-[#2d2e32] mt-8`}
          >
            ☎️ Phone :
          </h1>
          <h1
            className={`${fredoka.className} text-center text-lg font-semibold text-[#2d2e32] mt-2`}
          >
            01515233386
          </h1>

          <h1
            className={`${fredoka.className} text-center text-lg font-semibold text-[#2d2e32] mt-8`}
          >
            📬 Email :
          </h1>
          <h1
            className={`${fredoka.className} text-center text-lg font-semibold text-[#2d2e32] mt-2`}
          >
            mc.shakil.97@gmail.com
          </h1>

          <h1
            className={`${fredoka.className} text-center text-lg font-semibold text-[#2d2e32] mt-8`}
          >
            🏠 Address :
          </h1>
          <h1
            className={`${fredoka.className} text-center text-lg font-semibold text-[#2d2e32] mt-2`}
          >
            Nikunja-2, Khilkhet, Dhaka
          </h1>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Contact;
