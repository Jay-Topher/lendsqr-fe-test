import logo from "@/assets/logo.svg";
import { Box } from "@mui/material";

interface LogoProps {
  floating?: boolean;
  width?: string | number;
}

const Logo = ({ floating, width }: LogoProps) => {
  return (
    <Box
      sx={{
        position: floating ? "absolute" : "relative",
        top: { md: "5rem", xs: "2rem" },
        left: { md: "5rem", xs: "2rem" },
        width: width ? width : { md: "auto", xs: "8rem" },
        "& img": {
          width: "100%",
        },
      }}
    >
      <img src={logo} alt="lendsqr" />
    </Box>
  );
};

export default Logo;
