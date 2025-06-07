import styled from "styled-components";


export const AdminWrapper = styled.div ` 
    height:100Vh;
    overflow:hidden;

    
.current-admin{
    text-align:center;
    margin-top:1rem;

    span {
        font-size:0.9rem;
        letter-spacing:1px;
    }

    button,.home-link{
        background:transparent;
        border:0;
        cursor: pointer;
        text-transform:uppercase;
        letter-spacing:1px;
        font-size:0.7rem;
        background:var(--grey-100);
        color:var(--black);
        box-shadow:var(--shadow-4);
        margin-left:0.7rem;
        padding:0.2rem 0.5rem;
        font-weight:600;

        &:hover {
            text-decoration:underline;
        }
    }
}

.order-details {
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:rgba(0,0,0,0.5);
    display:grid;
    place-items:center;
    overflow:hidden;
    z-index:10;

     .close-btn {  
            background:transparent;
            border:0;
            margin-top:2rem;
            font-size:1.3rem;
            width:2rem;
            height:2rem;
            display:flex;
            place-items:center;
           background:var(--grey-100);
           border-radius:50%;
           border:0;
           cursor: pointer;
           transition:var(--transition);
    
        &:hover{
          background:var(--grey-300);
        }
    }
    .order-details-component {
        background:var(--white);
        margin-top:-4rem;
        max-height:70vh;
        overflow:auto;
        padding:2rem;
        display:flex;
        flex-direction:column;
        gap:2rem; 
        position: relative;  
        
     
    }

    section{
        max-width:22rem;
    }

    .detail {
       
        p{
            opacity:0.7 ;
        }
    }
   
}

.order-items {
     .item-count{
    text-transform:capitalize;
   }
    .details-btn{
        background:transparent;
        border:0;
        letter-spacing:1px;
        background-color:var(--grey-200);
        padding:0.2rem 0.4rem;
        margin-top:1rem;
        cursor: pointer;
        &:hover{
            text-decoration:underline;
        }
    }
}

.admin-link {
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:2rem;
    margin-bottom:4rem;
    gap:1rem;
    text-transform:uppercase;
    letter-spacing:1px;

    .nav-link{
        color:var(--secondary-100);
        font-size:0.8rem;

        transition:var(--transition);
    }

     .active-link{
            background:var(--tertiary-100);
            padding:0.3rem 1rem;
            color:var(--white);
            
        }
}

.product-component,.order-component {
    position: relative;
     input {
        width:3rem;
        text-align:center;
        font-weight:600;
     }
    .submit {
        position:absolute;
        right:1.5rem;
        bottom:0.5rem;
        background:transparent;
        border:0;
        cursor: pointer;
        background:var(--tertiary-100);
        color:var(--white);
        padding:0.3rem 0.5rem;
    }
    .products-btn,.order-btn {
         position:absolute;
            right:1.5rem;
            bottom:0.3rem;
            display:flex;
            align-items:center;
            gap:1.5rem;

              .remove,.edit {
                background:transparent;
                border:0;
                cursor: pointer;
                background:var(--tertiary-200);
                color:var(--white);
                padding:0.2rem 0.5rem;
                letter-spacing:1px;
                font-size:0.7rem;

                &:hover{
                    text-decoration:underline;
                }
            }

            .edit {
             background:var(--tertiary-100);
            }
    }

.order-breakdown {
   
    .order-total{
        font-weight:600;
    }
}

.contact{
    opacity: 0.7;
}

}


.reviews,.products,.users,.orders {
    position: relative;
       
    .total{
        position:absolute;
        left:0;
        top:-2.8rem;
        letter-spacing:1px;
        font-weight:600;
        text-transform:capitalize;
        font-size:0.9rem;
    }
       .sorting-btn,.filter-btn{
        position:absolute;
        right:0;
        top:-2.5rem;
        display:flex;
        height:1.8rem;
        align-items:center;
        justify-content:center; 
        letter-spacing:1px;
        .form-row{
            margin-bottom:0.5rem;
        }
        select {
            text-transform:capitalize;
            letter-spacing:1px;
            height:1.8rem;

            &:focus{
                outline:0;
               
            } 

           

        }

         button {
            background:transparent;
            border:0;
            height:1.8rem;
            background:var(--grey-100);
            font-size:0.8rem;
            letter-spacing:1px;
            cursor: pointer;
            }

        }

        .icon {
          font-size:1.5rem;
          margin-left:1rem;
          cursor: pointer;
        }
    
    .reviews-component,.products-component,.users-component,.orders-component{
         height:73vh;
         overflow-y:auto;
         box-shadow:var(--shadow-4);
         background:var(--white);
         padding:1rem 2rem;
         
         
    }

    section {
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:2rem;
        margin-bottom:1.5rem;
        box-shadow:var(--shadow-3);
        padding:1.5rem;
        min-height:4rem;
        background:var(--grey-100);
        position:relative;
        width:70rem;
        
        p{
            margin:0;
            letter-spacing:1px;
            font-size:0.9rem;
        }

        .name{
            p{
                font-weight:600;
            }

            span{
                opacity: 0.5;
                font-weight:300;
            }
        }

        .link{
                position:absolute;
                right:0.5rem;
                top:0.5rem;
                color:var(--black);
                opacity:0.5;
                font-size:0.8rem;
                letter-spacing:1px;
                transition:var(--transition);

                &:hover {
                    text-decoration:underline;
                    opacity: 1;   
                }

            }
        .rating{
            p:nth-of-type(2){
             background:var(--secondary-100);
             color:var(--white);
             text-align:center;
            }  
            input{
                width:2rem;
                text-align:center;
                font-weight:600;
                font-size:1rem;
            } 
        }

       

        .comment {
            flex:1;
            p:nth-of-type(1){
                font-weight:600;
                font-size:1rem;
                margin-bottom:1rem;
            }

            input,textarea{
                
                padding:0.2rem 0.5rem;
                letter-spacing:1px;
                
                
            }
            textarea{
                width:100%;
                /* min-height:6rem; */
                line-height:1.5;
            }
            input{
                font-weight:600;
                 width:90%;
                 line-height:1.3;
            }
        }

        .user{
            text-transform:capitalize;
        }

        .date{
            p{
                font-size:0.8rem;
            }
        }

        .reviews-btn {
            position:absolute;
            right:1.5rem;
            bottom:0.5rem;
            display:flex;
            align-items:center;
            gap:1.5rem;

            .edit{
                font-size:0.7rem;
                background:var(--tertiary-100);
                color:var(--white);
                border:0;
                padding:0.2rem 0.5rem;
                cursor: pointer;
              
            }

            .remove {
                background:transparent;
                font-size:0.7rem;
                border:0;
                cursor: pointer;
                background:var(--tertiary-200);
                color:var(--white);
                padding:0.2rem 0.5rem;
            }

            
        }

        /* Admin Products css */
        .image{
            img{
            height:5rem;
            margin-top:0.3rem;   
        }

        p{
            text-transform:capitalize;
        }

         p:nth-of-type(2){
            max-width:7rem;
            font-weight:600;
        }
        }
    }
}

@media(max-width:52.8rem){
    .reviews,.products{
        .reviews-component,.products-component{
           
            section{
                .comment{
                    margin-top:1rem;
                    margin-bottom:1rem;
                }
            .user,.date{
            position:absolute;
            top:0.3rem;
            opacity: 0.7;
            p{
                font-size:0.8rem;
            }
        }

        .date{
           top:1.5rem;
        }
      
                
            }
        }
    }

    .products{
        .products-component{
              .rating{
                position:absolute;
            right:0.5rem;
            top:1.5rem;
        }
        }
    }

    .admin-link{

        gap:0.7rem;
        .nav-link{
            font-size:0.65rem;
        }
    }
}

.reviews,.orders,.users,.products{
    .reviews-component,.products-component,.users-component,.orders-component{
        overflow-x:auto;
        /* width:48rem; */
    }
}

`