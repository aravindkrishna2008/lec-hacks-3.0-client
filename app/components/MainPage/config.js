import * as yup from "yup"

export function config(handleRoute) {
    return {
      initialValues: {
        url: "",
      },
      onSubmit: ({ url }, { resetForm }) => {
        handleRoute(1, { url: url });
      },
      validationSchema: yup.object({
        url: yup.string("Must be a string").min(5).url("Must be a valid url"),
      }),
    }
}
