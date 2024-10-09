import React from "react";
import LoginForm from "./loginForm";
import SignupForm from "./signupForm";
import frameImage from "../assets/frame.png";
import { FcGoogle } from "react-icons/fc";

const Template = ({ title, desc1, desc2, image, setIsLoggedIn, formType }) => {
  return (
    <div className="flex w-11/12 py-12 mx-auto gap-y-0 gap-x-12 justify-between">
      <div className="w-11/12 mx-0 text-white">
        <h1 className="text-gray-50 font-semibold text-[1.875rem] leading-[2.375rem]">
          {title}
        </h1>
        <p className="flex flex-col gap-3 text-[1.125rem] mt-4 leading-[1.625rem]">
          <span className="text-gray-100">{desc1}</span>
          <span className="text-blue-100 italic">{desc2}</span>
        </p>
        {formType === "login" ? (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        )}
        <div className="flex w-full items-center my-4 gap-x-2">
          <div className="h-[1px] w-full bg-gray-700"></div>
          <p className="text-gray-700 font-medium leading-[1.375rem]">OR</p>
          <div className="h-[1px] w-full bg-gray-700"></div>
        </div>
        {/* <button className="w-full flex items-center justify-center rounded-[8px] font-medium text-gray-100 border-gray-100 border px-[12px] py-[8px] gap-x-2">
          <FcGoogle />
          <p>Sign Up with Google</p>
        </button> */}
      </div>
      <div className="relative w-11/12 max-w-[450px]">
        <img
          src={frameImage}
          alt="patter"
          width={558}
          height={504}
          loading="lazy"
        />
        <img
          src={image}
          alt="patter"
          width={558}
          height={504}
          loading="lazy"
          className="absolute -top-4 right-4 "
        />
      </div>
    </div>
  );
};

export default Template;
