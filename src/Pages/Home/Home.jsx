import React from 'react'
import './Home.css'
import Navbar from '../../Components/Common/Navbar/Navbar'
import Carousal from '../../Components/Carousal/Carousal'
import Block from '../../Components/Blocks/Block'

function Home() {
  return (
    <div>

        <Navbar/>
        <Carousal/>
        <Block/>
    </div>
  )
}

export default Home