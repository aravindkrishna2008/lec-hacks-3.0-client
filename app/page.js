"use client";
import Image from "next/image";
import { useState } from "react";
import MainPage from "./components/MainPage/mainPage";
import QuestionPage from "./components/QuestionsPage/questionsPage";
import { Result } from "postcss";
import ResultPage from "./components/resultPage";
import SummaryPage from "./components/summaryPage";

export default function Home() {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState({});
  const [response, setResponse] = useState("");

  const [textareaValue, setTextareaValue] = useState("");
  const [url, setUrl] = useState("");

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

  function handleRoute(index, data = {}) {
    console.table({ index, data });
    setIndex(index);
    setData((prevData) => {
      return {
        ...prevData,
        data,
      };
    });
  }

  const pages = [
    <MainPage handleRoute={handleRoute} url={url} setUrl={setUrl} />,
    <QuestionPage
      handleRoute={handleRoute}
      type={type}
      setType={setType}
      formality={formality}
      setFormality={setFormality}
      clickedType={clickedType}
      setClickedType={setClickedType}
      clickedFormality={clickedFormality}
      setClickedFormality={setClickedFormality}
      url={url}
    />,
    <SummaryPage
      handleRoute={handleRoute}
      textareaValue={textareaValue}
      setTextareaValue={setTextareaValue}
      url={url}
      setResponse={setResponse}
    />,
    <ResultPage data={data} handleRoute={handleRoute} response={response} />,
  ];

  return <div>{pages[index]}</div>;
}
