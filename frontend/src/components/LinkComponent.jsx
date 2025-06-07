
import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink, useNavigate } from "react-router-dom"

import { customAPI, NavIcons } from "../utils/utils";
import { logoutUser } from "../features/auth/authSlice";
import { clearCart } from "../features/cart/cartSlice";
import { setAccountIndex} from "../features/ui/uiSlice"
import { toast } from "react-toastify";





const LinkComponent = ({link, icon, index}) => {
   const dispatch = useDispatch();
   const navigate = useNavigate()

 
   const {accountIndex} = useSelector(store => store.ui);
   const {user, tempWishList} = useSelector(store => store.auth)
   const {numberOfWishlistItems} = useSelector(store => store.cart)
   const cart = useSelector(store => store.cart)

   
   const wishlistIconIndex = NavIcons.findIndex(icon => icon.link === '/wishlist')  
   
  const handleAccountIndex = (currentIndex) => {
      dispatch(setAccountIndex({currentIndex}))
  }

   const handleLogoutBtn = async() => {
      
    try {
      
      const data = JSON.parse(localStorage.getItem('cart')) || cart;
      
      const response = await customAPI.post('/cart',data)

      
        if(response.status === 201 || response.data.msg === 'existed'){
          await customAPI('/auth/logout')
          dispatch(clearCart())
          dispatch(logoutUser())
          toast.success("You've Successfully Logout!")
          navigate('/')
          return
    }
      
     
    } catch (error) {
      console.log(error)
    }
   }

  return (
    <>
    <div className="link-icon" onMouseOver={() => handleAccountIndex(index)}>
      <NavLink to={link} className={index === wishlistIconIndex && (((numberOfWishlistItems) > 0 || tempWishList.length > 0)) ? 'wishlist link':'link'}>{icon}</NavLink>
      <div className="icon-bar"></div>
    </div>
     {accountIndex === 0 && <div className="account" onMouseLeave={() => handleAccountIndex(null)}>
        {user? <div className="settings-logout">
          <Link to="/settings" className="settings-link">Settings</Link>
          <span className="separator"></span>
          <button type="button" onClick={handleLogoutBtn}>Logout</button>
        </div>:
        
         <>
        <p>Account</p>
         <Link to="/account" className="account-link">Sign in | Create</Link>
         </>}
       </div>}
   </>
  )
}

export default LinkComponent


// {(index === wishlistIconIndex && ((numberOfWishlistItems) > 0 || tempWishList.length > 0)) && <div className="wishlist-badge"><span>{user?(numberOfWishlistItems) :tempWishList.length}</span></div>}