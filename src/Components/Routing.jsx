import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthPage from '../Pages/AuthPage/AuthPage'
import Home from '../Pages/Home/Home'
import Dashboard from '../Pages/Dashboard/Dashboard'
import CourtListPage from '../Pages/courtListPage/CourtListPage'
import CourtDetailsPage from '../Pages/CourtDetailsPage/CourtDetailsPage'
import NewCourt from '../Pages/NewCourt/NewCourt'

function Routing() {
  return (
    <div>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/courts' >
          <Route path='courtlist' element={<CourtListPage/>}/>
          <Route path="courtdetails" element={<CourtDetailsPage />} />
        </Route>
        <Route path="/newcourt" element={<NewCourt />} />
      </Routes>

    </div>
  )
}

export default Routing