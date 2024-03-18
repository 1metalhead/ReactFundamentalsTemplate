import React, { useState } from "react";
import styles from "./styles.module.css";
import { Button, Input } from "../../../../common";
import { useDispatch } from "react-redux";
import { createAuthorThunk } from "../../../../store/thunks/authorsThunk";

export const CreateAuthor = () => {
  // write your code here
  const dispatch = useDispatch();
  const [authorName, setAuthorName] = useState();
  function handleInputChange(event) {
    setAuthorName(event.target.value);
  }

  return (
    <div className={styles.newAuthorContainer}>
      {/* <h2>Add author</h2> */}
      <Input
        labelText="Author Name"
        data-testid="createAuthorInput"
        onChange={handleInputChange}
      ></Input>
      <Button
        buttonText="CREATE AUTHOR"
        data-testid="createAuthorButton"
        handleClick={(event) => {
          event.preventDefault();
          dispatch(createAuthorThunk(authorName));
        }}
      ></Button>
    </div>
  );
};
