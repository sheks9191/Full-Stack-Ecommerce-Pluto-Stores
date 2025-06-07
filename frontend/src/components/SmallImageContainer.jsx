import { useDispatch, useSelector } from "react-redux"
import { handleCurrentImageIndex } from "../features/ui/uiSlice"

const SmallImageContainer = ({image,index}) => {
const dispatch = useDispatch()
const {currentImageIndex} = useSelector(store => store.ui)
  return (
    <div className={currentImageIndex === index ? "small-image active":"small-image"} onClick={() => dispatch(handleCurrentImageIndex({imageIndex:index}))}>
        <img src={image} alt="image" />
    </div>
  )
}

export default SmallImageContainer