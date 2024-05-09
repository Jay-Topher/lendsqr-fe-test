import { pxToRem } from "@/utils";
import { APP_BAR_HEIGHT, DRAWER_WIDTH } from "@/utils/constants";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import DrawerItems from "../DrawerItems";
import { Link, Outlet } from "react-router-dom";
import Logo from "@/components/Logo";
import SearchBox from "@/components/SearchBox";
import Notification from "@/assets/icons/notification.svg?react";
import Hamburger from "@/assets/icons/hamburger.svg?react";
import UserAvatar from "@/components/UserAvatar";
import adedeji from "@/assets/adedeji.png";

interface Props {
  window?: () => Window;
}

const DashboardDrawer = ({ window }: Props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const largerScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: "common.white",
          height: pxToRem(APP_BAR_HEIGHT),
          flexShrink: 1,
          alignItems: "flex-end",
          display: { xs: "flex" },
          zIndex: 1201,
          boxShadow: "0px 5px 20px 0px #0000000A",
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            alignItems: "center",
            height: pxToRem(APP_BAR_HEIGHT),
            width: "100%",
            px: 3,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Logo width="9rem" />
            <Box sx={{ ml: { lg: 20, md: 10, xs: 2 } }}>
              <SearchBox />
            </Box>
          </Box>
          <Stack
            direction="row"
            sx={{
              alignItems: "center",
              marginLeft: "auto",
              display: { xs: "none", sm: "flex" },
            }}
            spacing={3}
          >
            <Link to="#">Docs</Link>
            <IconButton>
              <Notification />
            </IconButton>
            <UserAvatar imgSrc={adedeji} name="Adedeji" />
          </Stack>
          <IconButton
            sx={{ marginLeft: "auto", display: { xs: "block", sm: "none" } }}
            onClick={handleDrawerToggle}
            aria-label="Menu"
          >
            <Hamburger />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: "flex", width: "100vw" }}>
        <Box
          component="nav"
          className="app-side-nav"
          sx={{
            width: { sm: DRAWER_WIDTH },
            flexShrink: { sm: 0 },
          }}
          aria-label="dashboard options"
        >
          {largerScreen ? (
            <Drawer
              className="app-drawer"
              variant="permanent"
              open
              sx={{
                zIndex: 1200,
                width: DRAWER_WIDTH,
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: DRAWER_WIDTH,
                  border: "none",
                  boxShadow: "0px 5px 20px 0px #0000000A",
                },
              }}
            >
              <DrawerItems />
            </Drawer>
          ) : (
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: DRAWER_WIDTH,
                  border: "none",
                },
              }}
            >
              <DrawerItems onClick={handleDrawerToggle} />
            </Drawer>
          )}
        </Box>
        <Box
          component="main"
          sx={{
            width: { sm: `calc(100% - ${DRAWER_WIDTH}px)`, xs: "100%" },
            bgcolor: "#FBFBFB",
            minHeight: `calc(100vh - ${APP_BAR_HEIGHT}px)`,
            p: 5,
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default DashboardDrawer;
