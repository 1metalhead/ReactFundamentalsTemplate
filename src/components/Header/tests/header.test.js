import { render, screen } from "@testing-library/react";
import { Header } from "../Header";
import { TEST_NAME, TestWrapper } from "../../../constants";

describe("Header", () => {
  it("should have logo", async () => {
    render(<Header />, { wrapper: TestWrapper });

    const logo = await screen.findByAltText("logo");

    expect(logo).toBeInTheDocument();
  });

  it("should have user name", async () => {
    render(<Header />, { wrapper: TestWrapper });

    const userName = await screen.findByText(TEST_NAME);

    expect(userName).toBeInTheDocument();
  });
});
