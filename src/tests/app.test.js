import { render, screen } from "@testing-library/react";
import App from "../App";
import { TestWrapper } from "../constants";

describe("App", () => {
  it("should have header", async () => {
    render(<App />, { wrapper: TestWrapper });

    const logo = await screen.findByAltText("logo");

    expect(logo).toBeInTheDocument();
  });
});
