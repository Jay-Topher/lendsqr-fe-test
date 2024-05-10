import { renderWithRouter } from "@/utils/test-utils";
import Users from "./Users";
import { screen } from "@testing-library/react";

it("renders the users page", () => {
  renderWithRouter(<Users />);
  expect(
    screen.getByRole("heading", { name: "Users", level: 2 })
  ).toBeInTheDocument();
});
