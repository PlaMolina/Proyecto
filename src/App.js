// Dependencias generales
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import Login from './Login'
import Alumnes from "./Alumnes";
//import Gato from './Gato';
import Welcome from './Welcome';
import './App.css';
import { Button } from "reactstrap";
import Calendar from 'react-calendar';

// Páginas internas

function Home() {
  return (<h2 className='text'>Bienvenido a tu gestión de datos!</h2>
          )
}
function Pacientes() {
  return(<>
          <Alumnes/>
        </>)
}

function Calendario() {
  return (<>
    <Calendar/>
  </>)
}

function Consultas() {
  return (<><p>hola</p></>);
}

// Función del router
function AppRouter() {

  let estiloBotonH={fontSize:'25px',textAlign: 'center', backgroundColor: '#eea9f5',width:'140px',height:'90px',
                    borderColor:'black', borderWidth:'1px', display:'none'}

  let estiloBotonP={fontSize:'25px',textAlign: 'center', backgroundColor: ' #9ab7f3',width:'140px',height:'90px',
                    borderColor:' black', borderWidth:'1px'}

  let estiloBotonC={fontSize:'25px',textAlign: 'center', backgroundColor: '#f3ba8c',width:'140px',height:'90px',
                    borderColor:'black', borderWidth:'1px'}

  let estiloBotonCa={fontSize:'25px',textAlign: 'center', backgroundColor: '#a1f39a',width:'140px',height:'90px',
                    borderColor:'black', borderWidth:'1px'}
              
              
  return (
    <>

    <div className={'fondo'}>
      
    <Welcome/>

    <div className={'fondo'}>
    <Router >
      
      <div >
        {/*Menú de navegación*/}
        <nav>
          
        <div className={'boton'}>

            <div  className={'boton'}>
            <Button style={estiloBotonH} >
              <Link to="/" className='texto-botones'>Home</Link>
            </Button>
            </div>
            <div  className={'boton'}>
            <Button style={estiloBotonP}>
              <Link to="/Pacientes/" className='texto-botones'>Pacientes</Link>
            </Button>
            </div >
            <div  className={'boton'}>
            <Button style={estiloBotonC}>
              <Link to="/Calendario/" className='texto-botones'>Calendario</Link>
              </Button>
              </div>
              <div className={'boton'}>
            <Button style={estiloBotonCa}>
              <Link to="/Consultas/"className='texto-botones'>Consultas</Link>
            </Button>
            </div>
        </div>
        </nav>
      {/*Anclado de rutas al contenido*/}
        <Route path="/" exact component={Home}/>
        <Route path="/Pacientes/" component={Pacientes} />
        <Route path="/Calendario/" component={Calendario} />
        <Route path="/Consultas/" component={Consultas} />
      </div>
      
    </Router>
    </div>
    </div>

    </>
  );
}
export default AppRouter;