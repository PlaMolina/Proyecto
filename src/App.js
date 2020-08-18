import React from "react";
import Vista from "./Vista";
import "./styles/App.css";
import Pacientes from './Pacientes';
import Calendario from './Calendario';
import Consulta from './Consulta';
import Menu from './Menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from './Form';
import NavBar from './NavBar'
import BotonNuevo from "./BotonNuevo";
import BotonCasita from './BotonCasita';

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
        
        <header className="App-header">
          <div> <b><NavBar nombre='Sergi' apellido='López' /> </b></div>
          <BotonCasita />
          <Route path="/menu" component={() => <Menu clase='Boton' />} />
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