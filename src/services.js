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

export const getCourses = async () => {
  // write your code here
  const response = await fetch("http://localhost:4000/courses/all", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((err) => new Error(err));
  return await response.json();
};

export const getAuthors = async () => {
  // write your code here
  const response = await fetch("http://localhost:4000/authors/all", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((err) => new Error(err));
  return await response.json();
};

export const getCurrentUser = async () => {
  // write your code here
  const response = await fetch("http://localhost:4000/users/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  }).catch((err) => new Error(err));
  return await response.json();
};

export const updateCourseService = async (payload) => {
  // write your code here
  const response = await fetch(`http://localhost:4000/courses/${payload.id}`, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  }).catch((err) => new Error(err));
  return await response.json();
};

export const logout = async () => {
  // write your code here
  const response = await fetch("http://localhost:4000/logout", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  }).catch((err) => new Error(err));
  return await response;
};

export const deleteCourseService = async (id) => {
  // write your code here
  const response = await fetch(`http://localhost:4000/courses/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  }).catch((err) => new Error(err));
  return await response.json();
};

export const createCourse = async (payload) => {
  // write your code here
  const response = await fetch("http://localhost:4000/courses/add", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  }).catch((err) => new Error(err));
  return await response.json();
};

export const createAuthor = async (name) => {
  // write your code here
  const response = await fetch("http://localhost:4000/authors/add", {
    method: "POST",
    body: JSON.stringify({ name }),
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  }).catch((err) => new Error(err));
  return await response.json();
};
