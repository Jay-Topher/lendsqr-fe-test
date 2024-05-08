import logo from "@/assets/logo.svg";
import { Box, SxProps } from "@mui/material";

interface LogoProps {
  floating?: boolean;
  width?: string | number;
}

const Logo = ({ floating, width }: LogoProps) => {
  const floatingStyles: SxProps = {
    top: { md: "5rem", xs: "2rem" },
    left: { md: "5rem", xs: "2rem" },
    position: "absolute",
  };

  return (
    <Box
      sx={{
        position: floating ? "absolute" : "relative",
        ...(floating && floatingStyles),
        width: width ? width : { md: "auto", xs: "8rem" },
        lineHeight: 0,
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
