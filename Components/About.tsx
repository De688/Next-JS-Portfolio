import React from "react";
import Image from "next/image";
import compimage from "../assets/employee-business-profile.png";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="w-full flex flex-col md:flex-row wrap justify-center items-center h-screen ">
      <div className=" w-full md:w-[90%] flex flex-col md:flex-row wrap justify-center items-center ">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
          }}
          className="  my-[50px] md:my-[50px] md:h-[300px] w-[95%] md:w-[50%] h-[450px] rounded-xl shadow-md bg-[url('../img/bg1.jpg')] bg-cover bg-center h-[300px]"
        >
          <h2></h2>
        </motion.div>
        <div className="relative   md:w-[50%] h-full flex justify-center items-center md:pt-[200px] h-[1000px] sm:h-[400px] md:h-[600px]">
          <div className=" absolute mt-40 w-10 sm:w-42 md:w-72 h-72 top-0 left-4 bg-[#7774e7] filter blur-2xl rounded-full mix-blend-multiply animate-buble animation-delay-2000"></div>
          <div className="absolute mt-40 w-10 sm:w-42  md:w-72 h-72 top-0 right-4  bg-[#60dff0] filter blur-2xl rounded-full mix-blend-multiply animate-buble animation-delay-4000"></div>
          <div className="absolute mt-40 w-10 sm:w-42 md:w-72 h-72 top-20 bottom-4 left-20 filter blur-2xl bg-[#c891d6] rounded-full mix-blend-multiply animate-buble animation-delay-5000"></div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.0,
            }}
            className="w-[400px] sm:w-[600px] wrap md:w-[600px] h-800px rounded-xl shadow-xl flex  flex-col bg-gradient-to-t from-[#ffffff21] to-[#bab8df7f] justify-center top-[-10px] items-center transparent absolute border"
          >
            <div className="w-[95%] h-[90px] ">
              <div className="flex justify-center md:justify-start  items-center text-2xl pl-10 pt-5 text-[#5651E5] font-bold tracking-wide">
                What I Do
              </div>
            </div>
            <p className="bg-white flex text-center justify-center items-center py-5 mx-5 md:px-5 text-[#040163c1] w-auto md:w-[500px] mb-10 rounded-2xl shadow-xl tracking-wide">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae laborumolestias voluptate tae praesentium, enim
              voluptates culpa minima optio dolore!
            </p>
            <p className="bg-white flex text-center justify-center items-center py-5 mx-5 md:px-5 md:w-[500px] mb-10 rounded-2xl shadow-xl tracking-wide">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae laborum eius ptio dolore!
            </p>
            <p className="bg-white flex text-center justify-center items-center py-5 mx-5 md:px-5 md:w-[500px] mb-10 rounded-2xl shadow-xl tracking-wide">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae laborum eius
            </p>
            <p className="bg-white flex text-center justify-center items-center py-5 mx-5 md:px-5 md:w-[500px]  mb-10 rounded-2xl shadow-xl tracking-wide">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae vitae praesentium,
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
// gradient-to-r from-indigo-500 to-sky-500
