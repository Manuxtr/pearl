import * as yup from "yup";

 export const signUpValidation = yup.object({
  email:yup.string().email().required(),
  password:yup.string()
    .min(8, "Password must be at least 8 characters long.")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter.")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter.")
    .matches(/\d/, "Password must contain at least one number.")
    .matches(/[!@#$%^&*]/, "Password must contain at least one special character.")
    .required("Password is required"),
  passwordConfirmation: yup.string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  fullname:yup.string()
  .max(15).required(),
  staffid:yup.string()
  .required(),
  


})