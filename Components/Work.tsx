import React from "react";
import Image from "next/image";
import Portfolioimg from "../assets/portfolio.jpg";
import Chatappimg from "../assets/chatapp.jpg";

function Work() {
  return (
    <div className="w-full min-h-full ">
      <div className="w-full min-h-[150px]  flex justify-end items-center">
        <div className="w-[600px] rounded-l-full bg-[white] shadow-xl h-[150px] flex justify-center items-center mt-[30px] text-3xl sm:text-4xl md:text-6xl pr-[20px] font-abc ">
          My recent <span className="text-[#434dd3fb] pl-4">Works</span>
        </div>
      </div>
      <div className="w-full min-h-full flex flex-wrap justify-around items-center px-[10px] pt-[100px] ">
        <div className="w-[470px]  min-h-[470px] border-none rounded-xl md:hover:scale-105 transition duration-500 pb-[40px]">
          <Image
            src={Portfolioimg}
            width={470}
            height={470}
            className=" rounded-xl cursor-pointer"
          />
          <div className="w-full min-h-[50px]   z-[30]">
            <div className="text-2xl text-[#3134d4] font-abc font-bold">
              React JS portfolio 1.0
            </div>
            <p className="text-[#3134d4] font-abc font-bold">
              Lorem ipsum d elit. velit officiis sequi temporibus nam minus,
              blanditiis optio, ullam culpa consequatur inventore.
            </p>
          </div>
        </div>
        <div className="w-[470px]  min-h-[470px] border-none rounded-xl md:hover:scale-105 transition duration-500 pb-[40px]">
          <Image
            src={Chatappimg}
            width={470}
            height={470}
            className="rounded-xl cursor-pointer"
          />
          <div className="w-full min-h-[50px]   z-[30]">
            <div className="text-2xl text-[#3134d4] font-abc font-bold">
              Real time Chat web application{" "}
            </div>
            <p className="text-[#3134d4] font-abc font-bold">
              Lorem ipsum d elit. velit officiis sequi temporibus nam minus,
              blanditiis optio, ullam culpa consequatur inventore.
            </p>
          </div>
        </div>
        <div className="w-[470px]  min-h-[470px] border-none rounded-xl md:hover:scale-105 transition duration-500 pb-[40px]">
          <Image
            src={Chatappimg}
            width={470}
            height={470}
            className="rounded-xl cursor-pointer"
          />
          <div className="w-full min-h-[50px]   z-[30]">
            <div className="text-2xl text-2xl text-[#3134d4] font-abc font-bold">
              Real time Chat web application{" "}
            </div>
            <p className=" text-[#3134d4] font-abc font-bold tracking-wide">
              Lorem ipsum d elit. velit officiis sequi temporibus nam minus,
              blanditiis optio, ullam culpa consequatur inventore.
            </p>
          </div>
        </div>
        <div className="w-[470px]  min-h-[470px] border-none rounded-xl md:hover:scale-105 transition duration-500 pb-[40px]">
          <Image
            src={Portfolioimg}
            width={470}
            height={470}
            className=" rounded-xl cursor-pointer"
          />
          <div className="w-full min-h-[50px]   z-[30]">
            <div className="text-2xl text-2xl text-[#3134d4] font-abc font-bold">
              React JS portfolio 1.0
            </div>
            <p className=" text-[#3134d4] font-abc font-bold">
              Lorem ipsum d elit. velit officiis sequi temporibus nam minus,
              blanditiis optio, ullam culpa consequatur inventore.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
