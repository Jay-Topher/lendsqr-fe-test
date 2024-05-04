import { Palette, PaletteOptions } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Typography } from "@mui/material/styles/createTypography";
import AvenirRegular from "/fonts/avenir-next-regular.ttf";
import AvenirBold from "/fonts/avenir-next-bold.ttf";
import AvenirMedium from "/fonts/avenir-next-medium.ttf";

declare module "@mui/material/styles" {
  interface Theme {
    palette: Palette;
    typography: Typography;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    palette?: PaletteOptions;
  }
}

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#39CDCC",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#f50057",
    },
    text: {
      primary: "#545F7D",
      secondary: "#213F7D",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: "Avenir";
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: local("Avenir"), local("Avenir-Regular"), url(${AvenirRegular}) format("truetype");
        unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
      }
      @font-face {
        font-family: "Avenir";
        font-style: normal;
        font-display: swap;
        font-weight: 500;
        src: local("Avenir"), local("Avenir-Medium"), url(${AvenirMedium}) format("truetype");
        unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
      }
      @font-face {
        font-family: "Avenir";
        font-style: normal;
        font-display: swap;
        font-weight: 700;
        src: local("Pangram"), local("Avenir-Bold"), url(${AvenirBold}) format("truetype");
        unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
      }
    `,
    },
  },
});

export default theme;
