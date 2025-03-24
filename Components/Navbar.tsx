import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Link as SLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import { TiSocialTwitter, TiSocialLinkedin } from "react-icons/ti";
import { AiFillGithub } from "react-icons/ai";
import { BsFillMoonFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";
import logo from "../assets/imglogo.png";

function Navbar() {
  const [shadow, setShadow] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleShadow = () => {
      if (window.scrollY >= 10) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
    return () => window.removeEventListener('scroll', handleShadow);
  }, []);

  const navItems = [
    { title: "HOME", to: "hero" },
    { title: "ABOUT", to: "about" },
    { title: "PROJECTS", to: "tech" },
    { title: "CONTACT", to: "contact" },
  ];

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    return (
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
        className="relative p-3 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 dark:bg-blue-400/10 dark:hover:bg-blue-400/20 transition-all duration-300"
      >
        {currentTheme === "dark" ? (
          <FiSun className="w-5 h-5 text-blue-500 dark:text-blue-400" />
        ) : (
          <BsFillMoonFill className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        )}
      </motion.button>
    );
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-500`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          shadow
            ? "backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 shadow-lg shadow-blue-500/5"
            : "bg-transparent"
        }`}
      />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 z-10"
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
              <div className="relative">
                <Image
                  src={logo}
                  alt="logo"
                  width={48}
                  height={48}
                  className="rounded-full   "
                />
              </div>
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Chris Web Dev
            </span>
          </motion.div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center">
            <div className="flex items-center space-x-2">
              {navItems.map((item) => (
                <SLink key={item.to} to={item.to} smooth={true} spy={true}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative px-4 py-2"
                  >
                    <span className="relative z-10 text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors group-hover:text-white">
                      {item.title}
                    </span>
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 hover:opacity-10 transition-opacity duration-300"
                    />
                  </motion.div>
                </SLink>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="hidden md:block"
            >
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="relative p-2 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300"
              >
                {theme === "dark" ? (
                  <FiSun className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                ) : (
                  <BsFillMoonFill className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                )}
              </motion.button>
            </motion.div>

            {/* Contact Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block px-4 py-2 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Get in Touch
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="md:hidden relative p-2 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10"
              onClick={() => setShowNav(true)}
            >
              <RxHamburgerMenu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {showNav && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setShowNav(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed top-0 right-0 w-72 h-full bg-gradient-to-b from-white/90 to-blue-50/90 dark:from-gray-900/90 dark:to-blue-900/90 backdrop-blur-xl z-50 md:hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xl font-bold text-blue-500 dark:text-blue-400">Menu</span>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowNav(false)}
                    className="p-2 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 dark:bg-blue-400/10 dark:hover:bg-blue-400/20"
                  >
                    <FaTimes className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                  </motion.button>
                </div>
                <div className="space-y-6">
                  {navItems.map((item) => (
                    <SLink
                      key={item.to}
                      to={item.to}
                      smooth={true}
                      spy={true}
                      onClick={() => setShowNav(false)}
                    >
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="block py-2 text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                      >
                        {item.title}
                      </motion.div>
                    </SLink>
                  ))}
                  {renderThemeChanger()}
                </div>
                
                <motion.div className="flex gap-4 mt-8">
                  {[AiFillGithub, TiSocialLinkedin, TiSocialTwitter].map(
                    (Icon, index) => (
                      <motion.a
                        key={index}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 dark:bg-blue-400/10 dark:hover:bg-blue-400/20"
                      >
                        <Icon className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                      </motion.a>
                    )
                  )}
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;