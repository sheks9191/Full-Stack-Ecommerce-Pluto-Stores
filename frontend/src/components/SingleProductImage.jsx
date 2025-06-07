import { useLoaderData } from "react-router-dom"
import ImageComponent from "./ImageComponent"


const SingleProductImage = () => {
  const {product:{images}} = useLoaderData()
    // const {images} = product

    
  return (
    <section className="single-product-images">
        {images.map((image,index) => {
            return <ImageComponent key={image+index} productImage={image} index={index}/>
        })}
    </section>
  )
}

export default SingleProductImage