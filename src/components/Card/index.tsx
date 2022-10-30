import { Container } from "./styles"

type ICard ={
  image?:any,
  title:string[],
  author:string[],
  description:string[]
}

export const Card = ({image,title,author,description}:ICard) => {
  return(
    <Container 
    className="Card"
    >
      <header className="Card-image">
      <img src={image} alt="" />
      <div className="Card-title">
      <h2 >{title}</h2>
      <div className="Card-author">
      <span >{author}</span>
      </div>
      </div>
      </header>
      <div className="Card-Description">
      <p>{description}</p>  
      </div>
        
    </Container>
  )
}


