import React, { useState } from "react";

const SummaryPage = ({
  data,
  hr,
  url,
  handleRoute,
  textareaValue,
  setTextareaValue,
  setResponse,
}) => {
  const apiUrl = "http://127.0.0.1:5000/api";
  console.log(data);

  const sendPostRequest = async () => {
    const jsonData = {
      url1: url,
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
      });

      const data = await response.json();
      console.log("Response:", data);
      setResponse(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleInputChange = (event) => {
    setTextareaValue(event.target.value);
  };
  return (
    <div className="flex items-center justify-center h-[100vh]  ">
      <img src="shapesSummary.svg" className="absolute w-[90vw] -z-50 mt-24" />

      {textareaValue ? (
        <img
          src="enabledBtn.svg"
          onClick={async () => {
            console.log("pressed");
            sendPostRequest();
            handleRoute(3);
          }}
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

export default SummaryPage;
