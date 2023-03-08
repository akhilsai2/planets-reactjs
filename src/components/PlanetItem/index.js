import './index.css'

const PlanetsItem = props => {
  const {item} = props
  const {name, description, imageUrl} = item
  return (
    <div className="item-cont">
      <img src={imageUrl} alt={`planets ${name}`} className="planet" />
      <h1 className="item-head">{name}</h1>
      <p className="item-para">{description}</p>
    </div>
  )
}
export default PlanetsItem
