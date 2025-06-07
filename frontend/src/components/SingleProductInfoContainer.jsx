import React from 'react'
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { handleMultipleDisplayToggle } from '../features/ui/uiSlice';

const SingleProductInfoContainer = ({title,productDetails,productProperties,productReturns,display,gemstone}) => {
  const {detailsDisplay,propertiesDisplay,shippingDisplay} = useSelector(store => store.ui)
  const dispatch = useDispatch()
  return (
    <div className={display ? 'product-info active':'product-info'}>
        <div className={display ? 'info active' : 'info'}>
             <div className="info-title">
                <h5>{title}</h5>
                <IoMdClose className='icon' onClick={() => dispatch(handleMultipleDisplayToggle({shipping:shippingDisplay,properties:propertiesDisplay,details:detailsDisplay}))}/>
             </div>

             <div className="info-content">
              {productDetails && productDetails.map((productDetail,index) => {
                return <p key={productDetail + index}>- {productDetail}</p>
              })}

              {productProperties && <>
                <div className="properties first">
                  <p>What are the benefits of {gemstone}?</p>
                  <span>{productProperties.first}</span>
                </div>

                <div className="properties second">
                  <p>When should I wear {gemstone} gemstones?</p>
                  <span>{productProperties.second}</span>
                </div>
              
              </>}

                {productReturns && <>
                <div className="properties first">
                  <p>Returns</p>
                  <span>{productReturns.returns}</span>
                </div>

                <div className="properties second">
                  <p>Customs & Duties</p>
                  <span>{productReturns.customs}</span>
                </div>
              
              </>}
             </div>
        </div> 
    </div>
  )
}

export default SingleProductInfoContainer