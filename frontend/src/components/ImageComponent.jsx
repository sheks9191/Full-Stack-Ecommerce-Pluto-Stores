import { useDispatch } from "react-redux"
import { handleCurrentImageIndex, toggleDisplayContainer } from "../features/ui/uiSlice"


const ImageComponent = ({productImage,index}) => {
  const dispatch = useDispatch()
  return (
    <div className="image" onClick={() => {
      dispatch(toggleDisplayContainer())
      dispatch(handleCurrentImageIndex({imageIndex:index}))
      }}>
        <img src={productImage} alt="image"  />
    </div>
  )
}

export default ImageComponent