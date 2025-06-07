import styled from "styled-components";






export const CheckoutWrapper = styled.div`  
  

  .order-msg{
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    opacity:0 ;
    z-index:0;
    place-items:center;
    text-align:center;
    display:none;
    transition:var(--transition);

    &.active{
       background:rgba(0,0,0,0.6);
       z-index:10;
       opacity:1 ; 
       display:grid;
    }

    .msg{
        background:var(--white);
        margin:1rem;
        padding:1rem;
        box-shadow:var(--shadow-3);
        letter-spacing:1px;
        text-transform:capitalize;

        p:nth-of-type(1){
          font-size:1.1rem;  

          span{
            color:var(--grey-500);
            text-transform:uppercase;
          }
        }
    }

    .link {
        background:var(--secondary-100);
        color:var(--white);
        font-size:0.8rem;
        padding:0.3rem 1rem;

        &:hover{
            text-decoration:underline;
        }
    }
  }
  h3{
    text-align:center;
  }

  .form-row{
    input{
        font-size:0.9rem;
        letter-spacing:1px;
        background:var(--white);
    }
  }

  margin-bottom:4rem;
 .checkout-total{
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
        button{
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

            &:hover{
                background:var(--tertiary-100);
                color:var(--white);
            }

        }
       }
    }

    @media(min-width:62.5rem){
        .checkout-order{
         display:grid;
         
         grid-template-columns:1fr 1fr;
         gap:2.5rem
        }

        .checkout-total {
            
            margin-top:3rem;
        }
       
    }

`