import { renderWithRouter } from "@/utils/test-utils";
import { screen } from "@testing-library/react";
import UsersTable, { tableHeaders } from "./UsersTable";
import { fetchLocalUsers } from "@/utils";

it("displays an empty table with no data", () => {
  renderWithRouter(<UsersTable users={[]} />);
  expect(screen.getByRole("table")).toBeInTheDocument();
  expect(screen.getByText("No users available")).toBeInTheDocument();
});

it("displays a table with users", async () => {
  const users = await fetchLocalUsers();
  renderWithRouter(<UsersTable users={users.slice(0, 2)} />);
  expect(screen.getByRole("table")).toBeInTheDocument();
  expect(screen.getAllByRole("row")).toHaveLength(3);
  tableHeaders.forEach((header) =>
    expect(
      screen.getByRole("columnheader", { name: header })
    ).toBeInTheDocument()
  );
});
