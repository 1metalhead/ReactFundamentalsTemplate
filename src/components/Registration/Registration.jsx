// Module 1. You don't need to do anything with this component (we had to comment this component for 1st module tests)

// Module 2.
// * uncomment this component (ctrl + a => ctrl + /)
// * finish markup according to the figma https://www.figma.com/file/m0N0SGLclqUEGR6TUNvyn9/Fundamentals-Courses?type=design&node-id=2932-219&mode=design&t=0FIG0iRzKcD0s16M-0
// * add validation for fields: all fields are required. Show validation message. https://www.figma.com/file/m0N0SGLclqUEGR6TUNvyn9/Fundamentals-Courses?type=design&node-id=2932-257&mode=design&t=0FIG0iRzKcD0s16M-0
// * render this component by route '/registration'
// * submit form data and make POST API request '/registration'.
// * after successful registration navigates to '/login' route.
// * component should have a link to the Login page (see design)
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-2/home-task/components#registration-new-component

import React from "react";

import styles from "./styles.module.css";
import { Button, Input } from "../../common";
import { Link, useNavigate } from "react-router-dom";

export const Registration = () => {
  // write your code here
  const navigate = useNavigate();

  const [multipleValues, setMultipleValues] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const [isValid, setIsValid] = React.useState({
    name: true,
    email: true,
    password: true,
  });

  function handleSubmit(event) {
    event.preventDefault();
    validateFields();
    if (
      multipleValues.name.length &&
      multipleValues.email.length &&
      multipleValues.password.length
    ) {
      sendData();
    }
  }

  async function sendData() {
    const newUser = {
      name: multipleValues.name,
      email: multipleValues.email,
      password: multipleValues.password,
    };

    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 201) {
      navigate("/login");
    }
  }

  function validateFields() {
    setIsValid({
      name: multipleValues.name.length,
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
      <h1>Registration</h1>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <Input
            labelText="Name"
            placeholderText="Input text"
            onChange={handleChange}
            name="name"
            showErrorRequired={!isValid.name}
          ></Input>
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
          If you have an account you may&nbsp;<Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};
