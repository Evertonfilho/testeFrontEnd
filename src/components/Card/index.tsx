/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container } from "./styles"
import React, { useState } from "react";
import ReactDOM from "react-dom";
type DataCard ={
  image?:any,
  title:string[],
  author:string[],
  description:string[]
}

export const Card = ({image,title,author,description}:DataCard) => {

  return(
    <Container 
    className="Card"
    >
      <header className="Card-image">
      <img src={image} alt="" />
      </header>
      <div className="Card-title">
      <h2 >{title}</h2>
      </div>
      <div className="Card-author">
      <span > Autor :  <p>{author}</p></span>
      </div>
      <div className="Card-description">
      <span > Descrição :  <p>{description}</p></span>
      </div>
    </Container>
  )
}


