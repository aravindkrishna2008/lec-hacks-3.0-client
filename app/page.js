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
    <MainPage handleRoute={handleRoute} />,
    <QuestionPage handleRoute={handleRoute} />,
    <SummaryPage handleRoute={handleRoute} />,
    <ResultPage data={data} handleRoute={handleRoute} />,
  ];

    return (
      <div>
      {pages[index]}
      </div>
    );
}
