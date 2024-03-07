import React, { useState, useEffect, useRef } from 'react'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import AmbassadorsIcon from '../../assets/images/ambassadorsIcon.png';
import AmbassadorForm from '../../components/AmbassadorForm';
import DashboardImage from '../../assets/images/dashboardimg.png';
import Navbar from '../../assets/images/navbar.png';
import MobileSideBar from '../../components/MobileSideBar';

const Overview = () => {
  const [showAmbassadorsIcon, setShowAmbassadorsIcon] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [navbar, setNavbar] = useState(false)
  const sidebarRef = useRef(null);

  useEffect(() => {
      const handleClickOutside = (event) => {
          if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
              setNavbar(false);
          }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
          document.removeEventListener("mousedown", handleClickOutside);
      };
  }, [sidebarRef]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const Content = () => {
    if (screenWidth >= 1024) {
      return (
        <>
          <div className=' flex justify-between items-center px-10 w-full'>
            <div className='flex w-[30%] justify-center px-2 py-4 items-center border rounded-md gap-8'>
              <div className=' rounded-full bg-[#B9FFC2] flex justify-center items-center'>
                <img src={AmbassadorsIcon} />
              </div>
              <div className=' flex flex-col justify-around'>
                <p className='text-[17px] max-lg:text-sm max-md:text-xs max-sm:text-[10px] font-[500] text-[#667185] font-[Inter]'> Total of Ambassadors </p>
                <p className='text-[24px] max-lg:text-lg max-md:text-base max-sm:text-sm font-[700] text-[#000000] font-[Inter]'>0 </p>
              </div>
            </div>
            <div className='flex w-[30%] justify-center px-2 py-4 items-center border rounded-md gap-8'>
              <div className='p-4 max-lg:p-3 max-md:p-2 max-sm:p-1 rounded-full bg-[#B9FFC2] flex justify-center items-center'>
                <img src={AmbassadorsIcon} />
              </div>
              <div className=' flex flex-col justify-around'>
                <p className='text-[17px] max-lg:text-sm max-md:text-xs max-sm:text-[10px] font-[500] text-[#667185] font-[Inter]'> Lead Ambassador</p>
                <p className='text-[24px] max-lg:text-lg max-md:text-base max-sm:text-sm font-[700] text-[#000000] font-[Inter]'>0 </p>
              </div>
            </div>
            <div className='flex w-[30%] justify-center px-2 py-4 items-center border rounded-md gap-8'>
              <div className='p-4 max-lg:p-3 max-md:p-2 max-sm:p-1 rounded-full bg-[#B9FFC2] flex justify-center items-center'>
                <img src={AmbassadorsIcon} />
              </div>
              <div className=' flex flex-col justify-around'>
                <p className='text-[17px] max-lg:text-sm max-md:text-xs max-sm:text-[10px] font-[500] text-[#667185] font-[Inter]'> Sub Ambassador </p>
                <p className='text-[24px] max-lg:text-lg max-md:text-base max-sm:text-sm font-[700] text-[#000000] font-[Inter]'>0 </p>
              </div>
            </div>
          </div>
          <div className='mx-10 bg-[#F1F1F1] mt-16 pb-10 mb-10'>
            <div className='flex justify-center items-center'>
              <img src={DashboardImage} />
            </div>

            <p className='text-[24px] max-lg:text-lg max-md:text-base max-sm:text-sm font-[600] text-[#000000] font-[Inter] pt-5 text-center'>Beels Ambassador Portal</p>
            <p className='text-[18px] max-lg:text-base max-md:text-sm max-sm:text-xs font-[400] text-[#000000] font-[Inter] pt-3 text-center'>Welcome to Beels Portal! As a company admin,you have the ability to add new ambassadors to our program.</p>
            <div className='flex justify-center items-center my-5'>
              <button onClick={() => setShowAmbassadorsIcon(!showAmbassadorsIcon)} className='bg-[#082C25] w-1/5 max-lg:w-1/2 max-sm:w-3/4 py-3 flex justify-center items-center rounded-md'>
                <p className='text-white text-[20px] font-[400] font-[Inter] '>Add Leads</p>
              </button>
            </div>
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className='mx-10 max-lg:mx-8 max-md:mx-5 bg-[#F1F1F1] mt-16 max-lg:mt-12 max-md:mt-8 max-sm:mt-5 pb-10 mb-10'>
            <div className='flex justify-center items-center'>
              <img src={DashboardImage} className='' />
            </div>

            <p className='text-[24px] max-lg:text-lg max-md:text-base max-sm:text-sm font-[600] text-[#000000] font-[Inter] pt-5 text-center px-5'>Beels Ambassador Portal</p>
            <p className='text-[18px] max-lg:text-base max-md:text-sm max-sm:text-xs  font-[400] text-[#000000] font-[Inter] pt-3 text-center px-5'>Welcome to Beels Portal! As a company admin,you have the ability to add new ambassadors to our program.</p>
            <div className='flex justify-center items-center my-5'>
              <button onClick={() => setShowAmbassadorsIcon(!showAmbassadorsIcon)} className='bg-[#082C25] w-1/5 max-lg:w-1/2 max-sm:w-3/4 py-3 flex justify-center items-center rounded-md'>
                <p className='text-white text-[20px] max-lg:text-base max-md:text-sm max-sm:text-xs font-[400] font-[Inter] '>Add Leads</p>
              </button>
            </div>
          </div>
          <div className=' flex max-lg:flex-col justify-between max-lg:justify-center gap-4 items-center max-lg:items-start px-10 max-lg:px-8 max-md:px-6 max-sm:px-4 w-full max-lg:mb-10'>
            <div className='flex w-[30%] max-lg:w-[70%] max-sm:w-3/4  justify-center px-2 py-4 items-center border rounded-md gap-8'>
              <div className='w-1/2 max-lg:flex max-lg:items-center max-lg:justify-center'>
                <div className=' w-fit p-4 max-lg:p-3 rounded-full bg-[#B9FFC2] flex justify-center items-center'>
                  <img src={AmbassadorsIcon} />
                </div>
              </div>
              <div className='w-1/2  flex flex-col justify-around'>
                <p className='text-[17px] max-lg:text-sm max-md:text-xs max-sm:text-[10px] font-[500] text-[#667185] font-[Inter]'> Total of Ambassadors </p>
                <p className='text-[24px] max-lg:text-lg max-md:text-base max-sm:text-sm font-[700] text-[#000000] font-[Inter]'>0 </p>
              </div>
            </div>
            <div className='flex w-[30%] max-lg:w-[70%] max-sm:w-3/4 justify-center px-2 py-4 items-center border rounded-md gap-8'>
              <div className='w-1/2 max-lg:flex max-lg:items-center max-lg:justify-center'>
                <div className='w-fit p-4 max-lg:p-3  rounded-full bg-[#B9FFC2] flex justify-center items-center'>
                  <img src={AmbassadorsIcon} />
                </div>
              </div>
              <div className='w-1/2  flex flex-col justify-around'>
                <p className='text-[17px] max-lg:text-sm max-md:text-xs max-sm:text-[10px] font-[500] text-[#667185] font-[Inter]'> Lead Ambassador</p>
                <p className='text-[24px] max-lg:text-lg max-md:text-base max-sm:text-sm font-[700] text-[#000000] font-[Inter]'>0 </p>
              </div>
            </div>
            <div className='flex w-[30%] max-lg:w-[70%] max-sm:w-3/4 justify-center px-2 py-4 items-center border rounded-md gap-8'>
              <div className='w-1/2 max-lg:flex max-lg:items-center max-lg:justify-center'>
                <div className='w-fit p-4 max-lg:p-3  rounded-full bg-[#B9FFC2] flex justify-center items-center'>
                  <img src={AmbassadorsIcon} />
                </div>
              </div>
              <div className='w-1/2  flex flex-col justify-around'>
                <p className='text-[17px] max-lg:text-sm max-md:text-xs max-sm:text-[10px] font-[500] text-[#667185] font-[Inter]'> Sub Ambassador </p>
                <p className='text-[24px] max-lg:text-lg max-md:text-base max-sm:text-sm font-[700] text-[#000000] font-[Inter]'>0 </p>
              </div>
            </div>
          </div>
        </>
      )
    }
  }

  return (
    <div className='min-h-screen bg-white flex relative'>
      <div className='fixed top-0 right-0 w-2/5'>
        {showAmbassadorsIcon && <AmbassadorForm close={setShowAmbassadorsIcon} />}
      </div>
      <div className='w-1/5 max-lg:hidden'>
        <Sidebar />
      </div>
      {navbar &&
        <div className='w-1/2 fixed' ref={sidebarRef}>
          <MobileSideBar setNavbar={setNavbar} />
        </div>}
      <div className='w-4/5 max-lg:w-full'>
        <div className='max-lg:hidden'>
          <Header />
        </div>
        <div className='flex justify-start lg:mx-0 mx-10 max-lg:mx-8 max-md:mx-5 my-5 max-lg:my-4 items-center gap-4'>
          <div className='lg:hidden' onClick={() => setNavbar(!navbar)}>
            <img src={Navbar} />
          </div>
          <p className='text-[32px] max-lg:text-2xl max-md:text-xl max-sm:text-lg font-[600] text-[#000000] font-[Poppins]  '> Admin Dashboard Overview</p>
        </div>

        {Content()}

      </div>

    </div>
  )
}

export default Overview
