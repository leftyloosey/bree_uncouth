import React from 'react'
import { useInView } from 'react-intersection-observer'
// import ProjectTile from './ProjectTile'

const LazyAnimation = () => {
  const { ref, inView } = useInView({
    // triggerOnce: true,
    rootMargin: '-350px 0px',
  })

  return (
    <div
      ref={ref}
      className={` ${inView ? 'text-red-500' : 'text-green-500'}`}
      //   className={`transition-opacity ${inView ? 'opacity-1' : 'opacity-0'}`}
    >
      <span>Olaf</span>
      {/* <span aria-label='Wave'>👋</span> */}
    </div>
  )
}

export default LazyAnimation
