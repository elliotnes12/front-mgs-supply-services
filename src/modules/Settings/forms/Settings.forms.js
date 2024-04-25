import * as Yup from "yup";

export function initialValues() {
  return {
    name: "",
    lastName: "",
    company: "",
    otherCampany: "",
    telephone:""
  };
}

export function validationSchema() {
  return Yup.object({
    name: Yup.string().required(true),
    lastName: Yup.string().required(true),
    telephone:  Yup.string().required(true),
  });
}