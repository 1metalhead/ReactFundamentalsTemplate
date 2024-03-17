import { saveAuthor, setAuthors } from "./store/slices/authorsSlice";
import {
  deleteCourse,
  saveCourse,
  setCourses,
  updateCourse,
} from "./store/slices/coursesSlice";
import { removeUserData, setUserData } from "./store/slices/userSlice";

export const createUser = async (data) => {
  // write your code here
  const newUser = {
    name: data.name,
    email: data.email,
    password: data.password,
  };

  return await fetch("http://localhost:4000/register", {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((err) => new Error(err));
};

export const login = async (data) => {
  // write your code here
  const response = await fetch("http://localhost:4000/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((err) => new Error(err));
  return await response.json();
};

export const getCourses = async (dispatch) => {
  // write your code here
  const response = await fetch("http://localhost:4000/courses/all", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((err) => new Error(err));
  const result = await response.json();
  dispatch(setCourses(result.result));
  // return await response.json();
};

export const getAuthors = async (dispatch) => {
  // write your code here
  const response = await fetch("http://localhost:4000/authors/all", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((err) => new Error(err));
  const result = await response.json();
  dispatch(setAuthors(result.result));
  // return await response.json();
};

export const getCurrentUser = async (dispatch) => {
  // write your code here
  const response = await fetch("http://localhost:4000/users/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  }).catch((err) => new Error(err));
  const result = await response.json();
  dispatch(setUserData(result.result));
};

export const updateCourseService = async (dispatch, payload) => {
  // write your code here
  const response = await fetch(`http://localhost:4000/courses/${payload.id}`, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  }).catch((err) => new Error(err));
  const result = await response.json();
  dispatch(updateCourse(result.result));
};

export const logout = async (dispatch) => {
  // write your code here
  await fetch("http://localhost:4000/logout", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  }).catch((err) => new Error(err));
  dispatch(removeUserData());
};

export const deleteCourseService = async (dispatch, id) => {
  // write your code here
  await fetch(`http://localhost:4000/courses/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  }).catch((err) => new Error(err));
  dispatch(deleteCourse(id));
};

export const createCourse = async (dispatch, payload) => {
  // write your code here
  const response = await fetch("http://localhost:4000/courses/add", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  }).catch((err) => new Error(err));
  const result = await response.json();
  dispatch(saveCourse(result.result));
};

export const createAuthor = async (dispatch, name) => {
  // write your code here
  const response = await fetch("http://localhost:4000/authors/add", {
    method: "POST",
    body: JSON.stringify({ name }),
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  }).catch((err) => new Error(err));
  const result = await response.json();
  dispatch(saveAuthor(result.result));
};
