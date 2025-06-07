import moment from "moment"
import { useDispatch } from "react-redux"
import { Form, Link, useNavigate } from "react-router-dom"
import { setCurrentAdminNavLink } from "../features/admin/adminSlice"
import { useState } from "react"
import { customAPI } from "../utils/utils"


const AdminReviewsComponent = ({review}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const {_id,comment,title,rating,user,createdAt,product} = review
    const reviewDate = moment(createdAt).format('MMM Do, YY')

       const [isEditing,setIsEditing] = useState(false)
       const [editItems,setEditItems] = useState({rating,title,comment})
   
     
   
       const handleChange = (e) => {
         setEditItems({...editItems,[e.target.name]:e.target.value})
       }
   
       const handleSubmitEditedItems = async () => {

            const {rating,title,comment} = editItems
           try {
            
             const data = {rating:parseInt(rating),title,comment} 
             const response = await customAPI.patch(`/reviews/${_id}`,data) 
             navigate('/admin/admin-reviews')
           } catch (error) {
              console.log(error);  
           }
              
           setIsEditing(!isEditing)
           
       }
   
   
    

  return (
    <section>
      <div className="rating">
        <p>Rating</p>
        <p>{isEditing?<input type="number" name="rating" value={editItems.rating} min={1} max={5} step={1} onChange={handleChange} required/>:rating} / 5</p>
      </div>
      <div className="comment">
        <p>{isEditing?<input type="text" name="title" value={editItems.title} onChange={handleChange} required/>:title}</p>
        
        <p>{isEditing?<textarea name="comment" value={editItems.comment} cols="30" rows="10" onChange={handleChange} required></textarea>:comment}</p>
      </div>
      <div className="user">
        {/* <p>Created By</p> */}
        <p>{user.name}</p>
      </div>
      <div className="date"><p>{reviewDate}</p></div>
      
      <div className="reviews-btn">
        {isEditing?<button type="button" className="edit" onClick={handleSubmitEditedItems}>Submit</button>:<button type="button" className="edit" onClick={() => setIsEditing(!isEditing)}>Edit</button>}
        <Form method="DELETE" action={`../delete-review/${_id}`}><button type="submit" className="remove">Remove</button></Form>  
      </div>

      <Link className="link" to={`/single-product/${product}`} onClick={() => dispatch(setCurrentAdminNavLink({currentIndex:0}))}>View - Product</Link>
    </section>
  )
}

export default AdminReviewsComponent