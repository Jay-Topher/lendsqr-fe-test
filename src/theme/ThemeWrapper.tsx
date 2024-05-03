import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";
import theme from ".";

function ThemeWrapper({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default ThemeWrapper;
