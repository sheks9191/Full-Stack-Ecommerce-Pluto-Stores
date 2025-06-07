import styled from "styled-components";
import HeroImg from '../assets/HeroImg10.jpg'

export const LandingWrapper = styled.div ` 
  
  height:calc(100vh - 6rem);
  display:grid;
  place-items:center; 
  background-image:url(${HeroImg});
  background-repeat:no-repeat;
 background-position:center;
 background-size:cover;
 position: relative;

 &::after{
    content:'';
    background:rgba(0,0,0,0.5);
    position:absolute;
    width:100%;
    height:100%;

 }

  .hero-content {
    width:80vw;
    max-width:37.5rem;
    text-align:center;
    z-index: 2;

    h4 {
        font-size:3rem;
        text-transform:uppercase;
        color:var(--white);
        font-weight:600;

        span {
          color:var(--tertiary-100);  
        }
    }

    .larger-text {
    font-family: var(--dancing-family);
    font-optical-sizing: auto;
    font-weight: 400;
     font-style: normal;
     font-size:2.5rem;
      color:var(--white);
    }

    .smaller-text {
        letter-spacing:2px;
        /* font-family:var(--font-family-1); */
        font-optical-sizing: auto;
        font-style: normal;
        line-height:2.5;
        opacity: 0.9;
        text-transform:capitalize;
        color:var(--grey-100);
        z-index:4; 
        font-weight:500; 
        
    }
  }

   @media(max-width:52.8rem){
    .hero-content{
      h4{
        font-size:2rem;
      }

      .larger-text {
        font-size:2rem;
      }
    }
  }


   @media(max-width:42.8rem){
    .hero-content{
      h4{
        font-size:1.7rem;
      }
      .larger-text {
        /* font-size:1.5rem; */
      }

      .smaller-text{
        font-size:0.8rem;
      }
    }

    .hero-btn-link{
        padding:0.5rem 3rem ;
        font-size:0.8rem;
    }
  }


`