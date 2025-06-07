import styled from "styled-components";



export const ExploreWrapper = styled.div` 


.filter-header{
    padding-bottom:1rem;
    padding-top:1rem;
    border-top:1px solid var(--custom-100);
    border-bottom:2px solid var(--custom-100);


   .filter-toggle {
     display:flex;
     align-items:center;
     justify-content:space-between;
   }

   button {
     display:flex;
     align-items:center;
     gap:1rem;
     font-weight:600;
     letter-spacing:1px;
     text-transform:uppercase;
     cursor: pointer;
     background:transparent;
     border:0;
   }

}

.products-layout {
  position: relative;
}

.filter-container,.sorting-container {
 position:absolute;
 top:-2rem;
 z-index:5;
 background:var(--white);
 box-shadow:var(--shadow-2);
 width:300px;
}

.filter-container,.sorting-container{
  height:28vh;
  overflow:hidden;
  overflow-y:auto;
 
  .items-count {
    height:3rem;
    letter-spacing:1px;
    border-bottom:1px solid var(--custom-100);
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding-left:5px;
    position:sticky;
    z-index:2;
    background:var(--white);
    top:0;
    span{
      font-size:0.9rem;
      text-transform:capitalize;
    }
  }

  .submit-btn,.reset-btn {
    background:transparent;
    border:0;
    letter-spacing:1px;
    cursor: pointer;
    opacity:0.7 ;
  }
  .reset-btn{
    color:var(--black);
  }

  .active:hover{
      text-decoration:underline;  
  }
  .filter-btn {
  background:transparent;
  border:0;
  font-weight:600;
  letter-spacing:1px;
  width:100%;
  height:3rem;
  border-bottom:1px solid var(--custom-100);
  display:flex;
  align-items:center;
  justify-content:space-between;
  }

}


.sorting-container{
  height:28vh;
  right:0;
}

`