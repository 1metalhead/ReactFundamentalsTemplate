// Module 1.
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-1/home-task/components#create-input-component

import React from "react";

import styles from "./styles.module.css";

export const Input = ({
  placeholderText,
  labelText,
  onChange,
  "data-testid": dataTestId,
  name,
  showErrorRequired,
  type,
}) => (
  <label className={styles.label}>
    {labelText}
    <input
      onChange={onChange}
      placeholder={placeholderText}
      className={styles.input}
      data-testid={dataTestId}
      name={name}
      type={type}
    />
    {showErrorRequired && (
      <span className={styles.err}>{labelText + " is required."}</span>
    )}
  </label>
);
