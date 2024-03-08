import React, { useEffect, useState } from 'react'
import BeelsIcon from '../../assets/images/beels.png'
import MailIcon from '../../assets/images/mail.png'
import LockIcon from '../../assets/images/lock.png'
import GoogleIcon from '../../assets/images/google.png'
import Image from '../../assets/images/speaker.png'
import { loginUser } from "../../actions/AuthActions";
import './auth.css'
import { useNavigate } from 'react-router-dom';
import cancelIcon from '../../assets/images/cancel.png'; 



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [loggingin, setLoggingin] = useState(false);
  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
      type: "Admin"
    };

    console.log(data);
    loginUser(data, setSuccess, setError, setLoggingin);
  };

  useEffect(() => {
    if (error) {
      setShowError(true);
    }
  }, [error]);

  if (success !== null) {
    localStorage.setItem("logged_in", JSON.stringify(success));
    navigate("/dashboard/overview");
    location.reload();
  }

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("logged_in")) !== null) {
      navigate("/dashboard/overview");
    }
  });
  return (
    <div className='min-h-screen bg-[#B6F485] pt-10 px-10 max-lg:px-8 max-md:px-5 max-sm:px-2'>

      <img src={BeelsIcon} className='' />
      {showError && (
        <div className='justify-center flex items-center gap-24 absolute top-0 left-0 w-full'>
          <div className=' w-1/2 h-10 bg-red-500 text-white  rounded flex items-center justify-center '>

            <p>{error}</p>
            <button onClick={() => setShowError(false)} >
              <img src={cancelIcon} alt="Cancel" className='w-6 h-6' />
            </button>
          </div>
        </div>
      )}


      <div className='flex max-lg:flex-col justify-between items-center max-lg:justify-center w-full max-lg:mt-10 max-md:mt-6 max-sm:mt-3'>
        <img src={Image} className='w-[480px] max-lg:hidden' />

        <div className='bg-[#082C25] h-[400px] rounded-2xl w-1/2 max-lg:w-3/4 max-md:w-[80%] max-sm:w-[90%] p-5 px-12 '>
          <p className='text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base font-[700] text-white font-[Rockwell] my-4 max-lg:text-center'>Login to Admin Account</p>
          <form onSubmit={handleLogin}>
            <div className='flex my-4 items-center justify-start gap-2 px-4 py-2 bg-white rounded-lg'>
              <img src={MailIcon} className='' />
              <input type="text" placeholder='Admin Email' className="input max-lg:w-[100%]" value={email} onChange={(e) => setEmail(e.target.value)} />

            </div>
            <div className='flex my-4 items-center justify-start gap-2 px-4 py-2 bg-white rounded-lg'>
              <img src={LockIcon} className='' />
              <input type="text" placeholder='Password' className="input max-lg:w-[100%]" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className='flex w-full my-4 items-center justify-center gap-2 px-4 py-2 bg-[#3AB54A] rounded-lg'>
              {loggingin ? (
                <div className='loader'></div>
              ) : (
                <p className='text-white text-center font-[inter] font-[700] text-lg max-lg:text-base max-md:text-sm max-sm:text-xs'>Login</p>
              )}

            </button>
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
