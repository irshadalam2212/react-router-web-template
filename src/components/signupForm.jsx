import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showCnfPassword, setShowCnfPassword] = useState(false);
  const [accountType, setAccountType] = useState("student");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const changeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Password do not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created");
    const accountData = {
      ...formData,
    };
    console.log(accountData);
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex bg-gray-800 p-1 gap-x-1 rounded-full max-w-max mt-3">
        <button
          onClick={() => setAccountType("student")}
          className={`${
            accountType === "student"
              ? "bg-gray-900 text-gray-50"
              : "bg-transparent text-gray-200 "
          } py-2 px-5 rounded-full transition-all`}
        >
          Student
        </button>
        <button
          onClick={() => setAccountType("instructor")}
          className={`${
            accountType === "instructor"
              ? "bg-gray-900 text-gray-50"
              : "bg-transparent text-gray-200 "
          } py-2 px-5 rounded-full transition-all`}
        >
          Instructor
        </button>
      </div>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col gap-3">
          <div className="flex gap-x-4">
            <label className="w-full">
              <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem]">
                First Name <sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={changeHandler}
                placeholder="Enter your name"
                className="bg-gray-800 rounded-[0.75rem] w-full p-[12px] text-gray-50"
              />
            </label>
            <label htmlFor="" className="w-full">
              <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem]">
                Last Name <sup>*</sup>
              </p>
              <input
                required
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={changeHandler}
                placeholder="Enter your lastname"
                className="bg-gray-800 rounded-[0.75rem] w-full p-[12px] text-gray-50"
              />
            </label>
          </div>
          <label className="w-full">
            <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem]">
              Email Address <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={changeHandler}
              placeholder="Enter your email"
              className="bg-gray-800 rounded-[0.75rem] w-full p-[12px] text-gray-50"
            />
          </label>
          <div className="flex gap-x-4">
            <label className="w-full relative">
              <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem]">
                Create Password <sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type={!showPassword ? "password" : "text"}
                name="password"
                value={formData.password}
                onChange={changeHandler}
                placeholder="Enter your password"
                className="bg-gray-800 rounded-[0.75rem] w-full p-[12px] text-gray-50"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[38px] cursor-pointer z-10"
              >
                {!showPassword ? (
                  <FaEyeSlash fontSize={24} fill="#AFB2BF" />
                ) : (
                  <FaEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </label>
            <label htmlFor="" className="w-full relative">
              <p className="text-[0.875rem] text-gray-5 mb-1 leading-[1.375rem]">
                Confirm Password <sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type={!showCnfPassword ? "password" : "text"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={changeHandler}
                placeholder="Enter password again"
                className="bg-gray-800 rounded-[0.75rem] w-full p-[12px] text-gray-50"
              />
              <span
                onClick={() => setShowCnfPassword(!showCnfPassword)}
                className="absolute right-3 top-[38px] cursor-pointer z-10"
              >
                {!showCnfPassword ? (
                  <FaEyeSlash fontSize={24} fill="#AFB2BF" />
                ) : (
                  <FaEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </label>
          </div>
        </div>
        <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-gray-900 w-full">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
