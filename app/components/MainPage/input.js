import { useField } from "formik";

export default function TextInput({ label, name, ...props }) {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);

  return (
    <>
      <input
        name={name}
        autoComplete="off"
        value={field.value.url}
        onChange={field.onChange}
        placeholder="https://www.example.com"
        className="bg-transparent text-[#5f5f5f] ml-2 outline-none w-[36vw] h-[5vh] text-[2.8vh] placeholder:text-[#4D4D4D]"
      />
    </>
  );
}
