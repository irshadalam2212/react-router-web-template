import React from "react";
import Template from "../components/template";
import loginImage from "../assets/login.png";

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <div>
      <Template
        title="Welcome Back"
        desc1="Build skills for today, tommorow and beyond."
        desc2="Education to future proof your career"
        image={loginImage}
        formType="login"
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
};

export default Login;
