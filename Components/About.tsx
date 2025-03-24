import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import chrisimg from "../assets/chrisimage.jpg";
import { FaTelegramPlane, FaInstagram, FaDiscord } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { motion, useInView, useAnimation } from "framer-motion";

function About() {
  const controls = useAnimation();
  const skillsRef = useRef(null);
  const isInView = useInView(skillsRef, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const fadeInUp = {
    hidden: { y: 60, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const staggerCards = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const skills = [
    "With over three years of experience in web development, I have a strong understanding of the industry",
    "I am dedicated to ensuring that my work effectively addresses the specific needs of my clients, and I strive to create websites that are both functional and visually appealing.",
    "I am an easy communicator, making it easy for us to work together comfortably",
    "Additionally, I am not afraid to ask probing questions in order to fully comprehend and fulfill my clients' needs."
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-20" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            <span className="inline-block relative">
              About Me
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform origin-left"></span>
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Get to know the person behind the code
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Profile Card */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
          >
            <div className="relative h-48 bg-gradient-to-r from-blue-500 to-indigo-600">
              <div className="absolute -bottom-16 left-8">
                <div className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 overflow-hidden shadow-lg">
                  <Image
                    src={chrisimg}
                    width={128}
                    height={128}
                    alt="Profile Photo"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="pt-20 pb-8 px-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Christopher</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-6">Web Developer </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                "Greetings, I am a multifaceted professional with expertise in
                web development and freelancing. I assist
                individuals and businesses in achieving success online through
                the development of professional websites. Furthermore, I am
                deeply passionate about business startups and am constantly
                seeking opportunities to expand my knowledge and skills in this
                field."
              </p>
              
              <div className="flex space-x-5 items-center justify-center">
                <Link href="https://t.me/Tt000123466" className="transform transition hover:scale-110">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-gray-700 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300">
                    <FaTelegramPlane className="text-lg" />
                  </div>
                </Link>
                <Link href="https://www.instagram.com/tanzania_web_dev/" className="transform transition hover:scale-110">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-gray-700 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300">
                    <FaInstagram className="text-lg" />
                  </div>
                </Link>
                <Link href="https://www.facebook.com/de.daniel.756" className="transform transition hover:scale-110">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-gray-700 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300">
                    <MdFacebook className="text-lg" />
                  </div>
                </Link>
                <Link href="https://discord.com/channels/Christopher#0001" className="transform transition hover:scale-110">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-gray-700 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300">
                    <FaDiscord className="text-lg" />
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Skills Cards */}
          <motion.div 
            ref={skillsRef}
            variants={staggerCards}
            initial="hidden"
            animate={controls}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">Why work with Me</h3>
            
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeInUp}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-blue-600"
              >
                <p className="text-gray-700 dark:text-gray-300">{skill}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Background Elements */}
        
      </div>
    </div>
  );
}

export default About;