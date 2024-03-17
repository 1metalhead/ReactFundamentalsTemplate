// Module 1. You don't need to do anything with this component (we had to comment this component for 1st module tests)

// Module 2.
// * uncomment this component (ctrl + a => ctrl + /)
// * add functionality to create new course with:
//   ** title
//   ** description
//   ** duration (user enters in minutes, you should map in format «hh:mm»)
//   ** existing authors (use 'authorsList' prop)
//   ** new created author (create field and button, update 'authorsList')
//   ** user should be able to remove author from the course
//   ** add validation to the fields
//   ** add new course to the 'coursesList' and navigate to the '/courses' page => new course should be in the courses list
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-2/home-task/components#add-new-course

// Module 3.
// * save new course to the store. Use action 'saveCourse' from 'src/store/slices/coursesSlice'
// * save new author to the store. Use action 'saveAuthor' from 'src/store/slices/authorsSlice'
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-3/home-task/components#add-new-course

// Module 4.
// * render this component only for ADMIN user
// * in this module you should separate functionality for this component:
//   ** create mode:
//     * form for the course creation should be opened by 'courses/add' route by 'ADD NEW COURSE' button click (as before)
//     * make a request to save new course
//     * use 'createCourse' service from 'src/services.js' and 'createCourseThunk' thunk from 'src/store/thinks/coursesThunk.js'
//     * use 'createAuthor ' service from 'src/services.js' and 'createAuthorThunk' thunk from 'src/store/thinks/authorsThunk.js'
//     * save new course to the store after success response
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-4/home-task/components#add-new-course
//   ** update mode:
//     * form should be opened by route '/courses/update/:courseId' route by 'update' button click
//     * appropriate forms field should be prefilled with course's info
//     * user should have ability to modify course information in the fields and change authors list
//     * make a request to save updated course
//     * use 'updateCourseService' from 'src/services.js' and 'updateCourseThunk' thunk from 'src/store/thinks/coursesThunk.js'
//     save updated course to the store after success response.
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-4/home-task/components#update-course

// Module 5:
// * proposed cases for unit tests:
//   ** CourseForm should show authors lists (all and course authors).
//   **  CourseForm 'Create author' button click should call dispatch.
//   **  CourseForm 'Add author' button click should add an author to the course authors list.
//   **  CourseForm 'Delete author' button click should delete an author from the course list.

import React, { useEffect, useState } from "react";

import styles from "./styles.module.css";
import { Button, Input } from "../../common";
import { getCourseDuration } from "../../helpers/getCourseDuration";
import { CreateAuthor } from "../../components/CourseForm/components/CreateAuthor";
import { AuthorItem } from "../../components/CourseForm/components/AuthorItem";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuthorsSelector, getCoursesSelector } from "../../store/selectors";
import {
  createCourseThunk,
  updateCourseThunk,
} from "../../store/thunks/coursesThunk";

export const CourseForm = () => {
  //write your code here

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const courses = useSelector(getCoursesSelector);
  const authorsList = useSelector(getAuthorsSelector);

  const [localAuthorsList, setLocalAuthorsList] = useState(authorsList);

  useEffect(() => {
    if (courseId) {
      const currentCourse = courses.find((course) => course.id === courseId);
      setMultipleValues({
        title: currentCourse.title,
        description: currentCourse.description,
        duration: currentCourse.duration,
      });

      const currentAuthors = [];
      currentCourse?.authors?.forEach((authors) => {
        currentAuthors?.push(
          authorsList?.find((author) => author.id === authors)
        );
      });
      setCourseAuthors(currentAuthors);
    }
    setLocalAuthorsList(authorsList);
  }, [authorsList, courseId, courses]);

  const [multipleValues, setMultipleValues] = useState({
    title: "",
    description: "",
    duration: 0,
  });
  const [isValid, setIsValid] = useState({
    title: true,
    description: true,
    duration: true,
  });

  const [duration, setDuration] = useState();
  function handleDurationChange(event) {
    handleChange(event);
    setDuration(getCourseDuration(event.target.value));
  }

  const [courseAuthors, setCourseAuthors] = useState([]);
  function addAuthor(event, currentAuthor) {
    event.preventDefault();
    setCourseAuthors([currentAuthor, ...courseAuthors]);
    setLocalAuthorsList(
      localAuthorsList.filter((author) => author.id !== currentAuthor.id)
    );
  }
  function removeAuthor(event, currentAuthor) {
    event.preventDefault();
    setCourseAuthors(
      courseAuthors.filter((author) => author.id !== currentAuthor.id)
    );
    setLocalAuthorsList([currentAuthor, ...localAuthorsList]);
  }

  // function onCreateAuthor(event, author) {
  //   // event.preventDefault();
  //   // setLocalAuthorsList([{ name: author, id: "abc" }, ...localAuthorsList]);
  //   // createAuthor({ name: author, id: "abc" });
  // }

  function handleCreateCourse() {
    const validObj = validateFields();
    if (validObj.title && validObj.description && validObj.duration) {
      dispatch(
        createCourseThunk(dispatch, {
          title: multipleValues.title,
          description: multipleValues.description,
          creationDate: "08/03/2021", //new Date(),
          duration: Number(multipleValues.duration),
          authors: courseAuthors.map((authors) => authors.id),
        })
      );
      navigate("/courses");
    }
  }

  function validateFields() {
    const validObj = {
      title: multipleValues.title.length > 1,
      description: multipleValues.description.length > 1,
      duration: multipleValues.duration > 0,
    };
    setIsValid(validObj);
    return validObj;
  }
  function handleChange(event) {
    setMultipleValues({
      ...multipleValues,
      [event.target.name]: event.target.value,
    });
  }

  function handleUpdateCourse() {
    const validObj = validateFields();
    if (validObj.title && validObj.description && validObj.duration) {
      dispatch(
        updateCourseThunk(dispatch, {
          id: courseId,
          title: multipleValues.title,
          description: multipleValues.description,
          creationDate: "08/03/2021", //new Date(),
          duration: Number(multipleValues.duration),
          authors: courseAuthors.map((authors) => authors.id),
        })
      );
      navigate("/courses");
    }
  }

  return (
    <div className={styles.container}>
      <h2>Course edit/Create page</h2>

      <form>
        <Input
          labelText="Title"
          placeholderText="Input text"
          data-testid="titleInput"
          onChange={handleChange}
          name="title"
          showErrorRequired={!isValid.title}
          value={multipleValues.title}
        ></Input>
        <label>
          Description
          <textarea
            className={styles.description}
            data-testid="descriptionTextArea"
            onChange={handleChange}
            name="description"
            value={multipleValues.description}
          />
        </label>
        {!isValid.description && (
          <span style={{ color: "red" }}>Description is required</span>
        )}
        <div className={styles.infoWrapper}>
          <div>
            <div className={styles.duration}>
              <Input
                labelText="Duration"
                placeholderText="Input text"
                data-testid="durationInput"
                onChange={handleDurationChange}
                type="number"
                name="duration"
                showErrorRequired={!isValid.duration}
                value={multipleValues.duration}
              ></Input>
              <p>{duration}</p>
            </div>
            <h2>Authors</h2>
            <CreateAuthor></CreateAuthor>
            <div className={styles.authorsContainer}>
              <h3>Authors List</h3>
              {localAuthorsList.map((author) => (
                <AuthorItem
                  author={author}
                  addAuthor={addAuthor}
                  key={author.id}
                ></AuthorItem>
              ))}
            </div>
          </div>

          <div className={styles.courseAuthorsContainer}>
            <h2>Course authors</h2>
            {courseAuthors.length ? (
              courseAuthors.map((author) => (
                <AuthorItem
                  author={author}
                  removeAuthor={removeAuthor}
                ></AuthorItem>
              ))
            ) : (
              <p className={styles.notification}>Author List is empty</p>
            )}
          </div>
        </div>
      </form>

      <div className={styles.buttonsContainer}>
        <Button buttonText="CANCEL"></Button>
        {courseId ? (
          <Button
            buttonText="UPDATE COURSE"
            handleClick={handleUpdateCourse}
            data-testid="updateCourseButton"
          ></Button>
        ) : (
          <Button
            buttonText="CREATE COURSE"
            handleClick={handleCreateCourse}
            data-testid="createCourseButton"
          ></Button>
        )}
      </div>
    </div>
  );
};
