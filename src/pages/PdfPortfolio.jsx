import portfolio from '../assets/PDF_portfolio/teaching_portfolio.pdf'

const PdfPortfolio = () => {
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

export default PdfPortfolio
