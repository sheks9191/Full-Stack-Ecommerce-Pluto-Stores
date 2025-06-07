

const FormSelect = ({name,label,placeholder,optionsArray,value,onChange}) => {
  return (
    <div className="form-row">
        
       <label htmlFor={name} className="form-label">{label}</label>
       <select name={name} id={name} value={value} className="form-select" required onChange={onChange}> 
           <option value="" hidden default>{placeholder}</option>
          {optionsArray.map((item,index) => {
            return <option value={item} key={index}>{item}</option>
          })}
          
       </select>
    </div>
  )
}

export default FormSelect