import { Link, useLoaderData, useNavigation } from "react-router-dom"
import { NewestWrapper } from "../styles/NewestStyles"
import ProductsTitle from "./ProductsTitle"
import { useDispatch, useSelector } from "react-redux"
import { formatPrice } from "../utils/utils"
import { MdArrowBackIos,MdArrowForwardIos } from "react-icons/md";
import { handleLeftNewestSlider, handleRightNewestSlider } from "../features/ui/uiSlice"


const Newest = () => {
  const {products} = useLoaderData()
  const {initialNewest:initial,nextNewest:next} = useSelector(store => store.ui)
  const dispatch = useDispatch()
  const currentProducts = products.slice(initial, next)

  // console.log(currentProducts)
  return (
    <NewestWrapper>
      <div className="newest-header nav-layout">
         <ProductsTitle title="newly arrived"/>
         <div className="btns">
          <MdArrowBackIos className="icon" onClick={() => dispatch(handleLeftNewestSlider({products}))}/>
          <MdArrowForwardIos className="icon" onClick={() => dispatch(handleRightNewestSlider({products})) }/>
         </div>
      </div>
      
      <div className="newest-container nav-layout">
          {currentProducts.map(product => {
            const {images,names,price,_id:productID} = product
            return  <div className="current-product" key={productID}>
                <Link to={`/single-product/${productID}`}>
                 <img src={images[0]} alt={names[0]} />
                </Link>
                
                <div className="col-one">
                   <h5>{names[0]}</h5>
                   <h5>{names[1]}</h5>
                </div>

                <div className="col-two">
                  <h5>{names[2]}</h5>
                  <h5>{formatPrice(price)} USD</h5>

                </div>
                <span>new</span>
            </div>
          })}
      </div>
    </NewestWrapper>
  )
}

export default Newest