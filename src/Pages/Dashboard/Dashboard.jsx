import React, { useState } from 'react'
import './Dashboard.css'
import DashLogin from '../../Components/DashboardAuth/DashLogin'
import DashSign from '../../Components/DashboardAuth/DashSign'
import Navbar from '../../Components/Common/Navbar/Navbar'

function Dashboard() {
  return (
    <>
     <Navbar/>
    <div className=' dashboard-container container-fluid'>
     
      <div className='row  '>
        <div className='col-md-6 d-flex align-items-center '>
          <DashLogin />
        </div>
        <div className='col-md-6 '>
          <DashSign />
        </div>



      </div>

    </div>
    </>
  )
}

export default Dashboard