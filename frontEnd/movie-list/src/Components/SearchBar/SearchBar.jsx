// import './SearchBar.css';
import { useState, useEffect } from 'react';
function SearchBar({listToSearch}) {
  let [foundMatches,setFoundMatches] = useState([])
  let [searchValue,setSearchValue] = useState("")
  useEffect(() => {
    setFoundMatches([...listToSearch.map(item => item.title).filter(str => str.toUpperCase().includes(searchValue.toUpperCase()))])
  }, [searchValue]);
  return (
    <div className="search-bar-div">
      <input id="mySearchBar" placeholder='Search for Movies Here!' onInput={()=>{setSearchValue(document.getElementById("mySearchBar").value)}}></input>
      <ol className="listOfMovies">{foundMatches.map(match => (<li>{match}</li>))}</ol>
    </div>
  );
}
export default SearchBar;