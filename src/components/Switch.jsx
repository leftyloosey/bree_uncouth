// import React, { useState } from 'react'

const Switch = ({ currentPage, handlePageChange, isOpen, setIsOpen }) => {
  // const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    // <div className='flex flex-row justify-around'>
    <div className=''>
      <section className='flex flex-row justify-between p-1 pt-2 shadow-md fixed top-0 left-0 right-0 bg-white z-40'>
        <div className='text-4xl font-semibold pt-3 pl-3'>
          <span className='text-nowrap'>
            <a
              href='#Home'
              onClick={() => handlePageChange('Home')}
              // className='crt'
            >
              Kateryna Malaia
            </a>
          </span>
        </div>
        <div className='hidden md:flex md:pl-16 md:pt-5 flex-row md:mr-3 text-2xl pt-5 md:justify-end font-semibold text-slate-600'>
          <span className='group mr-32 md:mr-16 hover:text-black translate-y-1'>
            <a href='#Research' onClick={() => handlePageChange('Research')}>
              Research
            </a>
            {/* <div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div> */}
          </span>
          <span className='group mr-32 md:mr-16 hover:text-black translate-y-1'>
            <a href='#Teaching' onClick={() => handlePageChange('Teaching')}>
              Teaching
            </a>
            {/* <div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div> */}
          </span>
          <span className='group mr-16 hover:text-black translate-y-1'>
            <a href='#CV' onClick={() => handlePageChange('About')}>
              About
            </a>
            {/* <div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div> */}
          </span>
        </div>
        <button
          onClick={handleClick}
          className='flex flex-col justify-center items-center md:hidden pr-2 mt-3'
        >
          <span
            className={`bg-black block transition-all duration-300 ease-in-out 
                    h-0.5 w-8 rounded-sm ${
                      isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                    }`}
          ></span>

          <span
            className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-8 rounded-sm my-0.5 ${
                      isOpen ? 'opacity-0' : 'opacity-100'
                    }`}
          ></span>
          <span
            className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-8 rounded-sm ${
                      isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                    }`}
          ></span>
        </button>
      </section>
      <div>
        {isOpen ? (
          <div
            onMouseLeave={handleClick}
            className='fixed mt-14 md:hidden z-50 pt-2'
          >
            <div className='w-screen h-32 text-4xl font-semibold bg-white'>
              <div className='flex flex-col pl-3'>
                <a
                  href='#Research'
                  className='border-t-2 hover:text-black text-slate-600 pt-1 text-left pl-1'
                  onClick={() => handlePageChange('Research')}
                >
                  <button
                  // href='#Research'
                  // onClick={() => handlePageChange('Research')}
                  >
                    Research
                  </button>
                </a>
                <a
                  href='#Teaching'
                  onClick={() => handlePageChange('Teaching')}
                  className='border-t-2 hover:text-black text-slate-600 text-left pl-1'
                >
                  <button
                  // href='#Teaching'
                  // onClick={() => handlePageChange('Teaching')}
                  >
                    Teaching
                  </button>
                </a>
                <a
                  href='#About'
                  onClick={() => handlePageChange('About')}
                  className='border-t-2 hover:text-black text-slate-600 mb-1 text-left pl-1'
                >
                  <button
                  // href='#About'
                  // onClick={() => handlePageChange('About')}
                  >
                    About
                  </button>
                </a>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default Switch
