
import { customAPI } from "../utils/utils";
import { ImageDisplayContainer, ImageSlider, SingleProductDescription, SingleProductImage, SingleProductReview } from "../components";
import { SingleProductWrapper } from "../styles/SingleProductStyles";
import { useSelector } from "react-redux";
import { handleToggleReview } from "../features/ui/uiSlice";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";


// const singleProductQuery =(id) => {
//   return {queryKey:['singleProduct',id],
//   queryFn:() => customAPI.get(`${productsUrl}/${id}`)}
// }

const productsUrl ='/products'
export const loader = async ({params:{id:productID}}) => {
 const response = await  customAPI.get(`${productsUrl}/${productID}`)
//  const response = await queryClient.ensureQueryData(singleProductQuery(productID))
 return response.data 
}

export const action = (store) => async ({request,params:{id}}) => {

   const formData = await request.formData() 
   const {rating,title,comment} = Object.fromEntries(formData)
  
   const data = {rating:parseInt(rating),title,comment,product:id}
    
    try {
      
       await customAPI.post('/reviews',data) 
      
       store.dispatch(handleToggleReview())
       toast.success("Thank you. Review Successful!")
       
       return redirect(`/single-product/${id}`)
       
   
     } catch (error) {
        // const errorMsg = error?.response?.data?.msg || 'Review Error'
        const {user} = store.getState().auth
        store.dispatch(handleToggleReview())
        if(user){
         toast.error("Review already submitted")
         return redirect(`/single-product/${id}`)  
        }
         toast.error('Please Login To Submit Review')
         return redirect('/account')
     }  
}

const SingleProduct = () => {
    
    const {sliderIndex} = useSelector(store => store.ui)
    
  return (
    <>
    <div className="nav-layout">

        <SingleProductWrapper $sliderIndex={sliderIndex}>
            <SingleProductImage />
            <ImageSlider/>
            <SingleProductDescription/>   
        </SingleProductWrapper>

        <SingleProductReview />
    </div>

        <ImageDisplayContainer/>
    </>
  )
}

export default SingleProduct