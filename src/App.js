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
import BotonNuevo from "./BotonNuevo";

function App() {
  const loginContainer = () => (
    <>
      <div className="App">
        <header className="App-header">

          <Route path="/" component={Vista} />

    
        </header>
      </div>
    </>)
    
  const appContainer = () => (
    <>
      <div className="App">
      <div> <NavBar nombre='Alfonso' apellido='Martinez' /></div>
        <header className="App-header">
          {/*<Modal/>*/}          
          <Route path="/menu" component={()=><Menu clase='Boton' />} />
          <Route path="/pacientes" component={Pacientes} />
          <Route path="/calendario" component={Calendario} />
          <Route path="/consulta" component={Consulta} />
          <Route path="/formulario" component={Form} />
          <Route path="/nuevo" component={BotonNuevo} />


        </header>
      </div>
    </>)
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={loginContainer} />
          <Route component={appContainer} />
        </Switch>
      </Router>
    </>
  );
}
export default App;