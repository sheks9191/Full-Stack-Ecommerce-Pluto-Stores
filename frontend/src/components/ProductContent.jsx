import { formatPrice } from "../utils/utils"
import { CiHeart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { Form, Link } from "react-router-dom";
import { addProductsToTempList } from "../features/auth/authSlice";

const ProductContent = ({product}) => {

    const{names,images,price,_id:productID} = product
    const {user} = useSelector(store => store.auth)

    const dispatch = useDispatch()

  return (
    <div className="product-content">
      <Link to={`/single-product/${productID}`}>
        <div className="image" >
         <img src={images[0]} alt="product-image" className="product-img"/>
         <img src={images[1]} alt="image-cover" className="image-cover"/>
        </div>
       </Link> 
        <div className="product-details">
            <p>{names[0]}</p>
            <p>{names[1]}</p>
            <h5>{names[2]}</h5>
            <p className="price">{formatPrice(price)} USD</p>
        </div>
        
        {user ? <Form method="POST" action={`../add-wishlist/${productID}`}><button className="wishlist" type="submit" ><CiHeart/></button></Form> :<button className="wishlist" onClick={() => dispatch(addProductsToTempList({product:{names,image:images[0],price,productID}}))}><CiHeart/></button>}
    </div>
  )
}

export default ProductContent