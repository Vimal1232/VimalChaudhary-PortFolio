import React from "react";
import { Projects } from "../components";
import { Link } from "react-router-dom";

const Projectlay = () => {
  return (
    <div>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <h2 className="text-[32px] text-Secondary font-LeagueGothic">
            PROJECTS
          </h2>
          <Link to="/Projects">
            <p className="text-[14px] text-Ter2 font-Inter  hover:translate-x-[-12px] duration-500 ease-in-out">
              View All {"->"}
            </p>
          </Link>
        </div>

        <div>
          <Projects Limit={3} Grid="grid-cols-3" />
        </div>
      </div>
    </div>
  );
};

export default Projectlay;
