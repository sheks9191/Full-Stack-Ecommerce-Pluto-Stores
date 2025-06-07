import { useDispatch, useSelector } from "react-redux"
import SmallImageContainer from "./SmallImageContainer"
import { IoMdClose } from "react-icons/io";
import { toggleDisplayContainer } from "../features/ui/uiSlice";
import { useLoaderData } from "react-router-dom";

const ImageDisplayContainer = () => {
    const {product:{images}} = useLoaderData()
    const {currentImageIndex,displayContainer} = useSelector(store => store.ui)
    const dispatch = useDispatch()
  return (
    <section className={displayContainer ? "image-display-container display":"image-display-container"}>
        <div className="display-container nav-layout">
            <div className="small-images">
             {images.map((image,index)=> {
                return <SmallImageContainer key={image+index} image={image} index={index}/>
             })}
            </div>
            <div className="large-image">
                <img src={images[currentImageIndex]} alt="image" />
            </div>

        <button type="button" className="close-btn" onClick={() => dispatch(toggleDisplayContainer())}>
            close <IoMdClose className="icon"/>
        </button>
        </div>
    
    </section>
  )
}

export default ImageDisplayContainer