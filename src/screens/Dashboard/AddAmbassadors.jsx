import React from 'react'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import { FaPlus } from "react-icons/fa6";

const AddAmbassadors = () => {
    return (
        <div className='min-h-screen bg-white flex relative'>
            <div className='w-1/5 max-lg:hidden'>
                <Sidebar />
            </div>
            <div className='w-4/5 max-lg:w-full'>
                <div className='max-lg:hidden'>
                    <Header />
                </div>
                <form className='px-10 pb-5'>
                    <div className='flex justify-between items-center'>
                        <p className='text-[26px] max-lg:text-xl max-md:text-lg max-sm:text-base  font-[600] text-[#000000] font-[Poppins] my-5'> Add Lead Ambassadors</p>
                        <button className='bg-[#082C25] px-3 py-2 flex justify-center items-center rounded-md gap-2 max-lg:hidden'>
                            <FaPlus className='text-white' />
                            <p className='text-white text-[14px] max-lg:text-xs  max-sm:text-[10px]  font-[400] font-[Rockwell] '> Add </p>
                        </button>
                    </div>
                    <p className='text-[16px] max-lg:text-sm  max-sm:text-xs  font-[300] text-[#575F6E] font-[Roboto] mb-5'> Fill in the data for the lead ambassador. A email will be sent to their address to onboard them. </p>


                    <div className='border rounded-md px-7 py-4 mt-3 mx-5 max-lg:mx-0'>
                        <p className='text-[26px] max-lg:text-xl max-md:text-lg max-sm:text-base  font-[600] text-[#242731] font-[Poppins]'> Lead Ambassador Info </p>
                        <p className='text-[12px]  max-md:text-[10px] max-sm:text-[8px]  pt-2 font-[300] text-[#575F6E] font-[Roboto]'> Please fill in the required details </p>
                        <div className='pt-2'>
                            <p className='text-[14px] max-lg:text-xs  max-sm:text-[10px] pt-4  font-[400] text-[#242426] font-[Poppins]'> Lead Ambassador Email Address </p>
                            <input type="text" className=' w-full  email-input text-black border-b-[1px] border-[#E2E4E5]  max-sm:w-3/4  text-xl ' />
                        </div>
                        <div className='flex justify-between items-center max-lg:flex-col max-lg:items-start '>
                            <div className='w-[47%] max-lg:w-full '>
                                <p className='text-[14px] max-lg:text-xs  max-sm:text-[10px] pt-4 font-[400] text-[#242426] font-[Poppins]'>Lead’s First Name</p>
                                <input type="text" className='   email-input text-black border-b-[1px] border-[#E2E4E5] w-full max-sm:w-3/4  text-xl ' />
                            </div>
                            <div className='w-[47%] max-lg:w-full'>
                                <p className='text-[14px] max-lg:text-xs  max-sm:text-[10px] pt-4  font-[400] text-[#242426] font-[Poppins]'> Lead’s Last Name</p>
                                <input type="text" className='  email-input text-black border-b-[1px] border-[#E2E4E5] w-full max-sm:w-3/4  text-xl ' />
                            </div>
                        </div>

                        <div>
                            <p className='text-[14px] max-lg:text-xs  max-sm:text-[10px] pt-4 font-[400] text-[#242426] font-[Poppins]'> Lead’s Phone Number  </p>
                            <input type="text" className='   email-input text-black border-b-[1px] border-[#E2E4E5] w-full max-sm:w-3/4  text-xl ' />
                        </div>
                        <div>
                            <p className='text-[14px] max-lg:text-xs  max-sm:text-[10px] pt-4 font-[400] text-[#242426] font-[Poppins]'> Lead’s School </p>
                            <input type="text" className='   email-input text-black border-b-[1px] border-[#E2E4E5] w-full max-sm:w-3/4  text-xl ' />
                        </div>
                        <div>
                            <p className='text-[14px] max-lg:text-xs  max-sm:text-[10px] pt-4  font-[400] text-[#242426] font-[Poppins]'> Lead’s Department </p>
                            <input type="text" className='  email-input text-black border-b-[1px] border-[#E2E4E5] w-full max-sm:w-3/4  text-xl ' />
                        </div>
                    </div>


                </form>
            </div>
        </div>
    )
}

export default AddAmbassadors
