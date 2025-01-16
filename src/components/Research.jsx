import { useEffect } from 'react'
import Tiley from './Tiley'
import soviet_union_apart from '../assets/images/soviet_apart.jpg'
import jsah from '../assets/images/jsah.png'
import mass_housing from '../assets/images/mass_housing.png'
import grand_old from '../assets/images/grand_old.jpg'
import new_books from '../assets/images/new_books.jpg'
import exhibit_poster from '../assets/images/insecurity_exhibit.jpg'
import back_porch from '../assets/images/back_porch.jpg'
import cover_issue from '../assets/images/green_cover.jpg'
import aerial_map from '../assets/images/aerial_map.jpg'
import arcc from '../assets/images/arcc.png'
import bnw_crane from '../assets/images/bnw_crane.jpg'
import yk_fence from '../assets/images/yk_fence.jpg'
import italians from '../assets/images/italians.jpg'

const soviet_union_apart_tile = {
  link: 'https://www.cornellpress.cornell.edu/book/9781501771200/taking-the-soviet-union-apart-room-by-room/#bookTabs=1',
  img: soviet_union_apart,
  blurb: 'Taking the Soviet Union Apart',
}
const jsah_tile = {
  link: 'https://online.ucpress.edu/jsah/article-abstract/80/4/460/119541/Transforming-the-Architecture-of-FoodFrom-the',
  img: jsah,
  blurb: 'The Architecture of Food',
}
const mass_housing_tile = {
  link: 'https://dom-publishers.com/products/mass-housing-in-ukraine-hardcover',
  img: mass_housing,
  blurb: 'Mass Housing in Ukraine',
}
const grand_old_tile = {
  link: 'https://www.bauwelt.de/rubriken/betrifft/Odesa-Wohnungsbau-an-vorderster-Front-3863259.html',
  img: grand_old,
  blurb: 'Bauwelt: Odesa',
}
const new_books_tile = {
  link: 'https://newbooksnetwork.com/taking-the-soviet-union-apart-room-by-room',
  img: new_books,
  blurb: 'Interview: Taking the Soviet Union Apart',
}
const exhibit_poster_tile = {
  link: 'https://mississippihousing.wixsite.com/mshousingproject/',
  img: exhibit_poster,
  blurb: 'Housing Insecurity in Mississippi',
}
const back_porch_tile = {
  link: 'https://www.platformspace.net/home/individually-generated-building-modifications-in-response-to-housing-precarity',
  img: back_porch,
  blurb: 'Individually Generated Building Modifications',
}
const cover_issue_tile = {
  link: 'https://ewjus.com/index.php/ewjus/article/view/374',
  img: cover_issue,
  blurb: 'Monumental Landscapes and the Politics of Place',
}
const aerial_map_tile = {
  link: 'https://www.platformspace.net/home/finding-shelter-from-russia-a-city-guide',
  img: aerial_map,
  blurb: 'Finding Shelter from Russia',
}
const arcc_tile = {
  link: 'https://www.arcc-arch.org/meet-the-arcc-2024-awards-recipeints/',
  img: arcc,
  blurb: 'New Researcher Award',
}
const bnw_crane_tile = {
  link: 'https://journal.eahn.org/article/id/7603/',
  img: bnw_crane,
  blurb: 'A Unit of Homemaking',
}
const yk_fence_tile = {
  link: 'https://www.cca.qc.ca/en/events/95620/research-fellow-seminar-rural-mass-housing-in-ukraine',
  img: yk_fence,
  blurb: 'Housing Rural Ukraine',
}
const italians_tile = {
  link: 'https://re.public.polimi.it/handle/11311/1277205?mode=complete',
  img: italians,
  blurb: '“Invisible” User-Generated Change',
}

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
      <Tiley project={soviet_union_apart_tile} />

      <Tiley project={jsah_tile} />

      <Tiley project={mass_housing_tile} />

      <Tiley project={bnw_crane_tile} />

      <Tiley project={cover_issue_tile} />

      <Tiley project={yk_fence_tile} />

      <Tiley project={exhibit_poster_tile} />

      <Tiley project={aerial_map_tile} />

      <Tiley project={arcc_tile} />

      <Tiley project={new_books_tile} />

      <Tiley project={back_porch_tile} />

      <Tiley project={grand_old_tile} />

      <Tiley project={italians_tile} />

      <div className='w-64 h-64'></div>
    </div>
  )
}

export default Research
