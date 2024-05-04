// /* eslint-disable react/prop-types */

// import { TiArrowUp } from "react-icons/ti";
import PersonIcon from "../../../../assets/images/icon.png";
import CopyIcon from "../../../../assets/images/copy.png";
import MailIcon from "../../../../assets/images/mail.png";
import FirstIcon from "../../../../assets/images/person.png";
import TelephoneIcon from "../../../../assets/images/telephone.png";
import SecondIcon from "../../../../assets/images/secondicon.png";
import ThirdIcon from "../../../../assets/images/thirdicon.png";
import AmbassadorCard from "./AmbassadorCard";
import barChart from "../../../../assets/images/bar-chart.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { formatDate } from "../../../../utils/formatDate";
import { handleCopy } from "../../../../utils/copyText";
import TaskProgress from "../tasks/TaskProgress";
import ViewAmb from "../ViewAmb";
import { Link, useNavigate } from "react-router-dom";

// transactions Earnings and clicks
export const Transactions = ({ details }) => {
  return (
    <div className="w-full flex max-xsm:flex-wrap max-sm:gap-y-[8px] sm:justify-between max-xsm:gap-x-[12px] gap-x-[6px] ">
      {/* Transactions */}
      {/* <div className="sm:w-full max-xsm:w-[121px] bg-[#FAF9F6] rounded-[10px] flex flex-col p-[12px]  border-[1px] border-[#E4E7EC]  ">
        <p className="text-[14px] font-[500] font-inter leading-[20.3px] text-[#667185]">
          Transaction
        </p> */}
      {/* <div className="flex gap-x-[8px]"> */}
      {/* <h1 className="font-inter text-[20px] font-[600] leading-[24px] tracking-[-2%]">
            {details?.user?.business?.balance
              ? details?.user?.business.balance
              : 0}
          </h1> */}
      {/* Percent */}
      {/* <div className="flex gap-x-[2px] items-center ">
          <TiArrowUp className="size-[12px] text-[#036B26]" />
          <small className="text-[#036B26] text-[12px] leading-[17.4px] tracking-[-0.5%] font-[500] font-inter">
            2%
          </small>
        </div> */}
      {/* </div> */}
      {/* </div> */}
      {/* Earnings */}
      <div className="sm:w-full max-xsm:w-[121px] bg-[#FAF9F6] flex flex-col p-[12px] border-[1px] border-[#E4E7EC] rounded-[10px]">
        <p className="text-[14px] font-[500] font-inter leading-[20.3px] text-[#667185]">
          Earnings
        </p>
        <div className="flex gap-x-[8px]">
          <h1 className="font-inter text-[20px] font-[600] leading-[24px] tracking-[-2%]">
            {details?.earnings ? details?.earnings : 0}
          </h1>
          {/* Percent */}
          {/* <div className="flex gap-x-[2px] items-center ">
          <TiArrowUp className="size-[12px] text-[#036B26]" />
          <small className="text-[#036B26] text-[12px] leading-[17.4px] tracking-[-0.5%] font-[500] font-inter">
            2%
          </small>
        </div> */}
        </div>
      </div>
      {/* Clicks */}
      <div className="sm:w-full max-xsm:w-[121px] bg-[#FAF9F6] rounded-[10px] flex flex-col p-[12px] border-[1px] border-[#E4E7EC] ">
        <p className="text-[14px] font-[500] font-inter leading-[20.3px] text-[#667185]">
          Clicks
        </p>
        <div className=" flex gap-x-[8px]">
          <h1 className="font-inter text-[20px] font-[600] leading-[24px] tracking-[-2%]">
            0
          </h1>
          {/* Percent */}
          {/* <div className=" flex gap-x-[2px]  items-center ">
          <TiArrowUp className="size-[12px] text-[#036B26]" />
          <small className="text-[#036B26] text-[12px] leading-[17.4px] tracking-[-0.5%] font-[500] font-inter">
            2%
          </small>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export const Overview = ({
  ambDetails,
  subAmb,
  tasks,
  statistics,
  user,
  details,
}) => {
  // console.log(subAmb)
  // Sub Ambassador & Statistics jSX
  const Statistics = (
    <>
      {/* Sub Ambassadors */}
      {subAmb && subAmb.length > 0 && (
        <div className="lg:hidden mt-[22px] border-[1px] border-[#EDEDF2] rounded-[8px] pt-[33px] pb-[31px] pl-[21px] pr-[10px]">
          <h1 className="font-poppins text-[20px] font-[600] leading-[29px] text-black">
            Sub Ambassadors
          </h1>
          <div className="flex flex-col mt-[13px] gap-y-[16px]">
            {subAmb?.map((ambassador, index) => (
              <Link to={`${ambassador.email}`} key={index}>
                <AmbassadorCard
                  ambassador={ambassador}
                  roleColor={"bg-[#22612A] text-white"}
                />
              </Link>
            ))}
          </div>
        </div>
      )}
      {/* Statistics => USERS | REFERRALS | AMBASSADORS */}
      <div className="xsm:w-full flex flex-wrap justify-between max-lg:mt-[28px] xs:gap-x-[10px] xsm:gapx-[20px] gap-y-[37px] lg:gap-x-[16px]">
        {statistics?.map((item, index) => (
          <div
            key={index}
            className="bg-[#FAF9F6] p-[12px] h-[175px] w-[140px] xsm:w-[173px] rounded-[10px] border-[1px] border-[#E4E7EC] flex flex-col justify-between "
          >
            <h5>{item.name}</h5>
            <div className="flex gap-x-[12px]">
              <h2 className="text-[20px] font-inter font-[600] leading-[24px] tracking-[-2%] text-[#101928]">
                {item.value}
              </h2>
              {/* Percent */}
              {/* <div className=" flex gap-x-[2px]  items-center ">
                <TiArrowUp className="size-[12px] text-[#036B26]" />
                <small className="text-[#036B26] text-[12px] leading-[17.4px] tracking-[-0.5%] font-[500] font-inter">
                  {item.percent}
                </small>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
  // Overview
  return (
    <div className="w-full lg:flex max-lg:flex-col lg:gap-x-[16px]">
      <div className="w-full ">
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
                  {ambDetails?.business ? ambDetails?.business.acc_number : "0"}
                </p>
              </div>
            </div>
            <img
              src={CopyIcon}
              onClick={() => handleCopy("Account Number", "9057365756")}
            />
          </div>
          {/* Email Address */}
          <div className="flex max-lg:w-full justify-between items-center px-5 py-2 border-b border-[#E4E7EC]">
            <div className="flex gap-x-[24px] max-lg:w-full">
              <img src={MailIcon} className="size-[20px]" />
              <div className="max-lg:w-full max-lg:overflow-hidden max-lg:">
                <p className="text-ellipsis max-lg:overflow-hidden text-[#667185] text-[12px] leading-[17.4px] font-[400] font-inter">
                  {" "}
                  Email{" "}
                </p>
                <p className="text-[#101928] text-[14px] leading-[20.3px] font-[500] font-inter">
                  {" "}
                  {ambDetails?.email}
                </p>
              </div>
            </div>
            <img
              onClick={() => handleCopy(ambDetails?.email)}
              src={CopyIcon}
              className=""
            />
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

            <img
              onClick={() => handleCopy(ambDetails?.first_name)}
              src={CopyIcon}
            />
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

            <img
              onClick={() => handleCopy(ambDetails?.last_name)}
              src={CopyIcon}
            />
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
            <img onClick={() => handleCopy(ambDetails?.phone)} src={CopyIcon} />
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
            <img
              onClick={() => handleCopy(ambDetails?.school)}
              src={CopyIcon}
            />
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
                  {ambDetails?.personal?.ref_code}
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
        <div className="mt-[22px]">{<Transactions details={details} />}</div>
      </div>
      {/*Sub Amb, Statistics, Tasks & Leaderboard */}
      <div className="flex-shrink-0">
        {Statistics}
        {/* Tasks & Leaderboard */}
        {user?.type !== "Admin" && (
          <>
            {/*  Tasks*/}
            <div className={``}>
              <h3 className="max-lg:mt-[64px] max-lg:text-[20px] lg:mt-[40px] font-poppins font-[600] lg:text-[24px] leading-[34.8px] text-black">
                Tasks
              </h3>
              <div className="max-lg:mt-[11px] lg:mt-[5px] flex flex-col gap-y-[19px]">
                {tasks?.map((task) => (
                  <TaskProgress key={task.id} task={task} />
                ))}
              </div>
            </div>
            {/* Leaderboard & Promote Button */}
            <div className="w-full flex flex-col">
              <div className="lg flex flex-col mt-[64px] gap-y-[21px]">
                <div className="flex justify-between">
                  <p className="font-poppins text-black leading-[23.2px] text-[16px] font-[400]">
                    Leaderboard Position
                  </p>
                  <h2 className="text-[20px] leading-[29px] lg:text-[#3AB54A] text-[#082C25] font-[700] font-poppins">
                    1st
                  </h2>
                </div>
                <div className="flex justify-between">
                  <p className="font-poppins text-black leading-[23.2px] text-[16px] font-[400]">
                    Points Earned
                  </p>
                  <h2 className="text-[20px] leading-[29px] lg:text-[#3AB54A] text-[#082C25] font-[700] font-poppins">
                    200points
                  </h2>
                </div>
              </div>
              <button className="lg:hidden self-center rounded-[8px] bg-[#082C25] px-[97px] mt-[144px] text-center text-[20px] leading-[29px] font-[400] font-inter text-white py-[15px]">
                Promote
              </button>
            </div>
          </>
        )}
        <>
          {/* {subAmb && subAmb.length > 0 && (
            <ViewAmb ambassadorQuery={subAmb && subAmb} />
          )} */}
        </>
      </div>
    </div>
  );
};

export const UserStats = ({ userStats }) => {
  return (
    <div className="w-full lg:w-max grid grid-cols-2 gap-x-[16px] gap-y-[23.5px]">
      {userStats?.map((item, index) => (
        <div
          key={index}
          className="w-full lg:w-[346px] lg:h-[137px] rounded-[10px] border-[1px] border-[#E4E7EC] py-[11px] px-[15px] bg-[#FAF9F6] flex flex-col gap-y-[17.5px] justify-between"
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
              {/* Percent */}
              {/* <div className=" flex gap-x-[2px]  items-center ">
                <TiArrowUp className="size-[12px] text-[#036B26]" />
                <small className="text-[#036B26] text-[12px] leading-[17.4px] tracking-[-0.5%] font-[500] font-inter">
                  {item.percent}
                </small>
              </div> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const Ambassadors = ({ subAmbassador, userStats, user }) => {
  console.log(subAmbassador);
  const navigateTo = useNavigate();
  return (
    <div
      className={`py-[33px] px-[10px] bg-white flex flex-col border-[1px] border-[#EDEDF2]
      ${user.type == "Admin" && "lg:flex-col-reverse lg:border-none lg:w-full"}
      `}
    >
      {/* Sub Ambassadors */}
      {subAmbassador && subAmbassador.length > 0 && (
        <div className={` ${user.type == "Admin" && "shrink0 lg:w-ful"}`}>
          {/* <> */}
          <h1 className="text-[20px] lg:hidden font-poppins font-[600] leading-[29px] text-black">
            {" "}
            Sub Ambassadors
          </h1>
          {/* Sub Ambassadors */}
          <div className="lg:hidden flex flex-col gap-y-[16px] mt-[13px]">
            {subAmbassador?.map((sub, index) => (
              <div onClick={() => navigateTo(`${sub.email}`)} key={index}>
                <AmbassadorCard
                  ambassador={sub}
                  roleColor={"bg-[#082C25] text-[#FAF9F6]"}
                />
              </div>
            ))}
          </div>

          {/* Desktop Sub Ambassadors */}
          <div
            className={`hidden lg:block lg:w-ful mt-[32px]  bg-[#FAF9F6] rounded-[8px] pl-[12.79px] lg:pt-[30.39px]`}
          >
            <h1 className="text-[20px] pl-[24px] mb-[12px] font-poppins font-[600] leading-[29px] text-black">
              {" "}
              Sub Ambassadors
            </h1>
            {subAmbassador && subAmbassador.length > 0 && (
              <ViewAmb ambassadorQuery={subAmbassador} />
            )}
          </div>
        </div>
      )}
      {/* Stats */}
      <div
        className={`w-full grid-cols-2 mt-[44px] ${
          user.type == "Admin" && ""
        } `}
      >
        {/* {userStats.map((item, index)=>( */}
        <UserStats userStats={userStats} />
        {/* ))} */}
      </div>
    </div>
  );
};

export const SendMessage = <div></div>;
