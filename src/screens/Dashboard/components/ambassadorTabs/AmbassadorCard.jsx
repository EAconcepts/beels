import React from "react";
import ThreeDotIcon from "../../../../assets/images/three-dot.png";
import LeadIcon from "../../../../assets/images/lead.png";
// import EditIcon from "../../assets/images/edit.png";
import { twMerge } from "tailwind-merge";
import { formatDate } from "../../../../utils/formatDate";

const AmbassadorCard = ({ ambassador, roleColor }) => {
  return (
    <div className="px-[7px]">
      {/* Email Header */}
      <div className="w-full flex justify-between items-center ">
        <p className="text-[#101928] text-[12x] leading-[17.4px] font-[500] font-inter ">
          {ambassador.email}
        </p>
        <img src={ThreeDotIcon} className="size-[24px]" />
      </div>
      <div className="flex flex-col justify-between mt-[8px] pl-[13px] pt-[15px] pb-[21px] pr-[30px] border-[0.4px] rounded-[12px] border-black ">
        {/* Name & Role */}
        <div className="flex justify-between items-center ">
          {/* Avatar, Name & Role */}
          <div className="flex gap-x-[12.51px] justify-start items-center ">
            <img src={LeadIcon} className=" roundedfull size-[41.7px]" />
            {/* </div>/ */}
            <div className="flex flex-col font-inter text-[14.6px] leading-[21.17px] ">
              <p className="text-[#101928]   font-[500]  ">{`${ambassador.first_name}   ${ambassador.last_name}  `}</p>
              <p className="text-[#475367] font-[400]  ">
                {ambassador.type} Ambassador
              </p>
            </div>
          </div>
          {/* role tag */}
          <div
            className={twMerge(
              "bg-[#082C25] px-[8.97px] py-[1.49] rounded-2xl text-[#FAF9F6] flex justify-center items-center",
              roleColor
            )}
          >
            <p className=" text-[10.46px] font-[500] font-inter leading-[15.17px] text-center">
              {" "}
              {ambassador.type}{" "}
            </p>
          </div>
        </div>
        {/* Date & Delete */}
        <div className="flex mt-[19px] justify-between items-center">
          <p className="text-[#475367] text-[14.6px] leading-[21.7px] font-[400] font-inter ">
            Date Added{" "}
          </p>
          <div className="flex justify-between items-center gap-x-[8px]">
            <p className="text-[#475367] text-[14.6px] font-[700] font-Inter leading-[12.17px] ">
              {ambassador?.created_at && formatDate(ambassador?.created_at)}
            </p>
            {ambassador && (
              <div className="flex justify-center items-center gap-1">
                {/* <img src={EditIcon} /> */}
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 18C2.45 18 1.97933 17.8043 1.588 17.413C1.19667 17.0217 1.00067 16.5507 1 16V3H0V1H5V0H11V1H16V3H15V16C15 16.55 14.8043 17.021 14.413 17.413C14.0217 17.805 13.5507 18.0007 13 18H3ZM13 3H3V16H13V3ZM5 14H7V5H5V14ZM9 14H11V5H9V14Z"
                    fill="black"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmbassadorCard;
