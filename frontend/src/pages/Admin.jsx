import { Link, Outlet, useNavigate, useNavigation } from "react-router-dom"
import { AdminNavbar, Loading } from "../components"
import { AdminWrapper } from "../styles/AdminStyles"
import { useDispatch, useSelector } from "react-redux"
import { logoutUser } from "../features/auth/authSlice"



const Admin = () => {
  
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  const {user} = useSelector(store=> store.auth)
  const dispatch = useDispatch()
  const navigate  = useNavigate()
  
  const handleLogout = () => {
    dispatch(logoutUser())
    navigate('/')
  }
  
  return (
    <div className="page-layout">
      <AdminWrapper>
        <div  className="current-admin"> 
          <span>Welcome: {user?.name}</span>
          <Link to='/' className="home-link">Home</Link>
          <button type="button" onClick={handleLogout}>LOG OUT</button>
        </div>
        
          <AdminNavbar/>
          {/* {isPageLoading?<Loading/> :<Outlet/>} */}
          <Outlet/>
         {isPageLoading && <div className="loading-outlet">
            <Loading/>
          </div>}
      </AdminWrapper>   
    </div>
  )
}

export default Admin