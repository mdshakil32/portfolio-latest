"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 70) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <div
      className={`z-10 fixed left-0 right-0 w-full bg-white  ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto">
        <div className="h-20 flex items-center justify-between ">
          <div>
            <Link href="/" className="text-4xl lilita-font font-semibold">
              Shakil
            </Link>
          </div>
          <div className=" flex items-center gap-10">
            <Link href="/" className="text-lg font-semibold lilita-font">
              Home
            </Link>
            <Link href="/" className="text-lg font-semibold lilita-font">
              About
            </Link>
            <Link href="/" className="text-lg font-semibold lilita-font">
              Skills
            </Link>
            <Link href="/" className="text-lg font-semibold lilita-font">
              Projects
            </Link>
            <Link href="/" className="text-lg font-semibold lilita-font">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
