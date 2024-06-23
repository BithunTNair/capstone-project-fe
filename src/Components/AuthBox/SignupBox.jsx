import React, { useState } from 'react'
import './LogSign.css'
import Input from '../Common/InputField/Input'
import { errorToast, successToast } from '../../Plugins/Toast/Toast';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { showorhideLoader } from '../../Redux/generalSlice';

function SignupBox({ setAuth }) {
  const [signupData, setSignupData] = useState({});
  const {showLoader}=useSelector((store=>store.general));
  const dispatch= useDispatch();
  const handleSignup = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value })
  };
  const doSignup = () => {
    dispatch(showorhideLoader(true))
    if (signupData.password === signupData.confirmPassword) {
      axios({
        method: 'POST',
        url:`${import.meta.env.VITE_BASE_URL}/auth/signup`,
        data: signupData

      }).then((res)=>{
        successToast(res.message);
        setAuth('login');
        dispatch(showorhideLoader(false))
      }).catch((error)=>{
        errorToast(error?.response?.data.message|| 'something went wrong')
        dispatch(showorhideLoader(false))

      })
    } else {
      errorToast('Please enter your confirm password correctly')
    }
  }
  return (

    <div className='d-flex flex-column'>
      <div className='mt-4'>
        <Input label={'First Name'} name={'firstName'} value={signupData.firstName} onchange={handleSignup} />
      </div>
      <div className='mt-4'>
        <Input label={'Last Name'} name={'lastName'} value={signupData.lastName} onchange={handleSignup} />
      </div>
      <div className='mt-4'>
        <Input type={'email'} label={'Email'} name={'email'} value={signupData.email} onchange={handleSignup} />
      </div>
      <div className='mt-4'>
        <Input type={'number'} label={'Mobile Number'} name={'mobileNumber'} value={signupData.mobileNumber} onchange={handleSignup} />
      </div>
      <div className='mt-4'>
        <Input type={'password'} label={'Password'} name={'password'} value={signupData.password} onchange={handleSignup} />
      </div>
      <div className='mt-4'>
        <Input type={'password'} label={'Confirm Password'} name={'confirmPassword'} value={signupData.confirmPassword} onchange={handleSignup} />
      </div>
      <div className='mt-4 d-flex align-items-end justify-content-end' >
        <button className='common-btn ' onClick={doSignup}>Signup</button>
      </div>
      <p className='authbox-text mt-4' >Already have an account <i className='px-2' onClick={() => setAuth('login')}>login here</i> </p>
    </div>

  )
}

export default SignupBox