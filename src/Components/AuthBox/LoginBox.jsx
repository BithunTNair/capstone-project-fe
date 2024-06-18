import React, { useState } from 'react'
import './LogSign.css'
import Input from '../Common/InputField/Input'
import axios from 'axios';

function LoginBox({setAuth}) {
  const [loginData,setLoginData]=useState({});
  const handleLogin = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
  };
  const doLogin=()=>{
    axios({
      method:'POST',
      url: process.env.REACT_APP_BASE_URL + '/auth/login',
      data:loginData
    })
  }
  return (
    <div className='d-flex flex-column'>
      <div  className='mt-4'>
      <Input type={'email'} label={'Email'} value={loginData.email} name={'email'} onchange={handleLogin} />
      </div>
      <div className='mt-4'>
      <Input label={'Password'}  value={loginData.password} name={'password'} onchange={handleLogin}/>
      </div>
     <div  className='mt-4 d-flex align-items-end justify-content-end' >
     <button className='common-btn 'onClick={doLogin} >LogIn</button>
     </div>
     <p className='authbox-text mt-4' >Don't have an account <i className='px-2' onClick={()=>setAuth('signup')}>signup here</i> </p>
    </div>
  )
}

export default LoginBox