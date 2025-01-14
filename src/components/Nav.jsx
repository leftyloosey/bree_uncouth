import React from 'react'

import Switch from './Switch'

const Nav = ({
  currentPage,
  handlePageChange,
  handleClick,
  isOpen,
  setIsOpen,
}) => {
  return (
    <Switch
      currentPage={currentPage}
      handlePageChange={handlePageChange}
      handleClick={handleClick}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    />
  )
}

export default Nav
