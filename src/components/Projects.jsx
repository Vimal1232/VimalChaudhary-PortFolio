import React from "react";
import Prodata from "../Data/Projects.json";
import { Link } from "react-router-dom";

const Projects = ({ Limit, Grid }) => {
  return (
    <div>
      <div className={`grid ${Grid} gap-6 max-sm:grid-cols-1 `}>
        {Prodata.slice(0, Limit).map((data) => {
          return (
            <div key={data.id} className=" ">
              <Link to={data.url} target="_blank">
                <div className="overflow-hidden rounded-[20px] flex flex-col gap-4">
                  <img
                    src={data.Img}
                    alt={data.name}
                    className="rounded-[20px] hover:scale-110 duration-700 ease-in-out "
                  />
                  <h3 className=" text-[28px] font-LeagueGothic text-Secondary uppercase">
                    {data.name}
                  </h3>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
