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
        <div className="flex flex-col lg:px-[105px] font- max-lg:gap-y-[8px] mt-[64px] lg:mt-[24.99px] font-poppins">
          <p className="text-[24px]  lg:text-[32px] lg:font-inter max-md:text-[24px]  leading-[34.8px] lg:leading-[46.4px] font-[600] text-[#000000] text-center">
            Beels Ambassador Portal
          </p>
          <p className="text-[16px] lg:mt-[33px] lg:text-[24px] lg:leading-[34.8px] lg:font-inter leading-[23.2px] font-[400] text-[#000000] text-center m">
            Welcome to Beels Portal! As a company admin,you have the ability to
            add new ambassadors to our program.
          </p>
          {/* Add Ambassador Button */}
          <div className="px-[46px] lg:mt-[35px] w-full">
            <button
              onClick={() => setShowAddLeads(true)}
              className="w-full lg:mx-auto lg:w-fit bg-[#001A04] py-[15px] lg:px-[55.5px] text-[20px] font-inter font-[400] text-white flex justify-center items-center rounded-md"
            >
              Add Ambassador
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHero;
