import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import AmbassadorsIcon from '../../assets/images/ambassadorsIcon.png';
import AmbassadorForm from '../../components/AmbassadorForm';



const Overview = () => {
  const [showAmbassadorsIcon, setShowAmbassadorsIcon] = useState(false);

  return (
    <div className='min-h-screen bg-white flex relative'>
      <div className='fixed top-0 right-0 w-2/5'>
        {showAmbassadorsIcon && <AmbassadorForm  close={setShowAmbassadorsIcon} />}
      </div>
      <div className='w-1/5'>
        <Sidebar />
      </div>
      <div className='w-4/5'>
        <Header />
        <p className='text-[32px] font-[600] text-[#000000] font-[Poppins] ml-10 my-5'> Admin Dashboard Overview</p>
        <div className=' flex justify-between items-center px-10 w-full'>
          <div className='flex w-[30%] justify-center px-2 py-4 items-center border rounded-md gap-8'>
            <div className='w-16 h-16 rounded-full bg-[#B9FFC2] flex justify-center items-center'>
              <img src={AmbassadorsIcon} />
            </div>
            <div className=' flex flex-col justify-around'>
              <p className='text-[17px] font-[500] text-[#667185] font-[Inter]'> Total of Ambassadors </p>
              <p className='text-[24px] font-[700] text-[#000000] font-[Inter]'>0 </p>
            </div>
          </div>
          <div className='flex w-[30%] justify-center px-2 py-4 items-center border rounded-md gap-8'>
            <div className='w-16 h-16 rounded-full bg-[#B9FFC2] flex justify-center items-center'>
              <img src={AmbassadorsIcon} />
            </div>
            <div className=' flex flex-col justify-around'>
              <p className='text-[17px] font-[500] text-[#667185] font-[Inter]'> Lead Ambassador</p>
              <p className='text-[24px] font-[700] text-[#000000] font-[Inter]'>0 </p>
            </div>
          </div>
          <div className='flex w-[30%] justify-center px-2 py-4 items-center border rounded-md gap-8'>
            <div className='w-16 h-16 rounded-full bg-[#B9FFC2] flex justify-center items-center'>
              <img src={AmbassadorsIcon} />
            </div>
            <div className=' flex flex-col justify-around'>
              <p className='text-[17px] font-[500] text-[#667185] font-[Inter]'> Sub Ambassador </p>
              <p className='text-[24px] font-[700] text-[#000000] font-[Inter]'>0 </p>
            </div>
          </div>
        </div>
        <div className='mx-10 bg-[#F1F1F1] h-[200px] mt-16'>
          <p className='text-[24px] font-[600] text-[#000000] font-[Inter] pt-5 text-center'>Beels Ambassador Portal</p>
          <p className='text-[18px] font-[400] text-[#000000] font-[Inter] pt-3 text-center'>Welcome to Beels Portal! As a company admin,you have the ability to add new ambassadors to our program.</p>
          <div className='flex justify-center items-center my-5'>
            <button onClick={() => setShowAmbassadorsIcon(!showAmbassadorsIcon)} className='bg-[#082C25] w-1/5 py-3 flex justify-center items-center rounded-md'>
              <p className='text-white text-[20px] font-[400] font-[Inter] '>Add Leads</p>
            </button>
          </div>


        </div>

      </div>

    </div>
  )
}

export default Overview
