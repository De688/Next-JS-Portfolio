import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";

// Import your project images
import ecommerceImg from "../assets/ecommerce.jpg";
import chatappImg from "../assets/chatapp.jpg";
import mernImg from "../assets/mern.jpg";
import ngoImg from "../assets/ngo.jpg";

const ProjectCard =  ({ project, index }: { project: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="w-full max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-60">
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-700 ease-in-out"
          style={{
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      </div>
      
      <div className="p-6">
        <motion.h3 
          className="text-xl font-bold mb-2 text-indigo-600 dark:text-pink-400"
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.4 }}
        >
          {project.title}
        </motion.h3>
        
        <p className="text-gray-700 dark:text-gray-300 mb-4 h-24 overflow-hidden">
          {project.description}
        </p>
        
        <div className="flex items-center justify-between mt-6">
          <Link href={project.github}>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors dark:bg-pink-600 dark:hover:bg-pink-700"
            >
              <FiGithub /> Code
            </motion.a>
          </Link>
          
          <Link href={project.demo || "#"}>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-100 text-indigo-600 border border-indigo-200 rounded-md transition-colors dark:bg-gray-700 dark:text-pink-400 dark:border-pink-800 dark:hover:bg-gray-600"
            >
              <span>Demo</span>
              <FiExternalLink />
            </motion.a>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

function Work() {
  const projects = [
    {
      title: "E-commerce Website",
      description: "A beautiful e-commerce website built with MERN stack and Redux Toolkit. Fully responsive with modern UI/UX principles.",
      image: ecommerceImg,
      github: "https://github.com/De688",
      demo: "#"
    },
    {
      title: "Real-time Chat Application",
      description: "Real-time chat application built with React, Node.js, and Socket.io. Features include chatbot functionality, join/leave rooms, and instant messaging.",
      image: chatappImg,
      github: "https://github.com/De688",
      demo: "#"
    },
    {
      title: "MERN Stack World Tour",
      description: "Full MERN stack website including JWT authentication, MongoDB database, Node.js, Express, and Redux for state management.",
      image: mernImg,
      github: "https://github.com/De688",
      demo: "#"
    },
    {
      title: "NGO Website",
      description: "A purpose-driven NGO website built with React.js and Firebase, featuring donation capabilities and mission information.",
      image: ngoImg,
      github: "https://github.com/De688",
      demo: "#"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gray-50 dark:bg-gray-900" id="work">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
              <span className="text-gray-800 dark:text-white">My Recent </span>
              <span className="text-indigo-600 dark:text-pink-400">Work</span>
            </h2>
            <div className="w-24 h-1 bg-indigo-600 dark:bg-pink-400 mx-auto mb-6"></div>
            <p className="text-center text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
              A showcase of my latest projects and web applications developed with modern technologies
            </p>
          </motion.div>
          
          
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        
        {/* View More Projects Button */}
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link href="/projects">
            <motion.a 
              className="group flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 border border-indigo-200 rounded-lg shadow-md hover:shadow-lg transition-all dark:bg-gray-800 dark:text-pink-400 dark:border-pink-900"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View More Projects</span>
              <FiArrowRight className="transition-transform group-hover:translate-x-2" />
            </motion.a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Work;