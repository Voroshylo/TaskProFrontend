import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import s from "./RegisterForm.module.css";
import icons from "../../images/icons/icons.svg";
import { useState } from "react";

// Валідація
const registerSchema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Z0-9!@#$%^&*()_+=[\]{}:;"',.<>?/`~|\\-]*( [a-zA-Z0-9!@#$%^&*()_+=[\]{}:;"',.<>?/`~|\\-]+)*$/,
      "Name can include Latin letters, numbers, and symbols"
    )
    .min(2, "Name must be at least 2 characters")
    .max(32, "Name cannot exceed 32 characters")
    .required("Please, type valid name"),
  email: yup
    .string()
    .matches(/^[^\s]+$/, "Email cannot contain spaces")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    )
    .required("Please, type valid email"),
  password: yup
    .string()
    .matches(/^[^\s]+$/, "Password cannot contain spaces")
    .matches(
      /^[a-zA-Z0-9!@#$%^&*()_+=[\]{}:;"',.<>?/`~|\\-]*$/,
      "Password can include Latin letters, numbers, and symbols without spaces"
    )
    .min(8, "Password must be at least 8 characters")
    .max(64, "Password cannot exceed 64 characters")
    .required("Please, type valid password"),
});
const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className={s.cont}>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={registerSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={s.form}>
            <div className={s.fieldWrapper}>
              <Field
                type="text"
                name="name"
                placeholder="Enter your name"
                className={s.input}
              />
              <ErrorMessage name="name" component="div" className={s.error} />
            </div>
            <div className={s.fieldWrapper}>
              <Field
                type="email"
                name="email"
                placeholder="Enter your email"
                className={s.input}
              />
              <ErrorMessage name="email" component="div" className={s.error} />
            </div>
            <div className={s.fieldWrapper}>
              <Field
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create a password"
                className={s.input}
              />
              <svg
                className={s.icon}
                width="18px"
                height="18px"
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <use href={`${icons}#icon-eyes`}></use>
              </svg>
              <ErrorMessage
                name="password"
                component="div"
                className={s.error}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={s.submitButton}
            >
              Register Now
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
