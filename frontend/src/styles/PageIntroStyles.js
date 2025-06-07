import styled from "styled-components";


export const PageIntoWrapper = styled.div ` 

height:calc(100vh - 12rem);
background-image:${({$introImg}) => `url(${$introImg})`};

background-position:center;
background-repeat:no-repeat;
background-size:cover;
display:flex;
align-items:center;
h4 {
    width:70vw;
    max-width:150px;
    font-size:3rem;
    font-family:var(--lobster-family);
    text-transform:capitalize;
    letter-spacing:3px;
    
}

`