import React, { useEffect } from "react";
import { Navbar } from "../Layout/index";
import { Main } from "../components/index";
import { Stacklow } from "../components/index";

const Stack = () => {
  useEffect(() => {
    fetch("/api/connection").then((res) => console.log(res));
  });
  return (
    <div>
      <div className=" px-6 py-6 bg-BgBlack relative">
        <div className="flex gap-6 max-md:flex-col relative ">
          <div
            className={`fixed max-md:sticky max-md:top-0 bg-BgBlack max-md:py-6 z-50`}
          >
            <Navbar />
          </div>
          <div className="flex flex-col gap-6 flex-1 ml-[300px] max-md:m-0 ">
            <Main title="STACK" content="tools and resources." />

            <Stacklow
              flex="flex-col"
              Gridcol="grid-cols-3"
              Gap="gap-20"
              fontsize="text-[42px]"
              width="w-[48px]"
              md="max-md:grid-cols-2"
              sm="max-sm:grid-cols-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
