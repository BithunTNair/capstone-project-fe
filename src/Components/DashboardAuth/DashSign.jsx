import React, { useState }  from 'react'

import './DashLogSign.css'
import Input from '../Common/InputField/Input'
import { errorToast, successToast } from '../../Plugins/Toast/Toast';
import axios from 'axios';


function DashSign() {
  const [signupData, setSignupData] = useState({});
  const handleSignup = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value })
  };
  const doSignup = () => {
    if (signupData.password === signupData.confirmPassword) {
      axios({
        method: 'POST',
        url:`${import.meta.env.VITE_BASE_URL}/auth/signup`,
        data: signupData

      }).then((res)=>{
        successToast('signup successfull! Please go through login process');
       
      }).catch((error)=>{
        errorToast(error?.response?.data.message|| 'something went wrong')

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
    
    </div>

  )
}
export default DashSign