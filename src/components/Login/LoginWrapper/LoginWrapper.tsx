import loginImg from "@/assets/pablo-sign-in.png";
import LoginForm from "../LoginForm";
import { Typography } from "@mui/material";
import Logo from "@/components/Logo";

const LoginWrapper = () => {
  return (
    <div className="login-wrapper">
      <Logo floating />
      <div className="login-wrapper-image">
        <img src={loginImg} alt="login" />
      </div>
      <div className="login-form-container">
        <div className="login-form-header">
          <Typography
            component="h1"
            className="login-heading font-size-40"
            sx={{
              fontFamily: "Avenir",
              fontWeight: 700,
            }}
          >
            Welcome!
          </Typography>
          <Typography
            className="login-subtext font-size-20"
            sx={{
              fontFamily: "Avenir",
              fontWeight: 400,
            }}
          >
            Enter details to login.
          </Typography>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginWrapper;
