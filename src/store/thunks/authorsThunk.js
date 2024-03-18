import { createAuthor, getAuthors } from "../../services";
import { saveAuthor, setAuthors } from "../slices/authorsSlice";

export const createAuthorThunk = (name) => async (dispatch) => {
  const result = await createAuthor(name);
  dispatch(saveAuthor(result.result));
};

export const getAuthorsThunk = () => async (dispatch) => {
  const result = await getAuthors();
  dispatch(setAuthors(result.result));
};
