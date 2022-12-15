import React from "react";

import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className=" w-full h-screen md:mt-[80px] mb-[200px] md:mb-[0px] flex flex-col justify-center items-center ">
      <h1 className="font-abc">
        Hi, i'm{" "}
        <span className="text-[#5651E5] dark:text-[#b86deb]">Chris</span>
      </h1>
      <h1 className="font-abc text-3xl sm:text-4xl md:text-6xl lg:text-6xl ">{`<Pro web developer />`}</h1>
      <h2 className="w-[95%] md:w-[60%] pt-5 text-[#5f5f5f] font-abc text-xl flex justify-center text-center items-center">
        Lorem ipsum Cupiditate at perferendis vel cum laboriosam at perferendis
        vel cum laboriosam
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
        className="w-[60%]  flex justify-around items-center h-[60px] pt-[50px]"
      >
        <AiFillGithub className="shadow-xl cursor-pointer hover:shadow-sm transition-[all 0.2s ease]  rounded-full text-6xl p-2 text-[#726fdb] dark:text-[#b86deb]" />
        <TiSocialLinkedin className="shadow-xl hover:shadow-sm cursor-pointer mt-3 rounded-full text-6xl p-2 text-[#5651E5] dark:text-[#b86deb]" />
        <TiSocialTwitter className="shadow-xl hover:shadow-sm cursor-pointer rounded-full text-6xl p-2 text-[#5651E5] dark:text-[#b86deb]" />
      </motion.div>
    </div>
  );
}

export default Hero;
