import { FaArrowCircleLeft,FaArrowCircleRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { handleLeftSlider, handleRightSlider } from "../features/ui/uiSlice";
import { useLoaderData } from "react-router-dom";

const ImageSlider = () => {
    const {product:{images}} = useLoaderData()
    const dispatch = useDispatch()
    const {sliderIndex} = useSelector(store => store.ui)
  
    
  return (
    <section className="image-slider">
        <div className="slider">
           {images.map((image,index) => {
            return <img src={image} alt="image"  key={image+index} />
           })}
        </div>

        <div className="indicator-component">

            {images.map((_,index) => {
                return <div className={ index === sliderIndex ?"indicator active":"indicator"} key={index}></div>
            })}
        </div>
        <button type="button" className="icon icon-left" onClick={() => dispatch(handleLeftSlider({images}))}  disabled={sliderIndex === 0} >
           <FaArrowCircleLeft/>
        </button>

        <button type="button" className="icon icon-right" onClick={() => dispatch(handleRightSlider({images}))} disabled={sliderIndex === images.length - 1}>
           <FaArrowCircleRight />
        </button>
        
        
    </section>
  )
}

export default ImageSlider