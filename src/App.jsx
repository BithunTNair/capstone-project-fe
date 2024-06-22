import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Routing from './Components/Routing'
import Loader from './Components/Common/Loader/Loader';


function App() {

  return (
    <>
      <ToastContainer />
      <Loader/>
      <Routing />
    </>
  )
}

export default App
