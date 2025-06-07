import { Outlet,useNavigation } from "react-router-dom"
import { Loading, Navbar } from "../components";
import { customAPI} from "../utils/utils";
import { fetchDataFromDB } from "../features/cart/cartSlice";






export const loader = (store) => async () => {
  
  
  const {user} = store.getState().auth
  if(!user){
    return null
  }
 
  const response = await customAPI('/cart')
 
  
  // if(response.status === 401){
  //   store.dispatch(loginUser())
  // }
  if(response.data.cart.length === 0){
    return null
  }
  if(response.status === 200){
    store.dispatch(fetchDataFromDB({cart:response.data.cart[0],wishlistCount:response.data.wishlistCount}))
    
  }
  return response.data
  
}
const HomeLayout = () => {
  
  const navigation = useNavigation();
  

  const isPageLoading = navigation.state === 'loading';
 
  return (
    <>
      <Navbar/>
      {/* {isPageLoading ? <Loading/> : <Outlet/>} */}
      <Outlet/>
        {isPageLoading && <div className="loading-outlet">
            <Loading/>
        </div>}
    </>
  )
}

export default HomeLayout