import teaching from '../assets/PDF_research/research_teaching.pdf'

const PdfTeaching = () => {
  return (
    <div className='h-screen w-full'>
      <object
        aria-label='portfolio PDF'
        data={teaching}
        className='w-screen h-screen'
      ></object>
    </div>
  )
}

export default PdfTeaching
