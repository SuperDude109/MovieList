import logo from './logo.svg';
import './App.css';
const movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

function App() {
  return (
    <div className="App">
      <header>
          Movie List
      </header>
      <div>
        <ol>{movies.map((movie,index) => {return (<li key = {index}>{movie.title}</li>)})}</ol>
      </div>
    </div>
  );
}

export default App;
