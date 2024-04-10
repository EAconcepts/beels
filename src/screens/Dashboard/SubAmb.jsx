//  /* eslint-disable */
// /* eslint-disable react/prop-types */

import { useContext, useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import LeadIcon from "../../assets/images/lead.png";
import { Transactions } from "./components/ambassadorTabs/ambassadorTabs";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { CiUser } from "react-icons/ci";
import { BsCheckCircleFill } from "react-icons/bs";
import TaskProgress from "./components/tasks/TaskProgress";
import PersonIcon from "../../assets/images/icon.png";
import CopyIcon from "../../assets/images/copy.png";
import MailIcon from "../../assets/images/mail.png";
import FirstIcon from "../../assets/images/person.png";
import TelephoneIcon from "../../assets/images/telephone.png";
import SecondIcon from "../../assets/images/secondicon.png";
import ThirdIcon from "../../assets/images/thirdicon.png";
import { formatDate } from "../../utils/formatDate";
import { handleCopy } from "../../utils/copyText";
import { TiArrowUp } from "react-icons/ti";



const SubAmb = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const { user, token } = useContext(AuthContext);

  const { email } = useParams();
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  // eslint-disable-next-line no-unused-vars
  const [showAddLeads, setHeaderTitle] = useOutletContext();
  useEffect(() => {
    setHeaderTitle(`View Sub Ambassadors`);
  }, []);

  // Ambassador Details query
  const ambDetailsQuery = useQuery({
    queryKey: ["ambDetails"],
    queryFn: () =>
      axios.get(`${baseUrl}/ambassador/details/${email}`, { headers }),
  });

  const statistics = [
    { name: "Active Users", value: "5,000", percent: "2%" },
    { name: "Onboarded Users", value: "1,000", percent: "2%" },
    { name: "Ambassadors", value: "3000", percent: "2%" },
  ];

  if (ambDetailsQuery.error) {
    console.log(ambDetailsQuery?.error);
  } else {
    console.log(ambDetailsQuery?.data);
  }

  return (
    <div>
      <div className="w-full flex flex-col px-[32px] lg:pr-[63px] lg:pt-[57px] pt-[22.6px]">
        <div className="w-full mb-[27px] lg:flex justify-between hidden">
          <h3 className="font-poppins font-[600] text-[32px] leading-[46.4px] text-black">
            Viewing Sub Ambassador
          </h3>
          <button
            className={`bg-[#082C25] rounded-[8px] py-[12px] px-[20px] font-[400] text-white text-[12px] leading-[20.3px] ${
              activeTab !== "Overview" && "hidden"
            }`}
          >
            Promote
          </button>
        </div>
        {/* Header */}
        <div className="w-full flex gap-x-[16.33px] items-center ">
          {!ambDetailsQuery.data?.data?.data?.user?.image ? (
            <img src={LeadIcon} className="size-[54.42px] rounded-full" />
          ) : (
            <div className="flex items-center justify-center rounded-full border-[1px] size-[45px] p-[5px] relative">
              <CiUser className="size-[40px]" />
              <BsCheckCircleFill className="absolute bottom-0 text-[#1671D9] right-0" />
            </div>
          )}
          <div className="flex flex-col font-inter leading-[27.62px] text-[19.05px]">
            <h5 className="font-[500] text-[#101928]">
              {`${ambDetailsQuery.data?.data?.data?.user.first_name} ${ambDetailsQuery.data?.data?.data?.user.last_name} `}
            </h5>
            <p className="font-[400] text-[#475367]">
              {ambDetailsQuery.data?.data?.data?.user?.type} Ambassador
            </p>
          </div>
        </div>
        {/* Details */}
        <div className="flex flex-col mt-[32.4px]">
          {/* Tabs */}
          <div className=" flex lg:gap-x-[32px] max-lg:justify-between border-b border-b-[#E4E7EC]">
            {/* {tabs.map((item, index) => ( */}
            <button
              onClick={() => setActiveTab("Overview")}
              // key={index}
              className={`py-[16px] px-[8px] text-[14px] font-[500] leading-[20.3px] font-inter text-[#344054] border-  ${
                activeTab === "Overview" && user.type === "Admin"
                  ? "border-b border-b-[#F56630] text-[#F56630]"
                  : "border-b-[#E4E7EC"
              } `}
            >
              Overview
            </button>
            {/* ))} */}
          </div>
          {/* Active Tab */}
          <main className="my-[16px] w-full ">
            <div className="flex max-lg:flex-col gap-x-[16px]">
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
                          {ambDetailsQuery?.data?.data?.data?.acct_no || "0"}
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
                          {ambDetailsQuery.data?.data?.data?.user?.email}
                        </p>
                      </div>
                    </div>
                    <img src={CopyIcon} className="" />
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
                          {ambDetailsQuery.data?.data?.data?.user?.first_name}
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
                          {ambDetailsQuery.data?.data?.data?.user?.last_name}
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
                          {ambDetailsQuery.data?.data?.data?.user?.phone}
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
                          {ambDetailsQuery.data?.data?.data?.user?.school}
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
                          {formatDate(
                            ambDetailsQuery.data?.data?.data?.user?.created_at
                          )}
                        </p>
                      </div>
                    </div>
                    <img src={CopyIcon} />
                  </div>
                </div>
                {/* Transactions Earning & Clicks */}
                <div className="mt-[22px]">{Transactions}</div>
              </div>
              <div className="w-full">
                {/* Statistics */}
                <div className="w-full flex flex-row max-lg:flex-wrap justify-between max-lg:mt-[28px] gapx-[20px] gap-y-[37px] lg:gap-x-[16px]">
                  {statistics?.map((item, index) => (
                    <div
                      key={index}
                      className="bg-[#FAF9F6] p-[12px] h-[175px] max-xsm:w-[150px] w-[173px] rounded-[10px] border-[1px] border-[#E4E7EC] flex flex-col justify-between "
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
                {/*  Tasks*/}
                <div className={`w-full`}>
                  <h3 className="max-lg:mt-[64px] max-lg:text-[20px] lg:mt-[40px] font-poppins font-[600] lg:text-[24px] leading-[34.8px] text-black">
                    Tasks
                  </h3>
                  <div className="max-lg:mt-[11px] lg:mt-[5px] flex flex-col gap-y-[19px]">
                    {ambDetailsQuery.data?.data?.data?.tasks?.map((task, index) => (
                      <TaskProgress key={index} task={task} />
                    ))}
                  </div>
                </div>
                {/* Leaderboard */}
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
                  <button className="lg:hidden self-center bg-[#082C25] px-[97px] mt-[144px] text-center text-[20px] leading-[29px] font-[400] font-inter text-white py-[15px]">
                    Promote
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default SubAmb;
