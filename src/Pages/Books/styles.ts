import styled from "styled-components";

export const Container = styled.header`
    position: absolute;
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    height: 90px;
    display: flex;
    align-items: center;
    background: var(--midnight-purple);

    div,h1,input{
      background: var(--midnight-purple);
    }

    h1{
      margin-top:20px;
      margin-bottom: 10px;
      color: var(--copper);
    }

    .input-book{
      margin-bottom: 10px;
    }

    input{
      width: 230px;
      height:50px;
      margin: 5px;
      font-size: 16px;
      font-weight:bold;
      border: var(--midnight-purple);
      color: white;
    }

    button{
      width: 180px;
      height: 30px;
      border-radius: 10px;
      margin-bottom: 20px;
      font-family: 'Quicksand',sans-serif;
      font-size: 18px;
      background: var(--copper);
    }
    button:hover{
    box-shadow:
                1px 1px var(--old-gold),
                2px 2px var(--old-gold),
                3px 3px var(--old-gold);
        -webkit-transform: translateX(-3px);
        transform: translateX(-5px);
  }


  @media screen and (min-width:480px){
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    div{
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    }

    div,h1,input{
      background: var(--midnight-purple);
    }

    h1{
      font-size: 22px;
      color: var(--copper);
    }


    input{
      width: 150px;
      height:50px;
      margin-left: 30px;
      font-size: 13px;
      font-weight:bold;
      border: var(--midnight-purple);
      color: white;
    }

    button{
      width: 120px;
      height: 30px;
      border-radius: 5px;
      margin-bottom: 5px;
      margin-right: 15px;
      font-family: 'Quicksand',sans-serif;
      font-size: 15px;
      background: var(--copper);
    }
    button:hover{
    box-shadow:
                1px 1px var(--old-gold),
                2px 2px var(--old-gold),
                3px 3px var(--old-gold);
        -webkit-transform: translateX(-3px);
        transform: translateX(-5px);
  }
  }

  @media screen and (min-width:1000px){
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    div{
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    }

    div,h1,input{
      background: var(--midnight-purple);
    }

    h1{
      font-size: 28px;
      color: var(--copper);
    }


    input{
      width: 150px;
      height:50px;
      margin-left: 30px;
      font-size: 15px;
      font-weight:bold;
      border: var(--midnight-purple);
      color: white;
    }

    button{
      width: 120px;
      height: 30px;
      border-radius: 5px;
      margin-bottom: 5px;
      margin-right: 15px;
      font-family: 'Quicksand',sans-serif;
      font-size: 16px;
      background: var(--copper);
    }
    button:hover{
    box-shadow:
                1px 1px var(--old-gold),
                2px 2px var(--old-gold),
                3px 3px var(--old-gold);
        -webkit-transform: translateX(-3px);
        transform: translateX(-5px);
  }
  }
  @media screen and (min-width:1400px){
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    div{
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    }

    div,h1,input{
      background: var(--midnight-purple);
    }

    h1{
      font-size: 32px;
      color: var(--copper);
    }


    input{
      width: 200px;
      height:50px;
      font-size: 20px;
      font-weight:bold;
      border: var(--midnight-purple);
      color: white;
    }

    button{
      width: 150px;
      height: 50px;
      border-radius: 10px;
      margin-bottom: 5px;
      margin-right: 15px;
      font-family: 'Quicksand',sans-serif;
      font-size: 20px;
      background: var(--copper);
    }
    button:hover{
    box-shadow:
                1px 1px var(--old-gold),
                2px 2px var(--old-gold),
                3px 3px var(--old-gold);
        -webkit-transform: translateX(-3px);
        transform: translateX(-5px);
  }
  }
  @media screen and (min-width:2200px){
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    div{
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    }

    div,h1,input{
      background: var(--midnight-purple);
    }

    h1{
      font-size: 40px;
      color: var(--copper);
    }


    input{
      width: 300px;
      height:50px;
      font-size: 25px;
      font-weight:bold;
      border: var(--midnight-purple);
      color: white;
    }

    button{
      width: 180px;
      height: 50px;
      border-radius: 10px;
      margin-bottom: 5px;
      margin-right: 30px;
      font-family: 'Quicksand',sans-serif;
      font-size: 27px;
      background: var(--copper);
    }
    button:hover{
    box-shadow:
                1px 1px var(--old-gold),
                2px 2px var(--old-gold),
                3px 3px var(--old-gold);
        -webkit-transform: translateX(-3px);
        transform: translateX(-5px);
  }
  }

`


export const CardBooks = styled.main`
  display: grid;
  grid-template-columns: repeat(1,1fr);
  gap: 10px;
  background: var(--ivory);
  section{
    margin: 10px 5px 0 10px;
  }




  @media screen and (min-width:700px){
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 20px;
  background: var(--ivory);
  section{
    margin: 10px 5px 0 10px;
  }
  }

  @media screen and (min-width:1000px){
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 20px;
  background: var(--ivory);
  section{
    margin: 10px 5px 0 10px;
  }
  }

  @media screen and (min-width:1400px){
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 20px;
  background: var(--ivory);
  section{
    margin: 10px 5px 0 10px;
  }
  }

  @media screen and (min-width:2200px){
  display: grid;
  grid-template-columns: repeat(6,1fr);
  gap: 20px;
  background: var(--ivory);
  section{
    margin: 10px 5px 0 10px;
  }
  }
  
`