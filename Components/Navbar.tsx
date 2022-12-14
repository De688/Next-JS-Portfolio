import React, { useState, useEffect } from "react";

import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

function Navbar() {
  const [shadow, setshadow] = useState(false);
  const [shownav, setshownav] = useState(false);
  const OpennavMenu = () => {
    setshownav(true);
  };
  const closenavMenu = () => {
    setshownav(false);
  };
  useEffect(() => {
    const handlescroll = () => {
      if (window.scrollY <= 90) {
        setshadow(false);
      } else {
        setshadow(true);
      }
    };
    window.addEventListener("scroll", handlescroll);
  }, []);

  return (
    <div
      className={
        shadow
          ? "w-full transition-all fixed h-20 shadow-md  bg-[#ECF0F3] z-[100]"
          : "w-full transition-all fixed h-20  bg-[#ECF0F3] z-[100]"
      }
    >
      <div className="flex justify-between w-full h-full items-center">
        <div className="text-2xl sm:text-3xl md:text-4xl pl-20 justify-center text-[#5651E5] items-center gap-3">
          C-Daniel
        </div>

        <div className="hidden w-auto md:flex justify-center align-center gap-6 pr-20 ">
          <Link href="/">
            <li className="flex transition-all justify-center items-center text-[#5651E5] hover:text-[#25242c] tracking-wide">
              HOME
            </li>
          </Link>
          <Link href="/Services">
            <li className="flex transition-all justify-center items-center text-[#5651E5] hover:text-[#25242c]  tracking-wide">
              SERVICES
            </li>
          </Link>
          <Link href="/About">
            <li className="flex transition-all justify-center items-center text-[#5651E5] hover:text-[#25242c] tracking-wide">
              ABOUT
            </li>
          </Link>
          <Link href="/Contact">
            <li className="flex justify-center items-center text-[#5651E5] hover:text-[#25242c] tracking-wide">
              CONTACT
            </li>
          </Link>
        </div>
        <div className="r-0 mr-10 text-4xl cursor-pointer md:hidden">
          <RxHamburgerMenu onClick={OpennavMenu} />
        </div>
      </div>
      <div
        className={
          !shownav
            ? ""
            : " fixed w-full h-screen top-0 left-0 z-[20] transition-all  absolute bg-[#05050583] md:hidden"
        }
      >
        <div
          className={
            !shownav
              ? "fixed absolute z-[100] w-[70%] top-0 left-[-70%] transition-all h-screen md:hidden bg-[#e4e4e4]"
              : "fixed w-[70%] top-0 left-0 h-screen transition-all  md:hidden bg-[#e4e4e4]"
          }
        >
          <div className="w-full h-[30px] flex justify-between items-center pt-10">
            <h1 className="text-[#5651E5] pl-5">Chris</h1>
            <FaTimes
              onClick={closenavMenu}
              className="text-4xl cursor-pointer md:text-6xl mr-5 rounded-full p-1 md:p-3 text-[#5651E5] shadow-xl"
            />
          </div>
          <div className="w-full h-[330px] flex justify-center items-center mt-[110px] ">
            <ul className="w-full  h-[330px] flex flex-col justify-around items-center tracking-widest">
              <Link href="/">
                <li className="md:tracking-widest">HOME</li>
              </Link>
              <Link href="/Services">
                <li>SERVICES</li>
              </Link>
              <Link href="/About">
                <li>ABOUT</li>
              </Link>
              <Link href="/Contact">
                <li>CONTACT</li>
              </Link>
            </ul>
          </div>
          <div className="flex justify-around mt-20">
            <AiFillGithub className="shadow-xl cursor-pointer hover:shadow-sm transition-[all 0.2s ease]  rounded-full text-4xl  p-2 text-[#5651E5]" />
            <TiSocialLinkedin className="shadow-xl hover:shadow-sm cursor-pointer mt-3 rounded-full text-4xl  p-2 text-[#5651E5]" />
            <TiSocialTwitter className="shadow-xl hover:shadow-sm cursor-pointer rounded-full text-4xl  p-2 text-[#5651E5]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
