import React from "react";
import { Stack, Mountain, Bug, Rocket } from "../assets";

const About = () => {
  return (
    <div>
      <div className="flex flex-col gap-6">
        <div className=" text-Secondary text-[32px] font-LeagueGothic">
          ABOUT
        </div>
        <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
          <div className="flex flex-col gap-10 bg-Primary rounded-[28px] p-[32px] justify-start">
            <div>
              <img src={Mountain} alt="" className="w-[28px]" />
            </div>
            <div>
              <p className=" text-Ter2 font-Inter text-[14px]">
                Enthusiatic Developer who Adapts Easily
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-10 bg-Primary rounded-[28px] p-[32px] justify-start">
            <div>
              <img src={Stack} alt="" className="w-[28px]" />
            </div>
            <div>
              <p className=" text-Ter2 font-Inter text-[14px]">
                A Love For Clean Code and Problem Solving
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-10 bg-Primary rounded-[28px] p-[32px] justify-start">
            <div>
              <img src={Bug} alt="" className="w-[28px]" />
            </div>
            <div>
              <p className=" text-Ter2 font-Inter text-[14px]">
                A habbit of finding and fixing bugs and working on new features
                that helps to improve the user experience
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-10 bg-Primary rounded-[28px] p-[32px] justify-start">
            <div>
              <img src={Rocket} alt="" className="w-[28px]" />
            </div>
            <div>
              <p className=" text-Ter2 font-Inter text-[14px]">
                A simple guy Who loves Formula 1 and Cricket
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
