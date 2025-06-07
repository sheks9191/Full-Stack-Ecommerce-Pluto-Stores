import styled from "styled-components";


export const AccountWrapper = styled.div`

  .account-header {
   
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align:center;
    margin-top:1rem;

    p{
        letter-spacing:2px;
    }

    .link {
        display:flex;
        align-items:center;
        column-gap:1rem;
        border:2px solid var(--tertiary-200);
        padding:0.5rem 4rem;

       h4 {
         color:var(--tertiary-200);
         margin:0;
         text-transform:uppercase;
         &:hover {
             text-decoration:underline;
         }
       }

       .middle-bar {
         height:2rem;
         width:2px;
         background:var(--tertiary-200);
       }
    }
  }

  


`