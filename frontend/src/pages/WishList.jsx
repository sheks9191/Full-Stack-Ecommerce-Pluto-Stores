
import { PageIntro, WishlistContainer } from "../components"
import { WishListWrapper } from "../styles/WishListStyles"
import WishListImg from '../assets/WishListImg.jpg'
import { Link, useLoaderData } from "react-router-dom"
import { useSelector } from "react-redux"
import {customAPI } from "../utils/utils"


export const loader = (store) => async () => {
  const {user} = store.getState().auth
  if(!user){
    return null
  }
  const response = await customAPI.get('/wishlists')
  
  return response.data
}

const WishList = () => {
  const data = useLoaderData()
  const wishlists = data?.wishlists
  const {user,tempWishList} = useSelector(store => store.auth)
  
  const wishlistsData = user? wishlists : tempWishList

  return (
    <WishListWrapper>

        <PageIntro introText="My Wishlist" introImg={WishListImg}/> 
        {user ? <main className="wishlist-container"><h5>{wishlists.length} product{wishlists.length > 0 && 's'} added to your list</h5></main>:<p className="text">Your wishlist has been temporarily saved. <Link to='/account/register' className="link">Create an account</Link> or <Link to="/account" className="link">sign in</Link> to save it permanently.</p>}

        {wishlistsData.length === 0 && <main className="wishlist-container nav-layout"><h5>Your List Is Empty</h5></main>}
       
       <main className="wishlist-container nav-layout">
          {wishlistsData.length > 0  && wishlistsData.map(list => {
        return <WishlistContainer key={list._id || list.productID} list={list}/>
      }) }
       </main>
      
    
    </WishListWrapper>
    
  )
}

export default WishList
