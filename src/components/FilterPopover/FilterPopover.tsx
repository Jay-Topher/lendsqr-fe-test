import { IconButton, Popover, PopoverProps } from "@mui/material";
import React, { ReactNode } from "react";
import FilterIcon from "@/assets/icons/filter.svg?react";

interface Props {
  children: ReactNode;
  anchorOrigin?: PopoverProps["anchorOrigin"];
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}
const FilterPopover = ({ children, anchorOrigin, Icon }: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <IconButton
        aria-describedby={id}
        onClick={handleClick}
        aria-label="filter"
      >
        {Icon ? <Icon /> : <FilterIcon />}
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        elevation={0}
        sx={{
          "& .MuiPaper-root": {
            boxShadow: "3px 5px 20px 0px #0000000A",
            borderRadius: "4px",
          }
        }}
        anchorOrigin={
          anchorOrigin
            ? anchorOrigin
            : {
                vertical: "bottom",
                horizontal: "left",
              }
        }
      >
        {children}
      </Popover>
    </>
  );
};

export default FilterPopover;
