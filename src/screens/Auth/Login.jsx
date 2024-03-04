import React from 'react'
import BeelsIcon from '../../assets/images/beels.png'
import MailIcon from '../../assets/images/mail.png'
import LockIcon from '../../assets/images/lock.png'
import GoogleIcon from '../../assets/images/google.png'
import Image from '../../assets/images/speaker.png'
import './auth.css'

const Login = () => {
  return (
    <div className='min-h-screen bg-[#B6F485] pt-10 px-10 max-lg:px-8 max-md:px-5 max-sm:px-2'>
      <img src={BeelsIcon} className='' />
      <div className='flex max-lg:flex-col justify-between items-center max-lg:justify-center w-full max-lg:mt-10 max-md:mt-6 max-sm:mt-3'>
        <img src={Image} className='w-[480px] max-lg:hidden' />
       
          <div className='bg-[#082C25] h-[400px] rounded-2xl w-1/2 max-lg:w-3/4 max-md:w-[80%] max-sm:w-[90%] p-5 px-12 '>
            <p className='text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base font-[700] text-white font-[Rockwell] my-4 max-lg:text-center'>Login to Admin Account</p>
            <form>
              <div className='flex my-4 items-center justify-start gap-2 px-4 py-2 bg-white rounded-lg'>
                <img src={MailIcon} className='' />
                <input type="text" placeholder='Admin Email' className="input max-lg:w-[100%]" />

              </div>
              <div className='flex my-4 items-center justify-start gap-2 px-4 py-2 bg-white rounded-lg'>
                <img src={LockIcon} className='' />
                <input type="text" placeholder='Password' className="input max-lg:w-[100%]" />
              </div>
              <div className='flex my-4 items-center justify-center gap-2 px-4 py-2 bg-[#3AB54A] rounded-lg'>
                <p className='text-white text-center font-[inter] font-[700] text-lg max-lg:text-base max-md:text-sm max-sm:text-xs'>Login</p>
              </div>
              <div className='flex justify-center items-center gap-4'>
                <hr className='w-[40%]'></hr>
                <p className='text-lg max-lg:text-base max-md:text-sm max-sm:text-xs font-[700] font-[inter] text-white'> Or</p>
                <hr className='w-[40%]'></hr>
              </div>

              <div className='flex max-lg:flex-col my-4 items-center justify-center gap-2 px-4 py-2 bg-white rounded-lg'>
              
                <p className='text-lg max-lg:text-base max-md:text-sm max-sm:text-xs font-[500] font-[inter]'>Login with Google</p>
                <img src={GoogleIcon} className='max-lg:w-5' />
           
              </div>
            </form>
          </div>
        </div>
      </div>

  )
}

export default Login
