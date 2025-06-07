import { Link } from "react-router-dom"

const HeroLink = ({link}) => {
  return (
    <>
     <Link className="hero-btn-link category-link" to={`/${link}`}>{link}</Link>
    </>
  )
}

export default HeroLink