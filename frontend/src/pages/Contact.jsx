
import { ContactComponent, PageIntro } from "../components"
import { ContactWrapper } from "../styles/ContactStyles"
import ContactImg from "../assets/ContactImg.jpg"

const Contact = () => {
  return (
    <ContactWrapper>
      <PageIntro introImg={ContactImg} introText="We're Happy to Help" contact='contact'/>
      <ContactComponent/>
    </ContactWrapper>
  )
}

export default Contact