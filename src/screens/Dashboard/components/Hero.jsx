// import React from 'react'
import { useState } from "react";
import DashboardImage from "../../../assets/images/dashboardimg.png";

const DashboardHero = ({ setShowAddLeads }) => {
  return (
    <div>
      <div className="mx10 max-lgmx-8 max-md:mx5 bg-[#F1F1F1] pb-[43px] mt16 max-lgmt-12 max-mdmt-8 max-smmt-5 pb10 mb10">
        <div className="flex px-[56px] pt-[24px] justify-center items-center">
          <img src={DashboardImage} className="" />
        </div>
        <div className="flex flex-col gap-y-[8px] mt-[64px] font-poppins">
          <p className="text-[24px] max-md:text-[24px]  leading-[34.8px] font-[600] text-[#000000] text-center">
            Beels Ambassador Portal
          </p>
          <p className="text-[16px] leading-[23.2px] font-[400] text-[#000000] text-center m">
            Welcome to Beels Portal! As a company admin,you have the ability to
            add new ambassadors to our program.
          </p>
          <div className="px-[46px] w-full">
            <button
              onClick={() => setShowAddLeads(true)}
              className="w-full bg-[#001A04] py-[15px] text-[20px] font-inter font-[400] text-white flex justify-center items-center rounded-md"
            >
              Add Leads
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHero;
