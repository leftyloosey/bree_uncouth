import { Parallax } from 'react-scroll-parallax'
const Picture = ({ pic }) => {
  return <img alt='' src={pic} className='shadow-2xl' />
}
const ParaWindow = ({ picture, text }) => {
  console.log('rerender?')
  return (
    <>
      <div className='flex flex-col md:flex-row md:justify-between md:gap-x-4'>
        <Parallax speed={10} className='px-1 md:pl-4 basis-1/2'>
          <Picture pic={picture} />
        </Parallax>
        <p className='p-2 ml-4 md:pl-0 basis-1/2 '>{text}</p>
      </div>
    </>
  )
}

export default ParaWindow
