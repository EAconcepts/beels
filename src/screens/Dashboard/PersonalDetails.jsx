import React, { useState, useEffect, useRef, useContext } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import LeadIcon from '../../assets/images/lead.png';
import PersonalOverview from '../../components/PersonalOverview';
import Navbar from '../../assets/images/navbar.png';
import { useNavigate } from 'react-router-dom';
import MobileSideBar from '../../components/MobileSideBar';
import { AuthContext } from '../../context/AuthContext';
import { getPersonalDetail } from '../../actions/AmbassadorActions'
import { allSubAmbassadors } from '../../actions/AmbassadorActions';
import { getDashboardDetail } from '../../actions/AmbassadorActions';


const PersonalDetails = () => {
    const [activeSection, setActiveSection] = useState('Overview');
    const navigate = useNavigate();
    const [navbar, setNavbar] = useState(false)

    const sidebarRef = useRef(null);
    const { token, user } = useContext(AuthContext);
    const [userdetail, setUserdetail] = useState(null);
    const [error, setError] = useState(null)
    const [seconduserdetail, setSecondUserdetail] = useState(null);
    const [seconderror, setSecondError] = useState(null)
    const [thirduserdetail, setThirdUserdetail] = useState(null);
    const [thirderror, setThirdError] = useState(null)

    useEffect(() => {
        getPersonalDetail(token, setUserdetail, setError, user?.email);
        getDashboardDetail(token, setThirdUserdetail, setThirdError);
        allSubAmbassadors(token, setSecondUserdetail, setSecondError);


    }, [token]);
    console.log(token, user?.email)
    console.log(userdetail?.user.email);
    console.log(seconduserdetail?.sub);
    console.log(thirduserdetail?.users);

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

    const handleClick = (section) => {
        setActiveSection(section);

        switch (section) {
            case 'Overview':
                navigate('/dashboard/personal/overview');
                break;
            case 'Users':
                navigate('/dashboard/personal/user');
                break;
            case 'Ambassadors':
                navigate('/dashboard/personal/ambassadors');
                break;
            case 'SendMessage':
                navigate('/dashboard/personal/ambassadors/chat');
                break;
            default:
                break;
        }
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
            <div className='w-4/5  max-lg:w-full max-lg:pb-5'>
                <div className='max-lg:hidden'>
                    <Header />
                </div>
                <div className='flex justify-start lg:mx-0 mx-10 max-lg:mx-8 max-md:mx-5 my-5 max-lg:my-4 items-center gap-2'>
                    <div className='lg:hidden' onClick={() => setNavbar(!navbar)}>
                        <img src={Navbar} />
                    </div>

                    <p className='text-[26px] max-lg:text-xl max-md:text-lg max-sm:text-base  font-[600] text-[#000000] font-[Poppins] mx-10 my-5'>Viewing Lead Ambassador</p>
                </div>
                <div className='flex justify-start items-center gap-4 mx-10 max-lg:mx-8 max-md:mx-5 my-5 max-lg:my-4'>
                    <div className='w-17 h-17 rounded-full'>
                        <img src={LeadIcon} />
                    </div>
                    <div>
                        <p className='text-[#101928] text-[24px] max-lg:text-lg max-md:text-base max-sm:text-sm  font-[600] font-[Inter] '> {userdetail?.user.first_name} {userdetail?.user.last_name}   </p>
                        <p className='text-[#475367] text-[12px] max-md:text-[10px] font-[400] font-[Inter] '> {userdetail?.user.email}</p>
                    </div>
                </div>
                <div className='flex justify-start items-center mx-10 max-lg:mx-8 max-md:mx-6 max-sm:mx-4 gap-12 max-lg:gap-10 max-md:gap-8 max-sm:gap-4 border-b border-[#E4E7EC] mt-5'>
                    {['Overview', 'Users', 'Ambassadors', 'SendMessage'].map(section => {
                        // Check if the user type is not Admin or Lead
                        if ((user?.type !== "Admin" && user?.type !== "Lead") && (section === 'Ambassadors' || section === 'SendMessage')) {
                            // If the user is not Admin or Lead, do not render Ambassadors and SendMessage links
                            return null;
                        }

                        // If the user is not Admin or Lead, change the Users link to direct to /dashboard/subambassadors/details
                        if (user?.type !== "Admin" && user?.type !== "Lead" && section === 'Users') {
                            return (
                                <div
                                    key={section}
                                    onClick={() => handleClick(section)}
                                    className={`text-[#344054] text-[14px] max-lg:text-xs max-sm:text-[10px] font-[500] font-[Inter] ${activeSection === section ? 'text-red-500 border-b-2 border-red-500' : ''}`}
                                >
                                    {section === 'Users' ? 'Sub Ambassadors' : section}
                                </div>
                            );
                        }

                        return (
                            <div
                                key={section}
                                onClick={() => handleClick(section)}
                                className={`text-[#344054] text-[14px] max-lg:text-xs max-sm:text-[10px] font-[500] font-[Inter] ${activeSection === section ? 'text-red-500 border-b-2 border-red-500' : ''}`}
                            >
                                {section}
                            </div>
                        );
                    })}
                </div>

                <PersonalOverview fname={userdetail?.user.first_name} lname={userdetail?.user.last_name} email={userdetail?.user.email} accountNumber={userdetail?.user.business.rc_number} dateCreated={userdetail?.user.created_at} pnumber={userdetail?.user.phone} school={userdetail?.user.school} refLink={userdetail?.user.business.acc_number} sub={seconduserdetail?.sub} user={thirduserdetail?.users} />
            </div>
        </div>
    );
};

export default PersonalDetails;
