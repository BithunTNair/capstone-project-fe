import React, { useRef, useState } from 'react'
import './AddNewCourt.css'
import Input from '../Common/InputField/Input'
import addIcon from '../../assets/add-folder-svgrepo-com.svg'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import AxiosInstance from '../../Config/apiCall';
import { errorToast, successToast } from '../../Plugins/Toast/Toast';
import axios from 'axios';

function AddNewCourt() {
  const [courtData, setCourtData] = useState({});
  const inputRef = useRef();
  const [selectedFiles, setSelectedFiles] = useState([])
  const handleChange = (e) => {
    setCourtData({ ...courtData, [e.target.name]: e.target.value })
  };
  const inputFileChange = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter((file) => { return file.type.startsWith('image/') || file.type.startsWith('video/') });
    setSelectedFiles(prevState => [...prevState, ...validFiles]);
  }
  const addFile = () => {
    inputRef.current.click()
  }
  const descriptionChange = (value) => {
    setCourtData({ ...courtData, description: value})
  }
  const createCourt = () => {
    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append('files', file)
    })
    Object.entries(courtData).forEach(([key, value]) => {
      formData.append(key, value)
    })

    AxiosInstance({
      url:'/admin/createnewcourt',
      method: 'POST',
      data: formData,
      headers:{
        'Content-Type':'multipart/form-data'
      }
    

    }).then((res)=>{
      successToast('New Court added Successfully')
    }).catch((error)=>{
      console.log(error);
      errorToast('something went wrong')
    })
  }
  return (
    <>
      <div className='d-flex flex-column court-cont  container'>

        <div className='mt-4'>
          <Input type={'text'} name={'name'} label={'Name'} value={courtData.name} onChange={handleChange} />
        </div>

        <div className='mt-4'>
          <Input type={'text'} name={'type'} label={'Type'} value={courtData.type} onChange={handleChange} />
        </div>

        <div className='mt-4'>
          <Input type={'text'} name={'address'} label={'Address'} value={courtData.address} onChange={handleChange} />
        </div>

        <div className='mt-4'>
          <Input type={'text'} name={'location'} label={'Location'} value={courtData.location} onChange={handleChange} />
        </div>

        <div className='mt-4'>
          <Input type={'number'} name={'pin'} label={'Pin Code'} value={courtData.pin} onChange={handleChange} />
        </div>

        <div className='mt-4'>
          <Input type={'number'} name={'contactNumber'} label={'Contact Number'} value={courtData.contactNumber} onChange={handleChange} />
        </div>

        <div className='mt-4'>
          <Input type={'text'} name={'rate'} label={'Rate'} value={courtData.rate} onChange={handleChange} />
        </div>

        <div className='mt-4'>
          <input type="file"
            ref={inputRef}
            onChange={inputFileChange}
            multiple
            accept='image/*,video/*'
            style={{ display: 'none' }}

          />
          <h4>Add Files </h4>
          <div className='d-flex flex-wrap gap-3'>
            {selectedFiles.map((file, index) =>

              <>
                {file.type.startsWith('image/') && <img src={URL.createObjectURL(file)} width={'100px'} height={'100px'} />}
                {file.type.startsWith('video/') && <video src={URL.createObjectURL(file)} width={'100px'} height={'100px'} />}
              </>
            )}
          </div>
          <img src={addIcon} alt="" height={'50px'} width={'50px'} onClick={addFile} />
        </div>
        <div className='d-flex justify-content-between mt-4'>
          <button className='common-btn bg-black text-white'>{' '} Cancel</button>
          <button className='common-btn' onClick={createCourt}>Create</button>
        </div>

      </div>
      <div className='d-flex justify-content-center mt-4'><h4>Add court description</h4></div>
      <div className='react-quill d-flex  justify-content-center mt-4' style={{ height: '300px' }}>
        <ReactQuill theme="snow" value={courtData.description} onChange={descriptionChange} />

      </div>

    </>

  )
}

export default AddNewCourt