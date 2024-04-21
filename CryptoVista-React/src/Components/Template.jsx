import React from "react";
import SignupForm from "./SignupForm.jsx";
import LoginForm from "./LoginForm.jsx";
import { FcGoogle } from "react-icons/fc";
import {useNavigate } from "react-router-dom";

// added the authenti
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {auth} from "../firebase";
import {toast} from "react-toastify";


const Template = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {

  const navigate = useNavigate();

const signInWithGoogle = () => {
  const googleProvider = new GoogleAuthProvider();
  signInWithPopup(auth, googleProvider)
  .then((res) => {
    toast.success(`Login Successful,Welcome ${res.user.email}`);
    setIsLoggedIn(true);
    navigate("/dashboard");
    
  })
  .catch((error) => {
      toast.error("Couldn't Login\n" + error.message);
      return;
    });
};

  return (
    <div className="flex w-11/12 max-w-[1160px] py-12 mx-auto gap-y-0 gap-x-12 justify-between">
      <div className="w-11/12 max-w-[450px] mx-0 text-black-700">
        <h1 className="text-richblack font-semibold text-[1.875rem] leading-[2.375rem]">{title}</h1>
        <p className="text-[1.125rem] mt-4 leading-[1.625rem]">
          <span className="text-richblack-600">{desc1}</span>
          <span className="text-blue-100 italic">{desc2}</span>
        </p>

        {formType === "signup" ? <SignupForm setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}

        <div className="flex w-full items-center my-4 gap-x-2">
          <div className="h-[1px] w-full bg-richblack-700"></div>
          <p className="text-neutral-900 font-medium leading-[1.375rem]">OR</p>
          <div className="h-[1px] w-full bg-richblack-800"></div>
        </div>

        <button className=" bg-neutral-200 w-full flex items-center justify-center rounded-[8px] font-medium text-richblack-800 border-richblack-700 border px-[12px] py-[8px] gap-x-2 mt-6" onClick={signInWithGoogle}>
          <FcGoogle />
          <p>Sign Up with Google</p>
        </button>
      </div>

      <div className="relative w-11/12 max-w-[450px]">
        <img
          src={image}
          alt="img"
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
