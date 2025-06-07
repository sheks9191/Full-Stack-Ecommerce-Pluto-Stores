import { IoIosEyeOff,IoIosEye } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toggleInputEye } from "../features/ui/uiSlice";


const FormInput = ({label, name , type,text,textLabel,placeholder,defaultValue,password}) => {
  const dispatch = useDispatch()
  const {inputEye} = useSelector(store => store.ui)
  let passwordType = 'password'
  if(password){
   passwordType = inputEye ? 'text' :'password'
  }

 
  return (
    <div className="form-row">
        <label htmlFor={name} className="form-label">{textLabel || label}</label>
        <div className="input-eye">
            <input type={type || passwordType} id={name}  className="form-input" name={name} required placeholder={placeholder} defaultValue={defaultValue}/>
            {password && <button type="button" className="eye-icon" onClick={() => dispatch(toggleInputEye())}>{inputEye?<IoIosEyeOff/>:<IoIosEye/>}</button>}
        </div>
       
        <p>{type==="password"&&text}</p>
        
    </div>
  )
}

export default FormInput