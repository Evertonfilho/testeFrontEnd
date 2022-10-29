/* eslint-disable @typescript-eslint/no-unused-vars */
import { Key, useState } from "react"
import axios from "axios"

type BooksData = {
  id:string,
  volumeInfo:string
}


export function Books(){
    const [books, setBooks] = useState<BooksData[]>([])
    const [search,setSearch] = useState('')
    const [inauthor,setInauthor] = useState('')
  
  
    const handleSearch = () =>{
      const keyApi = 'AIzaSyCEw67iaWQJyudnMlBrjhLnx9WvgnW18qU'
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}${inauthor}&key=${keyApi}`)
      .then(response => {
        setBooks(response.data.items)
        console.log(response.data)
        console.log(response.data.volumeInfo)
      })
    }
  
    return(
      <>
      <h1>Google Books</h1>
      <input 
      type="text"
      placeholder="Digite o livro que deseja..."
      onChange={(e) => setSearch(e.target.value)}
      />
      <input 
      type="text"
      placeholder="Digite o Autor do livro..."
      onChange={(e) => setInauthor(e.target.value)}
      />
      <button onClick={handleSearch} >Buscar</button>
      <ul>
        {books.map((book:any , index: Key | null | undefined) => {
          return(
            <div 
            className="Items"
            key={index}
            >
            <div className="Item">
            <li  >
              <span >{book.volumeInfo.title}</span>
              <span > {book.volumeInfo.authors}</span>
              <span > {book.volumeInfo.authors}</span>
              <span > {book.volumeInfo.description}</span>
            </li>
            </div>
            </div>
          )
        })}
      </ul>
      </>
  )
}
