import styled from "styled-components";


export const LoadingWrapper = styled.div` 


height:100vh;
display:grid;
place-items:center;
 
.loader {
  width: 1.25rem;
  margin-top:-10rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--primary-50);
  box-shadow: 0 0 0 0 var(--primary-50);
  animation: l2 1.5s infinite linear;
  position: relative;
}
.loader:before,
.loader:after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow: 0 0 0 0 #0004;
  animation: inherit;
  animation-delay: -0.5s;
}
.loader:after {
  animation-delay: -1s;
}
@keyframes l2 {
    100% {box-shadow: 0 0 0 2.5rem #0000} 
}

`