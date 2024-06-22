import * as Yup from "yup";

export function initialValues() {
  return {
    email: "",
    name:"",
    password: "",
    userType: "customer", 
    employeeNumber: ""
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    name:  Yup.string().when("userType", { 
      is: userType => userType === "customer",
      then: Yup.string().required("Names is required"),
      otherwise: Yup.string().notRequired() 
    }),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    employeeNumber: Yup.string().when("userType", { 
      is: userType => userType === "company",
      then: Yup.string().required("Employee number is required for company"),
      otherwise: Yup.string().notRequired() 
    })
  });
}
