import { pxToRem } from "@/utils";
import { COLORS, sampleOrganizations, userStatus } from "@/utils/constants";
import {
  Box,
  FormControl,
  FormLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
} from "@mui/material";
import Button from "../Button";

const FilterForm = () => {
  return (
    <Box
      component="form"
      sx={{
        maxWidth: pxToRem(270),
        px: 2,
        py: 3,
        border: "1px solid #545F7D24",
        borderRadius: "4px",
      }}
    >
      <FormControl fullWidth sx={{ mb: 2 }}>
        <FormLabel
          sx={{ mb: 1 }}
          htmlFor="organization"
          className="font-weight-500 font-size-14"
        >
          Organization
        </FormLabel>
        <Select displayEmpty id="organization" name="organization">
          {sampleOrganizations.map((org) => (
            <MenuItem
              key={org}
              value={org}
              sx={{ textTransform: "capitalize" }}
            >
              {org}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ mb: 2 }} fullWidth>
        <FormLabel
          sx={{ mb: 1 }}
          htmlFor="username"
          className="font-weight-500 font-size-14"
        >
          Username
        </FormLabel>
        <OutlinedInput
          name="username"
          type="text"
          placeholder="User"
          id="username"
          required
        />
      </FormControl>
      <FormControl sx={{ mb: 2 }} fullWidth>
        <FormLabel
          sx={{ mb: 1 }}
          htmlFor="email"
          className="font-weight-500 font-size-14"
        >
          Email
        </FormLabel>
        <OutlinedInput
          name="email"
          type="email"
          placeholder="Email"
          id="email"
          required
        />
      </FormControl>
      <FormControl sx={{ mb: 2 }} fullWidth>
        <FormLabel
          sx={{ mb: 1 }}
          htmlFor="date"
          className="font-weight-500 font-size-14"
        >
          Date
        </FormLabel>
        <OutlinedInput
          name="date"
          type="date"
          placeholder="Date"
          id="date"
          required
        />
      </FormControl>
      <FormControl sx={{ mb: 2 }} fullWidth>
        <FormLabel
          sx={{ mb: 1 }}
          htmlFor="phoneNumber"
          className="font-weight-500 font-size-14"
        >
          Phone Number
        </FormLabel>
        <OutlinedInput
          name="phoneNumber"
          type="tel"
          placeholder="Phone Number"
          id="phoneNumber"
          required
        />
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <FormLabel
          sx={{ mb: 1 }}
          htmlFor="status"
          className="font-weight-500 font-size-14"
        >
          Status
        </FormLabel>
        <Select displayEmpty id="status" name="status">
          {userStatus.map((status) => (
            <MenuItem
              key={status}
              value={status}
              sx={{ textTransform: "capitalize" }}
            >
              {status}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Stack direction="row" spacing={2}>
        <Button
          variant="outlined"
          bgColor={COLORS.white}
          color={COLORS.primary}
          borderColor={COLORS.primary}
          type="reset"
        >
          Reset
        </Button>
        <Button
          variant="filled"
          bgColor={COLORS.btnPrimary}
          color={COLORS.white}
          type="submit"
        >
          Filter
        </Button>
      </Stack>
    </Box>
  );
};

export default FilterForm;
