import React from 'react'
import './Modal.css'
import closeIcon from '../../../assets/close-circle-svgrepo-com.svg'

function Modal() {
  return (
    <>
      <div className='modal-container d-flex justify-content-center align-items-center'>
        <div className='modal-box border border-1 d-flex justify-content-between'>
        <div className='modal-heading'>
           <h3>heading</h3>
          </div>
          <img src={closeIcon} alt="" height={'20px'} className='closeIcn'/>
         
        </div>
      </div>
    </>
  )
}

export default Modal