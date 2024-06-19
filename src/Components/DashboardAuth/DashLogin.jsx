import React, { useState } from 'react'

import './DashLogSign.css'
import Input from '../Common/InputField/Input'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { errorToast, successToast } from '../../Plugins/Toast/Toast';

function DashLogin() {
  const [loginData, setLoginData] = useState({});
  const navigate = useNavigate()
  const handleLogin = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
  };
  const doLogin = () => {
    axios({
      method: 'POST',
      url: `${import.meta.env.VITE_BASE_URL}/auth/login`,
      data: loginData
    }).then((res) => {
      localStorage.setItem('token', res.data.token)
      successToast(res.message);
      navigate('/home')
    }).catch((error) => {
      console.log(error);
      errorToast(error?.response?.data.message || 'something went wrong')

    })
  }
  return (
    <div className='d-flex flex-column authbox'>
      <div className='mt-4'>
        <Input type={'email'} label={'Email'} value={loginData.email} name={'email'} onchange={handleLogin} />
      </div>
      <div className='mt-4'>
        <Input label={'Password'} value={loginData.password} name={'password'} onchange={handleLogin} />
      </div>
      <div className='mt-4 d-flex align-items-end justify-content-end' >
        <button className='common-btn ' onClick={doLogin} >LogIn</button>
      </div>
    </div>
  )
}

export default DashLogin