import React, { useState } from "react";
import styles from "./styles.module.css";
import { Button, Input } from "../../../../common";
import { useDispatch } from "react-redux";
import { saveAuthor } from "../../../../store/slices/authorsSlice";

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
          dispatch(saveAuthor({ name: authorName, id: "abc" }));
        }}
      ></Button>
    </div>
  );
};
