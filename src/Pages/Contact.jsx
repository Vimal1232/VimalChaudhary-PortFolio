import React from "react";
import Navbar from "../Layout/Navbar";
import { Main, Contactform } from "../components";

const Contact = () => {
  return (
    <div className=" px-6 py-6 bg-BgBlack relative">
      <div className="flex gap-6 max-md:flex-col relative ">
        <div
          className={`fixed max-md:sticky max-md:top-0 bg-BgBlack max-md:py-6 z-50`}
        >
          <Navbar />
        </div>
        <div className="flex flex-col gap-6 flex-1 ml-[300px] max-md:m-0">
          <Main
            title="CONTACT."
            content="Want to work with together? Send me a message!"
          />
          <Contactform />
        </div>
      </div>
    </div>
  );
};

export default Contact;
