import { useLoaderData} from "react-router-dom"
import { customAPI } from "../utils/utils"
import { AdminProductsComponent, FormSelect } from "../components"
import { Form } from "react-router-dom"

export const loader = async ({request}) => {
  
   const searchParam = new URL(request.url).searchParams.entries();
  
  const params = Object.fromEntries([...searchParam]);
  const response = await customAPI.get('/products',{params})
  return response.data
}


const AdminProducts = () => {
 
  const {products,noHits} = useLoaderData()

  if(products.length === 0){
    return <h5>There are no users currently</h5>
  }
  
  return (
    <div className="products">
      <p className="total">Total Product{products.length > 1 &&'s'} : {noHits}</p>

       <Form className="filter-btn">
        <FormSelect optionsArray={['bracelets','earrings','necklaces','rings']} name='category' placeholder='select' />
        <button type="submit">Filter</button>
        </Form>

      <div className="products-component">
         {products.map(product => <AdminProductsComponent key={product._id} product={product}/>)}
      </div>
    </div>
  )
}

export default AdminProducts