import React from 'react'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import LeadAmbassador from '../../components/LeadAmbassador';


const List = () => {


    return (
        <div className='min-h-screen bg-white flex relative'>
            <div className='w-1/5'>
                <Sidebar />
            </div>
            <div className='w-4/5'>
                <Header />
                <div className='flex justify-between px-10 items-center'>
                    <p className='text-[26px] font-[600] text-[#000000] font-[Poppins] my-5'> View all Lead Ambassadors</p>
                    <button className='bg-[#082C25] px-3 py-2 flex justify-center items-center rounded-md gap-2'>
                        <FaPlus className='text-white'/>
                        <p className='text-white text-[14px] font-[400] font-[Rockwell] '> Send Invite </p>
                    </button>
                </div>
                <div className='h-full mx-10 '>
                    <div className='px-5 flex justify-between items-center h-20'>
                        <div className='flex justify-start items-center gap-2 w-[20%] '>
                            <div className='h-10 w-10  rounded-md border border-[#FAF9F6]'></div>
                            <p className='text-[#D0D5DD] text-[11px] font-[500] font-[Inter] '> Name </p>
                            <div>
                                <IoIosArrowUp className='text-[#D0D5DD]'/>
                                <IoIosArrowDown className='text-[#D0D5DD]'/>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-2 w-[20%]'>
                            <p className='text-[#D0D5DD] text-[11px] font-[500] font-[Inter] '> Email Address </p>
                        </div>
                        <div className='flex justify-center items-center gap-2 w-[20%]'>
                            <p className='text-[#D0D5DD] text-[11px] font-[500] font-[Inter] '> Type </p>
                        </div>
                        <div className='flex justify-center items-center gap-2 w-[20%]'>
                            <p className='text-[#D0D5DD] text-[11px] font-[500] font-[Inter] '> Date Added </p>
                            <div>
                                <IoIosArrowUp className='text-[#D0D5DD]' />
                                <IoIosArrowDown className='text-[#D0D5DD]'/>
                            </div>
                        </div>
                        <div className='flex justify-start items-center gap-2 w-[20%]'>
                            <p className='text-[#D0D5DD] text-[11px] font-[500] font-[Inter] '> Status </p>
                        </div>
                    </div>
                    <LeadAmbassador icons={false}/>
                    <LeadAmbassador icons={true}/>
                    <LeadAmbassador icons={true}/>

                </div>

            </div>
        </div>
    )
}

export default List
