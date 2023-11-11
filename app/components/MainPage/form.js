import { useFormik, FormikProvider } from "formik";
import * as yup from "yup";
import { config } from "./config";
import { useState } from "react";



export default function MainForm({ hs, formik }) {
  return (
    <Formik
      {...config}
    >
      <Form>
        <TextInput 
          label="url"
          type="url"
          placeholder="https://www.example.com"
        />
      </Form>
    </Formik>
  );
}

export function Button({ formik }) {
  return (
    <button
      onClick={() => formik.handleSubmit()}
      type="button"
      className="h-full items-center pr-4"
    >
      <img src="enter.svg" />
    </button>
  );
}
