import React, { useState } from "react";
import styles from "./styles.module.css";
import { Button, Input } from "../../../../common";

export const CreateAuthor = ({ onCreateAuthor }) => {
  // write your code here
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
        handleClick={(event) => onCreateAuthor(event, authorName)}
      ></Button>
    </div>
  );
};
