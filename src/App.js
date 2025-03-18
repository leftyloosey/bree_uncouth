import { useState } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Nav from './components/Nav'
import Footer from './components/Footer'
import Research from './pages/Research'
import Teaching from './pages/Teaching'
import Home from './pages/Home'
import About from './pages/About'
import PdfPortfolio from './pages/PdfPortfolio'
import PdfTeaching from './pages/PdfTeaching'

function App() {
  const [currentPage, setCurrentPage] = useState('Home')

  const renderPage = () => {
    if (currentPage === 'Research') {
      return <Research menuShut={menuShut} />
    }
    if (currentPage === 'Teaching') {
      return <Teaching isOpen={isOpen} menuShut={menuShut} />
    }
    if (currentPage === 'About') {
      return <About menuShut={menuShut} />
    }
    if (currentPage === 'Home') {
      return <Home menuShut={menuShut} />
    }
  }

  const handlePageChange = (page) => setCurrentPage(page)

  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  const menuShut = () => {
    if (isOpen === true) setIsOpen(false)
  }
  // "homepage": "https://leftyloosey.github.io/bree_uncouth",
  // heya
  return (
    <Router>
      <ParallaxProvider>
        <div className='font-grotesk flex flex-col space-y-16'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <Nav
                    handleClick={handleClick}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    currentPage={currentPage}
                    handlePageChange={handlePageChange}
                  />
                  <div className='h-screen'>{renderPage()}</div>
                  <div className=''>.</div>
                  <Footer className='' />
                </>
              }
            />
            <Route path='/portfolio' element={<PdfPortfolio />} />
            <Route path='/research' element={<PdfTeaching />} />
            {/* <Route
              path='/bree_uncouth'
              element={<div className='h-screen'>{renderPage()}</div>}
            />
            <Route path='/bree_uncouth' element={<div className=''>.</div>} />
            <Route path='/bree_uncouth' element={<Footer />} /> */}

            {/* <Nav
              handleClick={handleClick}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            /> */}
            {/* <div className='h-screen'>{renderPage()}</div>
            <div className=''>.</div>
            <Footer className='' /> */}
          </Routes>
        </div>
      </ParallaxProvider>
    </Router>
  )
}

export default App
