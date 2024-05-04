import { OutlinedInput, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../../utils/constants";
import Button from "@/components/Button";
import { useState } from "react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  return (
    <form className="login-form">
      <OutlinedInput
        placeholder="Email"
        type="email"
        sx={{ borderRadius: "5px", borderColor: "#545F7D26" }}
        aria-label="Email"
        required
      />
      <OutlinedInput
        placeholder="Password"
        type={showPassword ? "text" : "password"}
        sx={{ borderRadius: "5px", borderColor: "#545F7D26" }}
        endAdornment={
          <button
            className="show-password-btn uppercase font-weight-600"
            type="button"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        }
        aria-label="Password"
        required
      />
      <MuiLink
        component={Link}
        underline="none"
        to={APP_ROUTES.login}
        className="uppercase font-weight-600 font-size-14"
      >
        Forgot password?
      </MuiLink>
      <Button className="primary" variant="filled" type="submit">
        Log in
      </Button>
    </form>
  );
};

export default LoginForm;
