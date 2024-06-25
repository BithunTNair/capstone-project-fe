import React from 'react'
import './CourtDetailsBody.css'
import mainImg from '../../assets/main-loc.jpg'

function CourtDetailsBody() {
  return (
    <div className='court-data-container'>
      <div className='img-container'>
        <img src={mainImg} alt="" className='img'/>
        <div className='court-contents-container'>
          <div className='court-contents'>
            <h2>court name</h2>
            <h4>location</h4>
            <h4>type</h4>
          </div>
          <div className='d-flex align-self-end gap-3'>
            <button> <img src="" alt="" /> </button>
            <button> <img src="" alt="" /> </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CourtDetailsBody