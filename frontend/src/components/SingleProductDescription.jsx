import { useDispatch, useSelector } from "react-redux";
import { customAPI, formatPrice } from "../utils/utils"
import { CiHeart } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";
import { handleMultipleDisplayToggle, handleToggleDesc } from "../features/ui/uiSlice";
import SingleProductInfoContainer from "./SingleProductInfoContainer";
import { toast } from "react-toastify";
import { Form, Link, useLoaderData, useNavigate } from "react-router-dom";
import ReviewStars from "./ReviewStars";
import { useState } from "react";
import { addItemToCart } from "../features/cart/cartSlice";
import { addProductsToTempList } from "../features/auth/authSlice";



const SingleProductDescription = () => {
  const {product} = useLoaderData()
  const {_id,names,gemstone,description,details,properties,shipping,averageRating,reviewsNum,price,size,stock,category,images} = product

  const [productSize, setProductSize] = useState(size)
 

  const cartProduct = {
    cartID:category === 'rings'?_id+productSize : _id,
    productID:_id,
    price,
    amount:1,
    selectedSize:category === 'rings'? productSize:null,
    category,
    image:images[0],
    names
  }

  const {toggleDesc,detailsDisplay,propertiesDisplay,shippingDisplay} = useSelector(store => store.ui)
  const {user} = useSelector(store => store.auth)
  const cart = useSelector(store => store.cart)

  const sizeArray = Array.from({length:8},(_,index) => {
    return index + 4
  })

 

  const dispatch = useDispatch()
  const navigate = useNavigate()

  

  const handleAddToBag = async () => {
    try {
      if(!user){
       toast.error('Please Kindly Log in!')
       navigate('/account')
      return
    }

      dispatch(addItemToCart({cartProduct}))
     
       const data = JSON.parse(localStorage.getItem('cart')) || cart;
      
      const response = await customAPI.patch(`/cart/${user.userID}`,data)
    
      return response.data
    } catch (error) {
      // console.log(error)
    }
  }
  
  return (
    <div className="single-product-description">

      <div className="link-container">
        <Link to='/' className="link">Home</Link>
        <span>/</span>
        <Link to='/explore' className="link">Products</Link>
      </div>

       <div className="review-container">
        
        <ReviewStars ratingNo={averageRating}/>
        <h5>{reviewsNum} review{reviewsNum > 1 && 's'}</h5>
        
       </div>

       <div className="title-container">
        <h5>{names[0]}</h5>
        <span className="price">{formatPrice(price)} USD</span>
       </div>

       <div className="desc-container">
        {toggleDesc ? <span>{description}</span>:<span>{description.substring(0,180)}...</span>}
        <span onClick={() => dispatch(handleToggleDesc())}>{toggleDesc ? 'Read Less':'Read More'}</span>
       </div>
        
       {product.category === 'rings' ? <div className="options">
          <p>Size: <span>{productSize}</span></p>
          <div className="size-options">
                {sizeArray.map(itemSize => {
            return <button type="button" key={itemSize} className={productSize === itemSize ? "size-btn active" : "size-btn"} onClick={() => setProductSize(itemSize)}>{itemSize}</button>
          })}
          </div>
         
        </div> : null}

        <div className="delivery-container">
           <TbTruckDelivery className="icon"/>
          <p><span>Only {stock} Left:</span> Arrives in 4-10 working days <br/> <span>No delivery on public holidays</span></p>
        </div>

        <div className="add-btn">
          <button type="button" onClick={handleAddToBag}>Add to bag</button>
          <div className="wishlist-btn">
            {user ? <Form method="POST" action={`../add-wishlist/${_id}`}><button className="wishlist" type="submit" ><CiHeart className="icon"/></button></Form> :<button className="wishlist" onClick={() => dispatch(addProductsToTempList({product:{names,image:images[0],price,productID:_id}}))}><CiHeart className="icon"/></button>}
          </div>   
        </div>
        

        <div className="info-container">
          <section className="details">
            <div className="details-btn " onClick={() => dispatch(handleMultipleDisplayToggle({details}))}>
              <button type="button">
             details
            </button> 
            <FaArrowRightLong/>
            </div>
            <SingleProductInfoContainer productDetails={details} title="details" display={detailsDisplay}/>    
          </section>

          <section className="details properties">
            <div className="details-btn" onClick={() => dispatch(handleMultipleDisplayToggle({properties}))}>
                <button type="button">
              properties of {gemstone}
            </button>
            <FaArrowRightLong/>
            </div>
            <SingleProductInfoContainer productProperties={properties} title ={`properties of ${gemstone}`} display={propertiesDisplay} gemstone={gemstone}/>   
          </section>

          <section className="details shipping">
           <div className="details-btn" onClick={() => dispatch(handleMultipleDisplayToggle({shipping}))}>
             <button type="button">
              shipping & returns
            </button>
            <FaArrowRightLong/>
           </div>
           <SingleProductInfoContainer productReturns={shipping} title="shipping & returns" display={shippingDisplay}/> 
          </section>
        </div>

       </div>
  )
}

export default SingleProductDescription