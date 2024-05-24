import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import MailIcon from "../../assets/images/mail.png";
import LockIcon from "../../assets/images/lock.png";
import Image from "../../assets/images/speaker.png";
import "./auth.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
// import { FcGoogle } from "react-icons/fc";

const AmbForm = () => {
  const [formValues, setFormValues] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevVals) => ({ ...prevVals, [name]: value }));
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    formMutation.mutate();
  };
  const apiUrl = import.meta.env.VITE_BASE_URL;
  const formMutation = useMutation({
    mutationFn: () => axios.post(`${apiUrl}/ambassador/login`, formValues),
    onSuccess: (data) => {
      //console.log(data);
      if (data.data.status == "Success") {
        const userDetails = data.data.data;
        localStorage.setItem("logged_in", JSON.stringify(userDetails));
      }
      toast.success(data.data.message);
    },
    onError: (error) => {
      //console.log(error);
      toast.error(error.data.message || error.message);
    },
  });
  return (
    <div className="min-h-screen relative lgh-screen bg-[#B6F485] pt-[43px] px-[32px] max-lg:px8 max-md:px5 max-sm:px2">
      {/* logo */}
      <div className="flex absolute top-[54px] left-[64px] gap-x-[8.94px] items-center">
        <img src={logo} className="" />
        <div className="flex items-baseline gap-x-[2px]">
          <span className="text-[28px] font-[700]">Beels</span>
          {/* Registered Trademark */}
          <div className=" bg-[#082C25] size-[10.43px] flex items-center justify-center">
            <div className="rounded-full size-[9.32px] border-[0.98px] border-[#ffffff] flex items-center justify-center">
              <span className="text-white text-[8px]">R</span>
            </div>
          </div>
        </div>
      </div>
      {/* <img src={BeelsIcon} className="" /> */}
      <div className="lg:h-[calc(100%-43px)] flex max-lg:flex-col justify-between items-center max-lg:justify-center w-full max-lg:mt-24 max-md:mt-20 max-sm:mt-[52.7px] ">
        <img
          src={Image}
          className="w-[480px] h-[calc(100%-100px)] self-end object-cover lg:absolut max-lg:hidden"
        />

        {/* Login Form */}
        <div
          className={`bg-[#082C25] lg:pl-[104px] lg: pr-[97px] w-full h-ful rounded-2xl  maxlg:w-3/4 maxmd:w-[80%] max-sm:w[90% py-[167px] px12 max-lg:px-10 max-md:px-8 max-sm:px6 px-0 `}
        >
          <p className="text-2xl leading-[28.18px] max-lg:text-xl max-md:text-lg max-sm:text-base font-[700] text-white font-[Rockwell] my-4 max-lg:text-center lg:text-[32px]">
            Sub Ambassador Form
          </p>
          <p className="text-[24px] leading-[28.18px] font-[400] text-white mt-[16px]">
            Kindly complete the form below with your details.
          </p>
          <form onSubmit={handleSubmitForm} className="mt-[20px] lg:-[24px]">
            <div className="flex flex-col gap-y-[16px] lg:gap-y-[24px]">
              {/* Address */}
              <div className="w-full flex flex-col font-poppins font-[400] items-start justify-start gap-y-[8px] max-sm:px-2 py-[15px] rounded-lg">
                <label className="text-[14px] text-white font-poppins leading-[20px]">
                  Ambassador Address
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  className="lg:w-full h-[44px] py-[8px] px-[16px] max-lg:w-[100%] bg-transparent text-[14px] leading-[16.96px] flex-1 border-b-[1px] border-b-white font-inter font-[500]  "
                  value={formValues.email}
                  onChange={handleInputChange}
                />
              </div>

              {/* Department & BVN */}
              <div className="flex gap-x-[19px]">
                <div
                  className={`w-full flex flex-col items-start justify-start  max-sm:px-2 rounded-lg py-[15px]`}
                >
                  <label className="text-[14px] text-white font-poppins leading-[20px]">
                    Ambassador Departmnet
                  </label>
                  <input
                    type="text"
                    required
                    className="h-[44px] w-full max-lg:w-[100%] flex-1 font-inter font-[500] bg-transparent border-b-[1px] border-white py-[8px] px-[16px]"
                    name="password"
                    value={formValues.password}
                    onChange={handleInputChange}
                  />
                </div>
                {/* Amb BVN */}
                <div
                  className={`w-full flex flex-col items-start justify-start rounded-lg py-[15px]`}
                >
                  <label className="text-[14px] text-white font-poppins leading-[20px]">
                    Ambassador BVN
                  </label>
                  <input
                    type="text"
                    required
                    className="h-[44px] w-full max-lg:w-[100%] flex-1 font-inter font-[500] bg-transparent border-b-[1px] border-white py-[8px] px-[16px]"
                    name="password"
                    value={formValues.password}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              {/* Phone & Level */}
              <div className="flex gap-x-[19px]">
                <div
                  className={`w-full flex flex-col items-start justify-start  max-sm:px-2 rounded-lg py-[15px]`}
                >
                  <label className="text-[14px] text-white font-poppins leading-[20px]">
                    Ambassador Phone Number
                  </label>
                  <input
                    type="text"
                    required
                    className="h-[44px] w-full max-lg:w-[100%] flex-1 font-inter font-[500] bg-transparent border-b-[1px] border-white py-[8px] px-[16px]"
                    name="password"
                    value={formValues.password}
                    onChange={handleInputChange}
                  />
                </div>
                {/* Amb Level */}
                <div
                  className={`w-full flex flex-col items-start justify-start rounded-lg py-[15px]`}
                >
                  <label className="text-[14px] text-white font-poppins leading-[20px]">
                    Ambassador Level
                  </label>
                  <input
                    type="text"
                    required
                    className="h-[44px] w-full max-lg:w-[100%] flex-1 font-inter font-[500] bg-transparent border-b-[1px] border-white py-[8px] px-[16px]"
                    name="password"
                    value={formValues.password}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-[47px]">
              <p className="font-[400] text-[24px] leading-[28.18px] text-white">
                Are you a student?
              </p>
              <div className="flex flex-col gap-y-[17px] justify-center mt-[19px] text-[24px] leading-[28.18px] text-white font-[400]">
                <div className="flex gap-x-[9px]">
                  <input type="radio" name="student" className="size-[24px]" />
                  <label className="">Yes</label>
                </div>
                <div className="flex gap-x-[9px]">
                  <input type="radio" name="student" className="size-[24px]" />
                  <label className="">Yes</label>
                </div>
              </div>
            </div>
            <button
              className={`flex w-full mt-[93px] items-center justify-center gap-2 px-4 p-[18px] lg:bg-[#3AB54A] bg-[#B6F485] text-white text-[14px] leading-[16.9px] font-[700] rounded-lg`}
              type="submit"
            >
              {formMutation.isPending ? (
                <div className="loader"></div>
              ) : (
                <p className="text- text-center font-[inter] font-[700] text-lg max-lg:text-base max-md:text-sm max-sm:text-xs">
                  Submit
                </p>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AmbForm;
