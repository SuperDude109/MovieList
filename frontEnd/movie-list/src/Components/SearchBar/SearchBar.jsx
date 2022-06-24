// import './SearchBar.css';
import { useState, useEffect } from 'react';
import './SearchBar.css'
function SearchBar() {
  let [list,setList] = useState([])
  let [foundMatches,setFoundMatches] = useState([])
  let [searchValue,setSearchValue] = useState("")
  useEffect(() => {
    setTimeout(updateStuff,2000)
    function updateStuff(){
      fetch("http://localhost:3001/movies")//this is a redundant fetch to make sure the list is upto date with the server
      .then(response => response.json())
      .then(data => {
        setList([...data])
      })
    }

    setFoundMatches([...list.map(item => item.title).filter(str => str.toUpperCase().includes(searchValue.toUpperCase()))])
  }, [searchValue,list]);



  async function loop(){
    for(let index = 0;index<10;index+=1){
      
        
      console.log("updated the list!")
    }
  }
  return (
    <div className="search-bar-div">
      <input id="mySearchBar" placeholder='Search or Add Movies Here!' onInput={()=>{setSearchValue(document.getElementById("mySearchBar").value)}}></input>
      <button onClick={()=>postData()}>Click to Add Movie</button>
      <ol className="listOfMovies">{foundMatches.map(match => (
        <li key={Math.random()} className='movie-item'>
          <div className='movie-name'>{match}</div>  
          <button className="delete" onClick={()=>deleteMovie(match)}>X</button>
        </li>
      ))}
      </ol>
    </div>
  );

async function deleteMovie(name){
  console.log("We are deleting things")
  fetch("http://localhost:3001/movies",{
    method: "DELETE",
    headers: {'Content-Type': 'application/json'},
    body:  JSON.stringify({title: name})
  })
    setList((data)=>data.filter(info => info.title !== name))
}

  async function postData(){//this is a hoisted function
    fetch("http://localhost:3001/movies",{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body:  JSON.stringify({title: searchValue})
      })
  }
}
export default SearchBar;