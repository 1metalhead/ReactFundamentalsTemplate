// This component shows information about the current chosen course.

// Module 1.
// * Use template to show course's information:
// ** ID of course;
// ** Title;
// ** Description;
// ** Duration;
// ** List of authors;
// ** Creation date;
// * use <Button /> component to replace CourseInfo component with Courses component
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-1/home-task/components#course-info

// Module 2.
// * render component by route '/courses/:courseId'
// * use 'useParam' hook to get course id, remove prop 'showCourseId'
// * remove 'onBack' prop
// * use '<Link />' instead <Button /> component for 'BACK' button
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-2/home-task/components#course-info

// Module 3.
// * remove props 'coursesList', 'authorsList'
// * use selectors from store/selectors.js to get coursesList, authorsList from store

import React, { useEffect, useState } from "react";

import { formatCreationDate, getCourseDuration } from "../../helpers";

import styles from "./styles.module.css";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuthorsSelector, getCoursesSelector } from "../../store/selectors";

// props description
// * 'coursesList' - list of all courses. You need it to get chosen course from the list
// * 'authorsList' - list of all authors. You need it to get authors' names for chosen course
// * 'showCourseId' - id of chosen course. Use it to find needed course on the 'coursesList'.
export const CourseInfo = () => {
  // write your code here
  const urlParams = useParams();
  const coursesList = useSelector(getCoursesSelector);
  const authorsList = useSelector(getAuthorsSelector);

  const [currentCourse, setCurrentCourse] = useState();
  const [currentAuthors, setCurrentAuthors] = useState();

  useEffect(() => {
    const currentCourse = coursesList.find(
      (course) => course.id === urlParams.courseId
    );
    setCurrentCourse(currentCourse);

    const currentAuthors = [];
    currentCourse?.authors?.forEach((authors) =>
      currentAuthors.push(
        authorsList.find((author) => author.id === authors)?.name
      )
    );
    setCurrentAuthors(currentAuthors);
  }, [coursesList, authorsList, urlParams]);

  return (
    <div className={styles.container} data-testid="courseInfo">
      <h1>{currentCourse?.title}</h1>
      <div className={styles.courseInfo}>
        <p className={styles.description}>{currentCourse?.description}</p>
        <div>
          <p>
            <b>ID: </b>
            {urlParams.courseId}
          </p>
          <p>
            <b>Duration: </b>
            {currentCourse?.duration
              ? getCourseDuration(currentCourse?.duration)
              : ""}
          </p>
          <p>
            <b>Created: </b>
            {currentCourse?.creationDate
              ? formatCreationDate(currentCourse?.creationDate)
              : ""}
          </p>
          <div>
            <b>Authors:</b>
            <ul className={styles.authorsList}>
              {currentAuthors?.map((author) => (
                <li>{author}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Link to="/courses">Back</Link>
    </div>
  );
};
