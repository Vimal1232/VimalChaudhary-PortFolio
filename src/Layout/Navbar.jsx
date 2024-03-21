import React, { useState, useEffect } from "react";
import { Ham, Close } from "../assets/index";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

import { Image } from "../assets/index";
const Navbar = () => {
  const [value, setValue] = useState();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  function handleClick(newValue) {
    setValue(newValue);
  }

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setValue(1);
        break;
      case "/Projects":
        setValue(2);
        break;
      case "/Stack":
        setValue(3);
        break;
      case "/Contact":
        setValue(4);
        break;
    }
  }, [location]);

  return (
    <div
      className={` p-[48px] bg-Primary rounded-[28px] flex h-screen justify-evenly max-md:h-auto flex-col `}
    >
      <div className="flex flex-col gap-20 max-md:flex-1  justify-start max-md:flex-row max-md:justify-between max-md:items-center">
        <div className="text-Secondary font-LeagueGothic text-[28px]">
          VimalChaudhary
        </div>
        <div className={`flex flex-col uppercase max-md:hidden`}>
          <Link to="/">
            <div
              className={`${
                value === 1 ? "text-Secondary" : "text-Ter2"
              } font-LeagueGothic text-[40px] tracking-[0.02em] leading-[1.2em]  cursor-pointer`}
              onClick={() => handleClick(1)}
            >
              Home
            </div>
          </Link>
          <Link to="/Projects">
            <div
              className={`${
                value === 2 ? "text-Secondary" : "text-Ter2"
              } font-LeagueGothic text-[40px] tracking-[0.02em] leading-[1.2em] text-start cursor-pointer`}
              onClick={() => handleClick(2)}
            >
              Projects
            </div>
          </Link>
          <Link to="/Stack">
            <div
              className={`${
                value === 3 ? "text-Secondary" : "text-Ter2"
              } font-LeagueGothic text-[40px] tracking-[0.02em] leading-[1.2em] text-start cursor-pointer`}
              onClick={() => handleClick(3)}
            >
              Stack
            </div>
          </Link>
          <Link to="/Contact">
            <div
              className={`${
                value === 4 ? "text-Secondary" : "text-Ter2"
              } font-LeagueGothic text-[40px] tracking-[0.02em] leading-[1.2em] text-start cursor-pointer`}
              onClick={() => handleClick(4)}
            >
              Contact
            </div>
          </Link>
        </div>
        <div className="flex gap-5 flex-1  justify-end mt-24 max-md:hidden">
          <div>
            <img src={Image} alt="" className="w-[48px] rounded-full" />
          </div>
          <div className="flex flex-col items-start justify-center">
            <p className=" text-Ter font-Inter text-[14px]">Vimal Chaudhary</p>
            <p className=" text-Ter3 font-Inter text-[12px]">Web Developer</p>
          </div>
        </div>
        <div>
          <img
            src={open === true ? Close : Ham}
            alt=""
            className={` w-[32px] max-md:flex hidden cursor-pointer`}
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>
      <motion.div
        initial={{ height: "0vh" }}
        animate={{ height: open === true ? "100vh" : "0vh" }}
        transition={{ duration: 0.5 }}
        className={`${
          open === true ? "h-screen " : "h-0"
        } max-md:flex  w-full bg-Primary`}
      >
        <div
          className={`${open === true ? "flex" : "hidden"}  flex-col pt-20 `}
        >
          <div className={`flex flex-col uppercase`}>
            <Link to="/">
              <div
                className={`${
                  value === 1 ? "text-Secondary" : "text-Ter2"
                } font-LeagueGothic text-[40px] tracking-[0.02em] leading-[1.2em]  cursor-pointer`}
                onClick={() => handleClick(1)}
              >
                Home
              </div>
            </Link>
            <Link to="/Projects">
              <div
                className={`${
                  value === 2 ? "text-Secondary" : "text-Ter2"
                } font-LeagueGothic text-[40px] tracking-[0.02em] leading-[1.2em] text-start cursor-pointer`}
                onClick={() => handleClick(2)}
              >
                Projects
              </div>
            </Link>
            <Link to="/Stack">
              <div
                className={`${
                  value === 3 ? "text-Secondary" : "text-Ter2"
                } font-LeagueGothic text-[40px] tracking-[0.02em] leading-[1.2em] text-start cursor-pointer`}
                onClick={() => handleClick(3)}
              >
                Stack
              </div>
            </Link>
            <Link to="/Contact">
              <div
                className={`${
                  value === 4 ? "text-Secondary" : "text-Ter2"
                } font-LeagueGothic text-[40px] tracking-[0.02em] leading-[1.2em] text-start cursor-pointer`}
                onClick={() => handleClick(4)}
              >
                Contact
              </div>
            </Link>
          </div>
          <div className="flex gap-5 flex-1 items-center mt-24 ">
            <div>
              <img src={Image} alt="" className="w-[48px] rounded-full" />
            </div>
            <div className="flex flex-col  ">
              <p className=" text-Ter font-Inter text-[14px]">
                Vimal Chaudhary
              </p>
              <p className=" text-Ter3 font-Inter text-[12px]">Web Developer</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
