import { FaqComponent, PageIntro } from "../components"
import { FaqWrapper } from "../styles/FaqStyles"
import FaqImg from "../assets/FaqImg.jpg"

const Faq = () => {
  return (
    <FaqWrapper>
       <PageIntro introText="Frequently Asked Questions" introImg={FaqImg}/> 
       <FaqComponent/>
    </FaqWrapper>
   
  )
}

export default Faq