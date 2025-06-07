import { useLoaderData } from "react-router-dom"
import { customAPI } from "../utils/utils"
import ProductsContainer from "./ProductsContainer"

 const productsUrl ='/products'
 export const loader =  async () => {
  const pathName = window.location.pathname.substring(1) 
  const response = await customAPI.get(`${productsUrl}/?category=${pathName}`)

  return response.data
}  

const ProductsCategory = () => {
  const {products} = useLoaderData()
  return (
    <>
    
     <ProductsContainer products={products}/>
    </>
  )
}

export default ProductsCategory