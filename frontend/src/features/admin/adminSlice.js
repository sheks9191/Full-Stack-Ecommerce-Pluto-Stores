import {  createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";

const getCurrentIndexFromLS = () => localStorage.getItem('currentIndex') || 0
const defaultState = {
  currentAdminNavLink:+getCurrentIndexFromLS(),
 
}

export const adminSlice = createSlice({
    name:'admin',
    initialState:defaultState,
    reducers:{
       setCurrentAdminNavLink:(state,{payload:{currentIndex}})=> {
          state.currentAdminNavLink=currentIndex
          localStorage.setItem('currentIndex',state.currentAdminNavLink)
          
       }
    }
})



export const {setCurrentAdminNavLink} = adminSlice.actions
export default adminSlice.reducer