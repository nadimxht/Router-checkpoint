import React ,{useState}from 'react'
import {moviesList} from '../assets/Data'
import {Link} from 'react-router-dom'
import List from './List';
import Search from './Search';
export default function Home() {
    const [movies , setMovies]=useState(moviesList);
    const [searchWord , setSearchWord]=useState('')
  return (
    <div>
      <Search setSearchWord={setSearchWord}  />
       <List moviesList={searchWord ?movies.filter(e=>e.title.toLowerCase().includes(searchWord.toLowerCase())):movies} />
    </div>
  )
}
