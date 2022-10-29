import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  :root{
    --blue:#20202D;
    --blue-secundary: #002141;
    --grey: #11BF9F;
    scroll-behavior: smooth;
  }

  html, body {
    width: 100%;
     height: 100%; 
    } 

  *{
    padding:0;
    margin:0;
    box-sizing: border-box;
    background: var(--blue);
  }

  body{
    padding:0;
    margin:0;
    box-sizing: border-box;
  }

  body,input,button,textarea,p,a{
    font-family: 'Quicksand',sans-serif;
    font-weight: 400;
    list-style: none;
    text-decoration: none;
  }

  button{ 
    cursor: pointer;
    transition: filter 0.2s;
    &:hover{
      filter: brightness(0.9);
    }
  }
  
  input{
    box-shadow: 0 0 0 0;
    outline: 0;
  }

`