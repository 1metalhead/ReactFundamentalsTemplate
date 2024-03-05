// import React, { useState } from "react";

import { useState } from "react";
import styles from "./App.module.css";
import {
  CourseInfo,
  Courses,
  Header,
  Registration,
  Login,
  CourseForm,
} from "./components";
import { mockedAuthorsList, mockedCoursesList } from "./constants";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// Module 1:
// * use mockedAuthorsList and mockedCoursesList mocked data
// * add next components to the App component: Header, Courses and CourseInfo
// * pass 'mockedAuthorsList' and 'mockedCoursesList' to the Courses and CourseInfo components

// Module 2:
// * use mockedAuthorsList and mockedCoursesList mocked data
// * wrap your App with BrowserRouter in src/index.js
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-2/home-task/components#add-the-router-to-the-app-component

// Module 3:
// * wrap your App with Redux Provider in src/index.js
// * remove 'mockedAuthorsList' and 'mockedCoursesList' constants amd import and their use throughout the project
// * get courses and authors from the server. Use courses/all and authors/all GET requests.
// * save courses and authors to the store. Use 'setCourses' and 'setAuthors' actions from appropriate slices here 'src/store/slices'
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-3/home-task/components#app-component

// Module 4:
// * rewrite old GET requests /courses/all with 'getCoursesThunk' from 'src/store/thunks/coursesThunk.js' using getCourses service from 'src/services.js'.
// * rewrite old GET requests /authors/all with 'getAuthorsThunk' from 'src/store/thunks/authorsThunk.js' using getAuthors service from 'src/services.js'.
// * wrap 'CourseForm' in the 'PrivateRoute' component

function App() {
  // write your code here
  // const [currentCourseId, setCurrentCourseId] = useState();
  const [localAuthorsList, setLocalAuthorsList] = useState(mockedAuthorsList);
  const [localCoursesList, setLocalCoursesList] = useState(mockedCoursesList);

  function createCourse(course) {
    setLocalCoursesList([course, ...localCoursesList]);
  }
  function createAuthor(author) {
    setLocalAuthorsList([author, ...localAuthorsList]);
  }

  return (
    <BrowserRouter>
      <div className={styles.wrapper}>
        <Header></Header>
        <div className={styles.container}>
          <Routes>
            <Route path="/registration" element={<Registration />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route
              path="/courses/add"
              element={
                <CourseForm
                  authorsList={localAuthorsList}
                  createCourse={createCourse}
                  createAuthor={createAuthor}
                ></CourseForm>
              }
            ></Route>
            <Route
              path="/courses/:courseId"
              element={
                <CourseInfo
                  coursesList={localCoursesList}
                  authorsList={localAuthorsList}
                ></CourseInfo>
              }
            ></Route>
            <Route
              path="/courses"
              element={
                <Courses
                  coursesList={localCoursesList}
                  authorsList={localAuthorsList}
                ></Courses>
              }
            ></Route>
            <Route
              path="/"
              element={
                localStorage.getItem("token") ? (
                  <Navigate to="/courses"></Navigate>
                ) : (
                  <></>
                )
              }
            ></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
