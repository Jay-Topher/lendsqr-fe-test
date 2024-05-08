import { drawerMenuLinks } from "@/utils/constants";
import { Box, Button, List, Typography } from "@mui/material";
import SideNavLinkItem from "../SideNavLinkItem";
import { pxToRem } from "@/utils";
import Home from "@/assets/icons/home.svg?react";
import Organization from "@/assets/icons/organization.svg?react";
import ChevronDown from "@/assets/icons/chevron-down.svg?react";

interface Props {
  onClick?: () => void;
}

const DrawerItems = ({ onClick }: Props) => {
  return (
    <Box
      component="aside"
      sx={{ height: "100vh", display: "flex", flexDirection: "column" }}
    >
      {/* <Box>
        <Logo width="9rem" />
      </Box> */}
      <Box sx={{ mt: 15, mb: 2 }}>
        <Button
          startIcon={<Organization />}
          endIcon={<ChevronDown />}
          sx={{
            px: 4,
            textTransform: "capitalize",
            color: "text.primary",
            fontWeight: 400,
          }}
        >
          Switch Organization
        </Button>
      </Box>
      <List
        sx={{
          "& a": {
            textDecoration: "none",
          },
        }}
      >
        <SideNavLinkItem title="Dashboard" href="#" icon={Home} />
        {drawerMenuLinks.map(({ category, routes }) => (
          <Box mb={3} key={category}>
            <Typography
              variant="h6"
              sx={{
                color: "primary",
                fontSize: pxToRem(12),
                textTransform: "uppercase",
                px: 3,
                fontWeight: 500,
                mb: 1,
              }}
            >
              {category}
            </Typography>
            {routes.map(({ title, href, icon }) => (
              <SideNavLinkItem
                key={title}
                href={href}
                icon={icon}
                title={title}
                onClick={onClick}
              />
            ))}
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default DrawerItems;
