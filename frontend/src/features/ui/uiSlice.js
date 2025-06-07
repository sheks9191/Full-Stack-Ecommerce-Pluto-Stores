import { createSlice } from "@reduxjs/toolkit"





const defaultState = {
    contactId:'',
    faqAnswerId:'',
    faqIndex:0,
    reviewNo:0,
    sliderIndex:0,
    reviewIndex:0,
    currentImageIndex:0,
    initialNewest:0,
    nextNewest:3,
    displayReviews:4,
    navMenu:false,
    orderMsg:false,
    inputEye:false,
    orderDetailId:'',
    disabledDisplayReviewsBtn:false,
    displayContainer:false,
    detailsDisplay:false,
    propertiesDisplay:false,
    shippingDisplay:false,
    toggleDesc:false,
    toggleReview :false,

}


const uiSlice = createSlice({
    name:'ui',
    initialState:defaultState,
    reducers: {
       setAccountIndex:(state, {payload:{currentIndex}}) => {
            state.accountIndex = currentIndex;
       },

       toggleNavMenu:(state)=> {
          state.navMenu= !state.navMenu;
       },

       toggleOrderMsg:(state) => {
         state.orderMsg = !state.orderMsg
       },
       toggleInputEye:(state) => {
         state.inputEye = !state.inputEye
       },
        setOrderDetailsId:(state,{payload:{orderID}}) => {
         state.orderDetailId = orderID
       },
        setFaqIndex:(state, {payload:{currentIndex}}) => {
            state.faqIndex = currentIndex;
       },

        setFaqAnswerId:(state,{payload:{answerID}})=> {
            if(state.faqAnswerId === answerID){
                state.faqAnswerId = '';
                return
            }
            state.faqAnswerId = answerID
            
        }, 

         setContactId:(state,{payload:{contactID}})=> {
            if(state.contactId === contactID){
                state.contactId = '';
                return
            }
            state.contactId = contactID
            
        }, 

        handleRightNewestSlider:(state,{payload:{products}}) => {
            if(state.nextNewest > products.length - 1){
                state.initialNewest = 0
                state.nextNewest = 3
                return
            }
          state.initialNewest = state.initialNewest + 1
          state.nextNewest = state.nextNewest + 1
        },

         handleLeftNewestSlider:(state,{payload:{products}}) => {
           if(state.initialNewest === 0){
                state.initialNewest = products.length - 3
                state.nextNewest = products.length
                return
            }
          state.initialNewest = state.initialNewest - 1
          state.nextNewest = state.nextNewest - 1
        },

        handleRightSlider:(state,{payload:{images}}) => {
           
            if(state.sliderIndex >= images.length - 1){
                state.sliderIndex = images.length - 1
                return
            }
            state.sliderIndex = state.sliderIndex + 1
        },
        handleLeftSlider:(state) => {
             if(state.sliderIndex <= 0){
                state.sliderIndex = 0
                return
            }
            state.sliderIndex = state.sliderIndex - 1
        },

        handleRightReviewSlider:(state,{payload:{reviews}}) => {
           
            if(state.reviewIndex>= reviews.length - 1){
                state.reviewIndex= 0
                return
            }
            state.reviewIndex= state.reviewIndex+ 1
        },
        handleLeftReviewSlider:(state,{payload:{reviews}}) => {
             if(state.reviewIndex <= 0){
                state.reviewIndex = reviews.length - 1
                return
            }
            state.reviewIndex = state.reviewIndex - 1
        },

        handleCurrentImageIndex:(state, {payload:{imageIndex}}) => {
              state.currentImageIndex = imageIndex
        },

        toggleDisplayContainer:(state) => {
            state.displayContainer = !state.displayContainer 
        },

        handleToggleDesc:(state) => {
             state.toggleDesc = !state.toggleDesc
        },

        handleMultipleDisplayToggle:(state,{payload:{details,properties,shipping}}) => {
            
             if(details){
                state.detailsDisplay = !state.detailsDisplay
             }

             if(properties){
                state.propertiesDisplay = !state.propertiesDisplay
             }

             if(shipping){
                state.shippingDisplay = !state.shippingDisplay
             }
        },

        handleReviewChange:(state,{payload:{reviewNum}}) => {
           state.reviewNo = reviewNum
        },

        handleToggleReview:(state) => {
            state.toggleReview = !state.toggleReview
            state.reviewNo = 0
        },

        handleDisplayReviews:(state,{payload:{addedReviews,reviews}}) => {
           
           state.displayReviews = state.displayReviews + addedReviews
           if(state.displayReviews > reviews.length){
            state.displayReviews = reviews.length
            state.disabledDisplayReviewsBtn = true
           }
        }
    }
})


export const {setAccountIndex,toggleAccountIndex, setFaqIndex, setFaqAnswerId, setContactId,handleRightSlider,handleLeftSlider,handleCurrentImageIndex,toggleDisplayContainer,handleToggleDesc,handleMultipleDisplayToggle,handleReviewChange,handleToggleReview,handleRightNewestSlider,handleLeftNewestSlider,handleLeftReviewSlider,handleRightReviewSlider,handleDisplayReviews,toggleNavMenu,toggleOrderMsg,setOrderDetailsId,toggleInputEye} = uiSlice.actions
export default uiSlice.reducer;