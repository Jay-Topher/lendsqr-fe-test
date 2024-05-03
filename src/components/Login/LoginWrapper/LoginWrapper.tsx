import loginImg from "@/assets/pablo-sign-in.png";

const LoginWrapper = () => {
  return (
    <div className="login-wrapper">
      <div className="login-wrapper-image">
        <img src={loginImg} alt="login" />
      </div>
    </div>
  );
};

export default LoginWrapper;
