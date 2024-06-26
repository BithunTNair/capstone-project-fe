import React from 'react'
import './CourtDetailsBody.css'
import mainImg from '../../assets/main-loc.jpg'
import addIcon from '../../assets/addIcon2.svg'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Modal from '../Common/Modal/Modal';

function CourtDetailsBody() {
  return (
    <div className='court-data-container'>
      <div className='img-container'>
        <img src={mainImg} alt="" className='img'/>
        <div className='court-contents-container d-flex justify-content-between p-4'>
          <div className='court-contents d-flex flex-column justify-content-center text-white'>
            <h2>court name</h2>
            <h4>location</h4>
            <h4>type</h4>
          </div>
          <div className='align-self-end d-flex  gap-3'>
            <button className='button' > Book </button>
            <button> <img src={addIcon} alt="" height={'20px'}/> </button>
          </div>
        </div>
      </div>
<ReactQuill  readOnly={true} 
theme='bubble'
value={''}
/>
<Modal/>
    </div>
  )
}

export default CourtDetailsBody