import React, { Component } from 'react';
import Calendar from 'react-calendar';
import {Button} from 'reactstrap';
import { BrowserRouter as Link } from "react-router-dom";


export default class Calendario extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  alerta(){

    alert('Visita la pagina consultas.')
  }

  render() {
    function goConsulta(){ 
        window.location.href='http://localhost:3001/consulta'  
    }
    return (
      <>

      <br></br>
      <br></br>
      <br></br>
      <Link to="/menu" style={{color:'white'}}> <p>Volver al menu principal</p></Link>

      <div style={{marginLeft:'1%'}}>
        <Calendar 
          onChange={this.onChange}
          value={this.state.date}
          onClickDay={this.alerta}
        />
        

        <Button color='primary'  onClick={goConsulta}>
         Consultas
        </Button>

      </div>



      </>
    );
  }
} 