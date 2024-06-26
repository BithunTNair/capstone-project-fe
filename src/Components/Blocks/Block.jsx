import React from 'react'
import './Block.css'
import search from '../../assets/search-globe-svgrepo-com.svg'
import book from '../../assets/payment-card-svgrepo-com.svg'
import play from '../../assets/football-svgrepo-com.svg'
function Block() {
    return (
        <div className='blocks d-flex flex-column flex-md-row justify-content-center w-100 h-50 mt-3'>
            <div className='d-flex flex-column align-items-center p-3 text-center '>
                <img src={search} alt=""  className='svg-img' />
                <h3>Search</h3>
                <p>Find the perfect sports turf near you with ease. Our platform provides a comprehensive list of available turfs, complete with detailed information and user reviews.</p>
            </div>
            <div className='d-flex flex-column align-items-center p-3 text-center '>
                <img src={book} alt="" className='svg-img' />
                <h3>Book</h3>
                <p>Book your desired turf effortlessly through our user-friendly interface. Select your preferred date and time, and confirm your booking in just a few clicks.</p>
            </div>
            <div className='d-flex flex-column align-items-center p-3 text-center '>
                <img src={play} alt="" className='svg-img' />
                <h3>Play</h3>
                <p>Get ready to play your favorite sports on the best turfs in town. With your booking confirmed, all that's left is to show up and enjoy your game.</p>
            </div>
        </div>
    )
}

export default Block