

const FormTextArea = ({label,name,textLabel,placeholder}) => {
  return (
   <div className="form-row">
        <label htmlFor={name} className="form-label">{textLabel || label}</label>
        {/* <input type={type} id={name}  className="form-input" name={name} required placeholder={placeholder}/> */}
        <textarea name={name} id={name} required placeholder={placeholder} className="form-textarea"/>
    </div>
  )
}

export default FormTextArea