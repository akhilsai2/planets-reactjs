import Slider from 'react-slick'
import PlanetsItem from '../PlanetItem'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div className="bg-cont" data-testid="planets">
      <h1 className="head">PLANETS</h1>
      <div className="cont">
        <Slider>
          {planetsList.map(each => (
            <PlanetsItem item={each} key={each.name} />
          ))}
        </Slider>
      </div>
    </div>
  )
}
export default PlanetsSlider
