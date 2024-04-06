/* eslint-disable react/prop-types */

import { useContext, useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import LeadIcon from "../../assets/images/lead.png";
import {
  UserStats,
  SendMessage,
  Ambassadors,
  Overview,
} from "./components/ambassadorTabs/ambassadorTabs";
import { allAmbassadors } from "./Ambassadors";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { CiUser } from "react-icons/ci";
import { BsCheckCircleFill } from "react-icons/bs";
import ViewAmb from "./components/ViewAmb";
import { useQueryClient } from "@tanstack/react-query";

const AmbassadorDetails = () => {
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
    setHeaderTitle(`View all Sub Ambassadors`);
  }, []);

  // Ambassador Details query
  const ambDetailsQuery = useQuery({
    queryKey: ["ambDetails"],
    queryFn: () =>
      axios.get(`${baseUrl}/ambassador/details/${email}`, { headers }),
  });
  // To Test Sub AMB
  const queryClient = useQueryClient();
  const amb = queryClient.getQueryData(["ambassador"]);
  // console.log(amb);

  // console.log(ambDetailsQuery.data.data)
  const statistics = [
    { name: "Users", value: "5,000", percent: "2%" },
    { name: "Referrals", value: "1,000", percent: "2%" },
    { name: "Ambassadors", value: "3000", percent: "2%" },
  ];
  const userStats = [
    {
      title: "Total Users",
      value: "29,405",
      percent: "15%",
    },
    {
      title: "Active Users",
      value: "2.40%",
      percent: "6%",
    },
    {
      title: "Retained Users",
      value: "24,000",
      percent: "15%",
    },
    {
      title: "Inactive Users",
      value: "300",
      percent: "6%",
    },
    {
      title: "User that have fully Onboarded",
      value: "5,837",
      percent: "15%",
    },
    {
      title: "Users with Security Tokens",
      value: "3,024",
      percent: "9%",
    },
  ];
  // console.log(email);
  const tabs = [
    {
      tab: "Overview",
      // content: overview,
    },
    {
      tab: "Users",
      // content: overview,
    },
    {
      tab: "Ambassadors",
      // content: overview,
    },
    {
      tab: "Send message",
      // content: overview,
    },
  ];
  // Switch Active tabs
  let content;
  switch (activeTab) {
    case "Overview":
      content = (
        <Overview
          ambDetails={
            ambDetailsQuery?.data && ambDetailsQuery?.data?.data?.data?.user
          }
          subAmb={
            ambDetailsQuery?.data && ambDetailsQuery?.data?.data?.data?.sub
          }
          statistics={statistics}
          user={user}
        />
      );
      break;
    case "Users":
      content = <UserStats userStats={userStats} />;
      break;
    case "Ambassadors":
      content = (
        <Ambassadors
          subAmbassador={allAmbassadors}
          userStats={userStats}
          user={user}
        />
      );
      break;
    case "Send message":
      content = SendMessage;
      break;
    default:
      content = "";
  }

  if (ambDetailsQuery.error) {
    console.log(ambDetailsQuery?.error);
  } else {
    // console.log(ambDetailsQuery?.data);
  }
  return (
    <div className="w-full flex flex-col px-[32px] lg:pr-[63px] lg:pt-[57px] pt-[22.6px]">
      <div className="w-full mb-[27px] lg:flex justify-between hidden">
        <h3 className="font-poppins font-[600] text-[32px] leading-[46.4px] text-black">
          Viewing {user?.type == "Admin" ? "Lead" : "Sub"} Ambassador
        </h3>
        {user?.type !== "Admin" && (
          <button
            className={`bg-[#082C25] rounded-[8px] py-[12px] px-[20px] font-[400] text-white text-[12px] leading-[20.3px] ${
              activeTab !== "Overview" && "hidden"
            }`}
          >
            Promote
          </button>
        )}
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
          {tabs.map((item, index) => (
            <button
              onClick={() => setActiveTab(item.tab)}
              key={index}
              className={`py-[16px] px-[8px] text-[14px] font-[500] leading-[20.3px] font-inter text-[#344054] border-  ${
                activeTab === item.tab && user.type === "Admin"
                  ? "border-b border-b-[#082C25]"
                  : activeTab === item.tab && user.type !== "Admin"
                  ? "border-b border-b-[#F56630] text-[#F56630]"
                  : "border-b-[#E4E7EC"
              } ${
                user.type !== "Admin" &&
                item.tab === "Ambassadors" &&
                "hidden max-xsm:hidden lg:hidden"
              }`}
            >
              {item.tab}
            </button>
          ))}
        </div>
        {/* Active Tab */}
        <div className="my-[16px] w-full">{content}</div>
      </div>
      {/* Sub Ambassadors for Admin view */}
      {user?.type === "Admin" && activeTab === "Overview" && (
        <div className="hidden lg:flex flex-col bg-[#FAF9F6] border-[#E4E7EC] rounded-[10px] border-[1px] mt-[16px]">
          <h3 className="font-inter mb-[9px] pl-[16px] mt-[38px] font-[500] text-[14px] leading-[20.3px] text-[#667185]">
            Sub Ambassador
          </h3>
          <ViewAmb ambassadorQuery={amb?.data && amb?.data?.data?.all} />
        </div>
      )}
    </div>
  );
};

export default AmbassadorDetails;
