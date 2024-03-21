import React, { useState } from "react";
import { Navbar, Projectlay } from "../Layout/index";
import { Main, About, Stacklow } from "../components/index";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className=" px-6 py-6 bg-BgBlack relative">
      <div className="flex gap-6 max-md:flex-col relative ">
        <div
          className={`fixed max-md:sticky max-md:top-0 bg-BgBlack max-md:py-6 z-50`}
        >
          <Navbar />
        </div>
        <div className="flex flex-col gap-6 flex-1 ml-[300px] max-md:m-0 ">
          <Main
            title="HELLO! I'M VIMAL."
            content="I'm a Web Developer from Delhi, India."
          />
          <div className="grid grid-cols-3 gap-6 max-sm:grid-cols-1">
            <div className=" col-span-2 max-sm:col-span-1">
              <About />
            </div>
            <div className="">
              <Stacklow
                limit1="4"
                View="View all ->"
                Head="STACK"
                Gap="gap-3"
                fontsize="text-[28px]"
                width={`w-[28px]`}
              />
            </div>
          </div>
          <div>
            <Projectlay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
