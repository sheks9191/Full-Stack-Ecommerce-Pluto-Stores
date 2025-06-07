

import { Form, useLoaderData } from "react-router-dom";
import {customAPI } from "../utils/utils";
import { AdminOrdersComponent, FormSelect } from "../components";



export const loader = async ({request}) => {
  const searchParam = new URL(request.url).searchParams.entries();
  
  const params = Object.fromEntries([...searchParam]);

  const response = await customAPI.get('/orders',{params})
  return response.data
}

const AdminOrders = () => {  

  
    const {orders,noHits} = useLoaderData()
  
   if(orders.length === 0){
      return <h5>There are no orders currently</h5>
    }
    
  return (
    <div className="orders">

      
        <p className="total">Total Order{orders.length > 1 &&'s'} : {noHits}</p>
        <Form className="sorting-btn">
        <FormSelect optionsArray={['newest','oldest']} name='sort' placeholder='select' />
        <button type="submit">Sort</button>
        </Form>
       
      
       <div className="orders-component">
        {orders.map(order => {
          return <AdminOrdersComponent order={order} key={order._id}/>
        })}
       </div>
    </div>
  )
}

export default AdminOrders