import HeroLink from "./HeroLink"


const ExploreCategoryComponent = ({link,img}) => {
  return (
    <div className="explore-category-component">
        <img src={img} alt={link} />
        <HeroLink link={link}/>
    </div>
  )
}

export default ExploreCategoryComponent