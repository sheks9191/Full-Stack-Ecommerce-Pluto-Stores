import { Form, redirect } from "react-router-dom"
import { FormBtn, FormInput } from "../components"
import { customAPI } from "../utils/utils";
import { toast } from "react-toastify";
import { loginUser } from "../features/auth/authSlice";
import {  useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setTempWishlists } from "../features/cart/cartSlice";




export const action = (store) => async ({request}) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData);
  

  try {

    const response =  await customAPI.post('/auth/login',data) 
    
    store.dispatch(loginUser(response.data))
    
    
    toast.success("You've Successfully Login")
    return redirect('/') 
    

  } catch (error) {
    //  const errorMsg = error?.response?.data?.msg || 'Invalid Login Details'
      toast.error('Invalid Login Details')
      return error
  }

} 

const Login = () => { 
     
    
    const {user,tempWishList} = useSelector(store => store.auth)
    const dispatch = useDispatch()
 
    const addWishlistsToDatabase = async () => {
       let dataFromLs;
       if (tempWishList.length > 0){
        dataFromLs = tempWishList
       }else{
        return
       }
     
      try {

        const response = await customAPI.get('/wishlists')
        
        if(response.status === 200){
          const responseArray = response.data.wishlists.map(item => item.productID)
          const data = dataFromLs.filter(item => !responseArray.includes(item.productID))
          dispatch(setTempWishlists({count:data.length}))
          const res = await customAPI.post('/wishlists',data)
         
        }
          
      } catch (error) {
         console.log(error);
      }
    }

    useEffect(() => {
     if(user){
      addWishlistsToDatabase();
       
     }
    },[user])
 
  return (
    <Form method="POST" className="form form-layout" >
       <h4>SIGN IN</h4>
      <FormInput name="email" label="email" type="email"/>
      <FormInput name="password" label="password" password={true}/>
      <FormBtn text="Log in" type="submit"/>
    </Form>
  )
}

export default Login