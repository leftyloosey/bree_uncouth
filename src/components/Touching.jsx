import { useEffect } from 'react'
// import construction_crane from '../assets/images/construction_crane.jpg'
// import clipboard_masks from '../assets/images/clipboard_masks.JPG'
// import construction_indoors from '../assets/images/construction_indoors.jpg'
import construction_twilight from '../assets/images/construction_twilight.jpg'
import in_a_square from '../assets/images/in_a_square.jpg'
// import in_a_square_zoom from '../assets/images/in_a_square_zoom.jpg'
import carl_sagan1 from '../assets/images/carl_sagan1.jpg'
import carl_sagan2 from '../assets/images/carl_sagan2.jpg'
import ParaWindow from './ParaWindow'

const Touching = ({ isOpen, menuShut }) => {
  const p1 =
    'My pedagogy is driven by my sense of our rapidly changing world and the architectural profession. The relationship between the students and the faculty, the composition of the student and faculty bodies, the substance of architectural education, and the ways of assessing its effectiveness are changing right in front of our eyes. To keep up with these changes, I use real sites, encourage and facilitate research, initiate community collaborations, and focus on the social dimension of architecture. These approaches allow students to construct empirical three-dimensional knowledge of the world they will be designing for.'
  const p2 =
    'In my Fall 2023 and 2024 graduate studios, students developed experimental residential highrise projects for downtown Salt Lake City, Utah. The student designs reconsidered traditional ways of apartment living in a city currently undergoing a construction boom and rapid densification. To understand the scale of a housing unit in relation to Salt Lake urban morphology, we started the Fall 2023 semester with a two-week charette: students designed infill housing for the notoriously wide Salt Lake streets in partnership with a local affordable housing-focused developer GiV Group.'

  const p3 =
    'In elective courses, I focus on global and local contemporary challenges from a joint humanities perspective: rather than looking at it solely through large-scale demographic or economic lenses, I focus on human experience in the built environment, because exposure to the experiences of others drives change and improvement and promotes care at a personal level. In my oral history and architectural documentation field course on Housing Insecurity in Mississippi, co-taught with Silvina Lopez Barrera, students interview community members and document their lived spaces in order to write a public history of dramatic and continuous housing issues in our state and town.'

  const p4 =
    'In my history and theory courses, I teach students to hold informed discussions and write. Architectural writing should go beyond the requirements of a basic writing and composition course; it must exhibit a kind of thinking only an architect can possess, using the strength of our specialized knowledge of the visual language of drawing, and of a relationship between an individual and the built environment. In 2023, under my mentorship as a writing advisor, Mississippi State University student Elisa Castaneda won the prestigious grand prize of the Aydelott Travel Award competition. Prior to Elisa’s victory under my mentorship, no student from Mississippi State University received the grand prize in this competition. Elisa’s accomplishment showcases her exceptional talent and persistence. It also reassures me that my dedication to the quality of student writing in classes I teach and projects I mentor makes a difference.'
  function TimerEffect() {
    useEffect(() => {
      setTimeout(() => {
        menuShut()
      }, 100)
    }, [])
  }
  TimerEffect()
  return (
    <div className='w-3/4'>
      <div className='mt-10 md:mt-10'>
        <ParaWindow picture={in_a_square} text={p1} />
        <ParaWindow picture={construction_twilight} text={p2} />
        <ParaWindow picture={carl_sagan1} text={p3} />
        <ParaWindow picture={carl_sagan2} text={p4} />
        <div className='text-white mt-8'>.</div>
      </div>
    </div>
  )
}

export default Touching
