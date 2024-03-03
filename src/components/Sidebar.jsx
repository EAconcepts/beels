import React, { useState } from 'react';
import BeelsIcon from '../assets/images/beels.png';
import DashboardIcon from '../assets/images/dashboardIcon.png';
import AmbassadorsIcon from '../assets/images/ambassadorsIcon.png';
import { RiArrowDropDownLine } from "react-icons/ri";

const Sidebar = () => {
 const [showAmbassadors, setShowAmbassadors] = useState(true);

 return (
    <div className='bg-[#F5F5F5] pl-10 pt-10 min-h-screen'>
      <img src={BeelsIcon} className='pb-16' />
      <div className='flex justify-start rounded-l-md gap-4 items-center bg-[#3AB54A] py-2 my-4 px-2'>
        <img src={DashboardIcon} />
        <p className='text-sm font-[700] text-[#667185] font-[Rockwell]'>Dashboard</p>
      </div>
      <div className='flex justify-between items-center px-2 my-4 py-2'>
        <div className='flex justify-start items-center gap-4'>
          <img src={AmbassadorsIcon} />
          <p className='text-sm font-[700] text-[#667185] font-[Rockwell]'> Ambassadors</p>
        </div>
        <div onClick={() => setShowAmbassadors(!showAmbassadors)}>
          <RiArrowDropDownLine />
        </div>
      </div>
      {showAmbassadors && (
        <div>
          <div className='flex justify-start gap-4 items-center px-3 my-3 py-2'>
            <div className='w-4 h-4 rounded-full border border-[#667185]'></div>
            <p className='text-sm font-[700] text-[#667185] font-[Rockwell]'>View Ambassadors</p>
          </div>
          <div className='flex justify-start gap-4 items-center px-3 py-2 my-3'>
            <div className='w-4 h-4 rounded-full border border-[#667185]'></div>
            <p className='text-sm font-[700] text-[#667185] font-[Rockwell]'>Add Ambassadors</p>
          </div>
        </div>
      )}
    </div>
 )
}

export default Sidebar;
