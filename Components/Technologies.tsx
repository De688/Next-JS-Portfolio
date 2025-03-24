import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import techstackimg from "../assets/undraw5.svg";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiRedux, SiTailwindcss, SiCss3, SiFirebase, SiSocketdotio } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";

function Technologies() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const frontendTech = [
    { icon: <FaReact />, name: "React JS" },
    { icon: <TbBrandNextjs />, name: "Next JS" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <AiFillHtml5 />, name: "HTML" },
    { icon: <SiCss3 />, name: "CSS" }
  ];

  const backendTech = [
    { icon: <FaNodeJs />, name: "Node JS" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiSocketdotio />, name: "Socket.io" }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 py-20" id="technologies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mb-10 md:mb-0"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                My Tech <span className="text-blue-600 dark:text-blue-400">Stack</span>
              </h2>
              <div className="w-32 h-2 bg-blue-600 mt-4 rounded-full"></div>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-md">
                The technologies I work with to bring innovative solutions to life
              </p>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10">
                <Image 
                  src={techstackimg} 
                  width={300} 
                  height={300} 
                  alt="Tech Stack Illustration"
                  className="drop-shadow-xl"
                />
              </div>
              
            </motion.div>
          </div>
        </motion.div>

        {/* Tech Stacks Grid */}
        <div className="grid md:grid-cols-2 gap-10 mt-10">
          {/* Frontend Card */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition duration-500 hover:shadow-2xl"
          >
            <div className="h-2 bg-gradient-to-r from-blue-400 to-indigo-600"></div>
            <div className="px-8 py-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                  <span className="text-blue-600 dark:text-blue-400 text-2xl">
                    <FaReact />
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Frontend</h3>
              </div>
              
              <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-6"
              >
                {frontendTech.map((tech, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="group flex flex-col items-center justify-center p-4 rounded-lg transition-all duration-300 hover:bg-blue-50 dark:hover:bg-gray-700"
                  >
                    <div className="text-5xl text-blue-600 dark:text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                      {tech.icon}
                    </div>
                    <p className="mt-3 text-gray-700 dark:text-gray-300 font-medium">{tech.name}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Backend Card */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition duration-500 hover:shadow-2xl"
          >
            <div className="h-2 bg-gradient-to-r from-indigo-600 to-blue-400"></div>
            <div className="px-8 py-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                  <span className="text-blue-600 dark:text-blue-400 text-2xl">
                    <FaNodeJs />
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Backend</h3>
              </div>
              
              <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              >
                {backendTech.map((tech, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="group flex flex-col items-center justify-center p-4 rounded-lg transition-all duration-300 hover:bg-blue-50 dark:hover:bg-gray-700"
                  >
                    <div className="text-5xl text-blue-600 dark:text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                      {tech.icon}
                    </div>
                    <p className="mt-3 text-gray-700 dark:text-gray-300 font-medium">{tech.name}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;