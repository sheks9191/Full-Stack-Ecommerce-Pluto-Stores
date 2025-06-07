import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { setFilterToggle, setSortingToggle } from "../features/filter/filterSlice";
import { useDispatch, useSelector } from "react-redux";

const FilterHeader = () => {

  const dispatch = useDispatch()
  const {filterToggle,sortingToggle} = useSelector(store => store.filter)
  return (
    <div className="filter-header">
      <div className="filter-toggle nav-layout">
        <button onClick={() => dispatch(setFilterToggle())}>Filters {filterToggle?<AiOutlineMinus/>:<AiOutlinePlus/>}</button>
        <button onClick={() => dispatch(setSortingToggle())}>Sort By {sortingToggle?<AiOutlineMinus/>:<AiOutlinePlus/>}</button>
      </div>
    </div>
  )
}

export default FilterHeader