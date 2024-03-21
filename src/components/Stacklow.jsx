import React from "react";
import StackData from "../Data/Stack.json";
import { Link } from "react-router-dom";

const Stacklow = ({
  limit1,
  Gridcol,
  flex,
  View,
  Head,
  Gap,
  fontsize,
  width,
  md,
  sm,
}) => {
  return (
    <div>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-[32px] text-Secondary font-LeagueGothic">
            {Head}
          </h1>
          <Link to="/Stack">
            <p className=" text-[14px] text-Ter2 font-Inter hover:translate-x-[-12px] duration-500 ease-in-out">{View}</p>
          </Link>
        </div>
        <div
          className={`grid grid-flow-row ${Gridcol} gap-4 w-full ${md} ${sm}`}
        >
          {StackData.slice(0, limit1).map((data) => {
            return (
              <div
                key={data.id}
                className={`flex ${flex} ${Gap} bg-Primary rounded-[28px] p-[24px] hover:bg-Primaryb `}
              >
                <img src={data.img} alt={data.name} className={` ${width}`} />
                <h1
                  className={` ${fontsize} font-LeagueGothic text-Secondary uppercase`}
                >
                  {data.name}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
      s
    </div>
  );
};

export default Stacklow;
