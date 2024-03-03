import React from 'react'
import './Component.css'
import CancelIcon from '../assets/images/cancel.png'

const AmbassadorForm = ({close}) => {
    return (
        <div className='pl-10 bg-white'>
            <div className='flex justify-end px-10 items-center pt-5'>
                <img src={CancelIcon} className='w-6' onClick={() => close(false)} />
            </div>
            <p className='text-[20px] pt-1 font-[700] text-[#242731] font-[Poppins]'> Lead Ambassador Info </p>
            <p className='text-[13px] pt-1 w-[70%]  font-[300] text-[#9bb3e0] font-[Roboto]'> Fill in the data for the lead ambassador. A email will be sent to their address to onboard them. </p>
            <form className='w-[70%] '>
                <div className='border rounded-md p-4 pt-3 mt-3'>
                    <p className='text-[16px] font-[600] text-[#242731] font-[Poppins]'> Lead Ambassador Info </p>
                    <p className='text-[8px] pt-2 font-[300] text-[#575F6E] font-[Roboto]'> Please fill in the required details </p>
                    <div className='pt-2'>
                        <p className='text-[10px] pt-2  font-[400] text-[#5a5a9a] font-[Poppins]'> Lead Ambassador Email Address </p>
                        <input type="text" className=' w-full  email-input text-black border-b-[1px] border-[#E2E4E5]  max-sm:w-3/4  text-xl ' />
                    </div>
                    <div>
                        <p className='text-[10px] pt-2 font-[400] text-[#242426] font-[Poppins]'>Lead’s First Name</p>
                        <input type="text" className='   email-input text-black border-b-[1px] border-[#E2E4E5] w-full max-sm:w-3/4  text-xl ' />
                    </div>
                    <div>
                        <p className='text-[10px] pt-2  font-[400] text-[#242426] font-[Poppins]'> Lead’s Last Name</p>
                        <input type="text" className='  email-input text-black border-b-[1px] border-[#E2E4E5] w-full max-sm:w-3/4  text-xl ' />
                    </div>
                    <div>
                        <p className='text-[10px] pt-2 font-[400] text-[#242426] font-[Poppins]'> Lead’s Phone Number  </p>
                        <input type="text" className='   email-input text-black border-b-[1px] border-[#E2E4E5] w-full max-sm:w-3/4  text-xl ' />
                    </div>
                    <div>
                        <p className='text-[10px] pt-2 font-[400] text-[#242426] font-[Poppins]'> Lead’s School </p>
                        <input type="text" className='   email-input text-black border-b-[1px] border-[#E2E4E5] w-full max-sm:w-3/4  text-xl ' />
                    </div>
                    <div>
                        <p className='text-[10px] pt-2  font-[400] text-[#242426] font-[Poppins]'> Lead’s Department </p>
                        <input type="text" className='  email-input text-black border-b-[1px] border-[#E2E4E5] w-full max-sm:w-3/4  text-xl ' />
                    </div>
                </div>

                <button className='bg-[#082C25] mt-5 w-3/5 py-2 flex justify-center items-center rounded-md'>
                    <p className='text-white text-[14px] font-[400] font-[Inter] '> Send Invite </p>
                </button>
            </form>
        </div>
    )
}

export default AmbassadorForm
