// /* eslint-disable */

import { useContext, useState } from "react";
import MailIcon from "../../assets/images/mail.png";
import LockIcon from "../../assets/images/lock.png";
import Image from "../../assets/images/speaker.png";
import "./auth.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../context/AuthContext";
import beelsLogo from "../../assets/images/Beels-logo.png";

const Login = ({ role }) => {
  const [loginValues, setLoginValues] = useState({
    email: "",
    password: "",
    type: role ? role : "Admin",
  });
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { setToken, setUser } = useContext(AuthContext);

  const apiUrl = import.meta.env.VITE_BASE_URL;
  //  input  onChange fn
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginValues((prevVals) => ({ ...prevVals, [name]: value }));
  };
  const handleLogin = (e) => {
    e.preventDefault();
    loginMutation.mutate();
  };
  const loginMutation = useMutation({
    mutationFn: () => axios.post(`${apiUrl}/ambassador/login`, loginValues),
    onSuccess: (data) => {
      //console.log(data);
      if (data.data.status == "Success") {
        const userDetails = data.data.data;
        //console.log(userDetails);
        setToken(userDetails.token);
        setUser(userDetails.user);
        localStorage.setItem("logged_in", JSON.stringify(userDetails));
        navigate("/dashboard");
      }
      toast.success(data.data.message);
    },
    onError: (error) => {
      //console.log(error);
      toast.error(error.data.message || error.message);
    },
  });

  // useEffect(() => {
  //   if (error) {
  //     setIsErrorVisible(true);
  //     const timer = setTimeout(() => {
  //       setIsErrorVisible(false);
  //     }, 5000);

  //     return () => clearTimeout(timer);
  //   }
  // }, [error]);

  if (success !== null) {
    //console.log(success.user);
    localStorage.setItem("logged_in", JSON.stringify(success));
  }

  // Check if already logged in
  // useEffect(() => {
  //   if (JSON.parse(localStorage.getItem("logged_in")) !== null) {
  //     // navigate("/dashboard");
  //   }
  // });
  return (
    <div className="h-screen relative lg:h-screen bg-[#B6F485] max-lg:pt-[43px] px-[32px]  ">
      {/* logo */}
      {/* <div className=" hidden fle absolute top-[54px] left-[64px] gap-x-[8.94px] items-center">
        <img src={logo} className="" />
        <div className="flex items-baseline gap-x-[2px]">
          <span className="text-[28px] font-[700]">Beels</span>
          Registered Trademark
          <div className=" bg-[#082C25] size-[10.43px] flex items-center justify-center">
            <div className="rounded-full size-[9.32px] border-[0.98px] border-[#ffffff] flex items-center justify-center">
              <span className="text-white text-[8px]">R</span>
            </div>
          </div>
        </div>
      </div> */}
      <img
        src={beelsLogo}
        className="max-lg:flex absolute top-[54px] max-lg:left-[32px] max-lg:top-[43px] left-[64px] gap-x-[8.94px] items-center"
      />
      <img
        src={Image}
        className="w-[480px] h-full items-end self-end object-cover lg:absolute left-[64px] -bottom-[32px] max-lg:hidden"
      />
      <div className="lgh-[calc(100%-43px)] h-full flex max-lg:flex-col  items-center max-lg:justify-center w-full max-lg:mt24 max-md:mt20 maxsm:mt-[52.7px] lg:justify-end ">
        {/* Login Form */}
        <div
          className={`bg-[#082C25]  lg:pl-[104px] pr-[97px] w-full lg:w-[55% lg:w-[821px] rounded-[16px] max-lg:py-[70px] lg:py-[90px] max-md:px-8 px-0 `}
        >
          <p className="text-2xl leading-[28.18px] max-lg:text-xl max-md:text-lg max-sm:text-base font-[700] text-white font-[Rockwell] max-lg:text-center lg:text-[32px]">
            Login to{" "}
            {role === "Admin" ? role : role === "Lead" && role + " Ambassador"}{" "}
            Account
          </p>
          <form onSubmit={handleLogin} className="mt-[20px] lg:-[24px]">
            <div className="flex flex-col gap-y-[16px] lg:gap-y-[24px]">
              {/* Email */}
              <div className="flex items-center justify-start gap-2 lg:px-[16px] max-lg:px-2 py-[15px] bg-white rounded-lg">
                <img src={MailIcon} className=" " />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={`${role} Email`}
                  className="input max-lg:w-[100%] text-[14px] leading-[16.96px] flex-1 border-none font-inter font-[500] placeholder:text-[#A6A6A6] "
                  value={loginValues.email}
                  onChange={handleInputChange}
                />
              </div>
              {/* Password */}
              <div
                className={`flex ${
                  emailError || (passwordError && "my-2")
                }  items-center justify-start gap-2 lg:px-[16px] max-lg:px-2 py-[15px] bg-white rounded-lg`}
              >
                <img src={LockIcon} className="" />
                <input
                  type="password"
                  required
                  placeholder="Password"
                  className="input max-lg:w-[100%] flex-1 font-inter font-[500] placeholder:text-[#A6A6A6]"
                  name="password"
                  value={loginValues.password}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <button
              disabled={loginMutation.isPending}
              className={`flex w-full mt-[32px] ${
                passwordError || (emailError && "my-2")
              } items-center justify-center gap-2 px-4 p-[18px] lg:bg-[#3AB54A] bg-[#B6F485] text-[#082C25] text-[14px] leading-[16.9px] font-[700] rounded-lg`}
              type="submit"
            >
              {loginMutation.isPending ? (
                <div className="loader"></div>
              ) : (
                <p className="text- text-center font-[inter] font-[700] text-lg max-lg:text-base max-md:text-sm max-sm:text-xs">
                  Login
                </p>
              )}
            </button>
          </form>
          {/* Google Login */}
          <div className="hidden lg:flex flex-col">
            {/* Divider */}
            <div className="hidden lg:flex items-baseline justify-center-center font-inter gap-x-[12px] px-[95px] w-full mt-[22px]">
              <div className="w-full border-b-[1px] border-b-white"></div>
              <span className="text-[14px] leading-[16.94px] font-[700] text-white">
                Or
              </span>
              <div className="w-full border-b-[1px] border-b-white"></div>
            </div>
            <button
              className={`flex w-full mt-[34px] ${
                passwordError || (emailError && "my-2")
              } items-center justify-center gap-2 px-4 p-[18px] bg-white text-black text-[14px] leading-[16.9px] font-[700] rounded-lg`}
              type="submit"
            >
              <p className="text-center font-inter font-[500] text-[l4px] ">
                Login with Google
              </p>
              <FcGoogle className="text-[32px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
