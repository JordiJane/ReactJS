import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//Importar componentes
import MiComponente from './components/MiComponentes';

function HolaMundo(nombre, edad) {

  var presentacion = <div>
    <h2> Hola, soy {nombre}</h2>
    <h3> Tengo {edad} años </h3>
    </div>
  return presentacion
}

function App() {

  var nombre = "Jordi Jane"
  var edad = "22"

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> Jaume Bonito.
        </p>
          {HolaMundo(nombre,edad)}
        {
          alert("hola  Tor!")
        }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section className="componentes">

        <MiComponente/>
      </section>
    </div>
  );
}

export default App;
