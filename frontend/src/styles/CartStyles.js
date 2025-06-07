import styled from "styled-components";




export const CartWrapper = styled.div ` 

h3 {
    font-size:1.5rem;
    margin-top:1rem;
    font-weight:700;
    text-transform:uppercase;
    text-align:center;
}

.cart-component {
  display:grid;
 grid-template-columns:2fr 1fr;
 gap:2rem;
 margin-bottom:4rem;
}

.cart-table {
    img {
        height:10rem;
        box-shadow:var(--shadow-2);
    }

    h5,p{
        margin-bottom:0;
        padding:0;
    }

    p{
        margin-top:-0.1rem;
        letter-spacing:1px;
        opacity:0.6 ;
    }

    h5 {
        font-size:1rem;
    }

     h5:nth-of-type(2){
        font-size:1rem;
        font-weight:600;
    }

     p:nth-of-type(2){
        margin-bottom:1rem;
    }

   

   .td-btn {
    display:flex;
   align-items:center;
   justify-content:center;
   flex-direction:column;
   padding-top:5rem;

   button {

    background:transparent;
    cursor:pointer;
    font-size:1.4rem;
    border:0;
    box-shadow:var(--shadow-2);
    width:1.5rem;
    &:active{
        transform:scale(0.9);
    }
    &:hover{
        background:var(--tertiary-100);
        color:var(--white);
        transition:var(--transition);
    }
   }
   
   }
   .td-price {
     letter-spacing:1px;
   }
 .td-amount {
    h5{
    font-weight:600;
    letter-spacing:1px;
}

button {
    background:transparent;
    border:0;
    background:var(--tertiary-200);
    color:var(--white);
    padding:0.2rem 0.8rem;
    letter-spacing:1px;
    cursor: pointer;

    &:hover{
    text-decoration:underline;
    }
}
 }
 
}


 .cart-total{
       background:var(--secondary-100);
       box-shadow:var(--shadow-2);
       align-self:flex-start;
       padding:1rem;
       color:var(--custom-100);

       h5{
        display:flex;
        align-items:center;
        justify-content:space-between;
        font-size:1rem;
       }

       .order-total {
        font-size:1.3rem;
        font-weight:600;
       }

       .order-btn {
        text-align:center;
        .link{
            background:0;
            display:block;
            width:100%;
            border:0;
            cursor: pointer;
            background-color:var(--custom-100);
            color:var(--secondary-100);
            text-transform:uppercase;
            letter-spacing:1px;
            transition:var(--transition);
            padding:0.5rem;
            margin-bottom:1rem;
            font-size:0.9rem;

            &:hover{
                background:var(--tertiary-100);
                color:var(--white);
            }

        }
       }
    }


@media(max-width:62.8rem){

    h3 {
        font-size:1rem;
    }
    .cart-component{
        grid-template-columns:1fr;
    }

  .cart-table{
       overflow-x:auto; 

       th {
        font-size:0.8rem;
       }
    }

}

/* @media(max-width:52.8rem){
    
    
} */
`