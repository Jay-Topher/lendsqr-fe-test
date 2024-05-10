import { APP_ROUTES, COLORS, drawerMenuLinks } from "@/utils/constants";
import { Box, Button, Divider, List, Typography } from "@mui/material";
import SideNavLinkItem from "../SideNavLinkItem";
import { pxToRem, removeToken } from "@/utils";
import Home from "@/assets/icons/home.svg?react";
import Organization from "@/assets/icons/organization.svg?react";
import ChevronDown from "@/assets/icons/chevron-down.svg?react";
import Logout from "@/assets/icons/logout.svg?react";
import { useNavigate } from "react-router-dom";

interface Props {
  onClick?: () => void;
}

const DrawerItems = ({ onClick }: Props) => {
  const navigate = useNavigate();
  const logout = () => {
    removeToken();
    navigate(APP_ROUTES.login);
  };
  return (
    <Box
      component="aside"
      sx={{ height: "100vh", display: "flex", flexDirection: "column" }}
    >
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
      <Divider
        color={COLORS.brand}
        sx={{ opacity: 0.1, mb: 3 }}
        variant="fullWidth"
      />
      <Box
        sx={{
          "& a": {
            textDecoration: "none",
            "& span": {
              color: "text.secondary",
            },
          },
        }}
      >
        <SideNavLinkItem
          title="Logout"
          href="#"
          icon={Logout}
          onClick={logout}
        />
        <p className="text-brand font-size-12 mx-24 mb-10">v1.2.0</p>
      </Box>
    </Box>
  );
};

export default DrawerItems;
