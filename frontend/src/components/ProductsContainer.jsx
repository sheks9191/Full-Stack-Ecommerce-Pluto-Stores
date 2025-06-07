
import ProductContent from "./ProductContent";
import { ProductsWrapper } from "../styles/ProductsStyles";





const ProductsContainer = ({products}) => {
  if(products.length === 0) return <><h4 className="no-product">We can't find what you are looking for. Please click on the search button</h4></>
  
  return (
    <ProductsWrapper>
      {products.length > 0 && products.map(product => {

        return <ProductContent key={product._id} product={product}/>
      })}
    </ProductsWrapper>
  )
}

export default ProductsContainer