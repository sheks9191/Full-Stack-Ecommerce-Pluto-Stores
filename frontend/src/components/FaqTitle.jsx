import { useDispatch, useSelector } from "react-redux"
import { setFaqIndex } from "../features/ui/uiSlice"

const FaqTitle = ({faq,index}) => {
  const {faqIndex} = useSelector(store => store.ui)
  const dispatch = useDispatch()
  return (
    <button className={faqIndex===index?"faq-title active":"faq-title"} onClick={() => dispatch(setFaqIndex({currentIndex:index}))}>{faq.title}</button>
  )
}

export default FaqTitle