/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Key, useState } from "react"
import axios from "axios"
import {CardBooks, Container} from './styles' 
import { Card } from "../../components/Card"



type BooksData = {
  id:string,
  volumeInfo: {
    title:string,
    authors:string,
    description:string,
    imageLinks:{
      thumbnail: HTMLElement,
    }
    
  }
}


export function Books(){
    const [books, setBooks] = useState<BooksData[]>([])
    const [search,setSearch] = useState('')
    const [inauthor,setInauthor] = useState('')

  
    const handleSearch = () =>{
      const keyApi = 'AIzaSyCEw67iaWQJyudnMlBrjhLnx9WvgnW18qU'
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}${inauthor}&key=${keyApi}&maxResults=40`)
      .then(response => {
        setBooks(  response.data.items)
        console.log(response.data)
        console.log(response.data.volumeInfo)
      })
    }
  
    return(
      <>
      <Container>
      <h1>Google Books</h1>
      <div className="Header">
      <input
      type="text"
      placeholder="Digite o livro que deseja..."
      onChange={(e) => setSearch(e.target.value)} />
      <input
        type="text"
        placeholder="Digite o Autor do livro..."
        onChange={(e) => setInauthor(e.target.value)} />
        <button onClick={handleSearch}>Buscar</button>
      </div>
      </Container>
      <CardBooks>
        <div>
        {books.map((book:any , index: Key | null | undefined) => {
          try{
            return(
              <Card 
              index={index} 
              image={book.volumeInfo.imageLinks.thumbnail}
              title={book.volumeInfo.title}
              author={book.volumeInfo.authors}
              description={book.volumeInfo.description}
              /> 
            )
          }
          catch(err){
            return(
              <Card 
              index={index} 
              image={"assets/semImagem.png"}
              title={book.volumeInfo.title}
              author={book.volumeInfo.authors}
              description={book.volumeInfo.description}
              /> 
            )
          }


          
        })}
        </div>
      </CardBooks>
      </>
  )
}

