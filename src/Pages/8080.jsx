import React from "react";
import { Navbar } from "../Layout/index";
import { Main } from "../components";

const Intel = () => {
  return (
    <div className=" px-6 py-6 bg-BgBlack relative">
      <div className="flex gap-6 max-md:flex-col relative">
        <div
          className={`fixed max-md:sticky max-md:top-0 bg-BgBlack max-md:py-6 z-50`}
        >
          <Navbar />
        </div>
        <div className="flex flex-col gap-6 flex-1 ml-[300px] max-md:m-0 ">
          <Main title="Intel 8080 Space Invaders Emulator" />
          <div className="flex flex-col gap-10">
            <div className="flex flex-col bg-Primary rounded-[28px] p-[48px] w-full gap-6">
              <h1 className=" text-Secondary font-LeagueGothic text-[40px]">
                The Brief
              </h1>
              <p className="text-Ter text-[14px] font-Inter">
                A fully functional emulator for the Intel 8080 microprocessor,
                This project is a complete emulator for the Intel 8080
                microprocessor, capable of running the Space Invaders arcade
                game. It features 64KB of memory, utilizing 8KB for ROM, 1KB for
                RAM, and 7KB for VRAM. All instructions and interrupts are
                emulated, with SDL used for graphics rendering.
              </p>
            </div>
            <div className="grid grid-cols-2 max-sm:grid-cols-1 items-center bg-Primary rounded-[28px]  w-full gap-6">
              <div className="">
                <img src="/Intel8080.gif" alt="" className="  object-cover" />
              </div>
              <div>
                <img src="/8080Code.png" alt="" className=" object-cover" />
              </div>
            </div>
            <div className="flex max-sm:flex-col  items-center bg-Primary rounded-lg px-5 py-5 w-full gap-6">
              <div>
                <a
                  target="_blank"
                  href="https://github.com/Vimal1232/Intel8080"
                >
                  <p className="text-Secondary font-LeagueGothic text-[40px]">
                    See It For yourself{" "}
                    <span className="text-Ter text-[14px] font-Inter">
                      {"<--- Click Here"}
                    </span>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intel;
