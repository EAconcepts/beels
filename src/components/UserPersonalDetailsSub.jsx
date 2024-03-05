import React from 'react'
import BarChart from '../assets/images/bar-chart.png';
import { MdKeyboardArrowDown } from "react-icons/md";
import { TiArrowUp } from "react-icons/ti"

const UserPersonalDetailsSub = () => {
    return (
        <div className='border border-[#E4E7EC] bg-[#FAF9F6] w-[47%] rounded-md px-3 py-2 flex flex-col gap-16'>
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
    )
}

export default UserPersonalDetailsSub
