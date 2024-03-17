import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (courses, payload) => payload.payload,
    saveCourse: (courses, payload) => [...courses, payload.payload],
    deleteCourse: (courses, payload) =>
      courses.filter((course) => course.id !== payload.payload),
    updateCourse: (courses, payload) => {
      return courses.map((course) => {
        if (course.id === payload.payload.id) {
          return payload.payload;
        }
        return course;
      });
    },
  },
});

// use these actions in your components / thunks
export const { setCourses, saveCourse, deleteCourse, updateCourse } =
  coursesSlice.actions;

export default coursesSlice.reducer;
