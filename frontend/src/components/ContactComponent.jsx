import { contactArray } from "../utils/utils"
import Contact from "./Contact"


const ContactComponent = () => {
  return (
    <div className="contact-component page-layout">
        {contactArray.map(contactItem => {
            return <Contact key={contactItem.id} contactItem={contactItem}/>
        })}
    </div>
  )
}

export default ContactComponent