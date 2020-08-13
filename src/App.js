import React from "react";
//import Logo from "./Logo";
import Vista from "./Vista";
import "./styles/App.css";
//import Alumnes from './Alumnes.js';
//import Login from './Login';
//import Component from '.Component';
import Pacientes from './Pacientes';
import Calendario from './Calendario';
import Consulta from './Consulta';
import Menu from './Menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Counter from './Counter';
import Form from './Form';
//import Modal from './Modal';
import NavBar from './NavBar'

function App() {
  return (
    <>
    <NavBar nombre='Alfonso' apellido= 'Martinez'/>
    <Router>
      <div className="App">
        <header className="App-header">
        {/*<Modal/>*/}
          <Switch>
            <Route path="/" exact component={Vista}/>
            <Route path="/menu" component={Menu}/>
            <Route path="/pacientes" component={Pacientes} />
            <Route path="/calendario" component={Calendario} />
            <Route path="/consulta" component={Consulta} />
            <Route path="/formulario" component={Form}/>
          </Switch>
        </header>

      </div>
    </Router>
    </>
  );
}



export default App;
