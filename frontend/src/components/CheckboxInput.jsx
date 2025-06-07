


const CheckboxInput = ({item,handleOnChange,name}) => {
 



  return (
    <div className="form-row checkbox-form">
        <label  className="checkbox-label">
        <input type='checkbox'  className="checkbox-input" value={item} name={name} onChange={handleOnChange}/>
        
        <span className="checkmark"></span>{item}
        </label>
    </div>
  )
}

export default CheckboxInput