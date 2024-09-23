import React from "react";
import { Navbar } from "../Layout";
import { Main } from "../components";
const Freelance = () => {
  return (
    <div className=" px-6 py-6 bg-BgBlack relative">
      <div className="flex gap-6 max-md:flex-col relative">
        <div
          className={`fixed max-md:sticky max-md:top-0 bg-BgBlack max-md:py-6 z-50`}
        >
          <Navbar />
        </div>
        <div className="flex flex-col gap-6 flex-1 ml-[300px] max-md:m-0 ">
          <Main title="Shivan Chemicals" />
          <div className="flex flex-col gap-10">
            <div className="flex flex-col bg-Primary rounded-[28px] p-[48px] w-full gap-6">
              <h1 className=" text-Secondary font-LeagueGothic text-[40px]">
                The Brief
              </h1>
              <p className="text-Ter text-[14px] font-Inter">
                Shivan Chemicals is a leading manufacturer of high-quality
                chlorinated paraffin, supplying industries across the country.
                The company is committed to sustainability, delivering products
                that meet both local and international standards. The project
                for Shivan Chemicals involves creating a professional and
                user-friendly WordPress website that showcases their product
                offerings, company profile, certifications, and partnerships.
                The website will include a sleek design, clear navigation, and
                responsive features to enhance customer engagement and
                strengthen their online presence.
              </p>
            </div>
            <div className="flex max-sm:flex-col  items-center bg-Primary rounded-[28px]  w-full gap-6">
              <div className="">
                <img src="/Shivan1.png" alt="" className="  object-cover" />
              </div>
              <div className="">
                <img src="/Shivan2.png" alt="" className=" rounded-r-[28px]" />
              </div>
            </div>

            <div className="flex max-sm:flex-col  items-center bg-Primary rounded-lg px-5 py-5 w-full gap-6">
              <div>
                <a href="https://shivanchemicals.com/">
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

export default Freelance;
