"use client";
import { use, useEffect, useState } from "react";
import CheckBox from "./CheckBox";

const QuestionPage = ({
  handleRoute,
  type,
  setType,
  formality,
  setFormality,
  clickedType,
  setClickedType,
  clickedFormality,
  setClickedFormality,
  url,
}) => {
  useEffect(() => {
    console.log("url" + url);
  });

  return (
    <div className="flex items-center justify-center h-[100vh]  ">
      <img
        src="shapesQuestion.svg"
        className="absolute w-[90vw ] -z-50 mt-24"
      />

      <div className="flex flex-col gap-[20px]">
        {clickedType && clickedFormality ? (
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
          onClick={() => handleRoute(0)}
          className="absolute h-[10vh] cursor-pointer left-10 top-[50%]"
        />

        <h1 className="font-bold text-center text-[3.2vw]">A Few Questions</h1>
        <div className="flex flex-col justify-center  h-[56vh] w-[64vw] box py-0 p-[4vw] gap-[5vh]">
          <CheckBox
            checkBox={type}
            setCheckBox={setType}
            title={"Type:"}
            setClicked={setClickedType}
          />
          <CheckBox
            checkBox={formality}
            setCheckBox={setFormality}
            title={"Formality:"}
            setClicked={setClickedFormality}
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
