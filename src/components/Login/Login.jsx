// Module 1. You don't need to do anything with this component (we had to comment this component for 1st module tests)

// Module 2.
// * uncomment this component (ctrl + a => ctrl + /)
// * finish markup according to the figma https://www.figma.com/file/m0N0SGLclqUEGR6TUNvyn9/Fundamentals-Courses?type=design&node-id=2927-216&mode=design&t=0FIG0iRzKcD0s16M-0
// * add validation for fields: all fields are required. Show validation message. https://www.figma.com/file/m0N0SGLclqUEGR6TUNvyn9/Fundamentals-Courses?type=design&node-id=2932-191&mode=design&t=0FIG0iRzKcD0s16M-0
// * render this component by route '/login'
// * use login service to submit form data and make POST API request '/login'.
// * component should have a link to the Registration page (see design)
// * save token from API after success login to localStorage.
// ** PAY ATTATION ** token should be saved to localStorage inside login handler function after login service responce
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-2/home-task/components#login-new-component

// Module 3.
// * save user's name, token and email to the store after success login.
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-3/home-task/components#login-component

import React from "react";

import styles from "./styles.module.css";

import { Button, Input } from "../../common";

import { Link, useNavigate } from "react-router-dom";

import { login } from "../../services";

export const Login = () => {
  // write your code here
  const navigate = useNavigate();

  const [multipleValues, setMultipleValues] = React.useState({
    email: "",
    password: "",
  });

  const [isValid, setIsValid] = React.useState({
    email: true,
    password: true,
  });

  async function handleSubmit(event) {
    event.preventDefault();
    validateFields();
    if (multipleValues.email.length && multipleValues.password.length) {
      const response = await login(multipleValues);
      if (response?.status === 201) {
        const result = await response?.json();
        localStorage.setItem("token", result?.result);
        navigate("/courses");
      }
    }
  }

  // async function sendData() {
  //   const newUser = {
  //     email: multipleValues.email,
  //     password: multipleValues.password,
  //   };

  //   const response = await fetch("http://localhost:4000/login", {
  //     method: "POST",
  //     body: JSON.stringify(newUser),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  // }

  function validateFields() {
    setIsValid({
      email: multipleValues.email.length,
      password: multipleValues.password.length,
    });
  }

  function handleChange(event) {
    setMultipleValues({
      ...multipleValues,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <Input
            labelText="Email"
            placeholderText="Input text"
            onChange={handleChange}
            name="email"
            showErrorRequired={!isValid.email}
          ></Input>
          <Input
            labelText="Password"
            placeholderText="Input text"
            onChange={handleChange}
            name="password"
            showErrorRequired={!isValid.password}
          ></Input>
          <Button buttonText="LOGIN" type="submit"></Button>
        </form>
        <p>
          If you don't have an account you can&nbsp;
          <Link to="/registration">Registration</Link>
        </p>
      </div>
    </div>
  );
};
