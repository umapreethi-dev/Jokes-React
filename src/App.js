import logo from './logo.svg';
import './App.css';
import Joke from './Joke'
import jokesData from "./jokesData"

function App() {
 const jokeComponents = jokesData.map(joke =>{
   return (
     <Joke  question={joke.question} punchLine={joke.punchLine}/>
   )
 })




  return (
    <div className="body">
      <h1>Jokes</h1>
      {jokeComponents }
    </div>
  );
}

export default App;
