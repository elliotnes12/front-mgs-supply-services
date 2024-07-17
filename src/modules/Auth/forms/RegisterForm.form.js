import * as Yup from "yup";

export function initialValues() {
  return {
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
    userType: "customer", 
    employeeNumber: ""
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    name: Yup.string().when("userType", { 
      is: userType => userType === "customer",
      then: Yup.string().required("Name is required"),
      otherwise: Yup.string().notRequired() 
    }),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(/[@$!%*?&#]/, "Password must contain at least one special character"),
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
