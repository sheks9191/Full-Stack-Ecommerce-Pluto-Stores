import {  createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";





export const getUserFromLS = () => JSON.parse(localStorage.getItem('loginUser')) || null;
const getWishListFromLS = () => JSON.parse(localStorage.getItem('wishlistItems')) || []

const defaultState = {
 user: getUserFromLS(),
 tempWishList:getWishListFromLS(),
 
}

 const authSlice = createSlice({
    name:'auth',
    initialState:defaultState,
    reducers:{
      loginUser:(state,{payload:{user}}) => {
            const userObj = {...user}
          state.user = userObj
          localStorage.setItem('loginUser',JSON.stringify(userObj))
        },

          logoutUser:(state)=> {
          state.user = null
          localStorage.removeItem('loginUser');
          authSlice.caseReducers.clearWishlist(state)
          
        },

        addProductsToTempList:(state,{payload:{product}}) => {
           const existingProduct = state.tempWishList.find(item => item.productID === product.productID)

           if(existingProduct){     
            toast.error('Product Already Exist')
           }else{
            state.tempWishList = [...state.tempWishList,product]
            localStorage.setItem('wishlistItems',JSON.stringify(state.tempWishList))
            toast.success('Product Added To WishList')
           }
        },

        removeProductFromWishList:(state,{payload:{productID}}) => {
           const filteredProduct = state.tempWishList.filter(item => item.productID !== productID)
           state.tempWishList = filteredProduct
           localStorage.setItem('wishlistItems',JSON.stringify(filteredProduct))
           toast.success('Product Removed Successfully')
        },

        clearWishlist:(state) => {
                state.tempWishList = []
                localStorage.setItem('wishlistItems',JSON.stringify(state.tempWishList));
                
              },
    },
})




export const {loginUser,logoutUser,addProductsToTempList,removeProductFromWishList,getWIshlistCount} = authSlice.actions

export default authSlice.reducer;