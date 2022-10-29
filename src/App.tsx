/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import axios from "axios"

type BooksData = {
  id:string,
  items:string[],
  title:string,
  subtitle:string,
  authors:string,
  publisher:string,
  description:string,
  kind:string,
}

export function App(){
  
  const [books, setBooks] = useState<BooksData[]>([])
  const [search,setSearch] = useState('')
  const [inauthor,setInauthor] = useState('')
  const [keyApi, setKeyApi] = useState('AIzaSyCEw67iaWQJyudnMlBrjhLnx9WvgnW18qU')


  const handleSearch = () =>{
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}${inauthor}&key=${keyApi}`)
    .then(response => {
      setBooks(response.data)
      console.log(response.data)
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
    </>
  )
}
