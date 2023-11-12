import React, { useState } from "react";

const ResultPage = ({ data, hr }) => {
  const [textareaValue, setTextareaValue] = useState("");

  const handleInputChange = (event) => {
    setTextareaValue(event.target.value);
  };
  return (
    <div className="flex items-center justify-center h-[100vh]  ">
      {textareaValue ? (
        <img
          src="enabledBtn.svg"
          onClick={() =>
            handleRoute(2, { type: clickedType, formality: clickedFormality })
          }
          className="absolute h-[10vh] rotate-180 right-10 cursor-pointer top-[50%]"
        />
      ) : (
        <img
          src="disabledBtn.svg"
          className="absolute right-10  h-[10vh] cursor-pointer top-[50%]"
        />
      )}
      <img
        src="enabledBtn.svg"
        onClick={() => handleRoute(1)}
        className="absolute h-[10vh] cursor-pointer left-10 top-[50%]"
      />
      <div className="flex flex-col gap-[20px]">
        <h1 className="font-bold text-center text-[3.2vw]">
          Brief Summary of Project
        </h1>
        <div className="flex flex-col h-[52vh] w-[75vw] box p-[2vw] gap-[5vh]">
          <textarea
            id="autoresizing"
            value={textareaValue}
            onChange={handleInputChange}
            placeholder="This project is about..."
            style={{
              display: "block",
              overflow: "hidden",
              resize: "none",
            }}
            className="h-[100%] w-[100%] bg-transparent outline-none border-none placeholder:text-[#4d4d4d] text-[#555555] text-[1.6vw]"
          />
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
