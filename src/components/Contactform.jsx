import React from "react";

const Contactform = () => {
  return (
    <div>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className=" text-[32px] font-LeagueGothic text-Secondary">
            SEND A MESSAGE
          </h1>
        </div>
        <div>
          <form className="flex flex-col gap-6 w-full">
            <div className="flex gap-5">
              <input
                type="text"
                placeholder="Name"
                className=" p-4 rounded-xl bg-Primary text-[16px] text-white 
                placeholder:text-Ter3 placeholder:text-[16px] outline-none flex-1 font-Inter font-light"
              />
              <input
                type="email"
                placeholder="Email"
                className=" p-4 rounded-xl bg-Primary text-[16px] text-white 
                placeholder:text-Ter3 placeholder:text-[16px] outline-none flex-1 font-Inter font-light"
              />
            </div>
            <div className=" flex-1">
              <textarea
                name="text"
                id="subject"
                placeholder="Message"
                className=" p-4 rounded-xl bg-Primary text-[16px] text-white 
                placeholder:text-Ter3 placeholder:text-[16px] outline-none h-[200px] w-full font-Inter font-light "
              ></textarea>
            </div>
            <div>
              <button className=" bg-Secondary text-Primary font-Inter font-bold p-4 rounded-xl w-full">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactform;
