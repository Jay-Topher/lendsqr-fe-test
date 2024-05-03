import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";

it("renders", () => {
  render(<LoginForm />);

  expect(screen.getByText("LoginForm")).toBeInTheDocument();
});