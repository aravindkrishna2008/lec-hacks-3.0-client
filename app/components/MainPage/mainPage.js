import { useState } from "react";
import MainForm, { Button } from "./form";
import { useFormik, FormikProvider, Formik } from "formik";
import { config } from "./config";

const MainPage = ({ handleRoute }) => {
  const [url, setUrl] = useState("");

  // document.addEventListener("keydown", function (event) {
  //   // Check if the pressed key is Enter (key code 13)
  //   event.preventDefault();
  //   console.log(formik.values.url);
  //   if (
  //     (event.code === "Enter" || event.code == "NumpadEnter") &&
  //     formik.values.url
  //   ) {
  //     // Log "hi" to the console
  //     formik.handleSubmit()
  //   }
  // });

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <img src="shapesMain.svg" className="absolute w-[80vw] -z-50 mt-24" />

      <div className="flex flex-col gap-[20px] items-center">
        <h1 className="font-bold text-center text-[4vw] w-[60vw] leading-[4.2vw]">
          Enter the Research Link, <br /> Verify Website Credibility
        </h1>
        <div className="px-5 rounded-full flex justify-center  items-center flex-row h-[5vh] w-[64vw] box pl-[1vw] p-[2.5vw]">
          <Formik {...config(handleRoute)}>
            {({ handleSubmit, values, errors }) => (
              <>
                <div className="px-5 rounded-full items-center h-[7.5vh] mr-auto flex flex-row">
                  <img src="search.svg" className="pr-4 justify-center" />
                  <MainForm hs={handleRoute} />
                </div>
                <div className="items-center h-[2.5vw] ml-auto">
                  <Button
                    er={errors}
                    hr={handleRoute}
                    hs={handleSubmit}
                    val={values}
                  />
                </div>
              </>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
