import CheckboxInput from "./CheckboxInput"




const FilterInput = ({filteredArray,handleOnChange,name}) => {
     
  return (
   
        <div className="filter-list">
            {filteredArray.length > 0 && filteredArray.map(item => {
            return <CheckboxInput key={item} item={item} name={item}  handleOnChange={handleOnChange}/>
         })}
        </div>
        
    
  )
}

export default FilterInput