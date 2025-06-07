import { useSelector } from "react-redux"
import PageIntro from "../components/PageIntro"
import { CartWrapper } from "../styles/CartStyles"
import { formatPrice } from "../utils/utils"
import { OrderTable, ProductsTitle } from "../components"
import { Link } from "react-router-dom"

const Cart = () => {
  const {cartItems,cartTotal,VAT,shippingAmt,orderTotal} = useSelector(store => store.cart)
  // console.log(cartItems);
  if(cartItems.length === 0){
    return <CartWrapper>
      <PageIntro introText='Your Cart Is Empty'/>
    </CartWrapper>
  }
  return (
    <CartWrapper>
       <div className="nav-layout">
       
        <ProductsTitle title='Cart Items'/>
        <div className="cart-component">
            <section className="cart-table">
           <table>
            <thead>
              <tr bgcolor='lightgrey'>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Amount</th>
            </tr>
            </thead>
            <tbody>
              
               {cartItems.map(item => {
                return <OrderTable item={item} key={item.cartID}/>
               })}
            
            </tbody>
           </table>
        </section>

        <section className="cart-total">
         <h5>Cart Total: <span>{formatPrice(cartTotal)}</span></h5>
         <h5>VAT: <span>{formatPrice(VAT)}</span></h5>
         <h5>Shipping: <span>{formatPrice(shippingAmt)}</span></h5>
         <hr/>
         <h5 className="order-total">Order Total: <span>{formatPrice(orderTotal)}</span></h5>

         <div className="order-btn">
          <Link to='/checkout'className="link">Proceed to checkout</Link>
         </div>

        </section>
        </div>
       
       </div>
    </CartWrapper>
    
  )
}

export default Cart