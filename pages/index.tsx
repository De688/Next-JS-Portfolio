import type { NextPage } from "next";
import Head from "next/head";
import About from "../Components/About";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Technologies from "../Components/Technologies";
import Work from "../Components/Work";

const Home: NextPage = () => {
  return (
    <div className="flex flex-column  ">
      <Navbar />
      <div className="w-full h-screen ">
        <Hero />
        <About />
        <Technologies />
        <Work />
      </div>
    </div>
  );
};

export default Home;
