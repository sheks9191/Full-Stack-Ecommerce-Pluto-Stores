import styled from "styled-components";




export const FaqWrapper = styled.div ` 


.faq-component {
    margin-top:5rem;
    margin-bottom:4rem;
    display:grid;
    grid-template-columns:auto 1fr;
    row-gap:3rem;
    column-gap:10rem;
}

.col-one {
    display:flex;
    flex-direction:column;
    gap:1rem;

    .faq-title {
        width:8rem;
        height:2rem;
        font-size:1rem;
        letter-spacing:1px;
        background:transparent;
        cursor: pointer;
        border:0;
        box-shadow:var(--shadow-2);
        
    }

    .active{
        background:var(--tertiary-100);
        color:var(--white);
    }
    
}


.col-two {
    .question-content {
        margin-bottom:1rem;
    }

    .question {
        font-weight:600;
        letter-spacing:1px;
        border-bottom:0.5px solid var(--custom-100);
        height:2.5rem;
        display:flex;
        align-items:center;
        justify-content:space-between;
       

        .icon {
            color:var(--white);
            background:var(--tertiary-100);
            border-radius:50%;
            width:20px;
            height:20px;
            display:grid;
            place-items:center;
            cursor: pointer;
            z-index: 5;
        }
    }

    .answer {
        letter-spacing:1px;
        color:var(--grey-400);
        transition:var(--transition);
        height:0;
        opacity: 0;
    }

    .active {
        height:auto;
        padding:0.3rem 0 1rem 0;
        opacity: 1;
        
    }
}
@media (max-width:56.8rem){
 .faq-component {
    grid-template-columns:1fr;
 }

 .col-one {
   flex-direction:row; 
   flex-wrap:wrap;
}
}

`
