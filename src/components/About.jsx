import React from 'react'
import cv_pdf from '../assets/CV/CV_Malaia_December 2024.pdf'
import kyiv_kate_color from '../assets/images/kyiv_kate_color.jpg'

const CV = ({ menuShut }) => {
  const cvDownload = () => {
    const pdfUrl = cv_pdf
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = 'CV_Malaia_December 2024.pdf' // specify the filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  return (
    <div onLoad={menuShut} onClick={menuShut} className='md:columns-2'>
      <div className='md:ml-4 m-2 md:mt-4 mt-4'>
        <img className='object-cover rounded-sm' src={kyiv_kate_color} alt='' />
      </div>
      <div className='m-2 break-inside-avoid-column'>
        {/* <p className='lg:blue2 md:red1'>hello there</p> */}
        <p className='md:pt-4'>
          I am an architectural historian and Assistant Professor of
          Architecture at the University of Utah. My research investigates the
          evolution of residential architecture in times of socio-political
          change in relation to the collapse of the USSR, and to the rising
          housing insecurity in North American cities. I studied architecture at
          the National Academy of Fine Arts and Architecture, Kyiv, Ukraine. I
          continued my studies at the School of Architecture and Urban Planning,
          University of Wisconsin-Milwaukee, where I received my PhD in the
          Buildings-Landscapes-Cultures Program in 2019.
        </p>
        <p className='mt-2'>
          I am an author of two books: Taking the Soviet Union Apart Room by
          Room (NIUP/Cornell UP, 2023) and Mass Housing in Ukraine (co-authored
          with Philipp Meuser, DOM Publishers, 2024). My articles appear in the
          Journal of the Society of Architectural Historians, Architectural
          Histories, East/West: Journal of Ukrainian Studies, PLATFORM, and
          Bauwelt. I also co-direct two public history projects on housing
          insecurity and justice in American cities and towns during the current
          housing crisis. Currently, I am working on a comprehensive study of
          Ukrainian rural housing, as a cultural asset continuously and
          intentionally destroyed by the Russian army during the full-scale
          invasion.
        </p>
        <p className='mt-2'>
          At the University of Utah, I teach graduate and undergraduate design
          studios, research methods, and architectural theory courses.
          <p
            className='pt-4 font-semibold
           text-2xl hover:text-green-900'
          >
            <button onClick={cvDownload}>CV</button>
          </p>
        </p>
      </div>
      <div className='text-white mt-16'>.</div>
    </div>
  )
}

export default CV
