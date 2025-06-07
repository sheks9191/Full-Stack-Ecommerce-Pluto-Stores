import { useLoaderData} from "react-router-dom"
import { customAPI } from "../utils/utils"
import { AdminUsersComponent} from "../components"


export const loader = async () => {
  const response = await customAPI.get('/users')
  return response.data
}
const AdminUsers = () => {
  const {users,noHits} = useLoaderData();

  if(users.length === 0){
    return <h5>There are no users currently</h5>
  }

  return (
    <div className="users">
       <p className="total">Total User{users.length > 1 &&'s'} : {noHits}</p>
       
        <div className="users-component">
         {
          users.map(user => {
            return <AdminUsersComponent user={user} key={user._id}/>
          })
         }
        </div>
    </div>
  )
}

export default AdminUsers