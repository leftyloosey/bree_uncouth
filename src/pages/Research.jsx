import { useEffect } from 'react'
import { projects } from '../assets/projects/projects'

import Tiley from '../components/Tiley'

const Research = ({ menuShut }) => {
  function TimerEffect() {
    useEffect(() => {
      setTimeout(() => {
        menuShut()
      }, 100)
    }, [])
  }
  TimerEffect()

  return (
    <div
      onClick={menuShut}
      className='flex flex-wrap gap-4 mt-4 ml-4 justify-center md:flex-row lg:justify-normal'
    >
      <Tiley project={projects.soviet_union_apart_tile} />

      <Tiley project={projects.jsah_tile} />

      <Tiley project={projects.mass_housing_tile} />

      <Tiley project={projects.bnw_crane_tile} />

      <Tiley project={projects.cover_issue_tile} />

      <Tiley project={projects.yk_fence_tile} />

      <Tiley project={projects.exhibit_poster_tile} />

      <Tiley project={projects.aerial_map_tile} />

      <Tiley project={projects.arcc_tile} />

      <Tiley project={projects.new_books_tile} />

      <Tiley project={projects.back_porch_tile} />

      <Tiley project={projects.grand_old_tile} />

      <Tiley project={projects.italians_tile} />

      <Tiley project={projects.zupagrafika_tile} />

      <Tiley project={projects.archive2020_tile} />

      <div className='w-64 h-64'></div>
    </div>
  )
}

export default Research
