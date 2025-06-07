import { FaqArray } from "../utils/utils"
import FaqQuestion from "./FaqQuestion"
import FaqTitle from "./FaqTitle"
import {useSelector} from "react-redux"


const FaqComponent = () => {

  const {faqIndex} = useSelector(store => store.ui)
  const {title,questionsArray}= FaqArray[faqIndex]
  
  return (
    <div className="faq-component page-layout">
      <section className="col-one">
        {FaqArray.map((faq,index )=> {
          return <FaqTitle key={faq.id} faq={faq} index={index}/>
        })}
      </section>
      <section className="col-two">
        <h4>{title}</h4>
        {questionsArray.map(question => {
          return <FaqQuestion key={question.id} questionItem={question}/>
        })}
      </section>
    </div>
  )
}

export default FaqComponent