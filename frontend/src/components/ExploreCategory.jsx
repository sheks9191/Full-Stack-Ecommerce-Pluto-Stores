// import FaqImg from "../assets/FaqImg.jpg"

import BraceletImg from "../assets/bracelets-6aa.webp"
import EarringImg from "../assets/earrings-10aa.webp"
import NecklaceImg from "../assets/necklaces-5aa.webp"
import RingImg from "../assets/rings-3c.webp"
import { ExploreCategoryWrapper } from "../styles/ExploreCategoryStyles"
import ExploreCategoryComponent from "./ExploreCategoryComponent"
import ProductsTitle from "./ProductsTitle"


const ExploreCategory = () => {
  return (
   
    
    <ExploreCategoryWrapper>
        <ProductsTitle title="Explore by category"/>
        <div className="explore-category">
            <ExploreCategoryComponent img={BraceletImg} link="bracelets"/>
            <ExploreCategoryComponent img={EarringImg} link="earrings"/>
            <ExploreCategoryComponent img={NecklaceImg} link="necklaces"/>
            <ExploreCategoryComponent img={RingImg} link="rings"/>
        </div>
      
    </ExploreCategoryWrapper>
  
  )
}

export default ExploreCategory