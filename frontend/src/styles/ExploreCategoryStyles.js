import styled from "styled-components";



export const ExploreCategoryWrapper = styled.section ` 
 margin-top:4rem;
 
 .explore-category {
    
 display:grid;
 grid-template-columns:1fr 1fr;
 gap:1rem;
 }


.explore-category-component{
    position:relative;
  img {
    height:20rem;
    width:100%;
    object-fit:cover;
    transition:var(--transition);
    
    &:hover{
      opacity: 0.8;
    }
  }

  .category-link {
    position:absolute;
    bottom:1rem;
    z-index:1;
    left:50%;
    transform:translateX(-50%);
      background: var(--custom-100);
    color: var(--secondary-100);
    transition: var(--transition);


    &:hover {
    background: var(--secondary-100);
    color: var(--white);
    }
  }
}





@media(max-width:51.8rem){
.explore-category{
    grid-template-columns:1fr;
}


}

@media(max-width:64.8rem){
   .products-title {
        h3 {
            font-size:1.5rem;
        }
    }

}

`