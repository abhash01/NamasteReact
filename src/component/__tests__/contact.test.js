import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page component", () => {
  test("should component render when we load contact us page", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("should component render and contain button", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("should component render and button text submit", () => {
    render(<Contact />);

    const inputtext = screen.getByText("submit");

    expect(inputtext).toBeInTheDocument();
  });

  test("should input placeholder cantain text name", () => {
    render(<Contact />);

    const placeholdertext = screen.getByPlaceholderText("username");

    expect(placeholdertext).toBeInTheDocument();
  });

  test("should component render and should contain two input", () => {
    render(<Contact />);
    //Query
    const input = screen.getAllByRole("textbox");
    //Assertion
    expect(input.length).toBe(2);
  });
});
