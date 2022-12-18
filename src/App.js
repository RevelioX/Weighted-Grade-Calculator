
import './App.css';
import Theader from "./components/Theader.js"
import Main from "./components/Main.js"
import {Route, Routes, Link} from 'react-router-dom';

function HelloWorld(){
  return (
  <div>
    <p>Hola Mundo!</p>
  </div>)
}

function App() {
  return (
    <div className="App">
      <Theader></Theader>
      <Main/>
      <Link to='/'>Enlace Hacia</Link>
    </div>
  );
}

export default App;
