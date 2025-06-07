import { toast } from "react-toastify"
import { customAPI } from "../utils/utils"
import { redirect } from "react-router-dom"

export const action = async ({params}) => {
 
     const {id:orderID} = params

     try {
        await customAPI.delete(`orders/${orderID}`)
      //   await customAPI.delete(`orders/${orderID}`)
        toast.success('Order removed')
        
     } catch (error) {
        toast.error(error.response.data.msg);
     }

     return redirect('/admin')
}