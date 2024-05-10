import { renderWithRouter } from "@/utils/test-utils";
import DrawerItems from "./DrawerItems";
import { screen } from "@testing-library/react";
import { drawerMenuLinks } from "@/utils/constants";

it("renders side navigation", () => {
  renderWithRouter(<DrawerItems />);
  drawerMenuLinks.forEach(({ routes }) => {
    routes.forEach(({ title }) => {
      expect(screen.getByRole("link", { name: title })).toBeInTheDocument();
    });
  });
});
