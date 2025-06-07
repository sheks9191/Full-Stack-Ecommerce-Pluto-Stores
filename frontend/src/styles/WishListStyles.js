import styled from "styled-components";



export const WishListWrapper = styled.div `

.text {
    text-align:center;
    margin:auto;
    padding:2rem 0.7rem 1rem 0.7rem;
    letter-spacing:1px;
    max-width:110rem;
}

.link {
    text-decoration:underline;
    text-transform:capitalize;
    color:var(--secondary-200);
}
.wishlist-container {
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:1.5rem;
    margin-top:2rem;
    margin-bottom:3rem;

}

.wishlist-content {
    position: relative;
    text-align:center;
  
    img{
        height:18rem;
    }

    p{
        margin-bottom:0;
        margin-top:-1rem;
        letter-spacing:1px;
        text-transform:capitalize;
    }

    h5{
        font-weight:bold;
    }

    .price {
        color:var(--tertiary-200);
    }
    
    .close-btn {
        position:absolute;
        top:1rem;
        right:1rem;
        background:transparent;
        border:0;
        font-size:1.5rem;
        opacity:0.5 ;
        cursor: pointer;
    }
    .add-btn {
      display:block;
      width:70%;
      margin:auto;
      margin-top:1rem;
      background:transparent;
      border:0;
      text-transform:uppercase;
      background-color:var(--secondary-100);
      color:var(--white);
      padding:0.8rem 0;
      cursor: pointer;
      letter-spacing:1px;
      font-weight:550;
      transition:var(--transition);

      &:hover {
        background-color:var(--tertiary-200);
      }
    }
}


@media(max-width:60.8rem){
    .wishlist-content{
        img {
            height:16rem;
        }

        h5{
            font-size:1rem;
        }

        .add-btn {
            padding:0.6rem 0;
            width:50%;
            font-size:0.7rem;
        }
    }


}

`