import styled from "styled-components";





export const NewestWrapper = styled.section ` 
margin-top:4rem;
 
.newest-header {
    display:flex;

    .btns{
        display:flex;
        align-items:center;
        gap:1rem;
        

        .icon {
            font-size:1.8rem;
            cursor: pointer;
            margin-top:-1rem;
        }
    }
}
.newest-container {
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    gap:1rem;
    transition:var(--transition);
    overflow:hidden;

    
    
}

.current-product {
    transition:var(--transition);
    position: relative;
    img {
        height:25rem;
        /* width:100%; */
        object-fit:cover;
        transition:var(--transition);
    }

    span{
        position:absolute;
        top:0.4rem;
        left:0.4rem;
        text-transform:uppercase;
        letter-spacing:1px;
        font-size:0.8rem;
        font-weight:500;
    }

    h5{
        margin:0;
    }
}

.col-one {
 margin-bottom:1rem;
 opacity: 0.5;
 
 h5{
    font-size:99%;
 }

 h5:nth-of-type(2){
    font-style:italic;
    margin-top:0.5rem;
 }
}

.col-two {
    h5:nth-of-type(1){
        font-weight:600;
    }
}

@media(max-width:64.8rem){
 .newest-container {
    overflow-x:auto;
 }

 .current-product {
    img {
        
       height:20rem; 
    }
 }

 .newest-header {
    .products-title {
        h3 {
            font-size:1.5rem;
        }
    }
   .btns {
     .icon {
        font-size:1.2rem;
    }
   }
 }
}

`