import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import LeadIcon from '../../assets/images/lead.png';
import BarChart from '../../assets/images/bar-chart.png';
import { MdKeyboardArrowDown } from "react-icons/md";
import { TiArrowUp } from "react-icons/ti"
import { TiArrowDown } from "react-icons/ti";
import Navbar from '../../assets/images/navbar.png';
import UserPersonalDetailsSub from '../../components/UserPersonalDetailsSub';

const UserPersonalDetails = () => {
    const [activeSection, setActiveSection] = useState('Overview');

    const handleClick = (section) => {
        setActiveSection(section);
    };

    return (
        <div className='min-h-screen bg-white flex relative'>
            <div className='w-1/5 max-lg:hidden'>
                <Sidebar />
            </div>
            <div className='w-4/5 max-lg:w-full'>
                <div className='max-lg:hidden'>
                    <Header />
                </div>
                <div className='flex justify-start mx-10 max-lg:mx-8 max-md:mx-5 my-5 max-lg:my-4 items-center gap-2'>
                    <img src={Navbar} />
                    <p className='text-[26px] max-lg:text-xl max-md:text-lg max-sm:text-base  font-[600] text-[#000000] font-[Poppins] mx-10 max-lg:mx-8 max-md:mx-5 my-5'>Viewing Lead Ambassador</p>
                </div>
                <div className='flex justify-start items-center gap-4 mx-10  max-lg:mx-8 max-md:mx-5 my-5 max-lg:my-4'>
                    <div className='w-17 h-17 rounded-full'>
                        <img src={LeadIcon} />
                    </div>
                    <div>
                        <p className='text-[#101928] text-[24px] max-lg:text-lg max-md:text-base max-sm:text-sm font-[600] font-[Inter] '> Sandra Akpotu </p>
                        <p className='text-[#475367] text-[12px] max-md:text-[10px] font-[400] font-[Inter] '> Sandy04@gmail.com </p>
                    </div>
                </div>
                <div className='flex w-[60%] max-lg:w-[98%] justify-start items-center mx-10 max-lg:mx-8 max-md:mx-6 max-sm:mx-4 gap-12 max-lg:gap-10 max-md:gap-8 max-sm:gap-4  border-b border-[#E4E7EC] mt-5'>
                    {['Overview', 'Users', 'Ambassadors', 'Send Message'].map(section => (
                        <div
                            key={section}
                            onClick={() => handleClick(section)}
                            className={`text-[#344054] text-[14px] max-lg:text-xs max-sm:text-[10px] font-[500] font-[Inter] ${activeSection === section ? 'text-red-500 border-b-2 border-red-500' : ''}`}
                        >
                            {section}
                        </div>
                    ))}
                </div>
                <div className=' w-[60%] max-lg:w-[98%] max-lg:mx-8 max-md:mx-6 max-sm:mx-4 mx-10 my-5'>
                    <div className='flex justify-between items-center mt-3 w-full'>
                        <UserPersonalDetailsSub />
                        <UserPersonalDetailsSub />
                    </div>
                    <div className='flex justify-between items-center mt-3 w-full'>
                        <UserPersonalDetailsSub />
                        <UserPersonalDetailsSub />
                    </div>
                    <div className='flex justify-between items-center mt-3 w-full'>
                        <UserPersonalDetailsSub />
                        <UserPersonalDetailsSub />

                    </div>


                </div>
            </div>
        </div>
    )
}

export default UserPersonalDetails
