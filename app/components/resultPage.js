"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

const ResultPage = ({ response }) => {
  return (
    <div className=" p-[4.722vw] r">
      <img src="shapesResult.svg" className="absolute w-[90vw] -z-50 mt-24" />

      <div className="flex flex-col items-center justify-center mt-[3vh] ">
        <h1 className="title text-[4vw] leading-[4.2vw] flex items-center justify-center font-bold text-center p-4 w-[55vw]">
          Your source analysis results.
        </h1>
        <img src="/Line 1.svg" className=" -mt-5 mr-[15vw]" />

        <div className="gray-btn h-[18vh] w-[22.5vw] box mr-[37.5vw] flex flex-col p-6 -mt-[50px] justify-center">
          <div className="flex flex-row w-[100%] gap-[2px] items-center justify-center">
            <img src="/verified.svg" height={100} className="w-[10%]" />
            <h2 className="text-[#939393]  text-[1.8vw] w-[100%] font-bold -mb-[0.5vh]">
              Author Validity
            </h2>
            <img src="/help.svg" className="w-[10.5%]" />
          </div>
          <div className="flex flex-row items-end gap-2 -mt-[0.5vh]">
            <h1 className="text-[3vw] font-bold">2.0/5.0</h1>
          </div>
        </div>
        <img src="/Line 2.svg" className="-mt-[2vh] ml-[12.5vw]" />
        <div className="gray-btn h-[18vh] w-[22.5vw] box mr-[32vw] flex flex-col p-[2vw] pb-[2vw] ml-[80vw] -mt-[5vh] justify-center">
          <div className="flex flex-row w-[100%] gap-[2px] items-center justify-center">
            <img src="/verified.svg" height={100} className="w-[10%]" />
            <h2 className="text-[#939393]  text-[1.8vw] w-[100%] font-bold -mb-[0.5vh]">
              CRAAP Score
            </h2>
            <img src="/help.svg" className="w-[10.5%]" />
          </div>
          <div className="flex flex-row items-end gap-2 -mt-[0.5vh]">
            <h1 className="text-[3vw] font-bold">3.5/5.0</h1>
          </div>
        </div>

        <img src="/Line 3.svg" className="-mt-[5vh] ml-[8vw]" />
        <div className="gray-btn h-[18vh] w-[22.5vw] box mr-[28vw] flex flex-col p-[2vw] pb-[2vw] -mt-[10vw] justify-center">
          <div className="flex flex-row w-[100%] gap-[2px] items-center justify-center">
            <h2 className="text-[#939393]  text-[1.8vw] w-[100%] font-bold -mb-[0.5vh]">
              Content Match
            </h2>
            <img src="/help.svg" className="w-[10.5%]" />
          </div>
          <div className="flex flex-row items-end gap-2 -mt-[0.5vh]">
            <h1 className="text-[3vw] font-bold">
              {response.charAt(0) + ".0/" + response.charAt(2) + ".0"}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
