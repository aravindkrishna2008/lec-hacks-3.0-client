import React, { useState } from "react";

const ResultPage = () => {
  const [value, setValue] = useState("");
  return (
    <div className="flex items-center justify-center h-[100vh]  ">
      <div className="flex flex-col gap-[20px]">
        <h1 className="font-bold text-center text-[3.2vw]">
          Brief Summary of Project
        </h1>
        <div className="flex flex-col h-[52vh] w-[75vw] box p-[2vw] gap-[5vh]">
          <input
            onChange={(e) => setValue(e.target.value)}
            value={value}
            className="h-[100%] w-[100%] bg-transparent outline-none border-none"
          />
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
