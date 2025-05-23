import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { IoMdCall } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";

function CallToAction() {
  const [messagesent, setmessagesent] = useState(false);
  const [Error, setError] = useState(false);

  const form = useRef<HTMLFormElement>(null!);
  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_84djbgb",
        "template_rjy9kik",
        form.current,
        "gFkJt-KVh-Ytbng-z"
      )
      .then(
        (result) => {
          setmessagesent(true);
        },
        (error) => {
          setError(true);
        }
      );
  };
  useEffect(() => {
    const Timeout = setTimeout(() => {
      if (messagesent) {
        setmessagesent(false);
      }
      if (Error) {
        setError(false);
      }
    }, 7000);
  }, [messagesent, Error]);

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center" id="contact">
      <div className="w-[100%] md:w-[100%]  min-h-[100%] flex flex-col md:flex-row justify-start items-center md:items-start">
        <div className="w-[90%] pb-5 md:w-[50%] min-h-full flex flex-col justify-center md:justify-start pt-[40px] md:pl-[50px]">
          <div className="text-4xl font-bold min-h-[50px] flex justify-center md:justify-start text-[#626be9f9] dark:text-[#f15bff] font-abc pb-20">
            Get in Touch
          </div>
          <div className="min-w-[350px] min-h-[350px] flex justify-center">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col justify-center items-center md:justify-start md:items-start"
            >
              <div className="pb-10">
                <label className="relative">
                  <input
                    type="text"
                    name="user_name"
                    className="min-w-[300px] md:w-[450px] h-[50px]  text-blue-500 dark:text-[#f15bff] border-2 border-[#5a53686f] rounded-xl bg-[transparent] p-[10px] outline-none focus:border-blue-700 dark:focus:border-[#f15bff] transtion duration-200"
                  />
                  <span className="text-2xl  mt-2 ml-10 pl-2 pr-2 text-[#5a53686f] absolute left-0 transtion duration-200 float-text">
                    Name
                  </span>
                </label>
              </div>
              <div className="pb-10">
                <label className="relative my-20  ">
                  <input
                    type="email"
                    name="user_email"
                    className="mb-[20px] min-w-[300px] md:w-[450px] h-[50px] text-blue-500 dark:text-[#f15bff] border-2 border-[#5a53686f] rounded-xl bg-[transparent] p-[10px] outline-none focus:border-blue-700 dark:focus:border-[#f15bff] transtion duration-200"
                  />
                  <span className="text-2xl  mt-2 ml-10 pl-2 pr-2 text-[#5a53686f]  absolute left-0 transtion duration-200 float-email">
                    Email
                  </span>
                </label>
              </div>
              <div className="pb-10">
                <label className="relative my-20">
                  <textarea
                    placeholder="your message..."
                    name="message"
                    className=" placeholder:text-2xl min-w-[300px] md:w-[450px] text-blue-500 dark:text-[#f15bff] placeholder:text-[#6361666c] placeholder:pl-10 mb-[20px]  h-[200px] border-2 border-[#5a53686f] rounded-xl bg-[transparent] p-[10px] outline-none focus:border-blue-700 dark:focus:border-[#f15bff] transtion duration-200"
                  />
                </label>
              </div>
              {messagesent ? (
                <div className="w-[80%] p-3 min-h-[50px] mb-5 px-[40px] flex justify-center items-center text-center flex-wrap bg-green-200 text-green-800 rounded-full transition-all ">
                  message sent successfully, thank you i will get back to you as
                  soon as i receive this message
                </div>
              ) : (
                <></>
              )}
              {Error ? (
                <div className="w-[80%] p-3 min-h-[50px] mb-5 px-[40px] flex justify-center items-center text-center flex-wrap bg-red-100 rounded-full transition-all text-red-600 ">
                  action Failed , check your internet connection and try again
                  :(
                </div>
              ) : (
                <></>
              )}
              <button
                type="submit"
                value="Send"
                className="w-[300px] md:w-[360px] md:w-[150px] h-[50px] rounded-full shadow-xl text-white bg-blue-800 dark:bg-[#f15bffc9] transition-all  hover:bg-blue-600"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
        <div className=" md:w-[50%] min-h-[400px] md:h-screen flex flex-col items-center md:items-start bg-[#e0dfe2] dark:bg-[#353436]">
          <div className="pl-[50px] text-4xl font-bold h-[50px] text-[#626be9f9] dark:text-[#f15bff] font-abc pb-[100px] pt-10">
            Contact Me
          </div>
          <p className=" md:w-[300px] flex flex-col text-[#626be9f9] dark:text-[#f15bff] md:pl-[50px] text-center md:text-start">
            Thanks for reaching me, i'm happily waiting for your message hoping
            to work together
          </p>
          <div className="flex w-[70%] md:w-[50%]  justify-between text-[#626be9f9] dark:text-[#f15bff] items-center md:pl-[50px] pt-5">
            <IoMdCall />
            <span className="pl-10">+255783751907</span>
          </div>
          <div className="flex w-[70%] md:w-[50%]  justify-between text-[#626be9f9] dark:text-[#f15bff] items-center md:pl-[50px] pt-5">
            <MdAlternateEmail />
            <span className="pl-10">Dedaniel688@gmail.com</span>
          </div>
          <div className="flex w-[70%] md:w-[50%] justify-between text-[#626be9f9] dark:text-[#f15bff] items-center md:pl-[50px] pt-5">
            <MdLocationOn />
            <span className="pl-10">Mwanza,Tanzania</span>
          </div>
        </div>
      </div>
      <div className="w-full px-5 text-center min-h-20 font-abc bg-blue-800 dark:bg-[#f15bffc9] text-white flex justify-center items-center">
        copyright©2025 Christopher Daniel. All rights reserved
      </div>
    </div>
  );
}

export default CallToAction;
