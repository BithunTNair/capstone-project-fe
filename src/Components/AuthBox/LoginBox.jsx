import React, { useState } from 'react'
import './LogSign.css'
import Input from '../Common/InputField/Input'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { errorToast, successToast } from '../../Plugins/Toast/Toast';

function LoginBox({ setAuth}) {
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
      localStorage.setItem('user', JSON.stringify(res.data.user))
      successToast(res.message);
      navigate('/home')
    }).catch((error) => {
      console.log(error);
      errorToast(error?.response?.data.message || 'something went wrong')

    })
  }
  return (
    <div className='d-flex flex-column'>
      <div className='mt-4'>
        <Input type={'email'} label={'Email'} value={loginData.email} name={'email'} onchange={handleLogin} />
      </div>
      <div className='mt-4'>
        <Input label={'Password'} value={loginData.password} name={'password'} onchange={handleLogin} />
      </div>
      <div className='mt-4 d-flex align-items-end justify-content-end' >
        <button className='common-btn ' onClick={doLogin} >LogIn</button>
      </div>
      <p className='authbox-text mt-4' >Don't have an account <i className='px-2' onClick={() => setAuth('signup')}>signup here</i> </p>
    </div>
  )
}

export default LoginBox