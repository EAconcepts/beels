import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import LeadIcon from '../../assets/images/lead.png';
import SubAmbassadorOverview from '../../components/SubAmbassadorOverview';
import Navbar from '../../assets/images/navbar.png';

const SubAmbassadorDetails = () => {
    const [activeSection, setActiveSection] = useState('Overview');

    const handleClick = (section) => {
        setActiveSection(section);
    };
    return (
        <div className='min-h-screen bg-white flex relative'>
            <div className='w-1/5 max-lg:hidden'>
                <Sidebar />
            </div>
            <div className='w-4/5 max-lg:w-full'>
                <div className='max-lg:hidden'>
                    <Header />
                </div>
                {/* <div className='flex justify-start mx-10 max-lg:mx-8 max-md:mx-5 my-5 max-lg:my-4 items-center gap-2'>
                    <img src={Navbar} />
                    <p className='text-[26px] max-lg:text-xl max-md:text-lg max-sm:text-base  font-[600] text-[#000000] font-[Poppins] mx-10 my-5'>Viewing Sub Ambassador</p>
                </div> */}
                <div className='flex justify-between max-lg:justify-start mx-10 items-center max-lg:mx-8 max-md:mx-5 my-5 max-lg:my-4 max-lg:gap-4'>
                    <img src={Navbar} className='lg:hidden ' />
                    <p className='text-[26px]  max-lg:text-xl max-md:text-lg max-sm:text-base font-[600] text-[#000000] font-[Poppins] my-5'> Viewing Sub Ambassadors</p>
                    <button className='bg-[#082C25] px-3 py-2 flex justify-center items-center rounded-md gap-2 max-lg:hidden'>

                        <p className='text-white text-[14px]  font-[400] font-[Rockwell] '> Promote </p>
                    </button>

                </div>
                <div className='flex justify-start items-center gap-4 mx-10 max-lg:mx-8 max-md:mx-5 my-5 max-lg:my-4'>
                    <div className='w-17 h-17 rounded-full'>
                        <img src={LeadIcon} />
                    </div>
                    <div>
                        <p className='text-[#101928] text-[24px] max-lg:text-lg max-md:text-base max-sm:text-sm  font-[600] font-[Inter] '> Sandra Akpotu </p>
                        <p className='text-[#475367] text-[12px] max-md:text-[10px] font-[400] font-[Inter] '> Sandy04@gmail.com </p>
                    </div>
                </div>
                <div className='flex justify-start items-center mx-10 max-lg:mx-8 max-md:mx-5 my-5 max-lg:my-4 gap-12 border-b border-[#E4E7EC] mt-5'>
                    <div className='border-b border-[#F56630]'>
                        <p className='text-[#F56630] text-[14px] max-lg:text-xs max-sm:text-[10px] font-[500] font-[Inter] '> Overview </p>
                    </div>

                </div>
                <SubAmbassadorOverview />
                <div className='flex justify-center items-center  py-5 lg:hidden'>
                    <button className='bg-[#082C25]  flex justify-center px-3 py-2 items-center rounded-md gap-2 '>

                        <p className='text-white text-[14px]  font-[400] font-[Rockwell] '> Promote </p>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default SubAmbassadorDetails
