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
    // updateCourse:
  },
});

// use these actions in your components / thunks
export const { setCourses, saveCourse, deleteCourse, updateCourse } =
  coursesSlice.actions;

export default coursesSlice.reducer;
