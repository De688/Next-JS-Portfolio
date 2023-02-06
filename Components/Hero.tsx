import React from "react";

import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import Link from "next/link";

function Hero() {
  return (
    <div
      className=" w-full h-screen md:mt-[80px]   flex flex-col justify-center items-center "
      id="hero"
    >
      <h1 className="font-abc">
        Hi, i'm{" "}
        <span className="text-[#5651E5] dark:text-[#f15bff]">Chris</span>
      </h1>
      <h1 className="font-abc text-3xl sm:text-4xl md:text-6xl lg:text-6xl ">{`<Pro web developer />`}</h1>
      <h2 className="w-[95%] md:w-[60%] pt-5 text-[#5f5f5f] font-abc text-xl flex justify-center text-center items-center">
        I build beautiful websites that meets clients needs and help bussiness
        thrives online
      </h2>
      <motion.div
        initial={{
          y: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.0,
        }}
        className="w-[80%] md:w-[60%] flex justify-between md:justify-around items-center h-[60px] pt-[50px]"
      >
        <Link href="https://github.com/De688">
          <AiFillGithub className="shadow-xl cursor-pointer hover:shadow-sm transition-[all 0.2s ease]  rounded-full text-5xl md:text-6xl  p-2 text-[#726fdb] dark:text-[#f15bff]" />
        </Link>
        <Link href="https://www.linkedin.com/in/christopher-daniel-46055820a/">
          <TiSocialLinkedin className="shadow-xl cursor-pointer hover:shadow-sm transition-[all 0.2s ease]  rounded-full text-5xl md:text-6xl p-2 mt-14  text-[#726fdb] dark:text-[#f15bff]" />
        </Link>
        <Link href="https://twitter.com/DeDaniel13">
          <TiSocialTwitter className="shadow-xl hover:shadow-sm cursor-pointer rounded-full text-5xl md:text-6xl p-2 text-[#726fdb] dark:text-[#f15bff]" />
        </Link>
      </motion.div>
    </div>
  );
}

export default Hero;
