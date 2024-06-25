import React from 'react'
import './CourtListBody.css'
import Cards from '../Cards/Cards'

function CourtListBody() {
  return (
    <div className='container d-flex gap-3 flex-wrap mt-4 justify-content-center'>
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />

    </div>
  )
}

export default CourtListBody