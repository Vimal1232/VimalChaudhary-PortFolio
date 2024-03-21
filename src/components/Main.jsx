import React from "react";

const Main = ({ title, content }) => {
  return (
    <div className="">
      <div className="flex bg-Primary rounded-[28px] p-[48px] items-end w-full h-[320px]">
        <div>
          <p className=" text-Secondary text-[64px] font-LeagueGothic ">
            {title}
          </p>
          <p className=" text-Ter text-[14px] font-Inter">{content}</p>
        </div>
      </div>
  
    </div>
  );
};

export default Main;
