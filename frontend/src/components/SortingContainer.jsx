import { Form, Link } from "react-router-dom"
import FilterInput from "./FilterInput"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { setTogglePricing,setHandleChange, setToggleNewest, setClearFilter } from "../features/filter/filterSlice";
import { useDispatch, useSelector } from "react-redux";


const SortingContainer = ({products}) => {
 

  const{togglePricing,toggleNewest,sortingToggle,targetValueArray} = useSelector(store => store.filter)
  const dispatch = useDispatch();

     const handleOnChange = (e) => {
    let targetValue = e.target.value
    let checkedValue = e.target.checked
  
    dispatch(setHandleChange({targetValue,checkedValue}))
  
   
  }

  console.log(targetValueArray);
// className={targetValueArray.length === 0?"reset-btn":"reset-btn active"} 
  return (
    <>
    {sortingToggle && <div className="sorting-container">
      <Form>
        <div className="items-count"><Link to='/explore' onClick={()=> dispatch(setClearFilter())} className="reset-btn active">Reset</Link><span>{products.length} item{products.length > 1 ? 's' : ''}</span> <button  type="submit" className={targetValueArray.length === 0 ? 'submit-btn':"submit-btn active"} disabled={targetValueArray.length === 0}> Submit</button></div>
        <div>
        <button className="filter-btn"type="button" onClick={()=>dispatch(setTogglePricing())}>PRICING {togglePricing?<AiOutlineMinus/>:<AiOutlinePlus/>}</button>
        {togglePricing && <FilterInput filteredArray={['high - low','low - high']} handleOnChange={handleOnChange}/>}
      </div> 
      
       <div>
        <button className="filter-btn"type="button" onClick={()=>dispatch(setToggleNewest())}>NEWEST {togglePricing?<AiOutlineMinus/>:<AiOutlinePlus/>}</button>
        {toggleNewest && <FilterInput filteredArray={['newest']} handleOnChange={handleOnChange}/>}
      </div> 
      </Form>
    </div>}
    </>
  )
}

export default SortingContainer