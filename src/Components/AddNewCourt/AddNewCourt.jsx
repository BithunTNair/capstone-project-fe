import React, { useState } from 'react'
import './AddNewCourt.css'
import Input from '../Common/InputField/Input'

function AddNewCourt() {
  const [courtData,setCourtData]=useState({});
  const handleChange=(e)=>{
    setCourtData({...courtData,[e.target.name]:e.target.value})
  }
  return (
   
      <div className='d-flex flex-column court-cont  container'>

        <div className='mt-4'>
          <Input type={'text'} name={'name'} label={'Name'} value={courtData.name}  onChange={handleChange} />
        </div>

        <div className='mt-4'>
          <Input type={'text'} name={'type'} label={'Type'} value={courtData.type} onChange={handleChange} />
        </div>

        <div className='mt-4'>
          <Input type={'text'} name={'address'} label={'Address'} value={courtData.address}  onChange={handleChange} />
        </div>

        <div className='mt-4'>
          <Input type={'text'} name={'location'} label={'Location'} value={courtData.location}  onChange={handleChange} />
        </div>

        <div className='mt-4'>
          <Input type={'number'} name={'pin'} label={'Pin Code'} value={courtData.pin}  onChange={handleChange} />
        </div>

        <div className='mt-4'>
          <Input type={'number'} name={'contactNumber'} label={'Contact Number'} value={courtData.contactNumber}  onChange={handleChange} />
        </div>

        <div className='mt-4'>
          <Input type={'text'} name={'rate'} label={'Rate'} value={courtData.rate} onChange={handleChange} />
        </div>

        <div className='mt-4'>
         <input type="file" 
         
         />
        </div>
        <div className='d-flex justify-content-between mt-4'>
          <button className='common-btn bg-black text-white'>{' '} Cancel</button>
          <button className='common-btn'>Create</button>
        </div>
      </div>

 
  )
}

export default AddNewCourt