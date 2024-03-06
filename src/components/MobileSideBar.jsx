import React, {useState} from 'react'
import Logo from '../assets/images/BeelsLogo.png'
import Profile from '../assets/images/Secondprofile.png'
import { IoMdArrowDropdown } from "react-icons/io";
import Dashboard from '../assets/images/home.png'
import TaskIcon from '../assets/images/tasks.png'
import { RiArrowDropDownLine } from "react-icons/ri";


const MobileSideBar = () => {
    const [showAmbassadors, setShowAmbassadors] = useState(true);
    const [tasks, setTasks] = useState(true);

    return (
        <div className='bg-[#001A04] w-full min-h-screen pt-10 '>
            <img src={Logo}  className='mx-2'/>

            <div className='h-10 w-10 rounded-md mt-5  mx-2 '>
                <img src={Profile} />
            </div>
            <div className='flex justify-start gap-4 items-center mt-5 px-2 '>
                <p className='text-[#FFFFFF] text-[16px] max-lg:text-sm max-sm:text-xs font-[700] font-[Inter] '> Mac Roger </p>
                <RiArrowDropDownLine  className='text-white' />
            </div>
            <p className='text-[#FFFFFF] text-[12px]  max-md:text-[10px] font-[400] font-[Inter] mt-5 px-2 '> ADMIN </p>
            <div className='flex justify-start gap-4 items-center bg-[#B6F485] px-2 my-4 py-2'>
                <img src={Dashboard} />
                <p className='text-[#082C25] text-[16px] max-lg:text-sm max-sm:text-xs font-[600] font-[Inter] '> Dashboard </p>
            </div>
            <div className='flex justify-start gap-4 items-center px-2 my-4 py-2'>
                <div className='flex justify-start items-center gap-4'>
                    <img src={TaskIcon} />
                    <p className='text-sm font-[700] text-[#FFFFFF] font-[Rockwell]'> Ambassadors</p>
                </div>
                <div onClick={() => setShowAmbassadors(!showAmbassadors)}>
                    <RiArrowDropDownLine  className='text-white' />
                </div>
            </div>
            {showAmbassadors && (
                <div>
                    <div className='flex justify-start gap-4 items-center px-3 my-3 py-2'>
                        <div className='w-4 h-4 rounded-full border border-[#FFFFFF]'></div>
                        <p className='text-sm font-[700] text-[#FFFFFF] font-[Rockwell]'>View Ambassadors</p>
                    </div>
                    <div className='flex justify-start gap-4 items-center px-3 py-2 my-3'>
                        <div className='w-4 h-4 rounded-full border border-[#FFFFFF]'></div>
                        <p className='text-sm font-[700] text-[#FFFFFF] font-[Rockwell]'>Add Ambassadors</p>
                    </div>
                </div>
            )}
            <div className='flex justify-start gap-4 items-center px-2 my-4 py-2'>
                <div className='flex justify-start items-center gap-4'>
                    <img src={TaskIcon} />
                    <p className='text-sm font-[700] text-[#FFFFFF] font-[Rockwell]'> Tasks </p>
                </div>
                <div onClick={() => setTasks(!tasks)}>
                    <RiArrowDropDownLine  className='text-white'/>
                </div>
            </div>
            {tasks && (
                <div>
                    <div className='flex justify-start gap-4 items-center px-3 my-3 py-2'>
                        <div className='w-4 h-4 rounded-full border border-[#FFFFFF]'></div>
                        <p className='text-sm font-[700] text-[#FFFFFF] font-[Rockwell]'>View all tasks</p>
                    </div>
                    <div className='flex justify-start gap-4 items-center px-3 py-2 my-3'>
                        <div className='w-4 h-4 rounded-full border border-[#FFFFFF]'></div>
                        <p className='text-sm font-[700] text-[#FFFFFF] font-[Rockwell]'>Create Tasks</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MobileSideBar
