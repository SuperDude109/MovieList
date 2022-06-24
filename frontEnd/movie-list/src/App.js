import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import SearchBar from './Components/SearchBar/SearchBar';

const movies = []

function App() {
  let [movieList,setMovieList]= useState([])
  useEffect(() => {
    fetch("http://localhost:3001/movies")
    .then(response => response.json())
    .then(data => {
      setMovieList([...data])})
  }, []);

  return (
    <div className="App">
      <header>
          Movie List
      </header>
      <div>
        <SearchBar listToSearch={movieList}/>
      </div>
    </div>
  );
}

export default App;
