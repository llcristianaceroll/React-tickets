//import './App.css';
import Form  from "./Form";

const movies = [
  {
    name : "Avenger",
    available : 5,
  },
  {
    name : "Terminator",
    available : 10,
  },
];


function App() {
  return (
  // <div className="App">
  <div>
      <h2>Peliculas</h2>
      
      {movies.map(movie =>(
        <Form movie={movie}/>     
           
      ))}
  </div>
  // </div>
  );
}

export default App;
