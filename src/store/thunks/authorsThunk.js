import { createAuthor, getAuthors } from "../../services";

export const createAuthorThunk = (dispatch, name) => () =>
  createAuthor(dispatch, name);

export const getAuthorsThunk = () => getAuthors;
