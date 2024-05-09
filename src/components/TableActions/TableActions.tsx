import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Eye from "@/assets/icons/eye.svg?react";
import Blacklist from "@/assets/icons/blacklist.svg?react";
import Activate from "@/assets/icons/activate.svg?react";
import { pxToRem } from "@/utils";

interface Props {
  id: string;
}

const TableActions = ({ id }: Props) => {
  const navigate = useNavigate();
  const actionLinks = [
    {
      title: "View Details",
      Icon: Eye,
      onClick: () => navigate(`/dashboard/users/${id}`),
    },
    {
      title: "Blacklist User",
      Icon: Blacklist,
      onClick: () => {},
    },
    {
      title: "Activate User",
      Icon: Activate,
      onClick: () => {},
    },
  ];
  return (
    <List sx={{ border: "1px solid #545F7D24", borderRadius: "4px" }}>
      {actionLinks.map((action) => (
        <ListItemButton key={action.title} onClick={action.onClick}>
          <ListItemIcon sx={{ minWidth: pxToRem(22) }}>
            <action.Icon />
          </ListItemIcon>
          <ListItemText primary={action.title} />
        </ListItemButton>
      ))}
    </List>
  );
};

export default TableActions;
