import { useState } from "react";
// import { FcGoogle } from "react-icons/fc";
// import MailIcon from "../../assets/images/mail.png";
// import LockIcon from "../../assets/images/lock.png";
import Image from "../../assets/images/speaker.png";
import "./auth.css";
// import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/Beels-logo.png";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import { useParams } from "react-router-dom";
// import { FcGoogle } from "react-icons/fc";

const Onboarding = () => {
  const { email, token } = useParams();
  const [confirmOtp, setConfirmOtp] = useState(false);
  const [bvn, setBvn] = useState("");
  const [formValues, setFormValues] = useState({
    nin: "",
    otp: "",
    password: "",
    pin: "",
    email: email || "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevVals) => ({ ...prevVals, [name]: value }));
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    // //console.log(formValues);
    onboardMutation.mutate();
  };
  const headers = {
    Authorization: `Bearer ${token && token}`,
  };
  const apiUrl = import.meta.env.VITE_BASE_URL;
  const onboardMutation = useMutation({
    mutationFn: () =>
      axios.post(`${apiUrl}/ambassador/onboard`, formValues, { headers }),
    onSuccess: (data) => {
      // //console.log(data);
      if (data.data.status == "Success") {
        const userDetails = data.data.data;
        localStorage.setItem("logged_in", JSON.stringify(userDetails));
      }
      toast.success(data.data.message);
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.response.data.message || error.data.message || error.message);
    },
  });
  const handlePhoneVerification = (e) => {
    e.preventDefault();
    phoneMutation.mutate();
  };
  const phoneMutation = useMutation({
    mutationFn: () =>
      axios.post(
        `${apiUrl}/ambassador/onboard/bvn`,
        { bvn, email },
        { headers }
      ),
    onSuccess: (data) => {
      // //console.log(data);
      if (data.data.status == "Success") {
        setConfirmOtp(true);
        toast.success('OTP Sent Successfully!')
      }
    },
    onError: (error) => {
      // //console.log(error);
      toast.error(error.response.data.message || error.message);
    },
    onSettled: () => {},
  });
  return (
    <div className="min-h-screen relative lg:h-screen bg-[#B6F485] pt-[43px] px-[32px] max-lg:px8 max-md:px5 max-sm:px2">
      {/* logo */}
      <div className="flex absolute top-[33px] lg:top-[54px] left-[32px] lg:left-[64px] gap-x-[8.94px] items-center">
        <img src={logo} className="" />
      </div>
      {/* <img src={BeelsIcon} className="" /> */}
      <div className="lg:h-[calc(100%-43px) lg:h-full flex max-lg:flex-col justify-between items-center max-lg:justify-center w-full max-lg:mt-24 max-md:mt-20 max-sm:mt-[52.7px] ">
        <img
          src={Image}
          className="w-[480px] h-[calc(100%-100px)] self-end object-cover lg:absolut max-lg:hidden"
        />

        {/* Onboarding Form */}
        <div
          className={`bg-[#082C25] lg:pl-[104px] lg: pr-[97px] w-full h-ful rounded-2xl  maxlg:w-3/4 maxmd:w-[80%] max-sm:w[90% py-[42px] lg:py-[64px] px12 max-lg:px-10 max-md:px-8 max-sm:px6 px-0 `}
        >
          <p className="text-2xl leading-[28.18px] max-lg:text-xl max-md:text-lg max-sm:text-base font-[700] text-white font-[Rockwell] my4 max-lg:text-center lg:text-[32px]">
            Onboarding Form
          </p>
          <p
            className={`${
              !confirmOtp && "lg:text-[18px]"
            } lg:text-[24px] leading-[28.18px] font-[400] text-white mt-[16px] max-lg:text-center text-[14px]`}
          >
            {confirmOtp
              ? " Kindly complete the form below with your details."
              : "We're collecting and validating your BVN in accordance to CBN regulations as a personalized account would be opened in your name to perform transactions on the system"}
          </p>
          {confirmOtp ? (
            // IF gotten OTP
            <form
              onSubmit={handleSubmitForm}
              className="mt-[20px] lg:mt-[32px]"
            >
              <div className="flex flex-col gap-y-[16px] lg:gap-y-[24px]">
                {/* NIN & BVN */}
                <div className="flex flex-col text-white lg:flex-row gap-x-[19px]">
                  <div
                    className={`w-full flex flex-col items-start justify-start  max-sm:px-2 rounded-lg py-[15px]`}
                  >
                    <label className="text-[14px] text-white font-poppins leading-[20px]">
                      Ambassador NIN
                    </label>
                    <input
                      type="number"
                      required
                      className="h-[44px] w-full max-lg:w-[100%] flex-1 font-inter font-[500] bg-transparent border-b-[1px] border-white py-[8px] px-[16px]"
                      name="nin"
                      value={formValues.nin}
                      onChange={handleInputChange}
                    />
                  </div>
                  {/* Amb BVN */}
                  <div
                    className={`w-full flex flex-col items-start justify-start rounded-lg py-[15px]`}
                  >
                    <label className="text-[14px] text-white font-poppins leading-[20px]">
                      BVN OTP
                    </label>
                    <input
                      type="text"
                      required
                      className="h-[44px] w-full max-lg:w-[100%] flex-1 font-inter font-[500] bg-transparent border-b-[1px] border-white py-[8px] px-[16px]"
                      name="otp"
                      maxLength={6}
                      minLength={2}
                      value={formValues.otp}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                {/* Password & Pin */}
                <div className="flex flex-col lg:flex-row gap-x-[19px] text-white">
                  {/* Password */}
                  <div
                    className={`w-full flex flex-col items-start justify-start  max-sm:px-2 rounded-lg py-[15px]`}
                  >
                    <label className="text-[14px] text-white font-poppins leading-[20px]">
                      Ambassador Password
                    </label>
                    <input
                      type="password"
                      required
                      className="h-[44px] w-full max-lg:w-[100%] flex-1 font-inter font-[500] bg-transparent border-b-[1px] border-white py-[8px] px-[16px]"
                      name="password"
                      value={formValues.password}
                      onChange={handleInputChange}
                    />
                  </div>
                  {/* Amb PIN */}
                  <div
                    className={`w-full flex flex-col items-start justify-start rounded-lg py-[15px]`}
                  >
                    <label className="text-[14px] text-white font-poppins leading-[20px]">
                      Transaction PIN
                    </label>
                    <input
                      type="number"
                      required
                      className="h-[44px] w-full max-lg:w-[100%] flex-1 font-inter font-[500] bg-transparent border-b-[1px] border-white py-[8px] px-[16px]"
                      name="pin"
                      // maxLength={4}
                      pattern="\d{4}"
                      title="Please enter 4 digit number!"
                      value={formValues.pin}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <button
                className={`flex w-full mt-[93px] items-center justify-center gap-2 px-4 p-[18px] lg:bg-[#3AB54A] bg-[#B6F485] text-white text-[14px] leading-[16.9px] font-[700] rounded-lg`}
                type="submit"
              >
                {onboardMutation.isPending ? (
                  <div className="loader"></div>
                ) : (
                  <p className="text- text-center font-[inter] font-[700] text-lg max-lg:text-base max-md:text-sm max-sm:text-xs">
                    Submit
                  </p>
                )}
              </button>
            </form>
          ) : (
            // YET TO GET OTP
            <form
              onSubmit={handlePhoneVerification}
              className="mt-[20px] lg:mt-[32px]"
            >
              <div className="flex flex-col gap-y-[16px] lg:gap-y-[24px]">
                {/* Phone Number */}
                <div className="flex flex-col text-white lg:flex-row gap-x-[19px]">
                  <div
                    className={`w-full flex flex-col items-start justify-start  max-sm:px-2 rounded-lg py-[15px]`}
                  >
                    <label className="text-[14px] text-white font-poppins leading-[20px]">
                      Ambassador BVN
                    </label>
                    <input
                      type="text"
                      required
                      className="h-[44px] w-full max-lg:w-[100%] flex-1 font-inter font-[500] bg-transparent border-b-[1px] border-white py-[8px] px-[16px]"
                      name="bvn"
                      value={bvn}
                      maxLength={11}
                      minLength={11}
                      onChange={(e) => setBvn(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <button
                className={`flex w-full mt-[93px] items-center justify-center gap-2 px-4 p-[18px] lg:bg-[#3AB54A] bg-[#B6F485] text-white text-[14px] leading-[16.9px] font-[700] rounded-lg`}
                type="submit"
              >
                {phoneMutation.isPending ? (
                  <div className="loader"></div>
                ) : (
                  <p className="text- text-center font-[inter] font-[700] text-lg max-lg:text-base max-md:text-sm max-sm:text-xs">
                    Submit
                  </p>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
