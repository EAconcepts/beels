import React, { useEffect, useRef, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import { FaPlus } from "react-icons/fa6";
import MobileSideBar from '../../components/MobileSideBar';
import Navbar from '../../assets/images/navbar.png';
import { useNavigate } from 'react-router-dom';

const AddAmbassadors = () => {
    const [navbar, setNavbar] = useState(false)
    const sidebarRef = useRef(null);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        school: '',
        department: '',
    });

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
        const loggedInUser = localStorage.getItem('logged_in');
        if (!loggedInUser) {

            navigate('/login');
        }
    }, []);


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);

    };
    return (
        <div className='min-h-screen bg-white flex relative'>
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
                <form className='px-10 pb-5' onSubmit={handleSubmit}  >
                    <div className='flex justify-between max-lg:justify-start max-lg:gap-8 items-center'>
                        <div className='lg:hidden' onClick={() => setNavbar(!navbar)}>
                            <img src={Navbar} />
                        </div>
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
                        <div className='pt-2 '>
                            <p className='text-[14px] max-lg:text-xs  max-sm:text-[10px] pt-4  font-[400] text-[#242426] font-[Poppins]'> Lead Ambassador Email Address </p>
                            <input type="text" className=' w-full  email-input text-black border-b-[1px] border-[#E2E4E5]    text-xl ' value={formData.email} onChange={handleInputChange} />
                        </div>
                        <div className='flex justify-between items-center max-lg:flex-col max-lg:items-start '>
                            <div className='w-[47%] max-lg:w-full '>
                                <p className='text-[14px] max-lg:text-xs  max-sm:text-[10px] pt-4 font-[400] text-[#242426] font-[Poppins]'>Lead’s First Name</p>
                                <input type="text" className='   email-input text-black border-b-[1px] border-[#E2E4E5] w-full  text-xl ' value={formData.firstName} onChange={handleInputChange} />
                            </div>
                            <div className='w-[47%] max-lg:w-full'>
                                <p className='text-[14px] max-lg:text-xs  max-sm:text-[10px] pt-4  font-[400] text-[#242426] font-[Poppins]'> Lead’s Last Name</p>
                                <input type="text" className='  email-input text-black border-b-[1px] border-[#E2E4E5] w-full   text-xl ' value={formData.lastName} onChange={handleInputChange} />
                            </div>
                        </div>

                        <div>
                            <p className='text-[14px] max-lg:text-xs  max-sm:text-[10px] pt-4 font-[400] text-[#242426] font-[Poppins]'> Lead’s Phone Number  </p>
                            <input type="text" className='email-input text-black border-b-[1px] border-[#E2E4E5] w-full   text-xl ' value={formData.phoneNumber} onChange={handleInputChange} />
                        </div>
                        <div>
                            <p className='text-[14px] max-lg:text-xs  max-sm:text-[10px] pt-4 font-[400] text-[#242426] font-[Poppins]'> Lead’s School </p>
                            <input type="text" className='   email-input text-black border-b-[1px] border-[#E2E4E5] w-full  text-xl ' value={formData.school} onChange={handleInputChange} />
                        </div>
                        <div>
                            <p className='text-[14px] max-lg:text-xs  max-sm:text-[10px] pt-4  font-[400] text-[#242426] font-[Poppins]'> Lead’s Department </p>
                            <input type="text" className='  email-input text-black border-b-[1px] border-[#E2E4E5] w-full  text-xl ' value={formData.department} onChange={handleInputChange} />
                        </div>


                    </div>
                    <div className='flex justify-center items-center lg:hidden mt-10'>
                        <button className='bg-[#082C25] px-3 py-2 flex justify-center items-center rounded-md gap-2'>
                            
                            <p className='text-white text-[14px] max-lg:text-xs  max-sm:text-[10px]  font-[400] font-[Rockwell] '> Send Invite </p>
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default AddAmbassadors
