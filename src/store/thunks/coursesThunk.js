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

export const updateCourseThunk = (payload) => {
  return async (dispatch) => {
    const result = await updateCourseService(payload);
    dispatch(updateCourse(result.result));
  };
};

export const deleteCourseThunk = (id) => {
  return async (dispatch) => {
    const result = await deleteCourseService(id);
    if (result) dispatch(deleteCourse(id));
  };
};

export const createCourseThunk = (payload) => {
  return async (dispatch) => {
    const result = await createCourse(payload);
    dispatch(saveCourse(result.result));
  };
};

export const getCoursesThunk = () => {
  return async (dispatch) => {
    const result = await getCourses();
    dispatch(setCourses(result.result));
  };
};
