import { useEffect, useState } from "react";
import Account from "./components/Account";
import Security from "./components/Security";
import { useOutletContext } from "react-router-dom";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("account");
  const [showAddLeads, setHeaderTitle] = useOutletContext();
  useEffect(() => {
    setHeaderTitle(`Profile`);
  }, []);
  return (
    <div className="flex flex-col px-[32px] lg: ">
      {/* Profile Tabs */}
      <div className="w-full flex mt-[24px] lg:w-[50%] lg:mx-auto lg:justify-center bg-[#EDEDED] px-[32px] rounded-[50px] py-[8px]">
        <div className="w-full flex justify-between lg:justify-around  ">
          <button
            onClick={() => setActiveTab("account")}
            className={`text-[16px] leading-[23.2px] text-black font-[400] font-poppins py-[8px] px-[24px] ${
              activeTab === "account" &&
              "rounded-[50px] bg-white text-[#082C25]"
            } `}
          >
            Account
          </button>
          <button
            onClick={() => setActiveTab("security")}
            className={`text-[16px] text-black leading-[23.2px] font-[400] font-poppins py-[8px] px-[24px] ${
              activeTab === "security" &&
              "rounded-[50px] bg-white text-[#082C25]"
            } `}
          >
            Security
          </button>
        </div>
      </div>
      {/* Personalize account */}
      {activeTab == "account" ? <Account /> : <Security />}
    </div>
  );
};

export default Profile;
