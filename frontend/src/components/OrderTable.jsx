import { useDispatch, useSelector } from "react-redux"
import { customAPI, formatPrice } from "../utils/utils"
import { removeItemFromCart, updateItemQuantity } from "../features/cart/cartSlice"


const OrderTable = ({item}) => {
    
    const {user} = useSelector(store => store.auth)
    const cart = useSelector(store => store.cart)
    const dispatch = useDispatch()

    const {cartID,image,category,price,amount,names,selectedSize} = item
  

    const handleRemoveItem = async () => {     
    dispatch(removeItemFromCart({cartID}))
    const data = JSON.parse(localStorage.getItem('cart')) || cart; 
    const response = await customAPI.patch(`/cart/${user.userID}`,data) 
    return response.data   
    }

    const handleItemQty = async (productQty) => {
          
        dispatch(updateItemQuantity({cartID,quantity:productQty}))
        const data = JSON.parse(localStorage.getItem('cart')) || cart; 
        const response = await customAPI.patch(`/cart/${user.userID}`,data)
        return response.data
    }


              return <tr  className="table-body" align='center'>
                  <td>
                    <img src={image} alt={names[1]}/>
                    <h5>{names[0]}</h5>
                    <h5>{names[1]}</h5>
                    <p>Category: {category}</p>
                   {selectedSize && <p>Size: {selectedSize}</p>}
                  </td>
                  <td width={200} className="td-price"><h5>{formatPrice(price)}</h5></td>
                  <td width={200} className="td-btn"><button type="button" onClick={() =>handleItemQty('increase')} >+</button> <span>{amount}</span> <button type="button" onClick={() =>handleItemQty('decrease')} disabled={amount === 1}>-</button></td>
                  <td width={200} className="td-amount">
                    <h5>{formatPrice(price * amount)}</h5>
                    <button type="button" className="remove-btn" onClick={handleRemoveItem}>Remove</button>
                    </td>
                  </tr>
}

export default OrderTable