const Home = ({ menuShut }) => {
  return (
    <div
      onLoad={menuShut}
      onClick={menuShut}
      className='bg-kyiv_buildings bg-cover h-full overflow-auto touch-auto'
    >
      <div className='flex flex-col ml-4 pt-2 opacity-700 font-medium text-xl z-10 text-white'>
        <span>PhD</span>
        <span> Assistant Professor</span>
        <span>School of Architecture</span>
        <span>University of Utah</span>
      </div>
    </div>
  )
}

export default Home
