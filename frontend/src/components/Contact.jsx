import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setContactId } from "../features/ui/uiSlice";
const Contact = ({contactItem}) => {
  const {id,icon,title,text,link} = contactItem
  const {contactId} = useSelector(store => store.ui)
  const dispatch = useDispatch()
  return (
    <div className="contact">
      <section className="row-one">
        <div className="contact-icon">
          {icon}
          <h4>{title}</h4>
        </div>
       <button  onClick={() => dispatch(setContactId({contactID:id}))}>{contactId === id ? <AiOutlineMinus className="toggle-icon"/>:<AiOutlinePlus className="toggle-icon"/>}</button>
      </section>
      <section className={contactId === id ? "row-two active":"row-two"}>
        <span>{text}</span>
        <span>{link}</span>
      </section>
    </div>
  )
}

export default Contact