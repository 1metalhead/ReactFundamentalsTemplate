import React from "react";

import styles from "./styles.module.css";
import { Button } from "../../../../common";

export const AuthorItem = ({ author, addAuthor, removeAuthor }) => {
  return (
    <div className={styles.authorItem} data-testid="authorItem">
      <span>{author?.name}</span>
      {addAuthor ? (
        <Button
          buttonText="+"
          handleClick={(event) => addAuthor(event, author)}
          data-testid="addAuthor"
        ></Button>
      ) : (
        <Button
          buttonText="-"
          handleClick={(event) => removeAuthor(event, author)}
          data-testid="addAuthor"
        ></Button>
      )}
    </div>
  );
};
