import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../assets/images/BeelsLogo.png'
import Profile from '../assets/images/Secondprofile.png'
import { IoMdArrowDropdown } from "react-icons/io";
import Dashboard from '../assets/images/home.png'
import TaskIcon from '../assets/images/tasks.png'
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaHouseDamage } from "react-icons/fa";
import LogoutIcon from '../assets/images/logout.png'


const MobileSideBar = () => {
    const [showAmbassadors, setShowAmbassadors] = useState(true);
    const [tasks, setTasks] = useState(true);
    const [activeLink, setActiveLink] = useState('');
    const [secondActiveLink, setSecondActiveLink] = useState('');
    const [thirdActiveLink, setThirdActiveLink] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleViewAmbassadorsClick = () => {
        navigate('/dashboard/personal/overview');
        setSecondActiveLink('ViewAmbassadors');
    };

    const handleLogoutClick = () => {
        localStorage.removeItem('logged_in');
        navigate('/login');
    };

    useEffect(() => {
        const path = location.pathname;
        const paths = [
            '/dashboard/all',
            '/dashboard/personal/overview',
            '/dashboard/personal/ambassadors/chat',
            '/dashboard/personal/user',
            '/dashboard/personal/ambassadors',
        ];

        const secondPaths = [
            '/dashboard/overview'
        ];
        const thirdPaths = [
            '/dashboard/add-ambassador',
            "/dashboard/subambassadors/details"
        ]
        if (thirdPaths.includes(path)) {
            setThirdActiveLink('AddAmbassadors');
        } else {
            setThirdActiveLink('');
        }

        if (secondPaths.includes(path)) {
            setActiveLink('dashboard');
        } else {
            setActiveLink('');
        }

        if (paths.includes(path)) {
            setSecondActiveLink('ViewAmbassadors');
        } else {
            setSecondActiveLink('');
        }
    }, [location]);


    const handleDashboardClick = () => {
        navigate('/dashboard/overview');
        setActiveLink('dashboard');
    };


    return (
        <div className='bg-[#001A04] w-full min-h-screen pt-10 '>
            <img src={Logo} className='mx-2' />

            <div className='h-10 w-10 rounded-md mt-5  mx-2 '>
                <img src={Profile} />
            </div>
            <div className='flex justify-start gap-4 items-center mt-5 px-2 '>
                <p className='text-[#FFFFFF] text-[16px] max-lg:text-sm max-sm:text-xs font-[700] font-[Inter] '> Mac Roger </p>
                <RiArrowDropDownLine className='text-white' />
            </div>
            <p className='text-[#FFFFFF] text-[12px]  max-md:text-[10px] font-[400] font-[Inter] mt-5 px-2 '> ADMIN </p>
            <div className={`flex justify-start gap-4 items-center px-2 my-4 py-2 ${activeLink === 'dashboard' ? 'bg-[#3AB54A]' : ''}`} onClick={handleDashboardClick}>
                <FaHouseDamage className='text-white' />
                <p className='text-[#FFFFFF] text-[16px] max-lg:text-sm max-sm:text-xs font-[600] font-[Inter] '> Dashboard </p>
            </div>
            <div className='flex justify-start gap-4 items-center px-2 my-4 py-2'>
                <div className='flex justify-start items-center gap-4'>
                    <img src={TaskIcon} />
                    <p className='text-sm font-[700] text-[#FFFFFF] font-[Rockwell]'> Ambassadors</p>
                </div>
                <div onClick={() => setShowAmbassadors(!showAmbassadors)}>
                    <RiArrowDropDownLine className='text-white' />
                </div>
            </div>
            {showAmbassadors && (
                <div>
                    <div className={`flex justify-start gap-4 items-center px-3 my-3 py-2 ${secondActiveLink === 'ViewAmbassadors' ? 'bg-[#3AB54A]' : ''}`} onClick={handleViewAmbassadorsClick}>
                        <div className='w-4 h-4 rounded-full border border-[#FFFFFF]'></div>
                        <p className='text-sm font-[700] text-[#FFFFFF] font-[Rockwell]'>View Ambassadors</p>
                    </div>
                    <div className={`flex justify-start gap-4 items-center px-3 py-2 my-3 ${thirdActiveLink === 'AddAmbassadors' ? 'bg-[#3AB54A]' : ''} `} onClick={() => { navigate('/dashboard/add-ambassador'); setThirdActiveLink("AddAmbassadors") }}>
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
                    <RiArrowDropDownLine className='text-white' />
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
            <div className={`flex justify-start gap-4 items-center px-2 mt-10  py-2 `} onClick={handleLogoutClick}>
                <img src={LogoutIcon} className='' />
                <p className='text-[#FFFFFF] text-[16px] max-lg:text-sm max-sm:text-xs font-[600] font-[Inter] '> Logout </p>
            </div>
        </div>
    )
}

export default MobileSideBar
