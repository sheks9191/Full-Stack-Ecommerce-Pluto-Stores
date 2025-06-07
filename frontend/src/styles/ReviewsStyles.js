import styled from "styled-components";




export const ReviewsWrapper = styled.section`

.reviews-container {
    margin-top:3rem;
    margin-bottom:6rem;
    
}

.reviews-header {
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
    flex-direction:column;
    
   
    
    h3{
         
        max-width:36rem;
        margin:0 auto;
       
       
    }

    .underline{
        width:6rem;
        height:0.2rem;
        background:var(--tertiary-200);
        margin-top:-1rem;

    }
}

 .reviews-body {
  margin-top:1rem;
  padding-top:1rem;
  padding-bottom:1rem;
  display:grid;
  place-items:center;
  line-height:2;
  position: relative;
  transition:var(--transition);
  
  min-height:50vh;
  
  

  p{
    margin-bottom:0;
    letter-spacing:1px;
    font-size:1.2rem;
    width:80vw;
    max-width:50rem;
    margin:0 auto;
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
    
  }

  p:nth-of-type(2){
    text-transform:uppercase;
    font-weight:600;
  }

  .star {
    margin-left:0.5rem;
  }
  
  .icon {
    font-size:2rem;
    opacity: 0.6;
    cursor: pointer;
  }
  .icon-left {
    position:absolute;
    left:0.5rem;
  }

  .icon-right{
    position:absolute;
    right:0.5rem; 
  }
 }

 

@media(max-width:64.8rem){
   .reviews-header {
        h3 {
            font-size:1.5rem;
        }
    }

    .reviews-body {
        p{
            font-size:1rem;
        }

        .icon {
            font-size:1.4rem;
        }
    }

}


`