import React from "react";
import { Navbar } from "../Layout/index";
import { Main } from "../components";

const Chip = () => {
  return (
    <div className=" px-6 py-6 bg-BgBlack relative">
      <div className="flex gap-6 max-md:flex-col relative">
        <div
          className={`fixed max-md:sticky max-md:top-0 bg-BgBlack max-md:py-6 z-50`}
        >
          <Navbar />
        </div>
        <div className="flex flex-col gap-6 flex-1 ml-[300px] max-md:m-0 ">
          <Main title="Chip-8" />
          <div className="flex flex-col gap-10">
            <div className="flex flex-col bg-Primary rounded-[28px] p-[48px] w-full gap-6">
              <h1 className=" text-Secondary font-LeagueGothic text-[40px]">
                The Brief
              </h1>
              <p className="text-Ter text-[14px] font-Inter">
                A fully functional emulator for the Chip-8 virtual machine,
                designed to accurately run classic games from the 1970s and
                1980s. The emulator replicates the behavior of the original
                Chip-8 system, including its 4KB memory, 16 8-bit registers,
                stack operations, timers, and instruction set. Built from
                scratch with a focus on low-level systems understanding and
                emulator architecture.
              </p>
            </div>
            <div className="flex max-sm:flex-col  items-center bg-Primary rounded-[28px]  w-full gap-6">
              <div className="">
                <img src="/chip.png" alt="" className="  object-cover" />
              </div>
              <div>
                <img src="/Chipcode.png" alt="" className=" object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chip;
