import { render, screen } from "@testing-library/react";
import {
  TestWrapper,
  mockSetItem,
  prepareMockLocalStorage,
} from "../../../constants";

import { Courses } from "../Courses";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Courses", () => {
  beforeAll(() => {
    prepareMockLocalStorage();
  });

  beforeEach(() => {
    mockSetItem.mockClear();
    mockSetItem.mockClear();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should render course cards", async () => {
    render(<Courses />, { wrapper: TestWrapper });

    const cards = await screen.queryAllByTestId("courseCard");

    expect(cards).toHaveLength(1);
  });
});
