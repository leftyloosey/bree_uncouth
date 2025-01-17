import { useInView } from 'react-intersection-observer'

const LazyAnimation = () => {
  const { ref, inView } = useInView({
    rootMargin: '-350px 0px',
  })

  return (
    <div ref={ref} className={` ${inView ? 'text-red-500' : 'text-green-500'}`}>
      <span>Olaf</span>
    </div>
  )
}

export default LazyAnimation
