import React from "react";
import { Navbar } from "../Layout/index";
import { Main } from "../components";

const Huffman = () => {
  return (
    <div className=" px-6 py-6 bg-BgBlack relative">
      <div className="flex gap-6 max-md:flex-col relative">
        <div
          className={`fixed max-md:sticky max-md:top-0 bg-BgBlack max-md:py-6 z-50`}
        >
          <Navbar />
        </div>
        <div className="flex flex-col gap-6 flex-1 ml-[300px] max-md:m-0 ">
          <Main title="Compression Using Huffman Coding in C++" />
          <div className="flex flex-col gap-10">
            <div className="flex flex-col bg-Primary rounded-[28px] p-[48px] w-full gap-6">
              <h1 className=" text-Secondary font-LeagueGothic text-[40px]">
                The Brief
              </h1>
              <p className="text-Ter text-[14px] font-Inter">
                This project implements Huffman coding, a lossless data
                compression algorithm, in C++. It efficiently compresses text
                files by assigning variable-length codes to characters based on
                their frequencies. The program reads a text file, builds a
                Huffman tree, generates codes, Output Compressed File It also
                includes functionality to decompress the data back to its
                original form.
              </p>
            </div>
            <div className="flex max-sm:flex-col  items-center bg-Primary rounded-[28px]  w-full gap-6">
              <div className="">
                <img src="/huff1.png" alt="" className="  object-cover" />
              </div>
              <div className="">
                <img src="/huff2.png" alt="" className="  object-cover" />
              </div>
            </div>

            <div className="flex max-sm:flex-col  items-center bg-Primary rounded-lg px-5 py-5 w-full gap-6">
              <div>
                <a href="https://github.com/Vimal1232/Compression-Using-Huffman-Encoding">
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

export default Huffman;
