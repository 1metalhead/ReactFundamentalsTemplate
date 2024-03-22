import { render, screen } from "@testing-library/react";

import {
  TestWrapper,
  mockSetItem,
  prepareMockLocalStorage,
} from "../../../../../constants";
import { AuthorItem } from "../AuthorItem";

describe("AuthorItem", () => {
  beforeAll(() => {
    prepareMockLocalStorage();
  });

  beforeEach(() => {
    mockSetItem.mockClear();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should render component", async () => {
    render(<AuthorItem />, { wrapper: TestWrapper });

    const container = await screen.findByTestId("authorItem");

    expect(container).toBeInTheDocument();
  });

  it("should have addAuthor button in add-mode", async () => {
    render(<AuthorItem mode="add" />, { wrapper: TestWrapper });

    const button = await screen.queryByTestId("addAuthor");

    expect(button).toBeInTheDocument();
  });
});
