import { toast } from "react-toastify"
import { customAPI } from "../utils/utils"
import { redirect } from "react-router-dom"


export const action = async ({params}) => {
     
     const {id:productID} = params
     
     try {
        await customAPI.delete(`wishlists/${productID}`)
      
        toast.success('Product removed from list')
        
     } catch (error) {
        toast.error(error.response.data.msg);
     }

     return redirect('/wishlist')
}
