import styled from "styled-components";



export const ReviewWrapper = styled.div`  

.products-title {
    text-align:center;
}


.reviews-intro {
    display:grid;
    grid-template-columns:1fr 1.6fr 1fr;
    /* font-family:var(--font-family-1); */
    letter-spacing:1px;
    margin-bottom:4rem;

    p{
        margin-bottom:0;
        line-height:0.6;
        
        
    }

    p:nth-of-type(1){
        font-weight:600;
    }

     p:nth-of-type(2){
        opacity:0.7 ;
    }

     div:nth-of-type(2){
        /* background-color:red; */
        text-align:center;
        border-left:1px solid;
        border-right:1px solid;
        padding:0 1.5rem;
    }

    div:nth-of-type(3){
       text-align:right;

       button{
        background:transparent;
        border:0;
        cursor: pointer;
        letter-spacing:1px;
        background:var(--secondary-100);
        padding:1rem 2.5rem;
        color:var(--white);
        text-transform:uppercase;
        transition:var(--transition);

        &:hover {
         background:var(--tertiary-200);
        }

       }
    }
}

.form-review {
    background:var(--white);
    width:80vw;
    max-width:50rem;
    height:100vh;
    margin:0 auto;
    padding:4rem 2rem 3rem 2rem;
    position:relative;
    z-index:-5;
    opacity: 0;
    transition:var(--transition);

    .products-title {
    text-align:start;
}

.review-btn {
    position:absolute;
    top:1rem;
    right:1.5rem;
    background:transparent;
    border:0;
    cursor: pointer;
}

.icon {
    font-size:2rem;
    opacity: 0.5;
}
}

.form-review.review-active {
    opacity: 1;
    z-index:10;
}

.reviews-body {
   margin-bottom:4rem;
    .reviews {
       display:grid;
       grid-template-columns:repeat(4,1fr);
       gap:1.5rem;
       place-items:center;
    }

    .review {
      
        box-shadow:var(--shadow-1);
        padding:1rem 0.8rem;
        height:auto;
        max-width:20rem;;
    }

    .rating-date{
        .date {
            margin-left:1rem;
        }
    }

    .reviewer {
        display:flex;
        align-items:center;
        margin-top:0.6rem;
        margin-bottom:1rem;

        .icon {
            font-size:1.4rem;
            opacity: 0.5;
        }

        h5{
            font-size:0.9rem;
            margin-bottom:0;
            margin-left:0.6rem;
            text-transform:uppercase;
            font-weight:600;
        }

       
    }

    .comment {

        h5 {
            text-transform:capitalize;
            font-size:0.9rem;
            margin-bottom:0;
        }

        p{
            margin-bottom:0;
            letter-spacing:1px;
            color:var(--grey-500);
            
        }
    }

    .review-btn {
        display:flex;
        flex-direction:column;
        place-items:center;

        margin-top:3rem;
         button{
        background:transparent;
        border:0;
        cursor: pointer;
        letter-spacing:1px;
        background:var(--secondary-100);
        padding:1rem 4.5rem;
        color:var(--white);
        text-transform:uppercase;
        transition:var(--transition);

        &:hover {
         background:var(--tertiary-200);
        }

       }

       p{
        letter-spacing:1px;
       }
    }

    .component-loader {
        margin-top:2rem;
        display:grid;
        place-self:center;
    }
}

@media(max-width:72.8rem){
  .reviews-body {
        .reviews {
            grid-template-columns:repeat(3, 1fr);
        }
    }
}

@media(max-width:62.8rem) {
    .reviews-intro {
        grid-template-columns:1fr;
        gap:1rem;
       
        
        div:nth-of-type(1){
          place-items:center;
          
        }

         div:nth-of-type(2){
          border:none;
          
        }

         div:nth-of-type(3){
          text-align:center;
          
        }
    }

   
}

@media(max-width:52.8rem){
  .reviews-body {
        .reviews {
            grid-template-columns:repeat(2, 1fr);
        }
    }
}

@media(max-width:35.8rem){
  .reviews-body {
        .reviews {
            grid-template-columns:1fr;
        }
    }
}

`