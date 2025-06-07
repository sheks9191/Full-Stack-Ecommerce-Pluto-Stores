import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
// import { config, customAPI } from "../../utils/utils";

let defaultState = {
// isLoading:false,
cartItems:[],
numberOfCartItems:0,
cartTotal:0,
VAT:0,
shippingAmt:0,
orderTotal:0,
tempList:0,
numberOfWishlistItems:0,
}

const getCartFromLS = () => JSON.parse(localStorage.getItem('cart')) || defaultState

// export const fetchDataObj = createAsyncThunk('carts/cartData',async(_,thunkAPI) => {
//   try {
//     const response = await customAPI('/cart',config)
//     response.data.cart[0]
//   } catch (error) {
//     console.log(error);
//   }
// })

export const cartSlice = createSlice({
    name:'cart',
    initialState:getCartFromLS,
    reducers: {
      fetchDataFromDB:(state,{payload:{cart,wishlistCount}}) => {
        
        const {cartItems,numberOfCartItems,cartTotal,VAT,shippingAmt,orderTotal} = cart
        
        state.cartItems = cartItems;
        state.numberOfCartItems = numberOfCartItems;
        state.cartTotal = cartTotal;
        state.VAT = VAT;
        state.shippingAmt = shippingAmt;
        state.orderTotal = orderTotal;
        state.numberOfWishlistItems =  wishlistCount + state.tempList;
        state.tempList = 0;
       localStorage.setItem('cart',JSON.stringify(state));
      },
      addItemToCart:(state,{payload:{cartProduct}})=> {
        // console.log(cartProduct);
        const {cartID, price, amount} = cartProduct
        const existingProduct = state.cartItems.find(item => item.cartID === cartID)
        if(existingProduct){
         existingProduct.amount+=amount
        }else{
         state.cartItems = [...state.cartItems,cartProduct]
        }

        state.numberOfCartItems += amount
        state.cartTotal += price * amount
        cartSlice.caseReducers.additionalCalculations(state);
        toast.success('Item added to cart')
        
      },

      updateItemQuantity: (state, {payload:{cartID,quantity}}) => {
          // console.log(cartID,quantity);
         const item= state.cartItems.find((item) => item.cartID === cartID);
         let newAmount = item.amount
         if(item){
          
          if(quantity === 'increase'){
            newAmount+=1
            
          }else{
            newAmount-=1
           
          }
         }

        //  console.log(newAmount);
       
      state.numberOfCartItems += (newAmount - item.amount)
      state.cartTotal += item.price * (newAmount - item.amount);
      item.amount = newAmount
      cartSlice.caseReducers.additionalCalculations(state);
    },

      removeItemFromCart:(state,{payload:{cartID}}) => {
         const {amount,price} = state.cartItems.find(item => item.cartID === cartID)
         state.cartItems = state.cartItems.filter(item => item.cartID !== cartID)
         state.numberOfCartItems -= amount
         state.cartTotal -= price * amount
         cartSlice.caseReducers.additionalCalculations(state);
         toast.success('Item removed from cart')

      },

      clearCart:(state) => {
        localStorage.setItem('cart',JSON.stringify(defaultState));
        return defaultState;
      },

      additionalCalculations:(state) => {
        state.VAT = 0.075 * state.cartTotal
        state.shippingAmt = 0.1 * state.cartTotal
        state.orderTotal = state.cartTotal + state.VAT + state.shippingAmt

        localStorage.setItem('cart',JSON.stringify(state));
      },

      setTempWishlists:(state,{payload:{count}}) => {
        
        state.tempList = count
        // console.log(state.tempList);
      }
    },

    // extraReducers:(builder) => {
    //   builder
    //    .addCase(fetchDataObj.pending,(state) => {
    //      state.isLoading = true;
    //   })
    //   .addCase(fetchDataObj.fulfilled,(state, {payload}) => {
    //     const {cartItems,numberOfCartItems,cartTotal,VAT,shippingAmt,orderTotal,numberOfWishlistItems} = payload

    //     state.isLoading = false;
    //     state.cartItems = cartItems;
    //     state.numberOfCartItems = numberOfCartItems;
    //     state.cartTotal = cartTotal;
    //     state.VAT = VAT;
    //     state.shippingAmt = shippingAmt;
    //     state.orderTotal = orderTotal;
    //     state.numberOfWishlistItems = numberOfWishlistItems;
    //   })
    //    .addCase(fetchDataObj.rejected,(state, {payload}) => {
    //     state.isLoading = false;
    //     console.log(payload);
    //   })
    // }
    
})


export const {addItemToCart,clearCart,fetchDataFromDB,removeItemFromCart,updateItemQuantity,setTempWishlists} = cartSlice.actions

export default cartSlice.reducer;