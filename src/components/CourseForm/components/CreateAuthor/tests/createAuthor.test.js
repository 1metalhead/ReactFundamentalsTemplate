import { render, screen } from "@testing-library/react";

import {
  TestWrapper,
  mockSetItem,
  prepareMockLocalStorage,
} from "../../../../../constants";
import { CreateAuthor } from "../CreateAuhtor";

describe("CreateAuthor", () => {
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

  it("should have author input", async () => {
    render(<CreateAuthor />, { wrapper: TestWrapper });

    const input = await screen.findByTestId("createAuthorInput");

    expect(input).toBeInTheDocument();
  });

  it("should have create author button", async () => {
    render(<CreateAuthor />, { wrapper: TestWrapper });

    const button = await screen.findByTestId("createAuthorButton");

    expect(button).toBeInTheDocument();
  });
});
