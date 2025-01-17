const BurgerMenu = (isOpen, handleClick, handlePageChange) => {
  return (
    <>
      <div>
        {isOpen ? (
          <div
            onMouseLeave={() => handleClick}
            className='fixed mt-14 md:hidden z-50 pt-2'
          >
            <div className='w-screen h-32 text-4xl font-semibold bg-white'>
              <div className='flex flex-col pl-3'>
                <a
                  href='#Research'
                  className='border-t-2 hover:text-black text-slate-600 pt-1 text-left pl-1'
                  onClick={() => handlePageChange('Research')}
                >
                  <button>Research</button>
                </a>
                <a
                  href='#Teaching'
                  onClick={() => handlePageChange('Teaching')}
                  className='border-t-2 hover:text-black text-slate-600 text-left pl-1'
                >
                  <button>Teaching</button>
                </a>
                <a
                  href='#About'
                  onClick={() => handlePageChange('About')}
                  className='border-t-2 hover:text-black text-slate-600 mb-1 text-left pl-1'
                >
                  <button>About</button>
                </a>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  )
}

export default BurgerMenu
