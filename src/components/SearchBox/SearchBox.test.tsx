import { render, screen } from "@testing-library/react";
import SearchBox from "./SearchBox";

it("renders a search box", () => {
  render(<SearchBox />);
  expect(screen.getByRole("searchbox")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
});
