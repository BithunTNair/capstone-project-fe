import React, { useState } from 'react'
import './Dashboard.css'
import DashLogin from '../../Components/DashboardAuth/DashLogin'
import DashSign from '../../Components/DashboardAuth/DashSign'
import Navbar from '../../Components/Common/Navbar/Navbar'
import AuthPage from '../AuthPage/AuthPage'

function Dashboard() {
  return (
    <>
      <Navbar />
      <AuthPage />
    </>
  )
}

export default Dashboard