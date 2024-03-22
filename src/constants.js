// export const mockedCoursesList = [
//   {
//     id: "de5aaa59-90f5-4dbc-b8a9-aaf205c551ba",
//     title: "JavaScript",
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
//                     has been the industry's standard dummy text ever since the 1500s, when an unknown
//                     printer took a galley of type and scrambled it to make a type specimen book. It has survived
//                     not only five centuries, but also the leap into electronic typesetting, remaining essentially u
//                     nchanged.`,
//     creationDate: "08/03/2021",
//     duration: 160,
//     authors: [
//       "27cc3006-e93a-4748-8ca8-73d06aa93b6d",
//       "f762978b-61eb-4096-812b-ebde22838167",
//     ],
//   },
//   {
//     id: "b5630fdd-7bf7-4d39-b75a-2b5906fd0916",
//     title: "Angular",
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
//                     has been the industry's standard dummy text ever since the 1500s, when an unknown
//                     printer took a galley of type and scrambled it to make a type specimen book.`,
//     creationDate: "10/11/2020",
//     duration: 210,
//     authors: [
//       "df32994e-b23d-497c-9e4d-84e4dc02882f",
//       "095a1817-d45b-4ed7-9cf7-b2417bcbf748",
//     ],
//   },
// ];

// export const mockedAuthorsList = [
//   {
//     id: "27cc3006-e93a-4748-8ca8-73d06aa93b6d",
//     name: "Vasiliy Dobkin",
//   },
//   {
//     id: "f762978b-61eb-4096-812b-ebde22838167",
//     name: "Nicolas Kim",
//   },
//   {
//     id: "df32994e-b23d-497c-9e4d-84e4dc02882f",
//     name: "Anna Sidorenko",
//   },
//   {
//     id: "095a1817-d45b-4ed7-9cf7-b2417bcbf748",
//     name: "Valentina Larina",
//   },
// ];

import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";

export const mockGetItem = jest.fn();
export const mockSetItem = jest.fn();
export const mockRemoveItem = jest.fn();

export const prepareMockLocalStorage = () => {
  Object.defineProperty(window, "localStorage", {
    value: {
      getItem: (...args) => mockGetItem(...args),
      setItem: (...args) => mockSetItem(...args),
      removeItem: (...args) => mockRemoveItem(...args),
    },
  });
};

export const TEST_NAME = "Test Name";

export const mockedState = {
  user: {
    isAuth: true,
    name: TEST_NAME,
    role: "admin",
    token: "mock-token",
  },
  courses: [
    {
      title: "Course 1",
      description: "Description 1",
      duration: 5,
      authors: [
        "9b87e8b8-6ba5-40fc-a439-c4e30a373d36",
        "1c972c52-3198-4098-b6f7-799b45903199",
        "072fe3fc-e751-4745-9af5-aa9eed0ea9ed",
      ],
      creationDate: "11/03/2024",
      id: "b28fd9ad-c683-4900-bf99-38a1c5748309",
    },
  ],
  authors: [
    {
      name: "author",
      id: "9b87e8b8-6ba5-40fc-a439-c4e30a373d36",
    },
    {
      name: "author2",
      id: "1c972c52-3198-4098-b6f7-799b45903199",
    },
    {
      name: "author3",
      id: "072fe3fc-e751-4745-9af5-aa9eed0ea9ed",
    },
  ],
};

export const mockedStore = {
  getState: () => mockedState,
  subscribe: jest.fn(),
  dispatch: jest.fn(),
};

export const TestWrapper = ({ children, store = mockedStore }) => (
  <Provider store={store}>
    <Router>{children}</Router>
  </Provider>
);

export const BUTTON_CAPTIONS = {
  login: "LOGIN",
  logout: "LOGOUT",
  addNewCourse: "ADD NEW COURSE",
  search: "SEARCH",
  back: "BACK",
  register: "REGISTRATION",
  createCourse: "CREATE COURSE",
  createAuthor: "CREATE AUTHOR",
  cancel: "CANCEL",
  showCourse: "SHOW COURSE",
};
