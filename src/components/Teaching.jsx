import { useEffect } from 'react'
import { Parallax } from 'react-scroll-parallax'
// import construction_crane from '../assets/images/construction_crane.jpg'
import carl_sagan1 from '../assets/images/carl_sagan1.jpg'
import carl_sagan2 from '../assets/images/carl_sagan2.jpg'

// import construction_indoors from '../assets/images/construction_indoors.jpg'
import construction_twilight from '../assets/images/construction_twilight.jpg'
import in_a_square from '../assets/images/in_a_square.jpg'
// import in_a_square_zoom from '../assets/images/in_a_square_zoom.jpg'

const Teaching = ({ menuShut }) => {
  function TimerEffect() {
    useEffect(() => {
      setTimeout(() => {
        menuShut()
      }, 100)
    }, [])
  }
  TimerEffect()
  const Picture = ({ pic }) => {
    return <img alt='' src={pic} className='shadow-2xl' />
  }

  // return (
  //   <div className='flex flex-row justify-around'>
  //     <Parallax speed={40} className='flex flex-col gap-y-2 w-2/5 ml-20 -mt-24'>
  //       <Picture pic={carl_sagan2} />
  //       <Picture pic={construction_crane} />
  //       <Picture pic={in_a_square} />
  //       <Picture pic={in_a_square_zoom} />
  //       <Picture pic={construction_indoors} />
  //       <Picture pic={carl_sagan1} />
  //     </Parallax>

  //     <div className='flex flex-col w-1/3 mr-16 mt-32'>
  //       <Parallax speed={-30} className=''>
  //         <p className='pt-16'>
  //           My pedagogy is driven by my sense of our rapidly changing world and
  //           the architectural profession. The relationship between the students
  //           and the faculty, the composition of the student and faculty bodies,
  //           the substance of architectural education, and the ways of assessing
  //           its effectiveness are changing right in front of our eyes. To keep
  //           up with these changes, I use real sites, encourage and facilitate
  //           research, initiate community collaborations, and focus on the social
  //           dimension of architecture. These approaches allow students to
  //           construct empirical three-dimensional knowledge of the world they
  //           will be designing for.
  //         </p>
  //         <p className='pt-16'>
  //           In my Fall 2023 and 2024 graduate studios, students developed
  //           experimental residential highrise projects for downtown Salt Lake
  //           City, Utah. The student designs reconsidered traditional ways of
  //           apartment living in a city currently undergoing a construction boom
  //           and rapid densification. To understand the scale of a housing unit
  //           in relation to Salt Lake urban morphology, we started the Fall 2023
  //           semester with a two-week charette: students designed infill housing
  //           for the notoriously wide Salt Lake streets in partnership with a
  //           local affordable housing-focused developer GiV Group.
  //         </p>
  //         <p className='pt-16'>
  //           In elective courses, I focus on global and local contemporary
  //           challenges from a joint humanities perspective: rather than looking
  //           at them solely through large-scale demographic or economic lenses, I
  //           focus on human experience in the built environment, because exposure
  //           to the experiences of others drives change and improvement and
  //           promotes care at a personal level. In my oral history and
  //           architectural documentation field course on Housing Insecurity in
  //           Mississippi, co-taught with Silvina Lopez Barrera, students
  //           interview community members and document their lived spaces in order
  //           to write a public history of dramatic and continuous housing issues
  //           in our state and town.
  //         </p>
  //         <p className='pt-16'>
  //           In my history and theory courses, I teach students to hold informed
  //           discussions and write. Architectural writing should go beyond the
  //           requirements of a basic writing and composition course; it must
  //           exhibit a kind of thinking only an architect can possess, using the
  //           strength of our specialized knowledge of the visual language of
  //           drawing, and of a relationship between an individual and the built
  //           environment. In 2023, under my mentorship as a writing advisor,
  //           Mississippi State University student Elisa Castaneda won the
  //           prestigious grand prize of the Aydelott Travel Award competition.
  //           Prior to Elisa’s victory under my mentorship, no student from
  //           Mississippi State University received the grand prize in this
  //           competition. Elisa’s accomplishment showcases her exceptional talent
  //           and persistence. It also reassures me that my dedication to the
  //           quality of student writing in classes I teach and projects I mentor
  //           makes a difference.
  //         </p>
  //       </Parallax>
  //     </div>
  //   </div>
  // )
  // return (
  //   <div className='grid grid-cols-1 md:grid-cols-2'>
  //     <div>
  //       <Parallax speed={40} className=''>
  //         <Picture pic={carl_sagan2} />
  //         <Picture pic={construction_crane} />
  //         <Picture pic={in_a_square} />
  //         <Picture pic={in_a_square_zoom} />
  //         {/* <Picture pic={construction_indoors} /> */}
  //         <Picture pic={carl_sagan1} />
  //       </Parallax>
  //     </div>

  //     <div className='grid '>
  //       <Parallax speed={-30} className=''>
  //         <p className=''>
  //           My pedagogy is driven by my sense of our rapidly changing world and
  //           the architectural profession. The relationship between the students
  //           and the faculty, the composition of the student and faculty bodies,
  //           the substance of architectural education, and the ways of assessing
  //           its effectiveness are changing right in front of our eyes. To keep
  //           up with these changes, I use real sites, encourage and facilitate
  //           research, initiate community collaborations, and focus on the social
  //           dimension of architecture. These approaches allow students to
  //           construct empirical three-dimensional knowledge of the world they
  //           will be designing for.
  //         </p>
  //         <p className=''>
  //           In my Fall 2023 and 2024 graduate studios, students developed
  //           experimental residential highrise projects for downtown Salt Lake
  //           City, Utah. The student designs reconsidered traditional ways of
  //           apartment living in a city currently undergoing a construction boom
  //           and rapid densification. To understand the scale of a housing unit
  //           in relation to Salt Lake urban morphology, we started the Fall 2023
  //           semester with a two-week charette: students designed infill housing
  //           for the notoriously wide Salt Lake streets in partnership with a
  //           local affordable housing-focused developer GiV Group.
  //         </p>
  //         <p className=''>
  //           In elective courses, I focus on global and local contemporary
  //           challenges from a joint humanities perspective: rather than looking
  //           at them solely through large-scale demographic or economic lenses, I
  //           focus on human experience in the built environment, because exposure
  //           to the experiences of others drives change and improvement and
  //           promotes care at a personal level. In my oral history and
  //           architectural documentation field course on Housing Insecurity in
  //           Mississippi, co-taught with Silvina Lopez Barrera, students
  //           interview community members and document their lived spaces in order
  //           to write a public history of dramatic and continuous housing issues
  //           in our state and town.
  //         </p>
  //         <p className=''>
  //           In my history and theory courses, I teach students to hold informed
  //           discussions and write. Architectural writing should go beyond the
  //           requirements of a basic writing and composition course; it must
  //           exhibit a kind of thinking only an architect can possess, using the
  //           strength of our specialized knowledge of the visual language of
  //           drawing, and of a relationship between an individual and the built
  //           environment. In 2023, under my mentorship as a writing advisor,
  //           Mississippi State University student Elisa Castaneda won the
  //           prestigious grand prize of the Aydelott Travel Award competition.
  //           Prior to Elisa’s victory under my mentorship, no student from
  //           Mississippi State University received the grand prize in this
  //           competition. Elisa’s accomplishment showcases her exceptional talent
  //           and persistence. It also reassures me that my dedication to the
  //           quality of student writing in classes I teach and projects I mentor
  //           makes a difference.
  //         </p>
  //       </Parallax>
  //     </div>
  //   </div>
  // )
  return (
    <div onClick={menuShut} className='mt-12 md:mt-8'>
      <div className='flex flex-col md:flex-row md:justify-between md:gap-x-4'>
        <Parallax speed={10} className='px-1 md:pl-4 basis-1/2'>
          <Picture pic={in_a_square} />
        </Parallax>
        <p className='p-2 md:pl-0 basis-1/2 '>
          My pedagogy is driven by my sense of our rapidly changing world and
          the architectural profession. The relationship between the students
          and the faculty, the composition of the student and faculty bodies,
          the substance of architectural education, and the ways of assessing
          its effectiveness are changing right in front of our eyes. To keep up
          with these changes, I use real sites, encourage and facilitate
          research, initiate community collaborations, and focus on the social
          dimension of architecture. These approaches allow students to
          construct empirical three-dimensional knowledge of the world they will
          be designing for.
        </p>
      </div>
      {/* <div>.</div> */}
      {/* </div> */}

      <div className='flex flex-col md:flex-row md:justify-between md:gap-x-4'>
        <Parallax
          speed={10}
          className='px-1 md:pl-4 basis-1/2 md:-translate-y-24'
        >
          <Picture pic={construction_twilight} />
        </Parallax>
        <p className='p-2 md:pl-0 basis-1/2 mt-6 md:mt-0 md:-translate-y-16'>
          {/* <p className='basis-1/2 md:-translate-y-48'> */}
          In my Fall 2023 and 2024 graduate studios, students developed
          experimental residential highrise projects for downtown Salt Lake
          City, Utah. The student designs reconsidered traditional ways of
          apartment living in a city currently undergoing a construction boom
          and rapid densification. To understand the scale of a housing unit in
          relation to Salt Lake urban morphology, we started the Fall 2023
          semester with a two-week charette: students designed infill housing
          for the notoriously wide Salt Lake streets in partnership with a local
          affordable housing-focused developer GiV Group.
        </p>
      </div>

      <div className='flex flex-col md:flex-row md:justify-between md:gap-x-4'>
        <Parallax
          speed={10}
          className='px-1 md:pl-4 basis-1/2 md:-translate-y-24'
        >
          <Picture pic={carl_sagan2} />
        </Parallax>

        <p className='p-2 md:pl-0 basis-1/2 mt-6 md:mt-0'>
          {/* <p className='basis-1/2 md:-translate-y-48'> */}
          In elective courses, I focus on global and local contemporary
          challenges from a joint humanities perspective: rather than looking at
          them solely through large-scale demographic or economic lenses, I
          focus on human experience in the built environment, because exposure
          to the experiences of others drives change and improvement and
          promotes care at a personal level. In my oral history and
          architectural documentation field course on Housing Insecurity in
          Mississippi, co-taught with Silvina Lopez Barrera, students interview
          community members and document their lived spaces in order to write a
          public history of dramatic and continuous housing issues in our state
          and town.
        </p>
      </div>

      <div className='flex flex-col md:flex-row md:justify-between md:gap-x-4'>
        <Parallax
          speed={10}
          className='px-1 md:pl-4 basis-1/2 md:-translate-y-24'
        >
          <Picture pic={carl_sagan1} />
        </Parallax>

        {/* <p className='basis-1/2'> */}
        <p className='p-2 md:pl-0 basis-1/2 mt-6 md:mt-0 md:-translate-y-48 '>
          In my history and theory courses, I teach students to hold informed
          discussions and write. Architectural writing should go beyond the
          requirements of a basic writing and composition course; it must
          exhibit a kind of thinking only an architect can possess, using the
          strength of our specialized knowledge of the visual language of
          drawing, and of a relationship between an individual and the built
          environment. In 2023, under my mentorship as a writing advisor,
          Mississippi State University student Elisa Castaneda won the
          prestigious grand prize of the Aydelott Travel Award competition.
          Prior to Elisa’s victory under my mentorship, no student from
          Mississippi State University received the grand prize in this
          competition. Elisa’s accomplishment showcases her exceptional talent
          and persistence. It also reassures me that my dedication to the
          quality of student writing in classes I teach and projects I mentor
          makes a difference.
        </p>
      </div>
      <div className='text-white mt-32 md:mt-0'>.</div>
    </div>
  )
}

export default Teaching
