import React from "react";
import { Navbar } from "../Layout/index";
import { Main } from "../components";

const NoCopy = () => {
  return (
    <div className=" px-6 py-6 bg-BgBlack relative">
      <div className="flex gap-6 max-md:flex-col relative">
        <div
          className={`fixed max-md:sticky max-md:top-0 bg-BgBlack max-md:py-6 z-50`}
        >
          <Navbar />
        </div>
        <div className="flex flex-col gap-6 flex-1 ml-[300px] max-md:m-0 ">
          <Main title="No Copy Left" />
          <div className="flex flex-col gap-10">
            <div className="flex flex-col bg-Primary rounded-[28px] p-[48px] w-full gap-6">
              <h1 className=" text-Secondary font-LeagueGothic text-[40px]">
                The Brief
              </h1>
              <p className="text-Ter text-[14px] font-Inter">
                No copy Left is a private file-sharing web app designed for
                utmost privacy and security. It allows users to share files
                without leaving any trace. Files are automatically incinerated
                after 10 Minutes, ensuring that they do not persist
                indefinitely. No login or authentication is required, and each
                uploaded file is identified by a unique Id. Additionally,
                session identifiers allow users to access the file upload page
                even if they close and reopen the browser. Files are uploaded as
                buffers and stored securely in MongoDB, where they are later
                deleted after the set time.
              </p>
            </div>
            <div className="flex max-sm:flex-col  items-center bg-Primary rounded-[28px]  w-full gap-6">
              <div className="">
                <img src="/Nocopf.png" alt="" className="  object-cover" />
              </div>
            </div>

            <div className="flex max-sm:flex-col  items-center bg-Primary rounded-lg px-5 py-5 w-full gap-6">
              <div>
                <a href="https://no-copy-left.vercel.app/">
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

export default NoCopy;
