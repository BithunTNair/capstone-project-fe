import React, { useState } from 'react'
import './LogSign.css'
import Input from '../Common/InputField/Input'
import { errorToast, successToast } from '../../Plugins/Toast/Toast';
import axios from 'axios';

function SignupBox({ setAuth }) {
  const [signupData, setSignupData] = useState({});
  const handleSignup = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value })
  };
  const doSignup = () => {
    if (signupData.password === signupData.confirmPassword) {
      axios({
        method: 'POST',
        url: process.env.REACT_APP_BASE_URL + '/auth/signup',
        data: signupData

      }).then((res)=>{
        successToast(res.message);
        setAuth('login')
      }).catch((error)=>{
        errorToast(error?.response?.message|| 'something went wrong')

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