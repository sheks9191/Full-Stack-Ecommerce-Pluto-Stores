import styled from "styled-components";



export const ErrorWrapper = styled.div ` 
 min-height:100vh;
  display:grid;
  place-items:center;
  text-align:center;
   
  img {
    width:90vw;
    max-width:600px;
    display:block;
    margin-bottom:2rem;
    margin-top:-3rem;
    

  }

  p{
    line-height:1.2;
  } 

.error-btn {
    color:var(--white);
    background:var(--tertiary-100);
    padding:0.4rem 1.5rem;

    &:hover {
        text-decoration:underline;
    }
}


`