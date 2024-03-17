// Module 1.
// * figma link: https://www.figma.com/file/m0N0SGLclqUEGR6TUNvyn9/Angular-Fundamentals?type=design&node-id=2905-67147&t=gTZjFcI0d4hheNiz-0
// * render this component inside 'Courses' component
// *this component should display single course info:
//   ** title;
//   ** description;
//   ** authors list. Authors' names should be displayed on the one line, add '...' if authors' names do not fit on one line.
//   ** duration (format: hh:mm + 'hours'). Create function 'src/helpers/getCourseDuration.js' for duration mapping;
//   ** creation date (format: dd.mm.yyyy). Create function 'src/helpers/formatCreationDate.js' for date formatting;
//   ** show course button. Render 'CourseInfo' component with course's data instead of 'Courses' component
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-1/home-task/components#coursecard-component

// Module 3.
// * add two new buttons: update and delete'. Use icons from 'src/assets/...'.
// * remove course from the store by 'delete' button click
// * no functionality for 'update' button for now
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-3/home-task/components#coursecard-component

// Module 4.
// * show 'delete' and 'update' buttons only for ADMIN user
// * make delete request by 'delete' button click
// * use 'deleteCourseService' from 'src/services.js' and 'deleteCourseThunk' thunk from 'src/store/thinks/coursesThunk.js'
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-4/home-task/components#coursecard-component

// Module 5:
// * proposed cases for unit tests:
//   ** CourseCard should display title.
//   ** CourseCard should display description.
//   ** CourseCard should display duration in the correct format.
//   ** CourseCard should display authors list.
//   ** CourseCard should display created date in the correct format.

import React, { useEffect, useState } from "react";

// import deleteButtonIcon from "../../../../assets/deleteButtonIcon.svg";
// import editButtonIcon from "../../../../assets/editButtonIcon.svg";

import { getCourseDuration, formatCreationDate } from "../../../../helpers";

import styles from "./styles.module.css";
import { Button } from "../../../../common";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAuthorsSelector,
  getUserRoleSelector,
} from "../../../../store/selectors";
import { deleteCourseThunk } from "../../../../store/thunks/coursesThunk";

export const CourseCard = ({ course }) => {
  // write your code here
  const authorsList = useSelector(getAuthorsSelector);
  const userRole = useSelector(getUserRoleSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentAuthors, setCurrentAuthors] = useState([]);

  useEffect(() => {
    course?.authors?.forEach((authors) => {
      const currentAuthors = [];
      currentAuthors?.push(
        authorsList?.find((author) => author.id === authors)?.name
      );
      setCurrentAuthors(currentAuthors);
    });
  }, [authorsList, course]);

  return (
    <div className={styles.cardContainer} data-testid="courseCard">
      <div className={styles.cardText}>
        <h2>{course.title}</h2>
        <p>{course.description}</p>
      </div>
      <div className={styles.cardDetails}>
        <p>
          <b>Authors: </b>
          {currentAuthors?.join(", ")}
        </p>
        <p>
          <b>Duration:</b>
          <span>{getCourseDuration(course.duration)}</span>
        </p>
        <p>
          <b>Created: </b>
          <span>{formatCreationDate(course.creationDate)}</span>
        </p>
        <div className={styles.buttonsContainer}>
          <Button
            buttonText="SHOW COURSE"
            handleClick={() => navigate("/courses/" + course.id)}
          ></Button>
          {/* 
				reuse Button component for 'Show course' button 
				reuse Button	component with deleteButtonIcon from 'src/assets' for 'Delete' button
						with data-testid="deleteCourse" 
				reuse Link component with editButtonIcon from 'src/assets' for 'Update' button with
						data-testid="updateCourse" 
			*/}
          {userRole === "admin" ? (
            <>
              <Button
                buttonText="DELETE"
                data-testid="deleteCourse"
                handleClick={() =>
                  dispatch(deleteCourseThunk(dispatch, course.id))
                }
              ></Button>
              <Button
                buttonText="UPDATE"
                data-testid="updateCourse"
                handleClick={() => navigate(`/courses/update/${course.id}`)}
              ></Button>
            </>
          ) : (
            ""
          )}
          {/* <img
            src={deleteButtonIcon}
            data-testid="deleteCourse"
            alt="Delete"
            style={{ background: "#007298" }}
            onClick={() => dispatch(deleteCourse(course.id))}
          /> */}
          {/* <Link>
            <img
              src={editButtonIcon}
              data-testid="updateCourse"
              alt="Delete"
              style={{ background: "#007298" }}
            />
          </Link> */}
        </div>
      </div>
    </div>
  );
};
