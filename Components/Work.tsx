import React from "react";
import Image from "next/image";
import Portfolioimg from "../assets/portfolio.jpg";
import Chatappimg from "../assets/chatapp.jpg";
import Mern from "../assets/mern.jpg";
import Ngo from "../assets/ngo.jpg";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

function Work() {
  return (
    <div className="w-full min-h-full ">
      <div className="w-full min-h-[150px]  flex justify-end items-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.0,
          }}
          className="w-[600px] rounded-l-full bg-[white] shadow-xl h-[150px] dark:bg-[#2c2b2c] flex justify-center items-center mt-[30px] text-3xl sm:text-4xl md:text-6xl pr-[20px] font-abc "
        >
          My recent
          <span className="text-[#434dd3fb] dark:text-[#f15bff] pl-4">
            Works
          </span>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.0,
        }}
        className="w-full min-h-full  flex flex-wrap  justify-around items-center px-[10px] pt-[100px] "
      >
        <div className="w-[470px] min-h-[470px] shadow-md border-0 rounded-xl overflow-hidden bg-[#ffffff] dark:bg-[#323133] mb-[40px]">
          <Image
            src={Portfolioimg}
            width={470}
            height={470}
            className=" rounded-xl cursor-pointer md:hover:scale-105 transition duration-500 "
          />
          <div className="w-full min-h-[50px]  mt-[5px] z-[30]">
            <div className="text-2xl text-[#555ff1ea] dark:text-[#f15bff]  pl-[5px] font-abc font-bold">
              React JS portfolio 1.0
            </div>
            <p className="text-[#555ff1ea] dark:text-[#f15bff] font-abc pl-[5px]">
              Beatiful parsonal portfolio made up with react js with smooth
              scroll
            </p>
            <div className="w-full mh-[60px] flex justify-between pl-[5px] py-[20px]  items-center ">
              <Link href="https://github.com/De688">
                <button className="w-[120px] shadow-xl flex justify-center items-center rounded-sm text-[white] pl-[0px]  bg-blue-600  dark:text-[#b9b1b9f8] hover:shadow-xl h-[40px]">
                  <AiFillGithub className=" rounded-full text-4xl p-2 text-[#ffffff] dark:text-[#c5c4c5]" />
                  Github
                </button>
              </Link>
              <div className="w-[100px] h-[40px] rounded-sm justify-around items-center flex cursor-pointer hover:bg-[#9794b47] text-[#65648fb5] dark:text-[#b86deb] hover:text-[#333dd3] hover:bg-[#9094cc53] mr-[5px]">
                <span>Visit</span>
                <BsArrowRight className="text-2xl pl-[3px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[470px] min-h-[470px] shadow-md border-0 rounded-xl overflow-hidden bg-[#ffffff] dark:bg-[#323033] mb-[40px]">
          <Image
            src={Chatappimg}
            width={470}
            height={470}
            className="rounded-xl cursor-pointer md:hover:scale-105 transition duration-500 "
          />
          <div className="w-full min-h-[50px]  mt-[5px] z-[30]">
            <div className="text-2xl text-[#555ff1ea] dark:text-[#ec68f8] pl-[5px] font-abc font-bold">
              Real time Chat web application
            </div>
            <p className="text-[#555ff1ea] dark:text-[#f07efa] font-abc pl-[5px]">
              Real time chat web application made up with react js node js and
              socket.io with chatbot functionality a person can join and leave
              chatroom however they want
            </p>
            <div className="w-full mh-[60px] flex justify-between pl-[5px] py-[20px]  items-center ">
              <Link href="https://github.com/De688">
                <button className="w-[120px] shadow-xl flex justify-center items-center rounded-sm text-[white] pl-[0px]  bg-blue-600  dark:text-[#b9b1b9f8] hover:shadow-xl h-[40px]">
                  <AiFillGithub className=" rounded-full text-4xl p-2 text-[#ffffff] dark:text-[#c5c4c5]" />
                  Github
                </button>
              </Link>
              <div className="w-[100px] h-[40px] rounded-sm justify-around items-center flex cursor-pointer hover:bg-[#9794b47] text-[#65648fb5] dark:text-[#b86deb] hover:text-[#333dd3] hover:bg-[#9094cc53] mr-[5px]">
                <span>Visit</span>
                <BsArrowRight className="text-2xl pl-[3px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[470px] min-h-[470px] shadow-md border-0 rounded-xl overflow-hidden bg-[#ffffff] dark:bg-[#2a2a2b] mb-[40px]">
          <Image
            src={Mern}
            width={470}
            height={470}
            className="rounded-xl cursor-pointer md:hover:scale-105 transition duration-500 "
          />
          <div className="w-full min-h-[50px]  mt-[5px] z-[30]">
            <div className="text-2xl text-[#555ff1ea] dark:text-[#f15bff] pl-[5px] font-abc font-bold">
              Mern Stack World Tour Website
            </div>
            <p className="text-[#555ff1ea] dark:text-[#f15bff] font-abc pl-[5px]">
              Full mern stack website which include sign up with JsonWebToken,
              MongoDB database,node js, express js and redux
            </p>
            <div className="w-full mh-[60px] flex justify-between pl-[5px] py-[20px]  items-center ">
              <Link href="https://github.com/De688">
                <button className="w-[120px] shadow-xl flex justify-center items-center rounded-sm text-[white] pl-[0px]  bg-blue-600  dark:text-[#b9b1b9f8] hover:shadow-xl h-[40px]">
                  <AiFillGithub className=" rounded-full text-4xl p-2 text-[#ffffff] dark:text-[#c5c4c5]" />
                  Github
                </button>
              </Link>
              <div className="w-[100px] h-[40px] rounded-sm justify-around items-center flex cursor-pointer hover:bg-[#9794b47] text-[#65648fb5] dark:text-[#b86deb] hover:text-[#333dd3] hover:bg-[#9094cc53] mr-[5px]">
                <span>Visit</span>
                <BsArrowRight className="text-2xl pl-[3px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[470px] min-h-[470px] shadow-md border-0 rounded-xl overflow-hidden bg-[#ffffff] dark:bg-[#2f2f30] mb-[40px]">
          <Image
            src={Ngo}
            width={470}
            height={470}
            className=" rounded-xl cursor-pointer md:hover:scale-105 transition duration-500"
          />
          <div className="w-full min-h-[50px]  mt-[5px] z-[30]">
            <div className="text-2xl text-[#555ff1ea] dark:text-[#f15bff] pl-[5px] font-abc font-bold">
              NGO based website
            </div>
            <p className="text-[#555ff1ea] dark:text-[#f15bff] font-abc pl-[5px]">
              NGO website made up with react js, Firebase
            </p>
            <div className="w-full mh-[60px] flex justify-between pl-[5px] py-[20px]  items-center ">
              <Link href="https://github.com/De688">
                <button className="w-[120px] shadow-xl flex justify-center items-center rounded-sm text-[white] pl-[0px]  bg-blue-600  dark:text-[#b9b1b9f8] hover:shadow-xl h-[40px]">
                  <AiFillGithub className=" rounded-full text-4xl p-2 text-[#ffffff] dark:text-[#c5c4c5]" />
                  Github
                </button>
              </Link>
              <div className="w-[100px] h-[40px] rounded-sm justify-around items-center flex cursor-pointer hover:bg-[#9794b47] text-[#65648fb5] dark:text-[#b86deb] hover:text-[#333dd3] hover:bg-[#9094cc53] mr-[5px]">
                <span>Visit</span>
                <BsArrowRight className="text-2xl pl-[3px]" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Work;
