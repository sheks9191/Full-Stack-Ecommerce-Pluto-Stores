import FilterInput from "./FilterInput"
import { useDispatch, useSelector } from "react-redux"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { setClearFilter, setToggleCategory, setToggleGemstone, setHandleChange } from "../features/filter/filterSlice";
import { Form, Link } from "react-router-dom";





const FilterContainer = ({products,gemstoneArray,categoryArray}) => {
   const{filterToggle,toggleGemstone,toggleCategory,targetValueArray} = useSelector(store => store.filter)
   const dispatch = useDispatch();

    const handleOnChange = (e) => {
  let targetValue = e.target.value
  let checkedValue = e.target.checked

  dispatch(setHandleChange({targetValue,checkedValue}))

 
}



  return (
    <>
   {filterToggle &&<div className="filter-container">
    <Form>
      <div className="items-count"><Link to='/explore' onClick={()=> dispatch(setClearFilter())} className="reset-btn active">Reset</Link><span>{products.length} item{products.length > 1 ? 's' : ''}</span> <button  type="submit" className={targetValueArray.length === 0 ? 'submit-btn':"submit-btn active"} disabled={targetValueArray.length === 0}> Submit</button></div>

       <div>
        <button className="filter-btn" type="button" onClick={()=>dispatch(setToggleCategory())}>CATEGORY {toggleCategory?<AiOutlineMinus/>:<AiOutlinePlus/>}</button>
         {toggleCategory && <FilterInput  filteredArray={categoryArray} handleOnChange={handleOnChange} />}
      </div>
      
      <div>
        <button className="filter-btn" type="button" onClick={()=>dispatch(setToggleGemstone())}>GEMSTONE {toggleGemstone?<AiOutlineMinus/>:<AiOutlinePlus/>}</button>
        {toggleGemstone && <FilterInput filteredArray={gemstoneArray} handleOnChange={handleOnChange}/>}
      </div>
 
     </Form>
    </div>}

    
    </>
  )
}

export default FilterContainer