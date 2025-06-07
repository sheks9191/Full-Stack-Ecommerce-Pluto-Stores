import styled from "styled-components";


export const NavbarWrapper = styled.div ` 
  position:sticky;
  top:0;
  z-index:10;

   .logo{
         margin:0;
         text-transform:uppercase;
         cursor: pointer;
         /* color:var(--tertiary-200); */
         font-weight:700;
          background:linear-gradient(to right,var(--tertiary-200),var(--tertiary-300));
      background-clip:text;
      color:transparent;
    }
 .nav-top {
    background:var(--secondary-100);
    height:2rem;
    display:flex;
    align-items:center;
 }

 .nav-row-one {
   display:flex;
   align-items:center;
   justify-content:flex-end;
   column-gap:1rem;
   
   .link {
    color:var(--white);
    font-size:0.8rem;
    &:hover{
        text-decoration:underline;
    }
   }

   h5 {
      /* color:var(--white); */
      margin-bottom:0;
      font-size:1rem;
      background:linear-gradient(to right,var(--white),var(--tertiary-300));
      background-clip:text;
      color:transparent;
   }
 }

 .nav-down {
    height:4rem;
    display:flex;
    align-items:center;
    box-shadow:var(--shadow-1);
    border-bottom:1px solid;
    background:var(--grey-50);
    position: relative;

    .mobile-nav-content{
      display:none;
    }
 }

 .nav-row-two{
    display:flex;
    align-items:center;
    justify-content:space-between;
 }

 .menu-btn{
   display:none;
 }

 .nav-start {
    display:flex;
    align-items:center;
    column-gap:2rem;
 }

 .nav-center {
    display:flex;
    align-items:center;
    column-gap:1rem;

    .link {
        color:var(--grey-900);
        text-transform:uppercase;
        font-size:0.9rem;
          &:hover{
        text-decoration:underline;
    }
    }
 }

 .nav-end {
    display:flex;
    align-items:center;
    justify-content:flex-end;
    column-gap:1rem;
    height:4rem;
    position: relative;
    
    .icon{
       font-size:1.4rem;
       color:var(--grey-900);

    }

    .account{
      position:absolute;
      background:var(--white);
      bottom:-5.5rem;
      z-index:4 ;
      width:18rem;
      height:6rem;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      line-height:0;
      box-shadow:var(--shadow-2);
      /* display:none; */

      p{
         font-size:1rem;
         text-transform:uppercase;
         letter-spacing:2px;
         color:var(--grey-900);
         opacity:0.6;

      }

      .account-link {
         border:1px solid var(--tertiary-200);
         padding:0.5rem 3rem;
         color:var(--grey-900);
         text-transform:uppercase;
         font-size:0.8rem;
         margin-bottom:1rem;
         transition:var(--transition);


         &:hover{
          background:var(--tertiary-200); 
          color:var(--white);
         }
      }
    }
 }

 .settings-logout {
   display:flex;
    width:80%;
    justify-content:space-between;
    

    .separator {
      height:100%;
      width:0.125rem;
      background:var(--white);
    }

    .settings-link,button{
       flex:1;
       text-align:center;
       font-family: var(--headingFont);
       background:transparent;
       border:0;
       font-size:1rem;
       letter-spacing:1px;
       cursor: pointer;
       color:var(--white);
       background:var(--tertiary-100);
       padding:0.5rem 0;
       transition:var(--transition);

       &:hover{
         background:var(--tertiary-200);
       }
    }
 }

 .link-icon {
    height:4rem;
   width:2.5rem;
   position:relative;
    display:flex;
   align-items:center;
   justify-content:center;
   overflow:hidden;
 }

 .icon-bar {
  width:2.5rem;
  height:4px;
  background:var(--tertiary-100);
  position:absolute;
  bottom:0;
  left:-2.5rem;
  transition:var(--transition);
 }

 .link-icon:hover .icon-bar{
   left:0;
 }
 
 .cart-badge{
  position:absolute;
  top:0.7rem;
  font-size:0.7rem;
  width:18px;
  height:18px;
  background:var(--tertiary-200);
  color:var(--white);
  display:grid;
  place-items:center;
  border-radius:50%;
 }

 .wishlist-badge {
   position:absolute;
   right:0.2rem;
   top:50%;
  font-size:0.7rem;
  color:var(--tertiary-100);
 }


    .wishlist .icon {
   color:var(--tertiary-200);
   transition:var(--transition);
   
 }

 @media(max-width:62.8rem){
   .nav-down{
      .mobile-nav-content{
         position:fixed;
         display:flex;
         bottom:0;
         left:0;
         right:0;
         top:0;
         background:rgba(0,0,0,0.6);
         z-index:10;
         opacity: 0;
         transform:translateX(-100%);
         transition:var(--transition);

         &.active{
          transform:translateX(0%); 
          opacity: 1; 
         }

         .mobile-nav {
            display:flex;
            flex-direction:column;
            background:var(--white);
            width:70vh;
            position: relative;
            

            .close-btn{
               position:absolute;
               right:1.5rem;
               top:1.2rem;
               background:transparent;
               border:0;
               font-size:2rem;
               cursor: pointer;
               display:grid;
               place-items:center;

               &:hover {
                  background:var(--grey-100);
               }
            }

            .logo {
               margin-bottom:2rem;
               border-bottom:1px solid var(--grey-200);
               padding:1rem 2rem;
            }
            
            .link{
               padding:1rem 2rem;
               text-transform:uppercase;
               margin-bottom:1.7rem;
               color:var(--black);
               font-weight:600;
               transition:var(--transition);
               
               &:hover {
                  background:var(--grey-100);
               }
 
            }

            .other-links {
               display:flex;
               flex-direction:column;
               padding:1rem 2rem;
               border-top:1px solid var(--grey-200);
               .other-link {
                  margin-bottom:0.7rem;
                  color:var(--grey-300);

                  &:hover{
                     text-decoration:underline;
                     color:var(--grey-500);
                  }
               }

               .logout-btn {
                  background:0;
                  padding:0.5rem;
                  text-transform:uppercase;
                  border:0;
                  letter-spacing:1px;
                  cursor: pointer;

                   &:hover{
                     
                     background:var(--grey-200);
                  }
               }
            }

            .socials{
               display:flex;
               align-items:center;
               justify-content:center;
               gap:1rem;
               transition:var(--transition);

               .social{
                 color:var(--tertiary-200);
                 &:hover{
                  transform:scale(1.2);
                 }
               }
            }
         }
      }
   }
   .menu-btn{
      display:block;
       background:transparent;
       border:0;
       cursor: pointer;
      .icon{   
         font-size:1.7rem;
         
      }

   }
    .nav-center{
      display:none;
    }
 }

  @media(max-width:42.8rem){
   .nav-start{
      .logo{
         font-size:1.2rem;
      }
   }

   .nav-end{
      column-gap:0.1rem;
      .icon {
         font-size:1.2rem;
      }
   }
  }
`