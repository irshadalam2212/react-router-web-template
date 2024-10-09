import React from "react";
import Template from "../components/template";
import signupImg from "../assets/signup.png";

const Signup = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <Template
      title="Join the millions learning to code with StudyNotion for free"
      desc1="Build skills for today, tommorow and beyond."
      desc2="Education to future proof your career."
      image={signupImg}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
};

export default Signup;
