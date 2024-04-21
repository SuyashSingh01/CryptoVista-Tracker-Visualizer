import Template from "../Components/Template";
import loginImg from "../assets/login.png";
import React from "react";

function Login({ setIsLoggedIn }) {
  return (
    <Template
    title="Welcome "
    desc1="Explore "
    desc2=" Cryptocurrency."
    image={loginImg}
    formType="login"
    setIsLoggedIn={setIsLoggedIn}
    />
  );
}

export default Login;
