import React from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";

// http://www.omdbapi.com/?i=tt3896198&apikey=89310e65
export default () => {
    const [movies, setMovies] = useState([0])
    const [searchTerm, setSearchTerm] = useState("")
    const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=89310e65'
    // const API_URL = 'http://www.omdbapi.com/?apikey=89310e65'

    const searchMovies = async (title) => {
     const response = await fetch(`${API_URL}&s=${title}`)
     const data = await response.json();
     setMovies(data.Search)
    }
    
    useEffect(()=> {
        searchMovies(searchTerm)
    },[])
    const moviesMap = movies && movies.map( (showMovies) => {
        return <MovieCard movieProp={showMovies}/>
    })

    return (
    <div className="app">
        <h1> Movie 6ixx</h1>
      <div className="search">
        <input 
        placeholder="Search for movies"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
        src={SearchIcon}
        alt="search"
        onClick={()=> searchMovies(searchTerm)}
        />
      </div>

      { movies ?
         ( movies && movies.length > 0 ? (moviesMap)
            :(<h2>We nuh Haff that</h2>))
        :(<h2>Search for any movie you want in the searchbar</h2>)}
            
        
        
    </div>
    ) 
    
}