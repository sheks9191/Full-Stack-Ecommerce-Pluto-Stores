import { Form, useLoaderData } from "react-router-dom";
import { customAPI } from "../utils/utils"
import { AdminReviewsComponent, FormSelect  } from "../components";



export const loader = async ({request}) => {
  const searchParam = new URL(request.url).searchParams.entries();
  
  const params = Object.fromEntries([...searchParam]);

  
  
  const response = await customAPI.get('/reviews',{params})
 
  return response.data
}
const AdminReviews = () => {
 
  const {reviews,noHits} = useLoaderData()

 if(reviews.length === 0){
    return <h5>There are no reviews currently</h5>
  }
  
  return (
    <div className="reviews">
      
        <p className="total">Total Review{reviews.length > 1 &&'s'} : {noHits}</p>
        <Form className="sorting-btn">
        <FormSelect optionsArray={['newest','oldest']} name='sort' placeholder='select' />
        <button type="submit">Sort</button>
        </Form>
        
      
       <div className="reviews-component">
        {reviews.map(review => {
          return <AdminReviewsComponent review={review} key={review._id}/>
        })}
       </div>
    </div>
  )
}

export default AdminReviews