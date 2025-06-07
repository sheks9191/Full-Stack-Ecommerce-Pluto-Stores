import { FilterContainer, FilterHeader, ProductsContainer, ProductsTitle, SortingContainer } from "../components"
import { ExploreWrapper } from "../styles/ExploreStyles"
import { customAPI } from "../utils/utils"
import { useLoaderData } from "react-router-dom"
import { useState } from "react";

const productsUrl ='/products'

export const loader =  async ({request}) => {
  const searchParam = new URL(request.url).searchParams.entries();
  
  const params = Object.fromEntries([...searchParam]);

 
  
  const response = await customAPI(productsUrl,{params}) 
  return response.data
  
}


const Explore = () => {
   const {products} = useLoaderData()   
   const [gemstoneArray] = useState([...new Set( products.map(product => product.gemstone.toLowerCase()))])
   const [categoryArray] = useState([...new Set( products.map(product => product.category.toLowerCase()))])

  return (
    <ExploreWrapper>
      
      <ProductsTitle title='Shop All - Authentic Gemstone Jewelries' text='Embrace your magic soul with authentic gemstone that radiate with true meaning. Perfect for gifting, even better for keeping.'/>
      <FilterHeader/>
      <div className="nav-layout products-layout">
      <ProductsContainer products={products}/>
      <FilterContainer products={products} gemstoneArray={gemstoneArray} categoryArray={categoryArray}/>
      <SortingContainer products={products}/> 
      </div>  
    </ExploreWrapper>
  )
}

export default Explore