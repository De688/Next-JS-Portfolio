import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import techstackimg from "../assets/undraw5.svg";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiRedux, SiTailwindcss, SiCss3 } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";

function Technologies() {
  return (
    <div className="w-full min-h-screen dark:bg-blue mt-[40px] sm:mt-[300px]  md:mt-[60px]">
      <div className="w-full flex min-h-[400px] bg-gradient-to-r  from-[#f1f1f1ede] to-[#4747c9]">
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.0,
          }}
          className=" text-black flex flex-col shadow-xl justify-center wrap bg-[#ffffff] dark:bg-[#333135] dark:text-[#b86deb] w-[80%] h-[300px] sm:w-[50%]  "
        >
          <div className="w-[100%] sm:w-[90%] h-[200px] flex   flex-col rounded-md">
            <p className="text-4xl w-auto md:text-6xl pl-10 font-abc">
              My Tech Stack
            </p>
            <p className="text-3xl md:text-4xl flex justify-end pr-[15px] font-abc  pt-10  sm:pr-[40px]">
              -Frontend
            </p>
            <p className="text-3xl flex justify-end font-abc pr-[15px] pl-20 sm:pr-[40px]">
              -Backend
            </p>
          </div>
        </motion.div>
        <div className="w-[50%] hidden sm:flex h-full flex justify-center items-center">
          <Image src={techstackimg} width={300} height={300} />
        </div>
      </div>
      <div className="w-full min-h-auto  flex-col pb-[50px] md:flex-row flex flex-wrap md:flex-nowrap   md:justify-around items-center md:items-start bg-fixed bg-[url('../img/bgpic2.jpg')] dark:bg-[url('../img/bgnight.jpg')] bg-cover bg-center width={300} height={300} ">
        <div className="w-[90%] md:w-[40%] min-h-[500px]  rounded-md shadow-xl flex dark:bg-[#201f20] flex-wrap mt-[100px] bg-white">
          <div className="w-full h-[20px] flex justify-center items-center bg-[#c3bfd11f] min-h-[90px] text-[#5731c9f9] dark:text-[#b86deb] m-[5px]  py-[20px] font-abc font-bold text-3xl">
            Frontend
          </div>
          <div className="w-full h-auto flex justify-around pt-[50px] items-center flex-wrap">
            <div className="flex flex-col justify-center p-[20px] hover:text-[#484be4] text-[#484be4] dark:text-[#b86deb] transition-all items-center">
              <FaReact className="text-6xl" />
              <p className="text-2xl">React JS</p>
            </div>
            <div className="flex flex-col justify-center hover:text-[#484be4] text-[#484be4] dark:text-[#b86deb] transition-all items-center ">
              <TbBrandNextjs className="text-6xl " />
              <p className="text-2xl">Next JS</p>
            </div>
            <div className="flex flex-col justify-center hover:text-[#484be4] text-[#484be4] dark:text-[#b86deb] transition-all items-center">
              <SiTailwindcss className="text-6xl" />
              <p className="text-2xl">Tailwind CSS</p>
            </div>
            <div className="flex flex-col justify-center hover:text-[#484be4] text-[#484be4] dark:text-[#b86deb] transition-all items-center">
              <SiRedux className="text-6xl" />
              <p className="text-2xl">Redux</p>
            </div>
            <div className="flex flex-col justify-center hover:text-[#484be4] text-[#484be4] dark:text-[#b86deb] transition-all items-center">
              <AiFillHtml5 className="text-6xl" />
              <p className="text-2xl">HTML</p>
            </div>
            <div className="flex flex-col justify-center hover:text-[#484be4] text-[#484be4] dark:text-[#b86deb] transition-all items-center">
              <SiCss3 className="text-6xl" />
              <p className="text-2xl">CSS</p>
            </div>
          </div>
        </div>
        <div className="w-[90%] md:w-[40%] min-h-auto md:min-h-[300px] flex flex-wrap  dark:bg-[#333135] rounded-md shadow-xl mt-[100px] bg-white">
          <div className="w-full min-h-[20px] flex justify-center items-center bg-[#c3bfd11f] min-h-[90px] m-[5px]  py-[20px] text-[#5731c9f9] dark:text-[#b86deb] font-abc font-bold text-3xl">
            Backend
          </div>
          <div className="w-full h-auto flex justify-around pt-[50px] items-center flex-wrap">
            <div className="flex flex-col justify-center p-[20px] hover:text-[#484be4] text-[#484be4] dark:text-[#b86deb] transition-all items-center">
              <FaNodeJs className="text-6xl" />
              <p className="text-2xl">Node JS</p>
            </div>
            <div className="flex flex-col justify-center p-[20px] hover:text-[#484be4] text-[#484be4] dark:text-[#b86deb] transition-all items-center">
              <SiFirebase className="text-6xl" />
              <p className="text-2xl">Firebase</p>
            </div>
            <div className="flex flex-col justify-center p-[20px] hover:text-[#484be4] text-[#484be4] dark:text-[#b86deb] transition-all items-center">
              <SiSocketdotio className="text-6xl" />
              <p className="text-2xl">Socket.io</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
