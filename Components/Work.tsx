import React from "react";
import Image from "next/image";
import Portfolioimg from "../assets/portfolio.jpg";
import Chatappimg from "../assets/chatapp.jpg";
import Mern from "../assets/mern.jpg";
import Ngo from "../assets/ngo.jpg";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

function Work() {
  return (
    <div className="w-full min-h-full ">
      <div className="w-full min-h-[150px]  flex justify-end items-center">
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.0,
          }}
          className="w-[600px] rounded-l-full bg-[white] shadow-xl h-[150px] dark:bg-[#2c2b2c] flex justify-center items-center mt-[30px] text-3xl sm:text-4xl md:text-6xl pr-[20px] font-abc "
        >
          My recent{" "}
          <span className="text-[#434dd3fb] dark:text-[#b86deb] pl-4">
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
            <div className="text-2xl text-[#3134d4] dark:text-[#b86deb] pl-[5px] font-abc font-bold">
              React JS portfolio 1.0
            </div>
            <p className="text-[#3134d4] dark:text-[#b86deb] font-abc pl-[5px]">
              Lorem ipsum d elit. velit officiis sequi temporibus nam minus,
              blanditiis optio, ullam culpa consequatur inventore.
            </p>
            <div className="w-full mh-[60px] flex justify-between pl-[5px] py-[20px]  items-center ">
              <button className="w-[100px] rounded-sm text-[white] pl-[5px]  bg-gradient-to-r from-[#4440c0] to-[#709DFF] dark:bg-[#b86deb] hover:shadow-xl h-[40px]">
                Read More
              </button>
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
            <div className="text-2xl text-[#3134d4] dark:text-[#bb66e2] pl-[5px] font-abc font-bold">
              Real time Chat web application
            </div>
            <p className="text-[#3134d4] dark:text-[#b86deb] font-abc pl-[5px]">
              Lorem ipsum d elit. velit officiis sequi temporibus nam minus,
              blanditiis optio, ullam culpa consequatur inventore.
            </p>
            <div className="w-full mh-[60px] flex justify-between pl-[5px] py-[20px]  items-center ">
              <button className="w-[100px] rounded-sm text-[white] pl-[5px]  bg-gradient-to-r from-[#4440c0] to-[#709DFF] hover:shadow-xl h-[40px]">
                Read More
              </button>
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
            <div className="text-2xl text-[#3134d4] dark:text-[#b86deb] pl-[5px] font-abc font-bold">
              Real time Chat web application
            </div>
            <p className="text-[#3134d4] dark:text-[#b86deb] font-abc pl-[5px]">
              Lorem ipsum d elit. velit officiis sequi temporibus nam minus,
              blanditiis optio, ullam culpa consequatur inventore.
            </p>
            <div className="w-full mh-[60px] flex justify-between pl-[5px] py-[20px]  items-center ">
              <button className="w-[100px] rounded-sm text-[white] pl-[5px]  bg-gradient-to-r from-[#4440c0] to-[#709DFF] hover:shadow-xl h-[40px]">
                Read More
              </button>
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
            <div className="text-2xl text-[#3134d4] dark:text-[#cba0e7] pl-[5px] font-abc font-bold">
              React JS portfolio 1.0
            </div>
            <p className="text-[#3134d4] dark:text-[#b86deb] font-abc pl-[5px]">
              Lorem ipsum d elit. velit officiis sequi temporibus nam minus,
              blanditiis optio, ullam culpa consequatur inventore.
            </p>
            <div className="w-full mh-[60px] flex justify-between pl-[5px] py-[20px]  items-center ">
              <button className="w-[100px] rounded-sm text-[white] pl-[5px]  bg-gradient-to-r from-[#4440c0] to-[#709DFF] hover:shadow-xl h-[40px]">
                Read More
              </button>
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
