import portfolio from '../assets/portfolio/portfolio.pdf'

const Portfolio = () => {
  return (
    <div className='h-screen w-full'>
      <object
        aria-label='portfolio PDF'
        data={portfolio}
        className='w-screen h-screen'
      ></object>
    </div>
  )
}

export default Portfolio
