import { Form, useLoaderData } from "react-router-dom"
import { ReviewWrapper } from "../styles/SingleProductReviewStyles"
import ProductsTitle from "./ProductsTitle"
import ReviewStars from "./ReviewStars"
import FormInput from "./FormInput"
import FormSelect from "./FormSelect"
import FormTextArea from "./FormTextArea"
import FormBtn from "./FormBtn"
import moment from "moment"
 import { IoMdClose } from "react-icons/io";
 import { VscAccount } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux"
import { handleDisplayReviews, handleReviewChange, handleToggleReview} from "../features/ui/uiSlice"
import ComponentLoader from "./ComponentLoader"
import { useState } from "react"

const SingleProductReview = () => {
    const [displayReviewsLoading,setDisplayReviewsLoading] = useState(false)
    const {product} = useLoaderData()
    const {averageRating,reviewsNum,reviews} = product
    const dispatch = useDispatch()
    const {reviewNo,toggleReview,displayReviews,disabledDisplayReviewsBtn} = useSelector(store => store.ui)
    const addedReviews = 4

    const currentlyDisplayReviews = reviews.length <= addedReviews ? reviews : reviews.slice(0,displayReviews)
    
    const handleDisplayReviewsBtn = () => {
        setDisplayReviewsLoading(true)
      setTimeout(() => {
        dispatch(handleDisplayReviews({addedReviews,reviews}))
        setDisplayReviewsLoading(false)
      },2000)
      
    }

    
  return (
    <ReviewWrapper>
     <ProductsTitle title="Customer Reviews"/>
     <section className="reviews-intro">
        <div>
            <ReviewStars ratingNo={averageRating}/>
            <p>{averageRating} from 5</p>
            <p>Based on {reviewsNum} Review{reviewsNum>1&&'s'}</p>
        </div>
        <div >
            <span>
              Don’t just take our word for it! Hear what our happy customers and our 5-Star reviewers have to say.
            </span>
            </div>
        <div className="review-btn" onClick={() => dispatch(handleToggleReview())}>
            <button type="button">Leave a review</button>
        </div>
     </section>

     <section className={toggleReview?"modal review-active":"modal"}>
        
        <Form method="POST"  className={toggleReview?"form-review review-active":"form-review"}>
            <ProductsTitle title="rate this product"/>
            <ReviewStars ratingNo={reviewNo}/>
            <FormSelect optionsArray={[1,2,3,4,5]} name="rating" label="rating" value={reviewNo} onChange={(e) => dispatch(handleReviewChange({reviewNum:e.target.value}))}/>
            <FormInput label='title' name="title" type='text'/>
            <FormTextArea name="comment" label="comment"/>
            <FormBtn type="submit" text="Submit Review"/>
            <button type="button" className="review-btn" onClick={() => dispatch(handleToggleReview())}>
               <IoMdClose className="icon"/>
            </button>
        </Form>
     </section>

     {reviews.length > 0 && <section className="reviews-body">
        <div className="reviews">
          {currentlyDisplayReviews.map(review => {
          const{_id,comment,createdAt,rating,title,reviewedBy} = review
           const reviewDate = moment(createdAt).format('MMM Do, YY')
           const reviewer = reviewedBy.split(' ')[0]
            return <div className="review" key={_id}>
              <div className="rating-date">
                <ReviewStars ratingNo={rating}/>
                <span className="date">{reviewDate}</span>
              </div>
              <div className="reviewer">
               <VscAccount className="icon"/>
               <h5>{reviewer}</h5>
              </div>
              <div className="comment">
                   <h5>{title}</h5> 
                   <p>{comment}</p>
              </div>

            </div>
          })}
        </div>
        
        {displayReviewsLoading && <ComponentLoader/>}
        {reviews.length >= displayReviews && <div className="review-btn">
          <button type="button" disabled={disabledDisplayReviewsBtn} onClick={handleDisplayReviewsBtn}>Load More</button>
          <p>Showing {currentlyDisplayReviews.length} of {reviews.length}</p>
        </div>}
     </section>}
    </ReviewWrapper>
  )
}

export default SingleProductReview