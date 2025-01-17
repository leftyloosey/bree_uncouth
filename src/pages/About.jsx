import React from 'react'
import { cvDownload } from '../utils/functions'
import { cv_text } from '../assets/paragraphs/paragraphs'
// import cv_pdf from '../assets/CV/CV_Malaia_December 2024.pdf'
import kyiv_kate_color from '../assets/images/kyiv_kate_color.jpg'

const CV = ({ menuShut }) => {
  return (
    <div onLoad={menuShut} onClick={menuShut} className='md:columns-2'>
      <div className='md:ml-4 m-2 md:mt-4 mt-4'>
        <img className='object-cover rounded-sm' src={kyiv_kate_color} alt='' />
      </div>
      <div className='m-2 break-inside-avoid-column'>
        <p className='md:pt-4'>{cv_text.p1}</p>
        <p className='mt-2'>{cv_text.p2}</p>
        <div className='mt-2'>
          {cv_text.p3}
          <p
            className='pt-4 font-semibold
           text-2xl hover:text-green-900'
          >
            <button onClick={cvDownload}>CV</button>
          </p>
        </div>
      </div>
      <div className='text-white mt-16'>.</div>
    </div>
  )
}

export default CV
