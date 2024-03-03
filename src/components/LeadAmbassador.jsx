import React from 'react'
import LeadIcon from '../assets/images/lead.png';
import BinIcon from '../assets/images/bin.png';
import EditIcon from '../assets/images/edit.png';

const LeadAmbassador = ({icons}) => {
    return (
        <div className='px-5 flex justify-between items-center bg-[#FAF9F6] h-20 border-b border-[#D0D5DD]'>
            <div className='flex justify-start  items-center gap-2 w-[20%]'>
                <div className='h-10 w-10  rounded-md border-[3px] border-[#D0D5DD]'></div>
                <div className='w-17 h-17 rounded-full'>
                    <img src={LeadIcon} />
                </div>
                <div>
                    <p className='text-[#101928] text-[10px] font-[500] font-[Inter] '> Sandra Akpotu </p>
                    <p className='text-[#475367] text-[10px] font-[400] font-[Inter] '> Lead Ambassador </p>
                </div>


            </div>
            <div className='flex justify-center items-center gap-2 w-[20%]'>
                <p className='text-[#475367] text-[11px] font-[400] font-[Inter] '> Sandy04@gmail.com </p>
            </div>
            <div className='flex justify-center items-center gap-2 w-[20%]'>
                <div className='bg-[#1671D9] px-3 py-2 rounded-2xl flex justify-center items-center'>
                    <p className='text-[#FAF9F6] text-[11px] font-[500] font-[Inter] '> Recruiter </p>
                </div>
            </div>
            <div className='flex justify-center items-center gap-2 w-[20%]'>
                <p className='text-[#475367] text-[11px] font-[400] font-[Inter] '> 03/01/2024 </p>
            </div>
            <div className={`flex  ${icons === true ? 'justify-between' : 'justify-start'}  items-center gap-2 w-[20%]`}>
                <div className='bg-[#E7F6EC] px-3 py-2 rounded-2xl flex justify-center items-center'>
                    <p className='text-[#099137] text-[11px] font-[500] font-[Inter] '> Active </p>
                </div>
                { icons === true && (<div className='flex justify-center items-center gap-1'>
                    <img src={EditIcon} />
                    <img src={BinIcon} />
                </div>) }
                
            </div>
        </div>
    )
}

export default LeadAmbassador
