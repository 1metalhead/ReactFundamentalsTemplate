import {
  createCourse,
  deleteCourseService,
  getCourses,
  updateCourseService,
} from "../../services";
import { setCourses } from "../slices/coursesSlice";

export const updateCourseThunk = (dispatch, payload) => () =>
  updateCourseService(dispatch, payload);

export const deleteCourseThunk = (dispatch, id) => () =>
  deleteCourseService(dispatch, id);

export const createCourseThunk = (dispatch, payload) => () =>
  createCourse(dispatch, payload);

export const getCoursesThunk = async (dispatch) => {
  const result = await getCourses();
  dispatch(setCourses(result.result));
};
