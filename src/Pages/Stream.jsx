import React from "react";
import { Navbar } from "../Layout/index";
import { Main } from "../components";

const Stream = () => {
  return (
    <div className=" px-6 py-6 bg-BgBlack relative">
      <div className="flex gap-6 max-md:flex-col relative">
        <div
          className={`fixed max-md:sticky max-md:top-0 bg-BgBlack max-md:py-6 z-50`}
        >
          <Navbar />
        </div>
        <div className="flex flex-col gap-6 flex-1 ml-[300px] max-md:m-0 ">
          <Main title="Stream It" />
          <div className="flex flex-col gap-10">
            <div className="flex flex-col bg-Primary rounded-[28px] p-[48px] w-full gap-6">
              <h1 className=" text-Secondary font-LeagueGothic text-[40px]">
                The Brief
              </h1>
              <p className="text-Ter text-[14px] font-Inter">
                Stream It is a live streaming platform that enables users to
                watch high-quality video streams in real time. Leveraging HLS
                and an RTMP server, it delivers seamless and synchronized
                streaming experiences to multiple viewers simultaneously.
              </p>
            </div>
            <div className="flex max-sm:flex-col  items-center bg-Primary rounded-[28px]  w-full gap-6">
              <div className="">
                <img src="/stream2.png" alt="" className="  object-cover" />
              </div>
              <div>
                <img src="/streamcode.png" alt="" className=" object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stream;
