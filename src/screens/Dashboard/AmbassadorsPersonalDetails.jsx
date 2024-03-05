import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import LeadIcon from '../../assets/images/lead.png';
import BarChart from '../../assets/images/bar-chart.png';
import { MdKeyboardArrowDown } from "react-icons/md";
import { TiArrowUp } from "react-icons/ti"
import { TiArrowDown } from "react-icons/ti";
import SubAmbassador from '../../components/SubAmbassador'
import { IoIosArrowUp } from "react-icons/io"
import { IoIosArrowDown } from "react-icons/io"
import Navbar from '../../assets/images/navbar.png';
import AmbassadorsPersonalDetailsSub from '../../components/AmbassadorsPersonalDetailsSub';

const AmbassadorsPersonalDetails = () => {
    const [activeSection, setActiveSection] = useState('Overview');
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const handleClick = (section) => {
        setActiveSection(section);
    };

    const Content = () => {
        if (screenWidth >= 1024) {
            return (<div className=' flex max-lg:flex-col justify-between mx-10 max-lg:mx-8 max-md:mx-5 max-sm:mx-2 my-5'>
                <div className=' w-[47%] max-lg:w-[98%]'>
                    <div className='flex justify-between items-center w-full'>
                        <AmbassadorsPersonalDetailsSub timeline="This week" details="Total Sub Ambassadors" number="29,405" percent="15%" bgColor="bg-[#E7F6EC]" textColor="text-[#036B26]" />
                        <AmbassadorsPersonalDetailsSub timeline="This week" details="New Sub Ambassadors" number="24%" percent="2.4%" bgColor="bg-[#FBEAE9]" textColor="text-[#9E0A05]" />

                    </div>

                    <div className='border border-[#E4E7EC] bg-[#FAF9F6] mt-3 rounded-md px-3 py-2 flex flex-col gap-16'>
                        <div className='flex justify-between  items-center'>
                            <img src={BarChart} />
                            <div className='flex justify-center gap-2  items-center'>
                                <p className='text-[#98A2B3] text-[10px] font-[400] font-[Inter] '> This week</p>
                                <MdKeyboardArrowDown />
                            </div>
                        </div>
                        <div>
                            <p className='text-[#667185] text-[14px] max-lg:text-xs max-sm:text-[10px] font-[500] font-[Inter] '> Total Users </p>
                            <div className='flex justify-start gap-2 items-center' >
                                <p className='text-[#101928] text-[20px] max-lg:text-base max-md:text-sm max-sm:text-xs font-[600] font-[Inter] '> 29,405 </p>
                                <div className='flex justify-center gap px-1 items-center bg-[#E7F6EC] rounded-lg'>
                                    <TiArrowUp />
                                    <p className='text-[#036B26] text-[12px] max-md:text-[10px] max-sm:text-[8px] font-[500] font-[Inter] '> 15% </p>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className='flex justify-between items-center mt-3 w-full'>

                        <AmbassadorsPersonalDetailsSub timeline="Last 30 days" details="Active Sub Ambassadors" number="5,873" percent="15%" bgColor="bg-[#E7F6EC]" textColor="text-[#036B26]" />
                        <AmbassadorsPersonalDetailsSub timeline="Last 30 days" details="Commission" number="3,024" percent="9%" bgColor="bg-[#E7F6EC]" textColor="text-[#036B26]" />


                    </div>


                </div>
                <div className='border border-[#E4E7EC] bg-[#FAF9F6] max-lg:bg-white max-lg:mt-5 max-lg:px-4 max-md:px-2 rounded-md w-[49%] max-lg:w-[98%] h-full  pb-2 '>
                    <p className='text-[14px] font-[500] text-[#667185] font-[Inter] px-2 my-3 '> Sub Ambassador </p>
                    <div className='px-2 flex justify-between items-center py-1 max-lg:hidden'>
                        <div className='flex justify-start items-center gap-2 w-[30%] '>
                            <div className='h-5 w-5  rounded-md border border-[#D0D5DD]'></div>
                            <p className='text-[#D0D5DD] text-[8px] font-[500] font-[Inter] '> Name </p>
                            <div>
                                <IoIosArrowUp className='text-[#D0D5DD]' />
                                <IoIosArrowDown className='text-[#D0D5DD]' />
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-2 w-[20%]'>
                            <p className='text-[#D0D5DD] text-[8px] font-[500] font-[Inter] '> Email Address </p>
                        </div>
                        <div className='flex justify-center items-center gap-2 w-[20%]'>
                            <p className='text-[#D0D5DD] text-[8px] font-[500] font-[Inter] '> Type </p>
                        </div>
                        <div className='flex justify-center items-center gap-1  w-[15%]'>
                            <p className='text-[#D0D5DD] text-[8px] font-[500] font-[Inter] '> Date Added </p>
                            <div>
                                <IoIosArrowUp className='text-[#D0D5DD]' />
                                <IoIosArrowDown className='text-[#D0D5DD]' />
                            </div>
                        </div>
                        <div className='flex justify-end items-center gap-2 w-[15%]'>
                            <p className='text-[#D0D5DD] text-[8px] font-[500] font-[Inter] '> Status </p>
                        </div>
                    </div>
                    <SubAmbassador border={true} />
                    <SubAmbassador border={true} />
                    <SubAmbassador border={false} />
                </div>
            </div>)
        } else {
            return (
                <div className=' flex max-lg:flex-col justify-between mx-10 max-lg:mx-8 max-md:mx-5 max-sm:mx-2 my-5'>
                    <div className='border border-[#E4E7EC] bg-[#FAF9F6] max-lg:bg-white max-lg:mt-5 max-lg:px-4 max-md:px-2 rounded-md w-[49%] max-lg:w-[98%] h-full  pb-2 '>
                        <p className='text-[14px] font-[500] text-[#667185] font-[Inter] px-2 my-3 '> Sub Ambassador </p>
                        <div className='px-2 flex justify-between items-center py-1 max-lg:hidden'>
                            <div className='flex justify-start items-center gap-2 w-[30%] '>
                                <div className='h-5 w-5  rounded-md border border-[#D0D5DD]'></div>
                                <p className='text-[#D0D5DD] text-[8px] font-[500] font-[Inter] '> Name </p>
                                <div>
                                    <IoIosArrowUp className='text-[#D0D5DD]' />
                                    <IoIosArrowDown className='text-[#D0D5DD]' />
                                </div>
                            </div>
                            <div className='flex justify-center items-center gap-2 w-[20%]'>
                                <p className='text-[#D0D5DD] text-[8px] font-[500] font-[Inter] '> Email Address </p>
                            </div>
                            <div className='flex justify-center items-center gap-2 w-[20%]'>
                                <p className='text-[#D0D5DD] text-[8px] font-[500] font-[Inter] '> Type </p>
                            </div>
                            <div className='flex justify-center items-center gap-1  w-[15%]'>
                                <p className='text-[#D0D5DD] text-[8px] font-[500] font-[Inter] '> Date Added </p>
                                <div>
                                    <IoIosArrowUp className='text-[#D0D5DD]' />
                                    <IoIosArrowDown className='text-[#D0D5DD]' />
                                </div>
                            </div>
                            <div className='flex justify-end items-center gap-2 w-[15%]'>
                                <p className='text-[#D0D5DD] text-[8px] font-[500] font-[Inter] '> Status </p>
                            </div>
                        </div>
                        <SubAmbassador border={true} />
                        <SubAmbassador border={true} />
                        <SubAmbassador border={false} />
                    </div>
                    <div className=' w-[47%] max-lg:w-[98%]'>
                        <div className='flex justify-between items-center w-full'>
                            <AmbassadorsPersonalDetailsSub timeline="This week" details="Total Sub Ambassadors" number="29,405" percent="15%" bgColor="bg-[#E7F6EC]" textColor="text-[#036B26]" />
                            <AmbassadorsPersonalDetailsSub timeline="This week" details="New Sub Ambassadors" number="24%" percent="2.4%" bgColor="bg-[#FBEAE9]" textColor="text-[#9E0A05]" />

                        </div>

                        <div className='border border-[#E4E7EC] bg-[#FAF9F6] mt-3 rounded-md px-3 py-2 flex flex-col gap-16'>
                            <div className='flex justify-between  items-center'>
                                <img src={BarChart} />
                                <div className='flex justify-center gap-2  items-center'>
                                    <p className='text-[#98A2B3] text-[10px] font-[400] font-[Inter] '> This week</p>
                                    <MdKeyboardArrowDown />
                                </div>
                            </div>
                            <div>
                                <p className='text-[#667185] text-[14px] max-lg:text-xs max-sm:text-[10px] font-[500] font-[Inter] '> Total Users </p>
                                <div className='flex justify-start gap-2 items-center' >
                                    <p className='text-[#101928] text-[20px] max-lg:text-base max-md:text-sm max-sm:text-xs font-[600] font-[Inter] '> 29,405 </p>
                                    <div className='flex justify-center gap px-1 items-center bg-[#E7F6EC] rounded-lg'>
                                        <TiArrowUp />
                                        <p className='text-[#036B26] text-[12px] max-md:text-[10px] max-sm:text-[8px] font-[500] font-[Inter] '> 15% </p>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className='flex justify-between items-center mt-3 w-full'>

                            <AmbassadorsPersonalDetailsSub timeline="Last 30 days" details="Active Sub Ambassadors" number="5,873" percent="15%" bgColor="bg-[#E7F6EC]" textColor="text-[#036B26]" />
                            <AmbassadorsPersonalDetailsSub timeline="Last 30 days" details="Commission" number="3,024" percent="9%" bgColor="bg-[#E7F6EC]" textColor="text-[#036B26]" />


                        </div>


                    </div>

                </div>
            )
        }
    }
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
                    <p className='text-[26px] font-[600] text-[#000000] font-[Poppins] mx-10 my-5'>Viewing Lead Ambassador</p>
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
                <div className='flex justify-start items-center mx-10 max-lg:mx-8 max-md:mx-6 max-sm:mx-4 gap-12 max-lg:gap-10 max-md:gap-8 max-sm:gap-4 border-b border-[#E4E7EC] mt-5'>
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
             {Content()}
            </div>
        </div>
    )
}

export default AmbassadorsPersonalDetails
