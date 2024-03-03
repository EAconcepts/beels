import React from 'react';
import LeadIcon from '../assets/images/lead.png';

const SubAmbassador = ({border}) => {

 return (
    <div className={`px-2 flex justify-between items-center bg-[#FAF9F6] h-14 ${border === true ? 'border-b border-[#D0D5DD]' : ''}`}>
        <div className='flex justify-start items-center gap-2 w-[30%]'>
            <div className='h-5 w-5 rounded-md border border-[#D0D5DD]'></div>
            <div className='rounded-full'>
                <img src={LeadIcon} />
            </div>
            <div>
                <p className='text-[#101928] text-[8px] font-[500] font-[Inter] '> Sandra Akpotu </p>
                <p className='text-[#475367] text-[8px] font-[400] font-[Inter] '> Lead Ambassador </p>
            </div>
        </div>
        <div className='flex justify-center items-center gap-2 w-[20%]'>
            <p className='text-[#475367] text-[8px] font-[400] font-[Inter] '> Sandy04@gmail.com </p>
        </div>
        <div className='flex justify-center items-center gap-2 w-[20%]'>
            <div className='bg-[#22612A] p-1 rounded-2xl flex justify-center items-center'>
                <p className='text-white text-[6px] font-[500] font-[Inter] '> Sub Ambassador </p>
            </div>
        </div>
        <div className='flex justify-center items-center gap-1 w-[15%]'>
            <p className='text-[#475367] text-[8px] font-[400] font-[Inter] '> 03/01/2024 </p>
        </div>
        <div className='flex justify-end items-center gap-2 w-[15%]'>
            <div className='bg-[#E7F6EC] p-2 rounded-2xl flex justify-center items-center'>
                <p className='text-[#099137] text-[6px] font-[500] font-[Inter] '> Active </p>
            </div>
        </div>
    </div>
 )
}

export default SubAmbassador;
