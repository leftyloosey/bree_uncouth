import { useEffect } from 'react'
import { teaching_text } from '../assets/paragraphs/paragraphs'

import ParaWindow from '../components/ParaWindow'

import in_a_square from '../assets/images/in_a_square.jpg'
import construction_crane from '../assets/images/construction_crane.jpg'
import newest_galarza from '../assets/images/newest_galarza.jpg'
import newest_gotberg from '../assets/images/newest_gotberg.jpg'

const Teaching = ({ isOpen, menuShut }) => {
  function TimerEffect() {
    useEffect(() => {
      setTimeout(() => {
        menuShut()
      }, 100)
    }, [])
  }
  TimerEffect()
  return (
    <div onClick={menuShut} className='w-3/4'>
      <div className='mt-10'>
        <ParaWindow picture={newest_gotberg} text={teaching_text.p1} />
        <ParaWindow picture={newest_galarza} text={teaching_text.p2} />
        <ParaWindow picture={in_a_square} text={teaching_text.p3} />
        <ParaWindow picture={construction_crane} text={teaching_text.p4} />
        <p className='ml-6'>
          <i>Student work by Sagan Gotberg and Wesley Galarza</i>
        </p>
        <div className='text-white mt-8'>.</div>
      </div>
    </div>
  )
}

export default Teaching
