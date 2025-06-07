import styled from "styled-components";



export const SingleProductWrapper = styled.div `    
display:grid;
grid-template-columns:1.5fr 1fr;
column-gap:3rem;
position: relative;


.image-slider {
    display:none;
}


.single-product-images {
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:0.2rem;

    .image{
         width:100%;
         max-width:28rem;
         cursor: pointer;
      
         img{
          width:100%;
         }
    }
}

.link-container {
  display:flex;
  gap:0.2rem;
  align-items:center;
   color:var(--grey-400);
   margin-top:0.5rem;
    .link {
       text-transform:uppercase;
       font-size:0.7rem;
       color:var(--grey-400);
       
       

       &:hover {
        text-decoration:underline;
        color:var(--tertiary-100);
       }

    }
}

.review-container {
    display:flex;
    align-items:center;
    column-gap:0.3rem;
    /* background:red; */
    margin-top:0.5rem;
    margin-bottom:0.5rem;

    h5{
        margin:0;
        margin-left:1rem;
        font-size:0.8rem;
        text-transform:uppercase;
    }
}

.single-product-description{
  padding-left:2rem;
  margin-bottom:2rem;

  .add-btn {
    background:var(--secondary-100);
    height:3rem;
    display:flex;
    position:relative;
    
    


    button {
        background:transparent;
        border:0;
        text-transform:uppercase;
        letter-spacing:1px;
        color:var(--white);
        font-weight:600;
        flex-grow:1;
        transition:var(--transition);
        cursor: pointer;
        &:hover{
        background:var(--tertiary-200);
    }
       
    }
  }

  .wishlist-btn{
    position:absolute;
    right:0;
    height:3rem;
    width:3rem;
    display:grid;
    place-items:center;
    background:var(--secondary-100);
    transition:var(--transition); 
    cursor: pointer;

      &:hover{
        background:var(--tertiary-200);
    }

    .icon {
    
    color:var(--white);
    font-size:1.5rem;
  }
  }
}

.title-container {
    display:flex;
    justify-content:space-between;

    h5{
        font-weight:600;
    }

    span {
        color:var(--tertiary-200);
        font-weight:600;
        letter-spacing:1px;
        font-size:1.2rem;
    }

}

.options {
 
    p{
        margin-bottom:0;
        text-transform:uppercase;
        font-size:0.7rem;
        letter-spacing:1px;

        span {
            font-size:0.8rem;
        }
    }
    .size-options {
       display:flex;
       gap:1rem; 
       margin-top:1rem;
       margin-bottom:1rem;
    }

    .size-btn {
        background:transparent;
        cursor: pointer;
        border:0;
        width:2rem;
        height:2rem;
        
        &.active {
            border:1px solid;
        }

    }
}

.desc-container {
    
    
    span{
        letter-spacing:1px; 
       font-style:italic;
       font-size:88%;
       opacity: 0.7;   
    }

     span:nth-of-type(2){
        text-decoration:underline;
        cursor: pointer;
        margin-left:1rem;
        text-transform:capitalize;
        font-style:initial;
    }
}



.delivery-container {
    display:flex;
    align-items:center;

    .icon {
        font-size:2rem;
        margin-right:1rem;
    }

    p {
        text-transform:uppercase;
        font-size:80%;
        letter-spacing:1px;
    }

     span:nth-of-type(1){
        color:red;
        font-weight:600;
    }

    span:nth-of-type(2){
        color:var(--tertiary-200);
    }
}

.info-container {
    margin-top:2rem;
    .details{
       
        height:3.5rem;
    }

   .details-btn {
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    cursor: pointer;
    opacity: 0.7;
    border-bottom:1px solid var(--custom-100);
    
    &:hover {
        color:var(--tertiary-200);

        button {
           color:var(--tertiary-200); 
        }
    }
   }

   button {
    background:transparent;
    border:0;
    text-transform:uppercase;
    cursor: pointer;
   }
}


.product-info {
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:-4;
    background:rgba(0,0,0,0.4);
    display:flex;
    justify-content:flex-end;
    opacity:0 ;
    transition:var(--transition);

    .info {
        background:var(--white);
        height:100%;
        width:100vh ;
        min-width:50% ;
        transform:translateX(100%);
        transition:var(--transition);
        
    }

    .info-title {
       height:3rem;
       border-bottom:1px solid var(--custom-100);
       display:flex;
       align-items:center;
       justify-content:space-between;
        padding:0 2rem;

       h5{
        margin:0;
        text-transform:uppercase;
       }

       .icon {
         font-size:2rem;
         opacity:0.5 ;
         cursor: pointer;
       }
    }

    .info-content {
       padding:0 2rem;

       p {
        letter-spacing:1px;
        text-transform:capitalize;
       }
    }

    .properties {

        p{
            font-weight:600;
            letter-spacing:1px;
            text-transform:capitalize;
        }

    span {
        letter-spacing:1px;
        opacity: 0.7;
    }



    }
}

.product-info.active {
    opacity: 1;
    z-index: 10;
}

.product-info .info.active {
   transform:translateX(0%); 
}


@media(max-width:62.8rem) {
 grid-template-columns:1fr;
 /* grid-template-rows:1fr 1fr; */

.single-product-images{
    display:none;
}

.image-slider{
    display:flex;
    flex-direction:column;
    position: relative;
    margin:5rem auto 3rem auto;

    .indicator-component {
        
        display:flex;
        justify-content:center;
        gap:2rem;
        height:1rem;
        width:100%;
        margin-top:2rem;

        .indicator {
            
            width:0.5rem;
            height:0.5rem; 
            border-radius:50%;
            background-color:var(--custom-100);
            transition:var(--transition);
        }

        .active {
            background:var(--tertiary-200);
        }
    }

    button {
        background:transparent;
        border:0;
    }

    .icon {
        position:absolute;
        top:46%;
        transform:translateY(-50%,-50%);
        font-size:1.2rem;
        cursor: pointer;
        
    }

    .icon-left {
      left:-0.875rem;  
    }

    .icon-right {
        right:-0.875rem;
    }
}


.slider {
    max-width:25rem;
    overflow:hidden;
    display:flex;
    box-shadow:var(--shadow-1);
    

    img{
        width:100%;
        transform:translateX(${({$sliderIndex})=> -($sliderIndex * 100)}%);
        transition:var(--transition);
    }
}


.single-product-description{
  margin-bottom:2rem;
  /* position: relative; */

  .link-container, .review-container{
    position:absolute;
    top:0;
    
  }

  .review-container{
    right:0;
  }
}

}

`