import { Link } from "react-router-dom"
import { PageIntoWrapper } from "../styles/PageIntroStyles"

const PageIntro = ({introImg, introText,contact}) => {
  return (
    <PageIntoWrapper $introImg={introImg}> 
    <div className="page-layout page-intro">
       <h4>{introText}</h4>
      {contact && <><p>Couldn’t find the answer in our <Link className="faq-link" to="/faq">FAQs</Link>?<br/>No problem!
</p>
<p>Simply fill out the form below or email us:<br/><span>contact@plutostore.com</span> </p></>}
    </div>
     
    </PageIntoWrapper>
  )
}

export default PageIntro