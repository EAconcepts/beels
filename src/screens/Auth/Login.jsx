import React from 'react'
import BeelsIcon from '../../assets/images/beels.png'
import MailIcon from '../../assets/images/mail.png'
import LockIcon from '../../assets/images/lock.png'
import GoogleIcon from '../../assets/images/google.png'
import Image from '../../assets/images/speaker.png'
import './auth.css'

const Login = () => {
  return (
    <div className='min-h-screen bg-[#B6F485] pt-10 px-10'>
      <img src={BeelsIcon} className='' />
      <div className='flex justify-between items-center'>
        <img src={Image} className='w-[480px]' />
        <div className='bg-[#082C25] h-[400px] rounded-2xl w-1/2 p-5 px-12 '>
          <p className='text-2xl font-[700] text-white font-[Rockwell] my-4'>Login to Admin Account</p>
          <form>
            <div className='flex my-4 items-center justify-start gap-2 px-4 py-2 bg-white rounded-lg'>
              <img src={MailIcon} className='' />
              <input type="text" placeholder='Admin Email' className="input" />

            </div>
            <div className='flex my-4 items-center justify-start gap-2 px-4 py-2 bg-white rounded-lg'>
              <img src={LockIcon} className='' />
              <input type="text" placeholder='Password' className="input" />
            </div>
            <div className='flex my-4 items-center justify-center gap-2 px-4 py-2 bg-[#3AB54A] rounded-lg'>
              <p className='text-white text-center font-[inter] font-[700] text-lg'>Login</p>
            </div>
            <div className='flex justify-center items-center gap-4'>
              <hr className='w-[40%]'></hr>
              <p className='text-lg font-[700] font-[inter] text-white'> Or</p>
              <hr className='w-[40%]'></hr>
            </div>

            <div className='flex my-4 items-center justify-center gap-2 px-4 py-2 bg-white rounded-lg'>
              <p className='text-lg font-[500] font-[inter]'>Login with Google</p>
              <img src={GoogleIcon} className='' />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
