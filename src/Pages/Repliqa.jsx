import React from "react";
import { Navbar } from "../Layout/index";
import { Main } from "../components";

const Repliqa = () => {
  return (
    <div className=" px-6 py-6 bg-BgBlack relative">
      <div className="flex gap-6 max-md:flex-col relative">
        <div
          className={`fixed max-md:sticky max-md:top-0 bg-BgBlack max-md:py-6 z-50`}
        >
          <Navbar />
        </div>
        <div className="flex flex-col gap-6 flex-1 ml-[300px] max-md:m-0 ">
          <Main title="Repliqa" />
          <div className="flex flex-col gap-10">
            <div className="flex flex-col bg-Primary rounded-[28px] p-[48px] w-full gap-6">
              <h1 className=" text-Secondary font-LeagueGothic text-[40px]">
                The Brief
              </h1>
              <p className="text-Ter text-[14px] font-Inter">
                Repliqa-Temporary Email Service is a platform designed to
                provide users with disposable email addresses for temporary use.
                It helps protect privacy by allowing users to generate and use
                email addresses without exposing their personal information.
                These temporary emails can be used to receive messages and
                verifications, offering a convenient solution for avoiding spam
                and safeguarding real email accounts during online sign-ups or
                short-term communication needs.
              </p>
            </div>
            <div className="flex max-sm:flex-col  items-center bg-Primary rounded-[28px]  w-full gap-6">
              <div className="">
                <img src="/repliqa2.png" alt="" className="  object-cover" />
              </div>
              <div className="">
                <img src="/code2.png" alt="" className=" rounded-r-[28px]" />
              </div>
            </div>

            <div className="flex max-sm:flex-col  items-center bg-Primary rounded-lg px-5 py-5 w-full gap-6">
              <div>
                <a href="https://repliqa-temporary-email.vercel.app/">
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

export default Repliqa;
