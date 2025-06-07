
import { NavLink } from "react-router-dom"
import { AdminLink } from "../utils/utils"
import { useDispatch, useSelector } from "react-redux"
import { setCurrentAdminNavLink } from "../features/admin/adminSlice"

const AdminNavbar = () => {

  const dispatch = useDispatch()
  
  const {currentAdminNavLink } = useSelector(store => store.admin)
  // console.log(typeof currentAdminNavLink);
  
  return (
    <nav className="admin-link">
        {AdminLink.map((item,index) => {
            const {id,text,link} = item
            return <NavLink key={id} to={link} className={currentAdminNavLink === index ? 'nav-link active-link':'nav-link'} onClick={() => dispatch(setCurrentAdminNavLink({currentIndex:index}))}>{text}</NavLink>
        })}
    </nav>
  )
}

export default AdminNavbar