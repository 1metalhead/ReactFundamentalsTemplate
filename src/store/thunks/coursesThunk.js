import {
  createCourse,
  deleteCourseService,
  getCourses,
  updateCourseService,
} from "../../services";
import {
  deleteCourse,
  saveCourse,
  setCourses,
  updateCourse,
} from "../slices/coursesSlice";

export const updateCourseThunk = (payload, token) => {
  return async (dispatch) => {
    const result = await updateCourseService(payload, token);
    dispatch(updateCourse(result.result));
  };
};

export const deleteCourseThunk = (id, token) => {
  return async (dispatch) => {
    const result = await deleteCourseService(id, token);
    if (result) dispatch(deleteCourse(id));
  };
};

export const createCourseThunk = (payload, token) => {
  return async (dispatch) => {
    const result = await createCourse(payload, token);
    dispatch(saveCourse(result.result));
  };
};

export const getCoursesThunk = () => {
  return async (dispatch) => {
    const result = await getCourses();
    dispatch(setCourses(result.result));
  };
};
