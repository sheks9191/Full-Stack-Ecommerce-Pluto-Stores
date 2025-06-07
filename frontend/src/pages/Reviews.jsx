import { useLoaderData, useNavigation } from "react-router-dom"
import { ComponentLoader, ProductsTitle } from "../components"
import { ReviewsWrapper } from "../styles/ReviewsStyles"
import { customAPI } from "../utils/utils"
import { MdArrowBackIos,MdArrowForwardIos } from "react-icons/md";
import ReviewStars from "../components/ReviewStars"
import { useDispatch, useSelector } from "react-redux";
import { handleLeftReviewSlider, handleRightReviewSlider } from "../features/ui/uiSlice";
import { useEffect } from "react";



const reviewsUrl = '/reviews'
  export const loader = async () => {
  const response = await customAPI.get(reviewsUrl) 
  return response.data
}

const Reviews = () => {
    
    const navigation = useNavigation()
    const isLoading = navigation.state === 'loading'
    const dispatch = useDispatch()
    const {reviewIndex} = useSelector(store => store.ui)
    const {reviews} = useLoaderData()

    
    useEffect(() => {
     let reviewInterval = setInterval(() => {
       dispatch(handleRightReviewSlider({reviews}))
     },3000)

    return () => {
        clearInterval(reviewInterval)
    }
    },[reviewIndex])

    if(reviews.length === 0){
      return (
        <ReviewsWrapper>
        <div className="reviews-container nav-layout">
            <div className="reviews-header">
                <ProductsTitle title="Hear from our happy customers & still counting!!!"/>
                <div className="underline"></div>
            </div>
            
          <div className="reviews-body">
             <h5>No Reviews Yet</h5>
       
          </div>
        </div>
    </ReviewsWrapper>
      )
    }
 
  const {title, comment,rating,user:{name}} = reviews[reviewIndex]
  
  return (
    <ReviewsWrapper>
        <div className="reviews-container nav-layout">
            <div className="reviews-header">
                <ProductsTitle title="Hear from our happy customers & still counting!!!"/>
                <div className="underline"></div>
            </div>
            
           {isLoading ? <div className="reviews-body"><ComponentLoader/></div>:<div className="reviews-body">

                <h5>{title}</h5>
                <p>{comment}</p>
                <p>- {name} -</p>

                <div>
                  <ReviewStars ratingNo={rating}/>  
                </div>

                <MdArrowBackIos className="icon icon-left " onClick={() => dispatch(handleLeftReviewSlider({reviews}))}/>
                <MdArrowForwardIos className="icon icon-right" onClick={() => dispatch(handleRightReviewSlider({reviews}))}/>
            </div>}
        </div>
    </ReviewsWrapper>
  )
}

export default Reviews