import { toast } from "react-toastify"
import { customAPI } from "../utils/utils"
import { redirect } from "react-router-dom"

export const action = async ({params}) => {
 
     const {id:reviewID} = params

     try {
        await customAPI.delete(`reviews/${reviewID}`)
      
        toast.success('Review removed')
        
     } catch (error) {
        toast.error(error.response.data.msg);
     }

     return redirect('/admin/admin-reviews')
}