import { Form } from "react-router-dom"
import { formatPrice } from "../utils/utils"
import moment from "moment"
import { useDispatch, useSelector } from "react-redux"
import { setOrderDetailsId } from "../features/ui/uiSlice"
import OrderDetails from "./OrderDetails"




const AdminOrdersComponent = ({order}) => {
 
  const dispatch = useDispatch()
  const {orderDetailId} =  useSelector(store => store.ui) 
  const {_id,cartItems,cartTotal,VAT,shippingAmt,orderTotal,phone,address,email,name,createdAt} = order
  const orderDate = moment(createdAt).format('MMM Do, YY')

  
  return (
    <>
    <div className="order-component"> 
    
     <section>
      <div className="order-items">
        
        {cartItems.map(item => {
          return <p key={item.cartID} className="item-count">{item.category}: {item.amount}</p> 

        })}
        <button type="button" className="details-btn" onClick={() => dispatch(setOrderDetailsId({orderID:_id}))}>Details</button>
        
      </div>
        <div className="order-breakdown">
          <p>Cart Total: {formatPrice(cartTotal)}</p>
          <p>VAT: {formatPrice(VAT)}</p>
          <p>Shipping: {formatPrice(shippingAmt)}</p>
          <hr/>
          <p className="order-total">Order Amount: {formatPrice(orderTotal)}</p>   
        </div>

        <div className="contact">
           <p>Name: <span>{name}</span></p>
          <p>Phone: <span>{phone}</span></p>
           <p>Email: <span>{email}</span></p>
            <p>Address: <span>{address}</span></p>
            <p>Order Date: <span>{orderDate}</span></p>
        </div>

        <div className="order-btn">
        <Form method="DELETE" action={`delete-order/${_id}`}><button type="submit" className="remove">Remove</button></Form> 
      </div>
     </section>
     </div>
    
    {orderDetailId === _id && <OrderDetails/>}
    </>
  )
}

export default AdminOrdersComponent