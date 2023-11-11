export default function TextInput({ label, ...props }) {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
      <>
        <input
        // autocomplete="off"
            {...field}
            {...props}
            className="bg-transparent text-[#5f5f5f] ml-2 outline-none w-[36vw] h-[5vh] text-[2.8vh] placeholder:text-[#4D4D4D]"            
        />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };