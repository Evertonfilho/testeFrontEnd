import styled from "styled-components";

export const Container = styled.div`
    display: inline-block;
    width: 100%;
    height: 500px;
    background: var(--blue);
    padding: 20px;
    overflow: hidden;


    div{
        overflow: hidden;
    }
    
    .Card-image {
        
        img{
        width: 200px;
        height: 250px;
        overflow: hidden;
        margin-left: 30%;
        align-items: center;
        }
    }

    .Card-title{
        color: white;
    }

    .Card-author{

    }

    .Card-Description{
        color: white;
    }
    

`