import { useState } from "react";
import MainForm, { Button } from "./form";
import { useFormik, FormikProvider } from "formik";
import { c}
import * as yup from "yup";

const MainPage = ({ handleRoute }) => {
  const [url, setUrl] = useState("");
 

  document.addEventListener("keydown", function (event) {
    // Check if the pressed key is Enter (key code 13)
    event.preventDefault();
    console.log(formik.values.url);
    if (
      (event.code === "Enter" || event.code == "NumpadEnter") &&
      formik.values.url 
    ) {
      // Log "hi" to the console
      formik.handleSubmit()
    }
  });

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="flex flex-col gap-[20px] items-center">
        <h1 className="font-bold text-center text-[4vw] w-[60vw] leading-[4.2vw]">
          Enter the Research Link, <br /> Verify Website Credibility
        </h1>
        <div className="px-5 rounded-full flex justify-center  items-center flex-row h-[5vh] w-[64vw] box pl-[1vw] p-[2.5vw]">
          <div className="px-5 rounded-full items-center h-[7.5vh] mr-auto flex flex-row">
            <img
              src="search.svg"
              className="pr-4 justify-center"
            />
            <Formik
              {...config}
            >
              <MainForm formik={formik} hs={handleRoute} />
            </Formik>
          </div>
          <div className="items-center h-[2.5vw] ml-auto">
            <Button formik={formik} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
