
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setFaqAnswerId } from "../features/ui/uiSlice";
const FaqQuestion = ({questionItem}) => {

const {id, question, answer} = questionItem
const {faqAnswerId} = useSelector(store => store.ui)
const dispatch = useDispatch();

  return (
    <div className="question-content">
        <div className="question">
            <p>{question}</p>
            <span className="icon" onClick={() => dispatch(setFaqAnswerId({answerID:id}))}>{faqAnswerId===id? <FaAngleUp/> :<FaAngleDown/>}</span>
            
        </div>
        <p className={faqAnswerId === id ? "answer active":"answer"}>{answer}</p>
    </div>
  )
}

export default FaqQuestion