import React from "react";
import { TiSocialTwitter, TiSocialLinkedin } from "react-icons/ti";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import Link from "next/link";

function Hero() {
  return (
    <div
      className="relative w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-900/20 pt-16"
      id="hero"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 text-center mt-8">
        {/* Main Content */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          {/* Headline */}
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Crafting Digital Excellence for Businesses
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Transform your online presence with custom, high-performance websites
          </p>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-4 mt-8 text-left">
            {[
              {
                title: "Boost Visibility",
                description: "Stand out online and attract more customers",
              },
              {
                title: "Drive Growth",
                description: "Convert visitors into loyal customers",
              },
              {
                title: "24/7 Support",
                description: "Dedicated assistance whenever you need it",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-xl"
              >
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 space-y-4"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transform transition-all duration-300"
              >
                Start Your Journey
              </motion.button>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center gap-4 mt-8"
          >
            {[
              { icon: AiFillGithub, href: "https://github.com/De688" },
              {
                icon: TiSocialLinkedin,
                href: "https://www.linkedin.com/in/christopher-daniel-46055820a/",
              },
              { icon: TiSocialTwitter, href: "https://twitter.com/DeDaniel13" },
            ].map((social, index) => (
              <Link key={index} href={social.href}>
                <motion.div
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <social.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 rounded-full border-2 border-blue-500 dark:border-blue-400 flex justify-center p-1"
        >
          <motion.div className="w-1 h-1 rounded-full bg-blue-500 dark:bg-blue-400" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
