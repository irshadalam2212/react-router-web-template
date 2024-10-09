import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged in successful");
    navigate("/dashboard");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col w-full gap-y-4 mt-6"
    >
      <label className="w-full">
        <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem]">
          Email Address <sup className="text-pink-200">*</sup>
        </p>
        <input
          type="email"
          required
          value={formData.email}
          name="email"
          onChange={changeHandler}
          placeholder="Enter email id"
          className="bg-gray-800 rounded-[0.75rem] w-full p-[12px] text-gray-50"
        />
      </label>
      <label className="w-full relative">
        <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem]">
          Password <sup className="text-pink-200">*</sup>
        </p>
        <input
          type={!showPassword ? "password" : "text"}
          required
          value={formData.password}
          name="password"
          onChange={changeHandler}
          placeholder="Enter Password"
          className="bg-gray-800 rounded-[0.75rem] w-full p-[12px] text-gray-50"
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-[38px] cursor-pointer"
        >
          {showPassword ? (
            <FaEye fontSize={24} fill="#AFB2BF" />
          ) : (
            <FaEyeSlash fontSize={24} fill="#AFB2BF" />
          )}
        </span>
        <Link to="#">
          <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">
            Forgot Password
          </p>
        </Link>
      </label>
      <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-gray-900">
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
