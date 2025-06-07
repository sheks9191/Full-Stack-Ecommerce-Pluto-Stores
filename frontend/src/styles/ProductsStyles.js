import styled from "styled-components";


export const ProductsWrapper = styled.div `
margin-top:2rem;
margin-bottom:2rem;
display:grid;
/* grid-template-columns:repeat(auto-fit,minmax(20rem,1fr)); */
height:20rem;
grid-template-columns:repeat(4,1fr);
gap:1rem;

.product-content{
    position:relative;
    cursor: pointer;

    .image {
      position:relative;
      
      .product-img{
      width:100%;
      object-fit:cover;

    }

    .image-cover{
        position:absolute;
        width:100%;
        object-fit:cover;
        top:0;
        right:0;
        opacity: 0;
        transition:var(--transition);
    }
    }

    p {
        margin:0;
        font-size:1.1rem;
        text-transform:capitalize;
        opacity:0.7 ;
        
    }

    p:nth-of-type(2){
       font-style:italic;
    }
    h5 {
        font-weight:550;
        margin-top:1rem;
    }

    .price {
        color:var(--tertiary-200);
        opacity: 1 !important;
        font-weight:500;
        margin-top:-1rem;
    }
    
    .wishlist {
        position:absolute;
        top:20px;
        right:20px;
        background:transparent;
        border:0;
        font-size:1.5rem;
        cursor: pointer;
        transition:var(--transition);
        
    }
}

.product-content:hover{
    .image-cover {
        opacity:1;
        z-index:1;
    }

    .wishlist {

        z-index:2;
        width:2rem;
        height:2rem;
        border-radius:50%;
        background:var(--tertiary-100);
        color:var(--white);
        display:flex;
        align-items:center;
        justify-content:center;
    }
}

@media(max-width:62.8rem){
grid-template-columns:repeat(3,1fr);
}

@media(max-width:52.8rem){
   display:flex;
   align-items:center;
   justify-content:center;
   flex-wrap:wrap;
   

   .product-content {
    .image{

        .product-img {
            height:18rem;
        }
    }
   }
}

`