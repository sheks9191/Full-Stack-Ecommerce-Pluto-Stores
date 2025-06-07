
import { useDispatch, useSelector } from "react-redux"
import { formatPrice } from "../utils/utils"
import { useLoaderData } from "react-router-dom"
import { setOrderDetailsId } from "../features/ui/uiSlice"
import { IoCloseOutline } from "react-icons/io5";

const OrderDetails = () => {
const dispatch = useDispatch()
const {orders} = useLoaderData()   
const {orderDetailId} =  useSelector(store => store.ui)   

const {cartItems} = orders.find(order => order._id === orderDetailId)

console.log(cartItems);

  
  return (
    <div className="order-details">
          <button type="button" className="close-btn" onClick={() => dispatch(setOrderDetailsId({orderID:''}))}><IoCloseOutline className="close-icon"/></button>
        <div className="order-details-component">

           <div className="details">
               {cartItems.map(item => {
            const{amount,cartID,category,image,price,names} = item
            return <section key={cartID}>
             <div className="image">
                <img src={image} alt={category} />
                <p>{names[0]}</p>
                <p>{names[0]}</p>
            </div> 
            <div className="detail">
               <p>Category: {category}</p>
               <p>Quantity: {amount}</p>
               <p>Price Per Unit: {formatPrice(price)} </p>
              {item?.selectedSize && <p>Size: {item?.selectedSize}</p>}
            </div>   
            </section>
        })}

        </div>

        </div>
        
       
    </div>
  )
}

export default OrderDetails