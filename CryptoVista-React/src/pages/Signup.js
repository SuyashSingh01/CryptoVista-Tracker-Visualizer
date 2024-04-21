import Template from "../Components/Template";
import signupImg from "../assets/signup.png";
import React from 'react'

function Signup({ setIsLoggedIn }) {
  return (
    <Template
    title="Real-Time Cryptocurrency Tracking &visualizing"
    desc1="Providing users with up-to-date information on prices"
    desc2=", market trends, and trading volumes.."
    image={signupImg}
    formType="signup"
    setIsLoggedIn={setIsLoggedIn}
    />
  );
}

export default Signup;
