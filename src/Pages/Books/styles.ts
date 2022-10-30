import styled from "styled-components";

export const Container = styled.header`

    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: var(--blue-secundary);

    div{
      background: var(--blue-secundary);
    }

    h1{
      background: var(--blue-secundary);
      color: white;
    }

    input{
      width: 230px;
      height:50px;
      margin: 5px;
      font-size: 16px;
      font-weight:bold;
      background: var(--blue-secundary);
      border: var(--blue-secundary);
      color: white;
    }

    button{
      width: 180px;
      height: 30px;
      background: white;
      border: white;
      border-radius: 10px;
      font-family: 'Quicksand',sans-serif;
      font-size: 18px;
    }

`


export const CardBooks = styled.main`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 20px;
  background: var(--blue-secundary);
  margin: 20px;
`