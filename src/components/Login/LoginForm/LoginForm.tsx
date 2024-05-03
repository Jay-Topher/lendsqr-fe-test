import { OutlinedInput, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../../utils/constants";

const LoginForm = () => {
  return <form>
    <OutlinedInput placeholder="Email" type="email" />
    <OutlinedInput placeholder="Password" type="password" />
    <MuiLink component={Link} to={APP_ROUTES.login}>Forgot password?</MuiLink>
    <button>Login</button>
  </form>;
};

export default LoginForm;
