import React from "react";
import { Navbar } from "../Layout/index";
import { Main } from "../components";

const DiscordStudy = () => {
  return (
    <div className=" px-6 py-6 bg-BgBlack relative">
      <div className="flex gap-6 max-md:flex-col relative">
        <div
          className={`fixed max-md:sticky max-md:top-0 bg-BgBlack max-md:py-6 z-50`}
        >
          <Navbar />
        </div>
        <div className="flex flex-col gap-6 flex-1 ml-[300px] max-md:m-0 ">
          <Main title="ArtBot" />
          <div className="flex flex-col gap-10">
            <div className="flex flex-col bg-Primary rounded-[28px] p-[48px] w-full gap-6">
              <h1 className=" text-Secondary font-LeagueGothic text-[40px]">
                The Brief
              </h1>
              <p className="text-Ter text-[14px] font-Inter">
                ArtBot is an innovative Discord bot designed to transform your
                creative prompts into stunning digital artworks. Powered by
                advanced generative AI, ArtBot takes user-generated prompts and
                uses them to create unique and visually captivating art pieces.
                Whether you're an artist seeking inspiration, a gaming community
                looking to add a creative touch, or just someone who enjoys
                exploring new forms of digital art, ArtBot brings your ideas to
                life with just a few simple commands. Engage with the bot on
                your Discord server and watch as your imagination becomes a
                reality through beautifully generated artwork.
              </p>
            </div>
            <div className="flex max-sm:flex-col  items-center bg-Primary rounded-[28px]  w-full gap-6">
              <div className="">
                <img src="/ai.png" alt="" className="  object-cover" />
              </div>
              <div className="">
                <img src="/code.png" alt="" className=" rounded-r-[28px]" />
              </div>
            </div>
            <div className="flex flex-col  bg-Primary rounded-[28px] p-[48px]  w-full gap-6">
              <h1 className=" text-Secondary font-LeagueGothic text-[40px]">
                Some Results
              </h1>
              <div className=" flex gap-6 max-sm:flex-col">
                <div className="">
                  <img src="/1ai.webp" alt="" className=" rounded-[28px] " />
                </div>
                <div className="">
                  <img src="/2ai.webp" alt="" className=" rounded-[28px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscordStudy;
