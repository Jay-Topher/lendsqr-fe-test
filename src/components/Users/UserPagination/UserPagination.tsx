import {
  Box,
  MenuItem,
  Pagination,
  PaginationItem,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import PaginationBtn from "./PaginationBtn/PaginationBtn";

interface Props {
  totalItems: number;
  totalPages: number;
  goToPage: (x: number) => void;
  setItemsPerPage: (x: number) => void;
  itemsPerPage: number;
}
const UserPagination = ({
  totalItems,
  totalPages,
  goToPage,
  setItemsPerPage,
  itemsPerPage,
}: Props) => {
  const itemsPerPageOptions = [10, 20, 50, 100];
  const handleItemsPerPage = (event: SelectChangeEvent) => {
    setItemsPerPage(Number(event.target.value));
  };

  return (
    <Stack
      spacing={2}
      justifyContent="space-between"
      mt={2}
      sx={{ flexDirection: { xs: "column", sm: "row" } }}
    >
      <Box>
        Showing{" "}
        <Select
          onChange={handleItemsPerPage}
          value={`${itemsPerPage}`}
          sx={{
            height: 30,
            backgroundColor: "#213F7D1A",
            fontWeight: 500,
            "& fieldset": {
              border: "none",
            },
          }}
        >
          {itemsPerPageOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>{" "}
        out of {totalItems}
      </Box>
      <Box>
        <Pagination
          count={totalPages}
          sx={{
            "& .Mui-selected": {
              backgroundColor: "transparent !important",
              color: "text.secondary",
              fontWeight: 500,
            },
          }}
          onChange={(_, num) => goToPage(num)}
          renderItem={(item) => (
            <PaginationItem
              slots={{
                previous: () => <PaginationBtn direction="previous" />,
                next: () => <PaginationBtn direction="next" />,
              }}
              {...item}
            />
          )}
        />
      </Box>
    </Stack>
  );
};

export default UserPagination;
