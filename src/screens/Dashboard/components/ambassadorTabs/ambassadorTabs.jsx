import { TiArrowUp } from "react-icons/ti";

import PersonIcon from "../../../../assets/images/icon.png";
import CopyIcon from "../../../../assets/images/copy.png";
import MailIcon from "../../../../assets/images/mail.png";
import FirstIcon from "../../../../assets/images/person.png";
import TelephoneIcon from "../../../../assets/images/telephone.png";
import SecondIcon from "../../../../assets/images/secondicon.png";
import ThirdIcon from "../../../../assets/images/thirdicon.png";
import AmbassadorCard from "./AmbassadorCard";
import barChart from "../../../../assets/images/barChart.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import { allAmbassadors } from "../../NewAmbassadors";
import { toast } from "sonner";
import { formatDate } from "../../../../utils/formatDate";

export const Transactions = (
  <div className="w-full flex justify-between gap-x-[6px]">
    {/* Transactions */}
    <div className="w-full bg-[#FAF9F6] rounded-[10px] flex flex-col p-[12px] border-[1px] border-[#E4E7EC] ">
      <p className="text-[14px] font-[500] font-inter leading-[20.3px] text-[#667185]">
        Transaction
      </p>
      <div className="flex gap-x-[8px]">
        <h1 className="font-inter text-[20px] font-[600] leading-[24px] tracking-[-2%]">
          4,647
        </h1>
        <div className="flex gap-x-[2px] items-center ">
          <TiArrowUp className="size-[12px] text-[#036B26]" />
          <small className="text-[#036B26] text-[12px] leading-[17.4px] tracking-[-0.5%] font-[500] font-inter">
            2%
          </small>
        </div>
      </div>
    </div>
    {/* Earnings */}
    <div className="w-full bg-[#FAF9F6] flex flex-col p-[12px] border-[1px] border-[#E4E7EC] rounded-[10px]">
      <p className="text-[14px] font-[500] font-inter leading-[20.3px] text-[#667185]">
        Earnings
      </p>
      <div className="flex gap-x-[8px]">
        <h1 className="font-inter text-[20px] font-[600] leading-[24px] tracking-[-2%]">
          4,647
        </h1>
        <div className="flex gap-x-[2px] items-center ">
          <TiArrowUp className="size-[12px] text-[#036B26]" />
          <small className="text-[#036B26] text-[12px] leading-[17.4px] tracking-[-0.5%] font-[500] font-inter">
            2%
          </small>
        </div>
      </div>
    </div>
    {/* Clicks */}
    <div className="w-full bg-[#FAF9F6] rounded-[10px] flex flex-col p-[12px] border-[1px] border-[#E4E7EC] ">
      <p className="text-[14px] font-[500] font-inter leading-[20.3px] text-[#667185]">
        Clicks
      </p>
      <div className=" flex gap-x-[8px]">
        <h1 className="font-inter text-[20px] font-[600] leading-[24px] tracking-[-2%]">
          4,647
        </h1>
        <div className=" flex gap-x-[2px]  items-center ">
          <TiArrowUp className="size-[12px] text-[#036B26]" />
          <small className="text-[#036B26] text-[12px] leading-[17.4px] tracking-[-0.5%] font-[500] font-inter">
            2%
          </small>
        </div>
      </div>
    </div>
  </div>
);

export const Overview = ({ ambDetails, allAmbassadors, statistics }) => {
  // Sub Ambassador & Statistics jSX
  const Statistics = (
    <>
      {/* Sub Ambassadors */}
      <div className="mt-[22px] border-[1px] border-[#EDEDF2] rounded-[8px] pt-[33px] pb-[31px] pl-[21px] pr-[10px]">
        <h1 className="font-poppins text-[20px] font-[600] leading-[29px] text-black">
          Sub Ambassadors
        </h1>
        <div className="flex flex-col mt-[13px] gap-y-[16px]">
          {allAmbassadors.map((ambassador, index) => (
            <AmbassadorCard
              key={index}
              ambassador={ambassador}
              roleColor={"bg-[#22612A] text-white"}
            />
          ))}
        </div>
      </div>
      {/* Statistics */}
      <div className="w-full flex flex-wrap justify-between mt-[28px] gapx-[20px] gap-y-[37px]">
        {statistics?.map((item, index) => (
          <div
            key={index}
            className="bg-[#FAF9F6] p-[12px] h-[175px] w-[173px] rounded-[10px] border-[1px] border-[#E4E7EC] flex flex-col justify-between "
          >
            <h5>{item.name}</h5>
            <div className="flex gap-x-[12px]">
              <h2 className="text-[20px] font-inter font-[600] leading-[24px] tracking-[-2%] text-[#101928]">
                {item.value}
              </h2>
              <div className=" flex gap-x-[2px]  items-center ">
                <TiArrowUp className="size-[12px] text-[#036B26]" />
                <small className="text-[#036B26] text-[12px] leading-[17.4px] tracking-[-0.5%] font-[500] font-inter">
                  {item.percent}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  // Copy text to clipboard
  const handleCopy = async (title, text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(`${title} copied to the clipboard`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full">
      <div className="w-full">
        {/* Ambassador Details */}
        <div className=" border border-[#E4E7EC] rounded-md pb-3">
          {/* Beels Account Number */}
          <div className="flex justify-between items-center px-5 py-2 border-b border-[#E4E7EC]">
            <div className="flex gap-x-[24px]">
              <img src={PersonIcon} className="size-[20px]" />
              <div className="">
                <p className="text-[#667185] text-[12px] leading-[17.4px] font-[400] font-inter ">
                  {" "}
                  Beels Account Number{" "}
                </p>
                <p className="text-[#101928] text-[14px] leading-[20.3px] font-[500] font-inter ">
                  {" "}
                  {ambDetails?.acct_no ? ambDetails.acct_no : "0"}
                </p>
              </div>
            </div>
            <img
              src={CopyIcon}
              onClick={() => handleCopy("Account Number", "9057365756")}
            />
          </div>
          {/* Email Address */}
          <div className="flex justify-between items-center px-5 py-2 border-b border-[#E4E7EC]">
            <div className="flex gap-x-[24px]">
              <img src={MailIcon} className="size-[20px]" />
              <div className="">
                <p className="text-[#667185] text-[12px] leading-[17.4px] font-[400] font-inter">
                  {" "}
                  Email{" "}
                </p>
                <p className="text-[#101928] text-[14px] leading-[20.3px] font-[500] font-inter">
                  {" "}
                  {ambDetails?.email}
                </p>
              </div>
            </div>
            <img src={CopyIcon} />
          </div>
          {/* First name */}
          <div className="flex justify-between items-center px-5 py-2 border-b border-[#E4E7EC]">
            <div className="flex gap-x-[24px]">
              <img src={FirstIcon} className="size-[20px]" />
              <div className="">
                <p className="text-[#667185] text-[12px] leading-[17.4px] font-[400] font-inter ">
                  {" "}
                  First Name{" "}
                </p>
                <p className="text-[#101928] text-[14px] leading-[20.3px] font-[500] font-inter ">
                  {ambDetails?.first_name}
                </p>
              </div>
            </div>

            <img src={CopyIcon} />
          </div>
          {/* Last Name */}
          <div className="flex justify-between items-center px-5 py-2 border-b border-[#E4E7EC]">
            <div className="flex gap-x-[24px]">
              <img src={FirstIcon} className="size-[20px]" />
              <div className="">
                <p className="text-[#667185] text-[12px] leading-[17.4px] font-[400] font-inter ">
                  {" "}
                  Last Name{" "}
                </p>
                <p className="text-[#101928] text-[14px] leading-[20.3px] font-[500] font-inter ">
                  {ambDetails?.last_name}
                </p>
              </div>
            </div>

            <img src={CopyIcon} />
          </div>
          {/* Phone Number */}
          <div className="flex justify-between items-center px-5 py-2 border-b border-[#E4E7EC]">
            <div className="flex gap-x-[24px]">
              <img src={TelephoneIcon} className="size-[20px]" />
              <div className="">
                <p className="text-[#667185] text-[12px] leading-[17.4px] font-[400] font-inter ">
                  {" "}
                  Phone Number{" "}
                </p>
                <p className="text-[#101928] text-[14px] leading-[20.3px] font-[500] font-inter ">
                  {ambDetails?.phone}
                </p>
              </div>
            </div>
            <img src={CopyIcon} />
          </div>
          {/* School */}
          <div className="flex justify-between items-center px-5 py-2 border-b border-[#E4E7EC]">
            <div className="flex gap-x-[24px]">
              <img src={SecondIcon} className="size-[20px]" />
              <div className="">
                <p className="text-[#667185] text-[12px] leading-[17.4px] font-[400] font-inter ">
                  {" "}
                  School{" "}
                </p>
                <p className="text-[#101928] text-[14px] leading-[20.3px] font-[500] font-inter ">
                  {ambDetails?.school}
                </p>
              </div>
            </div>
            <img src={CopyIcon} />
          </div>
          {/* Ambassador ref link */}
          <div className="flex justify-between items-center px-5 py-2 border-b border-[#E4E7EC]">
            <div className="flex gap-x-[24px]">
              <img src={SecondIcon} className="size-[20px]" />
              <div className="">
                <p className="text-[#667185] text-[12px] leading-[17.4px] font-[400] font-inter ">
                  {" "}
                  Ambassador ref link{" "}
                </p>
                <p className="text-[#101928] text-[14px] leading-[20.3px] font-[500] font-inter ">
                  Beels/Sandy-38ndl{" "}
                </p>
              </div>
            </div>
            <img src={CopyIcon} />
          </div>
          {/* Date Created */}
          <div className="flex justify-between items-center px-5 py-2 border-b border-[#E4E7EC]">
            <div className="flex gap-x-[24px]">
              <img src={ThirdIcon} className="size-[20px]" />
              <div className="">
                <p className="text-[#667185] text-[12px] leading-[17.4px] font-[400] font-inter ">
                  Date Created{" "}
                </p>
                <p className="text-[#101928] text-[14px] leading-[20.3px] font-[500] font-inter ">
                  {formatDate(ambDetails?.created_at)}
                </p>
              </div>
            </div>
            <img src={CopyIcon} />
          </div>
        </div>

        {/* Transactions Earning & Clicks */}
        <div className="mt-[22px]">{Transactions}</div>
        {Statistics}
      </div>
    </div>
  );
};

export const UserStats = ({ userStats }) => {
  return (
    <div className="w-full grid grid-cols-2 gap-x-[16px] gap-y-[23.5px]">
      {userStats?.map((item, index) => (
        <div
          key={index}
          className="w-full rounded-[10px] border-[1px] border-[#E4E7EC] py-[11px] px-[15px] bg-[#FAF9F6] flex flex-col gap-y-[17.5px] justify-between"
        >
          {/* This week */}
          <div className="w-full flex justify-between">
            <img src={barChart} className="size-[24px]" />
            <div className="flex items-center gap-x-[7px]">
              <p className="font-inter font-[400] text-[12px] leading-[17.4px] text-[#98A2B3]">
                This Week
              </p>
              <MdOutlineKeyboardArrowDown className="size-[24px]" />
            </div>
          </div>
          <div className="flex flex-col w-full gap-y-[8px] ">
            <h4 className="text-[14px] font-inter leading-[20.3px] font-[400] text-[#667185]">
              {item.title}
            </h4>
            <div className="flex w-full gap-x-[10px] items-center ">
              <h1 className="text-[18px] font-[600] font-inter leading-[26.1px] text-[#101928]">
                {item.value}
              </h1>
              <div className=" flex gap-x-[2px]  items-center ">
                <TiArrowUp className="size-[12px] text-[#036B26]" />
                <small className="text-[#036B26] text-[12px] leading-[17.4px] tracking-[-0.5%] font-[500] font-inter">
                  {item.percent}
                </small>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const Ambassadors = ({ subAmbassador, userStats }) => {
  return (
    <div className="py-[33px] px-[10px] bg-white flex flex-col border-[1px] border-[#EDEDF2]">
      <h1 className="text-[20px] font-poppins font-[600] leading-[29px] text-black">
        {" "}
        Sub Ambassadors
      </h1>
      {/* Sub Ambassadors */}
      <div className="flex flex-col gap-y-[16px] mt-[13px]">
        {subAmbassador?.map((sub, index) => (
          <AmbassadorCard
            key={index}
            ambassador={sub}
            roleColor={"bg-[#082C25] text-[#FAF9F6]"}
          />
        ))}
      </div>
      {/* Stats */}
      <div className="w-full grid-cols-2 mt-[44px]">
        {/* {userStats.map((item, index)=>( */}
        <UserStats userStats={userStats} />
        {/* ))} */}
      </div>
    </div>
  );
};
export const SendMessage = <div>SendMessage</div>;
