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
      <div className="header-container">
      <h1>World Of Books</h1>
      <div className="inputs-header">
      <input
      className="input-book"
      type="text"
      placeholder="Digite o livro que deseja..."
      onChange={(e) => setSearch(e.target.value)} />
      <input
        className="input-author"
        type="text"
        placeholder="Digite o autor do livro..."
        onChange={(e) => setInauthor(e.target.value)} />
      </div>

        <button 
        type="submit"
        onClick={handleSearch}
        >
          Buscar
        </button>
      </div>
      </Container>
      <CardBooks>
        {books.map((book:any , index: Key | null | undefined) => {
          try{
            return(
              <section key={index}>
              <Card 
                  image={book.volumeInfo.imageLinks.thumbnail}
                  title={book.volumeInfo.title}
                  author={book.volumeInfo.authors}
                  description={book.volumeInfo.description}
              /> 
              </section>
            )
          }
          catch(err){
            return(
              <section key={index}>
              <Card 
              image={"assets/semImagem.png"}
              title={book.volumeInfo.title}
              author={book.volumeInfo.authors}
              description={book.volumeInfo.description}
              /> 
              </section>
            )
          }


          
        })}
      </CardBooks>
      </>
  )
}

