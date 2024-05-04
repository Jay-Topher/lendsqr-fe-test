import { screen } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { renderWithRouter } from "@/utils/test-utils";

it("renders", () => {
  renderWithRouter(<LoginForm />);

  expect(screen.getByLabelText("Email")).toBeInTheDocument();
  expect(screen.getByLabelText("Password")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Log in" })).toBeInTheDocument();
});
