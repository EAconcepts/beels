import React from 'react'
import PersonIcon from '../assets/images/icon.png'
import CopyIcon from '../assets/images/copy.png'
import MailIcon from '../assets/images/mail.png'
import FirstIcon from '../assets/images/person.png'
import TelephoneIcon from '../assets/images/telephone.png'
import SecondIcon from '../assets/images/secondicon.png'
import ThirdIcon from '../assets/images/thirdicon.png'
import { TiArrowUp } from "react-icons/ti"
import SubAmbassador from './SubAmbassador'
import { IoIosArrowUp } from "react-icons/io"
import { IoIosArrowDown } from "react-icons/io"


const PersonalOverview = () => {
    return (
        <div className='flex justify-between  mt-5 px-10'>
            <div className='w-[45%]'>
                <div className=' border border-[#E4E7EC] rounded-md pb-3'>
                    <div className='flex justify-between items-center px-5 py-2 border-b border-[#E4E7EC]'>
                        <div className='w-[30%]'>
                            <img src={PersonIcon} />
                        </div>

                        <div className='w-[50%]'>
                            <p className='text-[#667185] text-[12px] font-[400] font-[Inter] '> Beels Account Number </p>
                            <p className='text-[#101928] text-[14px] font-[500] font-[Inter] '> 9057365756 </p>
                        </div>
                        <img src={CopyIcon} />
                    </div>
                    <div className='flex justify-between items-center px-5 py-2 border-b border-[#E4E7EC]'>
                        <div className='w-[30%]'>
                            <img src={MailIcon} />
                        </div>

                        <div className='w-[50%]'>
                            <p className='text-[#667185] text-[12px] font-[400] font-[Inter] '> Emails </p>
                            <p className='text-[#101928] text-[14px] font-[500] font-[Inter] '> Sandy04@gmail.com </p>
                        </div>
                        <img src={CopyIcon} />
                    </div>
                    <div className='flex justify-between items-center px-5 py-2 border-b border-[#E4E7EC]'>
                        <div className='w-[30%]'>
                            <img src={FirstIcon} />
                        </div>

                        <div className='w-[50%]'>
                            <p className='text-[#667185] text-[12px] font-[400] font-[Inter] '> First Name </p>
                            <p className='text-[#101928] text-[14px] font-[500] font-[Inter] '> Amarachi </p>
                        </div>
                        <img src={CopyIcon} />
                    </div>
                    <div className='flex justify-between items-center px-5 py-2 border-b border-[#E4E7EC]'>
                        <div className='w-[30%]'>
                            <img src={FirstIcon} />
                        </div>
                        <div className='w-[50%]'>
                            <p className='text-[#667185] text-[12px] font-[400] font-[Inter] '> Last Name </p>
                            <p className='text-[#101928] text-[14px] font-[500] font-[Inter] '> Okoro </p>
                        </div>
                        <img src={CopyIcon} />
                    </div>
                    <div className='flex justify-between items-center px-5 py-2 border-b border-[#E4E7EC]'>
                        <div className='w-[30%]'>
                            <img src={FirstIcon} />
                        </div>
                        <div className='w-[50%]'>
                            <p className='text-[#667185] text-[12px] font-[400] font-[Inter] '> Phone Number </p>
                            <p className='text-[#101928] text-[14px] font-[500] font-[Inter] '> 08168141116 </p>
                        </div>
                        <img src={CopyIcon} />
                    </div>
                    <div className='flex justify-between items-center px-5 py-2 border-b border-[#E4E7EC]'>
                        <div className='w-[30%]'>
                            <img src={TelephoneIcon} />
                        </div>
                        <div className='w-[50%]'>
                            <p className='text-[#667185] text-[12px] font-[400] font-[Inter] '> School </p>
                            <p className='text-[#101928] text-[14px] font-[500] font-[Inter] '> UNILAG </p>
                        </div>
                        <img src={CopyIcon} />
                    </div>
                    <div className='flex justify-between items-center px-5 py-2 border-b border-[#E4E7EC]'>
                        <div className='w-[30%]'>
                            <img src={SecondIcon} />
                        </div>
                        <div className='w-[50%]'>
                            <p className='text-[#667185] text-[12px] font-[400] font-[Inter] '> Ambassador ref link </p>
                            <p className='text-[#AD3307] text-[14px] font-[500] font-[Inter] '> Beels/Sandy-38ndl </p>
                        </div>
                        <img src={CopyIcon} />
                    </div>
                    <div className='flex justify-between items-center px-5 py-2'>
                        <div className='w-[30%]'>
                            <img src={ThirdIcon} />
                        </div>
                        <div  className='w-[50%]'>
                            <p className='text-[#667185] text-[12px] font-[400] font-[Inter] '> Date Created </p>
                            <p className='text-[#101928] text-[14px] font-[500] font-[Inter] '> Friday, Jan 06, 2024 </p>
                        </div>
                        <img src={CopyIcon} />
                    </div>
                </div>
                <div className='flex justify-between items-center my-3 '>
                    <div className='border border-[#E4E7EC] bg-[#FAF9F6] w-[30%] rounded-md px-3 py-2'>
                        <p className='text-[#667185] text-[14px] font-[500] font-[Inter] '> Transaction </p>
                        <div className='flex justify-start gap-4 items-center' >
                            <p className='text-[#101928] text-[20px] font-[600] font-[Inter] '> 5,647 </p>
                            <div className='flex justify-center gap-2 items-center bg-[#E7F6EC] rounded-md'>
                                <TiArrowUp />
                                <p className='text-[#036B26] text-[12px] font-[500] font-[Inter] '> 2% </p>
                            </div>

                        </div>
                    </div>
                    <div className='border border-[#E4E7EC] bg-[#FAF9F6] w-[30%] rounded-md px-3 py-2'>
                        <p className='text-[#667185] text-[14px] font-[500] font-[Inter] '> Revenue </p>
                        <div className='flex justify-start gap-4 items-center' >
                            <p className='text-[#101928] text-[20px] font-[600] font-[Inter] '> 8,000 </p>
                            <div className='flex justify-center gap-2 items-center bg-[#E7F6EC] rounded-md'>
                                <TiArrowUp />
                                <p className='text-[#036B26] text-[12px] font-[500] font-[Inter] '> 2% </p>
                            </div>

                        </div>
                    </div>
                    <div className='border border-[#E4E7EC] bg-[#FAF9F6] w-[30%] rounded-md px-3 py-2'>
                        <p className='text-[#667185] text-[14px] font-[500] font-[Inter] '> Clicks </p>
                        <div className='flex justify-start gap-4 items-center' >
                            <p className='text-[#101928] text-[20px] font-[600] font-[Inter] '> 300 </p>
                            <div className='flex justify-center gap-2 items-center bg-[#E7F6EC] rounded-md'>
                                <TiArrowUp />
                                <p className='text-[#036B26] text-[12px] font-[500] font-[Inter] '> 2% </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[50%]'>
                <div className='border border-[#E4E7EC] bg-[#FAF9F6] rounded-md  pb-2 '>
                    <p className='text-[14px] font-[500] text-[#667185] font-[Inter] px-2 my-3 '> Sub Ambassador </p>
                    <div className='px-2 flex justify-between items-center py-1'>
                        <div className='flex justify-start items-center gap-2 w-[30%] '>
                            <div className='h-5 w-5  rounded-md border border-[#D0D5DD]'></div>
                            <p className='text-[#D0D5DD] text-[8px] font-[500] font-[Inter] '> Name </p>
                            <div>
                                <IoIosArrowUp className='text-[#D0D5DD]' />
                                <IoIosArrowDown className='text-[#D0D5DD]' />
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-2 w-[20%]'>
                            <p className='text-[#D0D5DD] text-[8px] font-[500] font-[Inter] '> Email Address </p>
                        </div>
                        <div className='flex justify-center items-center gap-2 w-[20%]'>
                            <p className='text-[#D0D5DD] text-[8px] font-[500] font-[Inter] '> Type </p>
                        </div>
                        <div className='flex justify-center items-center gap-1  w-[15%]'>
                            <p className='text-[#D0D5DD] text-[8px] font-[500] font-[Inter] '> Date Added </p>
                            <div>
                                <IoIosArrowUp className='text-[#D0D5DD]' />
                                <IoIosArrowDown className='text-[#D0D5DD]' />
                            </div>
                        </div>
                        <div className='flex justify-end items-center gap-2 w-[15%]'>
                            <p className='text-[#D0D5DD] text-[8px] font-[500] font-[Inter] '> Status </p>
                        </div>
                    </div>
                    <SubAmbassador border={true}/>
                    <SubAmbassador border={true}/>
                    <SubAmbassador border={false}/>
                </div>
                <div className='flex justify-between items-center mt-3'>
                    <div className='border border-[#E4E7EC] bg-[#FAF9F6] w-[30%] rounded-md px-3 py-2 flex flex-col gap-16'>
                        <p className='text-[#667185] text-[14px] font-[500] font-[Inter] '> Users </p>
                        <div className='flex justify-start gap-4 items-center' >
                            <p className='text-[#101928] text-[20px] font-[600] font-[Inter] '> 5,000 </p>
                            <div className='flex justify-center gap-2 items-center bg-[#E7F6EC] rounded-md'>
                                <TiArrowUp />
                                <p className='text-[#036B26] text-[12px] font-[500] font-[Inter] '> 2% </p>
                            </div>

                        </div>
                    </div>
                    <div className='border border-[#E4E7EC] bg-[#FAF9F6] w-[30%] rounded-md px-3 py-2 flex flex-col gap-16'>
                        <p className='text-[#667185] text-[14px] font-[500] font-[Inter] '> Referrals </p>
                        <div className='flex justify-start gap-4 items-center' >
                            <p className='text-[#101928] text-[20px] font-[600] font-[Inter] '> 1,000 </p>
                            <div className='flex justify-center gap-2 items-center bg-[#E7F6EC] rounded-md'>
                                <TiArrowUp />
                                <p className='text-[#036B26] text-[12px] font-[500] font-[Inter] '> 2% </p>
                            </div>

                        </div>
                    </div>
                    <div className='border border-[#E4E7EC] bg-[#FAF9F6] w-[30%] rounded-md px-3 py-2 flex flex-col gap-16'>
                        <p className='text-[#667185] text-[14px] font-[500] font-[Inter] '> Ambassadors </p>
                        <div className='flex justify-start gap-4 items-center' >
                            <p className='text-[#101928] text-[20px] font-[600] font-[Inter] '> 300 </p>
                            <div className='flex justify-center gap-2 items-center bg-[#E7F6EC] rounded-md'>
                                <TiArrowUp />
                                <p className='text-[#036B26] text-[12px] font-[500] font-[Inter] '> 2% </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalOverview
