import { Form } from "react-router-dom"
import { FormBtn, FormInput, FormSelect } from "../components"
import { ContactFormWrapper } from "../styles/ContactFormStyles"
import { contactSelectArray } from "../utils/utils"

const ContactForm = () => {
  return (
    <ContactFormWrapper>
    <div className="contact-form page-layout form-layout">
      <h4>Contact</h4>
      <Form method="POST">
        <FormInput type="text" label="full name" name="fullName"/>
        <FormInput type="email" placeholder="your@email.com" name="email" label="email"/>
        <FormSelect label="Subject" placeholder="Select a subject" name="message" optionsArray={contactSelectArray}/>
        <div className="message">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea name="message" id="message" placeholder="Write your message" className="form-textarea"></textarea>
        </div>
        <FormBtn type="Submit" text="Send"/>
      </Form>
    </div>
    </ContactFormWrapper>
  )
}

export default ContactForm