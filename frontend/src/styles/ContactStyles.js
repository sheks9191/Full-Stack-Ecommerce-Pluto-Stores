import styled from "styled-components";



export const ContactWrapper = styled.div` 

.page-intro {
    display:grid;
    place-items:center;
    text-align:center;
    margin-top:-8rem;

    h4{
        max-width:35rem;
    }



    p, .faq-link{
        letter-spacing:1px;
        color:var(--grey-600);
        font-family:var(--font-family-1);
    }
    span,.faq-link {
        text-decoration:underline;
    }

    
    
}

.contact-component {
    margin-top:4rem;
    margin-bottom:6rem;

    .contact{
        margin-bottom:2rem;
    }

    button {
        background:transparent;
        border:0;
    }
}

.row-one {
    display:flex;
    align-items:center;
    justify-content:space-between;
    height:3rem;
    border-bottom:1px solid var(--custom-100);
}

.contact-icon {
    display:flex;
    align-items:center;
    gap:2rem;

    .icon {
        font-size:2rem;
    }

    h4{
        margin:0;
    }
}

.toggle-icon {
   font-size:2rem; 
   cursor: pointer;
}

.row-two {
    height:0;
    opacity:0 ;
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-left:5rem;
    margin-right:5rem;
    transition:var(--transition);
    
    span:nth-of-type(1){
      letter-spacing:1px;
      color:var(--grey-600);
    }

   span:nth-of-type(2){
    width:17rem;
    height:2.5rem;
    border:1px solid;
    display:grid;
    place-items:center;
    transition:var(--transition);

    &:hover {
        background:var(--tertiary-100);
       .link{
         color:var(--white);
         text-decoration:underline;
       }
    }

    .link{
        background:transparent;
        border:0;
        letter-spacing:1px;
        color:var(--grey-600);
        text-transform:uppercase;
        cursor: pointer;
        
    }

   }
}

.active {
  height:7rem;
  opacity:1;
}

`