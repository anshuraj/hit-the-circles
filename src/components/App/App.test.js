import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

test("renders component", () => {
  const { getByText } = render(<App />);
  const heading = getByText(/Hit the circle/i);
  expect(heading).toBeInTheDocument();
});

test("play game", () => {
  render(<App />);
  fireEvent.click(screen.getByTestId("play"));

  fireEvent.click(screen.getByTestId("1"));

  expect(screen.getByTestId("score")).not.toBe("0");
});
