import { getToken } from "@/utils";
import { APP_ROUTES } from "@/utils/constants";
import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RequireLogin = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = getToken();
    if (!token) {
      navigate(APP_ROUTES.login);
    }
  }, [navigate]);
  return <>{children}</>;
};

export default RequireLogin;
