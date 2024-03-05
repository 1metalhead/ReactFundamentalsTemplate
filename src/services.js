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
  const newUser = {
    email: data.email,
    password: data.password,
  };

  return await fetch("http://localhost:4000/login", {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((err) => new Error(err));
};

export const getCourses = async () => {
  // write your code here
};

export const getAuthors = async () => {
  // write your code here
};

export const getCurrentUser = async () => {
  // write your code here
};

export const updateCourseService = async () => {
  // write your code here
};

export const logout = async () => {
  // write your code here
};

export const deleteCourseService = async () => {
  // write your code here
};

export const createCourse = async () => {
  // write your code here
};

export const createAuthor = async () => {
  // write your code here
};
