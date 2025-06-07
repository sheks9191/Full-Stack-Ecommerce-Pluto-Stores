import { createSlice } from "@reduxjs/toolkit"



const defaultState = {
    filterToggle:false,
    sortingToggle:false,
    toggleNewest:false,
    toggleGemstone:false,
    toggleCategory:false,
    togglePricing:false,
    targetValueArray:[],
    
 
   
}


const filterSlice = createSlice({
    name:'filter',
    initialState:defaultState,
    reducers:{
        setFilterToggle:(state) => {
           state.filterToggle = !state.filterToggle;
           state.sortingToggle = false
        },

        setSortingToggle:(state) => {
           state.sortingToggle = !state.sortingToggle;
           state.filterToggle = false
        },
         setToggleGemstone:(state) => {
           state.toggleGemstone = !state.toggleGemstone
        },
         setToggleCategory:(state) => {
           state.toggleCategory = !state.toggleCategory
        },

          setTogglePricing:(state) => {
           state.togglePricing = !state.togglePricing

        },

           setToggleNewest:(state) => {
           state.toggleNewest = !state.toggleNewest

        },

         setHandleChange:(state,{payload:{targetValue, checkedValue}})=> {
              
              if(checkedValue){
                 state.targetValueArray=[...state.targetValueArray,targetValue]
                 
              }else{
                state.targetValueArray = state.targetValueArray.filter(item => item !== targetValue)
              }

            
            
        },

        setClearFilter:(state)=> {
            state.targetValueArray = [];
            state.toggleCategory=false;
            state.toggleGemstone=false;
            state.togglePricing=false;
            state.toggleNewest=false;
        },


    }
})



export const { setFilterToggle,setToggleGemstone,setToggleCategory,setTogglePricing,setHandleChange,setClearFilter,setSortingToggle,setToggleNewest} = filterSlice.actions

export default filterSlice.reducer;