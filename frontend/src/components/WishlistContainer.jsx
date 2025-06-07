import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../utils/utils"
import { IoMdClose } from "react-icons/io";
import { removeProductFromWishList } from "../features/auth/authSlice";
import { Form, Link } from "react-router-dom";

const WishlistContainer = ({list}) => {
  const dispatch = useDispatch()
  const {user} = useSelector(store => store.auth)
  const {image,names,price,productID} = list
  return (
    <div className="wishlist-content">
      <img src={image} alt={names[0]} />
      <h5>{names[2]}</h5>
      <p>{names[1]}</p>
     
       
       <span className="price">{formatPrice(price)} USD</span>
      {user ? <Form method="DELETE" action={`../delete-wishlist/${productID}`}><button type="submit" className="close-btn"><IoMdClose/></button></Form> :<button type="button" className="close-btn" onClick={() => dispatch(removeProductFromWishList({productID}))}><IoMdClose/></button>}
      <Link to={`/single-product/${productID}`} className="add-btn">View Details</Link>
    </div>
  )
}

export default WishlistContainer