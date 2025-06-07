import { Form, Link, useNavigation } from "react-router-dom"
import { CheckoutWrapper } from "../styles/CheckoutStyles"
import { FormInput, ProductsTitle } from "../components"
import { customAPI, formatPrice } from "../utils/utils"
import { useDispatch, useSelector } from "react-redux"

import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { toggleOrderMsg } from "../features/ui/uiSlice"
import { clearCart } from "../features/cart/cartSlice"

export const action = (store) => async ({request}) => {
  const formData = await request.formData()
  let data = Object.fromEntries(formData);
  const {cartItems,cartTotal,VAT,shippingAmt,orderTotal,numberOfCartItems} = store.getState().cart
  data = {...data,cartItems,cartTotal,VAT,shippingAmt,orderTotal,numberOfCartItems}
  
  
  try {
    
    const response =  await customAPI.post('/orders',data) 
    
    
    if(response.status === 201){
     store.dispatch(toggleOrderMsg())
    }
  
    return response.data
    

  } catch (error) {
    //  const errorMsg = error?.response?.data?.msg || 'Invalid Login Details'
      toast.error('Check Your Details')
      return error
  }

return null
}

const CheckOut = () => {
  const {name}= useSelector(store => store.auth.user) 
  const {orderMsg} = useSelector(store => store.ui)
  const cart = useSelector(store => store.cart)
  const {user} = useSelector(store => store.auth)
  const {cartTotal,VAT,shippingAmt,orderTotal} = useSelector(store => store.cart)
  const dispatch = useDispatch();
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  

  const handleClearCart = async () => {
      dispatch(clearCart())
      dispatch(toggleOrderMsg())
      const data = JSON.parse(localStorage.getItem('cart')) || cart; 
      const response = await customAPI.patch(`/cart/${user.userID}`,data)
      return response.data
  }
 
  return (
    <CheckoutWrapper>
      <div className="checkout-component nav-layout">
        <ProductsTitle title='Your Order'/>
        <Form method="POST" className="checkout-order">

           <div className="checkout-form">

            <div className="form-row">
            <label htmlFor="" className="form-label">Phone</label>
             <PhoneInput
            name="phone" 
           defaultCountry="us"
           required
      />
          </div>
          <FormInput name='name' type='text' label='name' defaultValue={name} required/>
          <FormInput name='email' type='email' label='email' required/>
          {/* <FormInput name='text' type='tel' label='phone' required/> */}
          
          <FormInput name='address' type='text' label='address' required/>
           
          
        </div>
        
        <div className="checkout-total">
                   <h5>Cart Total: <span>{formatPrice(cartTotal)}</span></h5>
                   <h5>VAT: <span>{formatPrice(VAT)}</span></h5>
                   <h5>Shipping: <span>{formatPrice(shippingAmt)}</span></h5>
                   <hr/>
                   <h5 className="order-total">Order Total: <span>{formatPrice(orderTotal)}</span></h5>
                   <div className="order-btn">
                    <button type="submit">{isSubmitting?'Processing Order...':'Submit Order'}</button>
                   </div>         
        </div>
        </Form>
       
      </div>
      <div className={orderMsg?"order-msg active":"order-msg"}>
        <div className="msg">
          <p>Dear <span>{name}</span>, Your order has been submitted successfully !</p>
          <p>A member of our team will get back to you shortly.</p>
          <p>Thank you.</p>
          <Link to='/explore' className="link" onClick={handleClearCart}>Back to product</Link>
        </div>
      </div>
    </CheckoutWrapper>
  )
}

export default CheckOut