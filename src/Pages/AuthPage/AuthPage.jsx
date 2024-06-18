import React, { useState } from 'react'
import './AuthPage.css'
import LoginBox from '../../Components/AuthBox/LoginBox'
import SignupBox from '../../Components/AuthBox/SignupBox'

function AuthPage() {
  const [auth, setAuth] = useState('login')
  return (
    <div className='authpage-cont container d-flex justify-content-center align-items-center mt-4'>

      <div className=' row  authpage'>
        <h3 className='text-center w-100  mt-4 '>
          {auth === 'login' ? 'Login' : 'Signup'}
        </h3>
        {auth === 'login' ? <LoginBox setAuth={setAuth} /> : <SignupBox setAuth={setAuth} />}
      </div>


    </div>
  )
}

export default AuthPage