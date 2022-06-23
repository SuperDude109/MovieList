import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';


const movies = []

function App() {
  let [movieList,setMovieList]= useState([])
  useEffect(() => {
    fetch("http://localhost:3001/movies")
    .then(response => response.json())
    .then(data => {
      console.log("Here is the data",data)
      setMovieList([...data])})
  }, []);

  return (
    <div className="App">
      <header>
          Movie List
      </header>
      <div>
        <ol>{movieList.map((movie,index) => {return (<li key = {index}>{movie.title}</li>)})}</ol>
      </div>
    </div>
  );
}

export default App;
