import { render, screen } from "@testing-library/react";

import { Registration } from "../Registration";
import {
  mockSetItem,
  prepareMockLocalStorage,
  TestWrapper,
} from "../../../constants";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Registration", () => {
  beforeAll(() => {
    prepareMockLocalStorage();
  });

  beforeEach(() => {
    mockSetItem.mockClear();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should have Name input", async () => {
    render(<Registration />, { wrapper: TestWrapper });

    const input = await screen.findByLabelText("Name");

    expect(input).toBeInTheDocument();
  });

  it("should have Email input", async () => {
    render(<Registration />, { wrapper: TestWrapper });

    const input = await screen.findByLabelText("Email");

    expect(input).toBeInTheDocument();
  });

  it("should have Password input", async () => {
    render(<Registration />, { wrapper: TestWrapper });

    const input = await screen.findByLabelText("Password");

    expect(input).toBeInTheDocument();
  });
});
