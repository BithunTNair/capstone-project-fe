import React from 'react'
import './Cards.css'
import courtImg from '../../assets/ball.jpg'
import { useNavigate } from 'react-router-dom'

function Cards() {
    const Navigate=useNavigate()
    return (
        <div className='card-container' onClick={()=>{Navigate('/courts/courtdetails')}}>
            <img src={courtImg} alt="" />
            <div className='card'>

                <h2>Court Name</h2>
                <p>location</p>
            </div>



        </div>
    )
}

export default Cards