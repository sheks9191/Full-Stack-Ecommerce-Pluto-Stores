import { Form, useNavigate } from "react-router-dom"
import { customAPI, formatPrice } from "../utils/utils"
import {  useState } from "react"
import { toast } from "react-toastify"


const AdminProductsComponent = ({product}) => {

    const {_id,images,names,price,category,stock,averageRating} = product
    const [isEditing,setIsEditing] = useState(false)
    const [editItems,setEditItems] = useState({price,stock})

    const navigate = useNavigate()

    const handleChange = (e) => {
      setEditItems({...editItems,[e.target.name]:e.target.value})
    }

    const handleSubmitEditedItems = async () => {
         const {price,stock} = editItems
        
         
         if(isNaN(parseInt(price)) || isNaN(parseInt(stock))){
           toast.warning('Invalid inputs')
           return
         }
        try {
          const {price,stock} = editItems
          const data = {price:parseInt(price),stock:parseInt(stock)} 
          const response = await customAPI.patch(`/products/${_id}`,data) 
          navigate('/admin/admin-products')
        } catch (error) {
           console.log(error);  
        }
           
        setIsEditing(!isEditing)
        
    }

    
    
  return (
   <div className="product-component">
    
    <section>
       
        <div className="image">
            <p>{category}</p>
            <img src={images[0]} alt={category} />
            <p>{names[0]}</p>
            
        </div>
        
        <div className="price">
            <p>Price: {isEditing? <input type="text" name="price"  value={editItems.price} onChange={handleChange} required/> :formatPrice(price)}</p>
        </div>
        <div className="stock">
            
            <p>Stock: {isEditing ? <input type="text" name="stock"  value={editItems.stock} onChange={handleChange} required/> :stock}</p>
        </div>
         
        <div className="rating">
            <p>Rating: {averageRating}</p>
        </div>
        <div className="products-btn">
        {isEditing?<button type="button" className="edit" onClick={handleSubmitEditedItems}>Submit</button>:<button type="button" className="edit" onClick={() => setIsEditing(!isEditing)}>Edit</button>}
        <Form method="DELETE" action={`../delete-product/${_id}`}><button type="submit" className="remove">Remove</button></Form>  
      </div>
     
    </section>
   </div>
  )
}

export default AdminProductsComponent