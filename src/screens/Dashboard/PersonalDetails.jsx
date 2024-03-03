import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import LeadIcon from '../../assets/images/lead.png';
import PersonalOverview from '../../components/PersonalOverview';

const PersonalDetails = () => {
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

                <p className='text-[26px] font-[600] text-[#000000] font-[Poppins] mx-10 my-5'>Viewing Lead Ambassador</p>
                <div className='flex justify-start items-center gap-4 mx-10'>
                    <div className='w-17 h-17 rounded-full'>
                        <img src={LeadIcon} />
                    </div>
                    <div>
                        <p className='text-[#101928] text-[24px] font-[600] font-[Inter] '> Sandra Akpotu </p>
                        <p className='text-[#475367] text-[12px] font-[400] font-[Inter] '> Sandy04@gmail.com </p>
                    </div>
                </div>
                <div className='flex justify-start items-center mx-10 gap-12 border-b border-[#E4E7EC] mt-5'>
                    {['Overview', 'Users', 'Ambassadors', 'Send Message'].map(section => (
                        <div 
                            key={section} 
                            onClick={() => handleClick(section)} 
                            className={`text-[#344054] text-[14px] font-[500] font-[Inter] ${activeSection === section ? 'text-red-500 border-b-2 border-red-500' : ''}`}
                        >
                            {section}
                        </div>
                    ))}
                </div>
                <PersonalOverview />
            </div>
        </div>
    );
};

export default PersonalDetails;
