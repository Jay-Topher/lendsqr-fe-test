import { saveToken } from "@/utils";
import { APP_ROUTES } from "@/utils/constants";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!credentials.email || !credentials.password) {
      alert("Please fill in all fields");
      return;
    }
    saveToken(Date.now().toString());
    navigate(APP_ROUTES.home);
  };

  return {
    showPassword,
    togglePasswordVisibility,
    handleChange,
    handleSubmit,
    credentials,
  };
};

export default useLogin;
