import React from "react";
import logo from "./assets/images/logo.svg";
import "./assets/css/App.css";

// importo mis componentes
import MiComponente from "./components/MiComponente";
import Recetas from "./components/Recetas";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload :)
        </p>
        <section className="componentes">
          <MiComponente />
          <Recetas />
        </section>
      </header>
    </div>
  );
}

export default App;
