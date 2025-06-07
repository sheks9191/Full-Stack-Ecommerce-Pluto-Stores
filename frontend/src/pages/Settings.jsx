import { useDispatch, useSelector } from "react-redux"
import FormInput from "../components/FormInput"
import ProductsTitle from "../components/ProductsTitle"
import { SettingsWrapper } from "../styles/SettingsStyle"
import { customAPI } from "../utils/utils"
import { toast } from "react-toastify"
import {  useNavigate } from "react-router-dom"
import { logoutUser } from "../features/auth/authSlice"



const Settings = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {user} = useSelector(store => store.auth)

  const handleUpdatedUser = async(e) => {
    e.preventDefault();
     const formData = new FormData(e.currentTarget)
     const data = Object.fromEntries(formData)

     try {
      const response = await customAPI.patch('/users/update-user',data)
  
      toast.success('Update Successful')
      navigate('/settings')
      return response.data
     } catch (error) {
      console.log(error);
     }

     
     
  }

   const handleUpdatedPassword = async (e) => {
     e.preventDefault();
     const formData = new FormData(e.currentTarget)
     const data = Object.fromEntries(formData)
     try {
      const response = await customAPI.patch('/users/update-user-password',data)
      toast.success('Update Successful, Re-Login')
      dispatch(logoutUser())
      navigate('/')
      return response.data
     } catch (error) {
      console.log(error);
     }

  }
  
  return (
    <SettingsWrapper>
    <div className="nav-layout">
      <ProductsTitle title='Settings'/>
      <form className="user" onSubmit={handleUpdatedUser}>
        <h4>Update User</h4>
        <FormInput label='name' type='text' name='name' defaultValue={user?.name}/>
        <FormInput label='email' type='text' name='email'/>
        <button type="submit" className="btn-submit" >Submit</button>
      </form>
      <form  className="change-password" onSubmit={handleUpdatedPassword}>
        <h4>Update Password</h4>
        <FormInput label='Current Password' name='initialPassword' password={true}/>
        <FormInput label='New Password' name='newPassword' password={true}/>
         <button type="submit" className="btn-submit">Submit</button>
      </form>
    </div>
    </SettingsWrapper>
  )
}

export default Settings