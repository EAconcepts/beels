import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import LeadIcon from '../../assets/images/lead.png';
import BarChart from '../../assets/images/bar-chart.png';
import { MdKeyboardArrowDown } from "react-icons/md";
import { TiArrowUp } from "react-icons/ti"
import { TiArrowDown } from "react-icons/ti";

const UserPersonalDetails = () => {
    const [activeSection, setActiveSection] = useState('Overview');

    const handleClick = (section) => {
        setActiveSection(section);
    };

    return (
        <div className='min-h-screen bg-white flex relative'>
            <div className='w-1/5'>
                <Sidebar />
            </div>
            <div className='w-4/5'>
                <Header />

                <p className='text-[26px] font-[600] text-[#000000] font-[Poppins] mx-10 my-5'>Viewing Lead Ambassador</p>
                <div className='flex justify-start items-center gap-4 mx-10'>
                    <div className='w-17 h-17 rounded-full'>
                        <img src={LeadIcon} />
                    </div>
                    <div>
                        <p className='text-[#101928] text-[24px] font-[600] font-[Inter] '> Sandra Akpotu </p>
                        <p className='text-[#475367] text-[12px] font-[400] font-[Inter] '> Sandy04@gmail.com </p>
                    </div>
                </div>
                <div className='flex w-[60%] justify-start items-center mx-10 gap-12 border-b border-[#E4E7EC] mt-5'>
                    {['Overview', 'Users', 'Ambassadors', 'Send Message'].map(section => (
                        <div
                            key={section}
                            onClick={() => handleClick(section)}
                            className={`text-[#344054] text-[14px] font-[500] font-[Inter] ${activeSection === section ? 'text-red-500 border-b-2 border-red-500' : ''}`}
                        >
                            {section}
                        </div>
                    ))}
                </div>
                <div className=' w-[60%] mx-10 my-5'>
                    <div className='flex justify-between items-center mt-3 w-full'>
                        <div className='border border-[#E4E7EC] bg-[#FAF9F6] w-[47%] rounded-md px-3 py-2 flex flex-col gap-16'>
                            <div className='flex justify-between  items-center'>
                                <img src={BarChart} />
                                <div className='flex justify-center gap-2  items-center'>
                                    <p className='text-[#98A2B3] text-[10px] font-[400] font-[Inter] '> This week</p>
                                    <MdKeyboardArrowDown />
                                </div>
                            </div>
                            <div>
                                <p className='text-[#667185] text-[14px] font-[500] font-[Inter] '> Total Users </p>
                                <div className='flex justify-start gap-2 items-center' >
                                    <p className='text-[#101928] text-[20px] font-[600] font-[Inter] '> 29,405 </p>
                                    <div className='flex justify-center gap px-1 items-center bg-[#E7F6EC] rounded-lg'>
                                        <TiArrowUp />
                                        <p className='text-[#036B26] text-[12px] font-[500] font-[Inter] '> 15% </p>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className='border border-[#E4E7EC] bg-[#FAF9F6] w-[47%] rounded-md px-3 py-2 flex flex-col gap-16'>
                            <div className='flex justify-between  items-center'>
                                <img src={BarChart} />
                                <div className='flex justify-center gap-2  items-center'>
                                    <p className='text-[#98A2B3] text-[10px] font-[400] font-[Inter] '> This week</p>
                                    <MdKeyboardArrowDown />
                                </div>
                            </div>
                            <div>
                                <p className='text-[#667185] text-[14px] font-[500] font-[Inter] '> Active Users </p>
                                <div className='flex justify-start gap-2 items-center' >
                                    <p className='text-[#101928] text-[20px] font-[600] font-[Inter] '> 2.40% </p>
                                    <div className='flex justify-center gap px-1 items-center bg-[#FBEAE9] rounded-lg'>
                                        <TiArrowDown />
                                        <p className='text-[#9E0A05] text-[12px] font-[500] font-[Inter] '> 6% </p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='flex justify-between items-center mt-3 w-full'>
                        <div className='border border-[#E4E7EC] bg-[#FAF9F6] w-[47%] rounded-md px-3 py-2 flex flex-col gap-16'>
                            <div className='flex justify-between  items-center'>
                                <img src={BarChart} />
                                <div className='flex justify-center gap-2  items-center'>
                                    <p className='text-[#98A2B3] text-[10px] font-[400] font-[Inter] '> This week</p>
                                    <MdKeyboardArrowDown />
                                </div>
                            </div>
                            <div>
                                <p className='text-[#667185] text-[14px] font-[500] font-[Inter] '> Retained Users </p>
                                <div className='flex justify-start gap-2 items-center' >
                                    <p className='text-[#101928] text-[20px] font-[600] font-[Inter] '> 24,000 </p>
                                    <div className='flex justify-center gap px-1 items-center bg-[#E7F6EC] rounded-lg'>
                                        <TiArrowUp />
                                        <p className='text-[#036B26] text-[12px] font-[500] font-[Inter] '> 15% </p>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className='border border-[#E4E7EC] bg-[#FAF9F6] w-[47%] rounded-md px-3 py-2 flex flex-col gap-16'>
                            <div className='flex justify-between  items-center'>
                                <img src={BarChart} />
                                <div className='flex justify-center gap-2  items-center'>
                                    <p className='text-[#98A2B3] text-[10px] font-[400] font-[Inter] '> This week</p>
                                    <MdKeyboardArrowDown />
                                </div>
                            </div>
                            <div>
                                <p className='text-[#667185] text-[14px] font-[500] font-[Inter] '> Inactive Users </p>
                                <div className='flex justify-start gap-2 items-center' >
                                    <p className='text-[#101928] text-[20px] font-[600] font-[Inter] '> 300 </p>
                                    <div className='flex justify-center gap px-1 items-center bg-[#FBEAE9] rounded-lg'>
                                        <TiArrowDown />
                                        <p className='text-[#9E0A05] text-[12px] font-[500] font-[Inter] '> 6% </p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='flex justify-between items-center mt-3 w-full'>
                        <div className='border border-[#E4E7EC] bg-[#FAF9F6] w-[47%] rounded-md px-3 py-2 flex flex-col gap-16'>
                            <div className='flex justify-between  items-center'>
                                <img src={BarChart} />
                                <div className='flex justify-center gap-2  items-center'>
                                    <p className='text-[#98A2B3] text-[10px] font-[400] font-[Inter] '> Last 30 days </p>
                                    <MdKeyboardArrowDown />
                                </div>
                            </div>
                            <div>
                                <p className='text-[#667185] text-[14px] font-[500] font-[Inter] '> Users that have fully Onboarded </p>
                                <div className='flex justify-start gap-2 items-center' >
                                    <p className='text-[#101928] text-[20px] font-[600] font-[Inter] '> 5,873 </p>
                                    <div className='flex justify-center gap px-1 items-center bg-[#E7F6EC] rounded-lg'>
                                        <TiArrowUp />
                                        <p className='text-[#036B26] text-[12px] font-[500] font-[Inter] '> 15% </p>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className='border border-[#E4E7EC] bg-[#FAF9F6] w-[47%] rounded-md px-3 py-2 flex flex-col gap-16'>
                            <div className='flex justify-between  items-center'>
                                <img src={BarChart} />
                                <div className='flex justify-center gap-2  items-center'>
                                    <p className='text-[#98A2B3] text-[10px] font-[400] font-[Inter] '> Last 30 days </p>
                                    <MdKeyboardArrowDown />
                                </div>
                            </div>
                            <div>
                                <p className='text-[#667185] text-[14px] font-[500] font-[Inter] '> Users with Security Token </p>
                                <div className='flex justify-start gap-2 items-center' >
                                    <p className='text-[#101928] text-[20px] font-[600] font-[Inter] '> 3,024 </p>
                                    <div className='flex justify-center gap px-1 items-center bg-[#E7F6EC] rounded-lg'>
                                        <TiArrowUp />
                                        <p className='text-[#036B26] text-[12px] font-[500] font-[Inter] '> 9% </p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default UserPersonalDetails
