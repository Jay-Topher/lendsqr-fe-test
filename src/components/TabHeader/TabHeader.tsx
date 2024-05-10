import { Box, Tab, Tabs } from "@mui/material";
import React from "react";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface TabPanelProps {
  value: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const TabHeader = ({ value, handleChange }: TabPanelProps) => {
  const tabs = [
    "General Details",
    "Documents",
    "Bank Details",
    "Loans",
    "Savings",
    "App and System",
  ];
  return (
    <Box sx={{}}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="user tabs"
        variant="fullWidth"
      >
        {tabs.map((tab, idx) => (
          <Tab
            key={idx}
            label={tab}
            {...a11yProps(idx)}
            sx={{
              textTransform: "capitalize",
              color: "common.black",
              fontWeight: 400,
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default TabHeader;
