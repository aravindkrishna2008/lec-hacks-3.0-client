import { useFormik, Form } from "formik";
import * as yup from "yup";
import { config } from "./config";
import { useState } from "react";
import TextInput from "./input";

export default function MainForm({ hs, formik }) {
  return (
    <Form>
      <TextInput
        label="url"
        type="url"
        name="url"
        placeholder="https://www.example.com"
      />
    </Form>
  );
}

export function Button({ hs, val, hr, er, setUrl }) {
  const isValidUrl = (urlString) => {
    var urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // validate protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // validate fragment locator
    return !!urlPattern.test(urlString);
  };
  return (
    <>
      {val.url.length > 5 && isValidUrl(val.url) ? (
        <img
          src="enabledBtn.svg"
          onClick={() => {
            if (er.url) {
              alert(`ERROR: ${er.url}`);
            } else {
              hr(1, { url: val.url });
              setUrl(val.url);
            }
          }}
          className="absolute h-[10vh] rotate-180 right-10 cursor-pointer top-[50%]"
        />
      ) : (
        <img
          src="disabledBtn.svg"
          className="absolute right-10  h-[10vh] cursor-pointer top-[50%]"
        />
      )}
      <button
        type="button"
        onClick={() => {
          if (er.url) {
            alert(`ERROR: ${er.url}`);
          } else {
            hr(1, { url: val.url });
            setUrl(val.url);
          }
        }}
        className="h-full items-center pr-4"
      >
        <img src="enter.svg" />
        <input type="submit" className="hidden" />
      </button>
    </>
  );
}
