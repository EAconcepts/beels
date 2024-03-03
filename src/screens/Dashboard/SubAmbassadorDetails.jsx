import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import LeadIcon from '../../assets/images/lead.png';
import SubAmbassadorOverview from '../../components/SubAmbassadorOverview';

const SubAmbassadorDetails = () => {
    const [activeSection, setActiveSection] = useState('Overview');

    const handleClick = (section) => {
        setActiveSection(section);
    };
  return (
    <div className='min-h-screen bg-white flex relative'>
        <div className='w-1/5'>
                <Sidebar />
            </div>
            <div className='w-4/5'>
                <Header />

                <div className='flex justify-between items-center'>
                <p className='text-[26px] font-[600] text-[#000000] font-[Poppins] mx-10 my-5'>Viewing Sub Ambassador</p>
                        <button className='bg-[#082C25] px-3 py-2 flex justify-center items-center rounded-md '>
                         
                            <p className='text-white text-[14px] font-[400] font-[Rockwell] '> Promote </p>
                        </button>
                    </div>
               
                <div className='flex justify-start items-center gap-4 mx-10'>
                    <div className='w-17 h-17 rounded-full'>
                        <img src={LeadIcon} />
                    </div>
                    <div>
                        <p className='text-[#101928] text-[24px] font-[600] font-[Inter] '> Sandra Akpotu </p>
                        <p className='text-[#475367] text-[14px] font-[400] font-[Inter] '> Lead Ambassador </p>
                    </div>
                </div>
                <div className='flex justify-start items-center mx-10 gap-12 border-b border-[#E4E7EC] mt-5'>
                    <div className='border-b border-[#F56630]'>
                        <p className='text-[#F56630] text-[14px] font-[500] font-[Inter] '> Overview </p>
                    </div>
                    
                </div>
                <SubAmbassadorOverview />
            </div>
    </div>
  )
}

export default SubAmbassadorDetails
