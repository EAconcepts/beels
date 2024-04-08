import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { handleCopy } from "../../../utils/copyText";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const SubOverview = () => {
  const {  token } = useContext(AuthContext);
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const ambassadorQuery = useQuery({
    queryKey: ["ambassador"],
    queryFn: () => axios.get(`${baseUrl}/ambassador/dashboard`, { headers }),
  });
  return (
    <div className="w-full flex flex-col lg:bg-[#FAFAFA] bg-[#F1F1F1] pt-[37px]">
      <h1 className="px-[12px] text-black text-[24px] font-[600] leading-[36px] font-poppins">
        Start Sharing Now- It’s Easy!
      </h1>
      <h6 className="font-poppins text-[16px] pl-[12px] mt-[22px] font-[700] leading-[23.2px] text-black ">
        Send Them Your Link
      </h6>
      {/* Share link */}
      <div className="w-full bg-[#E9E9E9] mt-[11px] flex ustify-between px-[9px] gap-x-[32px] max-xsm:gap-x-[16px] justify-between items-center ">
        <p className="w-[60%] text-wrap font-[400] font-montserrat leading-[13.72px] text-[11.26px] text-black break-words border">
          {ambassadorQuery.data?.data?.data?.user?.ref_code }
        </p>
        <button onClick={()=>handleCopy(ambassadorQuery.data?.data?.data?.user?.ref_code )} className="bg-[#082C25] w-fu max-xsm:px-[14px] max-xsm:text-[10px] shrink- py-[12px] px-[20px] rounded-[8px] xsm:text-[12px] font-[400] text-white leading-[20.3px] text-[14px]">
          Copy Link
        </button>
      </div>
      {/* Socials */}
      <div className="mt-[15px] pl-[12px] flex gap-x-[10px]">
        {/* Facebook */}
        <div className="rounded-full size-[32px] bg-[#082C25] flex items-center justify-center ">
          <TiSocialFacebook className="text-white " />
        </div>
        {/* Twitter X */}
        <div className="rounded-full size-[32px] bg-[#082C25] flex items-center justify-center ">
          <FaXTwitter className="text-white " />
        </div>
        {/* WhatsApp */}
        <div className="rounded-full size-[32px] bg-[#082C25] flex items-center justify-center ">
          <FaWhatsapp className="text-white " />
        </div>
      </div>
      {/*Invite by Email Form */}
      <form className="mt-[33px] flex flex-col">
        <h3 className="font-poppins font-[700] max-lg:pl-[4px] text-[16px] leading-[23.2px] text-black">
          Invite by Email
        </h3>
        {/* Emails */}
        <input
          type="text"
          className="mt-[12px] bg-[#E9E9E9] py-[22px] pl-[7.5px] pr-[42.47px] text-black font-[400] text-[11.26px] leading-[13.72px] font-montserrat placeholder:text-black"
          placeholder="Enter email address separated by commas"
        />
        {/*Mail Content */}
        <div className="pl-[5px] pt-[12px] pb-[7px]">
          <textarea
            className="w-full mt-[22px] max-xsm:text-[12px] h-[175px] font-montserrat text-[14px] leading-[17.07px] text py-[12px] pl-[7.51px] pr-[42.49px] placeholder:text-[#7D7D7D] bg-[#E9E9E9] focus-within:outline-none"
            placeholder="Hi, 

I wanted to send you a note about my experience with beelsfinance. I've been really impressed with them and think you will be too.

Click this link to check them out:
"
          />
        </div>
        {/* Submit button */}
        <div className="px-[46px] mt-[22px] pb-[32px]">
          <button className="w-full bg-[#082C25] p-[10px] rounded-[8px] leading-[29px] text-[20px] font-[400] font-inter text-white text-center">
            {" "}
            Send Email
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubOverview;
