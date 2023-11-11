"use client";
import { useState } from "react";
import CheckBox from "./CheckBox";

const QuestionPage = ({ handleRoute }) => {
  const [type, setType] = useState([
    { id: 1, name: "Research Project", checked: false },
    { id: 2, name: "School Paper", checked: false },
    { id: 3, name: "Presentation", checked: false },
    { id: 4, name: "Historical Investig...", checked: false },
    { id: 5, name: "For Fun", checked: false },
    { id: 6, name: "Other", checked: false },
  ]);

  const [formality, setFormality] = useState([
    { id: 1, name: "Really Formal", checked: false },
    { id: 2, name: "Formal", checked: false },
    { id: 3, name: "College", checked: false },
    { id: 4, name: "High School", checked: false },
    { id: 5, name: "Middle School", checked: false },
    { id: 6, name: "Doesn't Matter", checked: false },
  ]);

  const [clickedType, setClickedType] = useState(false);
  const [clickedFormality, setClickedFormality] = useState(false);

  document.addEventListener("keydown", function (event) {
    // Check if the pressed key is Enter (key code 13)
    event.preventDefault();
    console.log(clickedType);
    if (
      (event.code === "Enter" || event.code == "NumpadEnter") &&
      clickedType &&
      clickedFormality
    ) {
      // Log "hi" to the console
      handleRoute(2);
    }
  });

  return (
    <div className="flex items-center justify-center h-[100vh]  ">
      <div className="flex flex-col gap-[20px]">
        <h1 className="font-bold text-center text-[3.2vw]">A Few Questions</h1>
        <div className="flex flex-col h-[56vh] w-[64vw] box p-[4vw] gap-[5vh]">
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
