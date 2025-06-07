import styled from "styled-components";





export const SettingsWrapper = styled.div` 
.form-label{
 max-width:10rem;
}
.form-row {
   max-width:40rem;
   
}
.form-input {
  
    letter-spacing:1px;
    color:var(--grey-500);
}

margin-bottom:4rem;

.change-password {
    margin-top:3rem;
}

.btn-submit{
    background:transparent;
    border:0;
    cursor: pointer;
    letter-spacing:1px;
    background-color:var(--tertiary-100);
    color:var(--white);
    padding:0.4rem 1rem;

    &:hover {
        text-decoration:underline;
    }
}

h4{
    font-size:1.3rem;
    
}

`