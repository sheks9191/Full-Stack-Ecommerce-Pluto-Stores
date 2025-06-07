
import moment from "moment"
const AdminUsersComponent = ({user}) => {
    const {name,role,createdAt,updatedAt} = user
    const dateCreated = moment(createdAt).format('MMM Do, YY')
    const dateUpdated = moment(updatedAt).format('MMM Do, YY')
  return (
    <section>
     <div className="name">
        <p>Name: <span>{name}</span></p>
        <p>Role: <span>{role}</span></p>
        <p>Date Registered: <span>{dateCreated}</span></p>
         <p>Last Date Of Update: <span>{dateUpdated}</span></p>
     </div>

    </section>
  )
}

export default AdminUsersComponent