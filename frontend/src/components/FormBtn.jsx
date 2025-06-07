import { useNavigation } from "react-router-dom"


const FormBtn = ({type,text}) => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting'
  return (
    <button type={type} disabled={isSubmitting} className="form-btn">{isSubmitting? 'Submitting...':text}</button>
  )
}

export default FormBtn