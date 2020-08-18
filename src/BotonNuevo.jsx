import React, { Component } from 'react';
import {FormGroup,Label,Input, Button} from 'reactstrap';
import { BrowserRouter as Link } from "react-router-dom";

const MODEL = 'cliente';

const API_URL = "http://localhost:3000/api/" + MODEL;

const HEADERS = new Headers({
  'Accept': 'application/json',
  'Content-Type': 'application/json'
});

class BotonNuevo extends Component {

    constructor(props) {
        super(props);
        this.state = {
          llista: [],
          cliente_id: 0,
          nombre: '',
          apellidos: '',
          telefono:'',
          email:'',
          domicilio:'',
          cuentaBancaria:'',
          
        }
      
        this.cargaDatos = this.cargaDatos.bind(this);
        this.actualizaInputs = this.actualizaInputs.bind(this);
        this.guardar=this.guardar.bind(this);
        
       
      } 



    guardar(){
        const cliente = {
          nombre: this.state.nombre,
          apellidos:this.state.apellidos,
          telefono:this.state.telefono,
          email: this.state.email,
          domicilio:this.state.domicilio,
          cuentaBancaria:this.cuentaBancaria
          
        };
    
        const opcions = {
          method:  "POST",
          headers: HEADERS,
          body: JSON.stringify(cliente)
        };
    
        const desarURL =  API_URL
          
    
        fetch(desarURL, opcions)
        
        .then(() => this.cargaDatos())
        .then(() => this.setState({
          cliente_id: 0,
          nombre: '',
          apellidos:'',
          telefono:'',
          email: '',
          domicilio:'',
          cuentaBancaria:'',
          
        }))
        .catch(error => console.log("se ha producido un error: ", error));
        alert('Guardado!')
        window.location.href = "/pacientes"
    
      }

      actualizaInputs = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
      }

      componentDidMount(){
        this.cargaDatos();
      }
    
      cargaDatos(){
        const opciones = {
          method: "GET",
          headers: HEADERS,
        };
        
        fetch(API_URL, opciones)
        .then(texto => texto.json())
        .then(datos => this.setState({llista: datos}))
     
      }
    
     
     
render (){

    return(
        <>
        
        <div>
        
        <br></br>
        <br></br>
        <br></br>
        <br></br>
          <center><h2>Añadir Pacientes </h2></center>

      <FormGroup className='contenedorNuevo'>
        <Label>Nombre</Label>
        <Input type='text'  name="nombre" value={this.state.nombre} onChange={this.actualizaInputs} ></Input>
      </FormGroup>
       

      <FormGroup className='contenedorNuevo'>
        <Label>Apellidos</Label>
        <Input type='text' name="apellidos" value={this.state.apellidos} onChange={this.actualizaInputs} ></Input>
      </FormGroup>

     
     <FormGroup className='contenedorNuevo'>
        <Label>Teléfono</Label>
        <Input type='text' name="telefono" value={this.state.telefono}  onChange={this.actualizaInputs}></Input>
      </FormGroup>

      <FormGroup className='contenedorNuevo'>
        <Label>Email</Label>
        <Input type='text' name="email" value={this.state.email} onChange={this.actualizaInputs}></Input>
      </FormGroup>

      <FormGroup className='contenedorNuevo'>
        <Label>Domicilio</Label>
        <Input type='text'  name="domicilio" value={this.state.domicilio} onChange={this.actualizaInputs}></Input>
      </FormGroup>

      <FormGroup className='contenedorNuevo'>
        <Label>Cuenta Bancaria</Label>
        <Input type='text' name="cuentaBancaria" value={this.state.cuentaBancaria} onChange={this.actualizaInputs} ></Input>
      </FormGroup>
     
      <Button color='danger' onClick={ () => window.location.href = "/pacientes" }>Cancelar</Button> {"  "}
      <Button color='success' onClick={this.guardar}>Guardar</Button>
      
      </div>
      </>
    )
}
}

export default BotonNuevo