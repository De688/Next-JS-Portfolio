import React from "react";
import Image from "next/image";
import Link from "next/link";
import compimage from "../assets/employee-business-profile.png";
import chrisimg from "../assets/chrisimage.jpg";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";

FaDiscord;

import { motion } from "framer-motion";

function About() {
  return (
    <div
      className="w-full flex flex-col lg:flex-col xl:flex-row wrap justify-center items-center min-h-screen "
      id="about"
    >
      <div className=" w-full lg:w-[90%] flex  flex-col lg:flex-col xl:flex-row wrap justify-center items-center min-h-screen">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
          }}
          className="  md:h-[500px] flex justify-center items-center w-[95%] md: lg:w-[90%] min-h-[450px] rounded-xl  bg-[#d3d3da66] dark:bg-[#2e2e30] min-h-[300px]"
        >
          <div className="w-[90%]  md:w-[70%] min-h-[300px] md:min-h-[200px] h-[70%]  shadow-xl rounded-xl bg-[#faf9fa] dark:bg-[#222222] dark:text-[#ec84fa] flex justify-center flex-col">
            <div className="h-[60px]">
              <div className="ml-[50px] p-1  mt-[-40px]  md:mt-[-40px] w-[90px] h-[90px] rounded-full border-4 border-[#d0aae7]">
                <Image
                  src={chrisimg}
                  width={90}
                  height={90}
                  alt="ChrisImage"
                  className=" border-8 border-[#87879] rounded-full "
                />
              </div>
            </div>
            <div className="w-full  h-full bg-[#5d3ba0665] text-[#3328d8] dark:text-[#f15bff] flex flex-col justify-around items-center text-center font-md md:text-[18px]  trackingwide">
              <p className="w-[98%] md:w-[80%] text-center text-[#4c6fcf775]">
                "Greetings, I am a multifaceted professional with expertise in
                web development, freelancing, and teaching science. I assist
                individuals and businesses in achieving success online through
                the development of professional websites. Furthermore, I am
                deeply passionate about business startups and am constantly
                seeking opportunities to expand my knowledge and skills in this
                field."
              </p>
              <div className="w-[50%] h-[80px] flex justify-between pt-[20px] items-center">
                <Link href="https://t.me/Tt000123466">
                  <FaTelegramPlane className="cursor-pointer text-[25px] hover:text-[#386bda775]" />
                </Link>
                <Link href="https://www.instagram.com/tanzania_web_dev/">
                  <FaInstagram className="cursor-pointer text-[25px]" />
                </Link>
                <Link href="https://www.facebook.com/de.daniel.756">
                  <MdFacebook className="cursor-pointer text-[25px] " />
                </Link>
                <Link href="https://discord.com/channels/Christopher#0001">
                  <FaDiscord className="cursor-pointer text-[25px] " />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="relative w-[95%] mt-[50px] sm:w-[95%] md:w-[60%] lg:ml-[50px]  flex justify-end items-center  min-h-[750px] sm:h-[400px] md:h-[600px]">
          <div className=" absolute mt-40 w-10 sm:w-42 md:w-72 h-72 top-0 left-4 bg-[#7774e7] filter blur-2xl rounded-full mix-blend-multiply md:animate-buble md:animation-delay-2000"></div>
          <div className="absolute mt-40 w-10 sm:w-42  md:w-72 h-72 top-0 right-4  bg-[#60dff0] filter blur-2xl rounded-full mix-blend-multiply md:animate-buble md:animation-delay-4000"></div>
          <div className="absolute mt-40 w-10 sm:w-42 md:w-72 h-72 top-20 bottom-4 left-20 filter blur-2xl bg-[#ffef0b] rounded-full mix-blend-multiply md:animate-buble md:animation-delay-5000"></div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.0,
            }}
            className="w-[95%] sm:w-[95%] wrap md:w-[600px] h-800px rounded-xl shadow-xl flex border-0 flex-col bg-gradient-to-t from-[#ffffff21] to-[#bab8df7f] dark:bg-[#3a383886] justify-center top-[-10px] items-center transparent absolute border-0"
          >
            <div className="w-[95%] h-[90px] ">
              <div className="flex justify-center md:justify-start  items-center text-2xl pl-10 pt-5 text-[#5651E5] dark:text-[#c891ec] font-bold tracking-wide">
                Why work with Me
              </div>
            </div>
            <p className="bg-white flex text-center justify-center items-center py-5 mx-5 md:px-5 text-[#040163c1] dark:text-[#b86deb] dark:bg-[#424044] w-auto md:w-[500px] mb-10 rounded-2xl shadow-xl tracking-wide">
              With over three years of experience in web development, I have a
              strong understanding of the industry
            </p>
            <p className="bg-white flex text-center justify-center items-center py-5 mx-5 md:px-5 text-[#040163c1] md:w-[500px] dark:text-[#b86deb] dark:bg-[#424044] mb-10 rounded-2xl shadow-xl tracking-wide">
              I am dedicated to ensuring that my work effectively addresses the
              specific needs of my clients, and I strive to create websites that
              are both functional and visually appealing.
            </p>
            <p className="bg-white flex text-center justify-center items-center py-5 mx-5 md:px-5 text-[#040163c1] md:w-[500px] dark:text-[#b86deb] dark:bg-[#424044] mb-10 rounded-2xl shadow-xl tracking-wide">
              I am an easy communicator, making it easy for us to work together
              comfortably
            </p>
            <p className="bg-white flex text-center justify-center items-center py-5 mx-5 md:px-5 text-[#040163c1] md:w-[500px] dark:text-[#b86deb] dark:bg-[#424044]  mb-10 rounded-2xl shadow-xl tracking-wide">
              Additionally, I am not afraid to ask probing questions in order to
              fully comprehend and fulfill my clients' needs.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
// gradient-to-r from-indigo-500 to-sky-500
