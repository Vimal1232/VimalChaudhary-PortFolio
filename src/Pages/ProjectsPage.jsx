import React from "react";
import { Navbar } from "../Layout/index";
import { Main, Projects } from "../components";

const ProjectsPage = () => {
  return (
    <div className=" px-6 py-6 bg-BgBlack relative">
      <div className="flex gap-6 max-md:flex-col relative">
        <div
          className={`fixed max-md:sticky max-md:top-0 bg-BgBlack max-md:py-6 z-50`}
        >
          <Navbar />
        </div>
        <div className="flex flex-col gap-6 flex-1 ml-[300px] max-md:m-0 ">
          <Main title="PROJECTS" content="Here is Some of my work" />
          <div>
            <Projects Grid="grid-cols-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
