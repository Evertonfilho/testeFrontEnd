import { Container } from "./styles"



export const Card = (index:any,image:any,title:string,author:string,description:string) => {
  return(
    <Container>
      <div {...index}>
      <img src={image} alt="" />
      <span >{title}</span>
      <span >{author}</span>
      <span >{description}</span>  
      </div>  
    </Container>
  )
}