import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  alpha,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { pxToRem } from "@/utils";
import { DrawerMenuLinks } from "@/utils/types";

type Props = DrawerMenuLinks["routes"][number] & { onClick?: () => void };

const SideNavLinkItem = ({ href, icon: Icon, title, onClick }: Props) => {
  const location = useLocation();
  return (
    <Link to={href}>
      <ListItemButton
        sx={{
          color: "#7a8cb1",
          fontWeight: 400,
          textDecoration: "none",
          height: pxToRem(40),
          borderRadius: 0,
          borderLeft: "3px solid transparent",
          fontSize: pxToRem(16),
          px: 3,
          mb: 1,
          "& svg": {
            opacity: 0.6,
          },
          "&.Mui-selected": {
            borderColor: "#fff",
            bgcolor: alpha("#39CDCC", 0.06),
            borderLeftColor: "primary.main",
            color: "text.secondary",
            "& svg": {
              opacity: 1,
            },
          },
          "& .MuiListItemIcon-root": {
            minWidth: pxToRem(20),
          },
        }}
        selected={location.pathname.includes(href)}
        onClick={onClick}
      >
        {Icon && (
          <ListItemIcon sx={{ mr: 1 }}>
            <Icon />
          </ListItemIcon>
        )}
        <ListItemText primary={title} />
      </ListItemButton>
    </Link>
  );
};

export default SideNavLinkItem;
