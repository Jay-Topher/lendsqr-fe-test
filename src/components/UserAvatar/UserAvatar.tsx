import { Avatar, Box, Button, Stack } from "@mui/material";
import ChevronDowm from "@/assets/icons/chevron-down-filled.svg?react";

interface UserAvatarProps {
  name: string;
  imgSrc: string;
}

const UserAvatar = ({ name, imgSrc }: UserAvatarProps) => {
  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      component={Button}
      sx={{ color: "text.primary", textTransform: "capitalize" }}
      endIcon={<ChevronDowm />}
    >
      <Avatar alt={name || "User"} src={imgSrc} />
      <Box component="span">{name}</Box>
    </Stack>
  );
};

export default UserAvatar;
