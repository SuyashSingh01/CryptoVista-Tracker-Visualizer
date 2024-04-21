import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase";
import React from "react";
import { useState } from "react";
import {toast} from "react-toastify";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
// firebase config added
// import firebaseConfig from "../config/firebaseconfig";


const SignupForm = (props) => {
  const setIsLoggedIn = props.setIsLoggedIn;

  const navigate = useNavigate();

  const [showCreatePass, setShowCreatePass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  
  // const [accountType, setAccountType] = useState("student");

  const [formData, setFormData] = useState({firstName: "",lastName: "",email: "",password: "",confirmPassword: "",});

  function changeHandler(event) {
     setFormData(prevformdata => {
      return {
        ...prevformdata,
        [event.target.name]:event.target.value
      }
    });
  }
  // made the changes over
const submitHandler=async (e)=>{
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    
    const accountData = {
      ...formData,
    };
    console.log("account",accountData);
    try{
      console.log("hello jee"+{formData});
      const result=await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      setIsLoggedIn(true);
      toast.success(`Account Created ${result.user.email}`);

      navigate("/dashboard");
    }
    catch(error){
      toast.error("Couldn't create\n"+error.message);

    }
    // changes endpoint
    return;
  }

  return (
    <div>
      <form onSubmit={submitHandler}> 
        <div className="flex gap-x-4">
          <label htmlFor="" className="w-full">
            <p className="text-[0.875rem] text-richblack-600 mb-1 leading-[1.375rem]">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              required
              placeholder="Enter First Name"
              onChange={changeHandler}
              value={formData.firstName}// change the F to f
              name="firstName"
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
              />
          </label>

          <label htmlFor="" className="w-full">
            <p className="text-[0.875rem] text-richblack-600 mb-1 leading-[1.375rem]">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            {/* changed all textcolor- text-richblack-5 */}
            <input
              type="text"
              required
              placeholder="Enter Last Name"
              onChange={changeHandler}
              value={formData.lastName}// change the F to f
              name="lastName"
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px]  text-richblack-5"
            />
          </label>
        </div>

        <label htmlFor="" className="w-full">
          <p className="text-[0.875rem] text-richblack-600 mb-1 leading-[1.375rem]">
            Email Address
            <sup className="text-pink-200">*</sup>
          </p>

          <input
            type="email"
            required
            placeholder="Enter your email address"
            value={formData.email}
            onChange={changeHandler}
            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            name="email"
          />
        </label>

        <div className="w-full flex gap-x-4 mt-[10px]">
          
          <label htmlFor="" className="w-full relative">
            <p className="text-[0.875rem] text-richblack-600 mb-1 leading-[1.375rem]"
           >
              Create Password
              <sup className="text-pink-200">*</sup>
            </p>

            <input
              type={showCreatePass ? "text" : "password"}
              required
              placeholder="Enter Password"
              onChange={changeHandler}
              value={formData.password}
              name="password"
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
              />
            <span onClick={() => setShowCreatePass(!showCreatePass)} className="absolute right-3 top-[38px] cursor-pointer z-10">
              {showCreatePass ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                  )}
            </span>

          </label>

          <label htmlFor="" className="relative w-full">
            <p className="text-[0.875rem] text-richblack-600 mb-1 leading-[1.375rem]">
              Confirm Password
              <sup className="text-pink-200">*</sup>
            </p>

            <input
              type={showConfirmPass ? "text" : "password"}
              required
              placeholder="Confirm Password"
              onChange={changeHandler}
              value={formData.confirmPassword}
              name="confirmPassword"
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
              />

            <span
              onClick={() => setShowConfirmPass(!showConfirmPass)}
              className="absolute right-3 top-[38px] cursor-pointer z-10"
            >
              {showConfirmPass ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>

        <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900 w-full">
        {/* onClick={createhandleSubmit}> */}
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;

