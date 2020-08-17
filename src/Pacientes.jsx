import React, { Component } from 'react';
import {Table,Input,Label,Button,Modal,ModalBody,ModalHeader,ModalFooter,FormGroup} from 'reactstrap';
import { BrowserRouter as Link } from "react-router-dom";



const MODEL = 'cliente';

const API_URL = "http://localhost:3000/api/" + MODEL;
const HEADERS = new Headers({
  'Accept': 'application/json',
  'Content-Type': 'application/json'
});
class Pacientes extends Component {
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
      abierto:false,
    }
  
    this.cargaDatos = this.cargaDatos.bind(this);
    this.eliminar=this.eliminar.bind (this);
    this.actualizaInputs = this.actualizaInputs.bind(this);
    this.guardar=this.guardar.bind(this);
    this.editar=this.editar.bind(this);
    this.cerrar=this.cerrar.bind(this);

  } 

  
  
  eliminar(cliente_id){
    console.log("borrando "+ cliente_id);
    const opciones = {
      method: "DELETE",
      headers: HEADERS
    };
    const deleteURL = API_URL+'/'+cliente_id;
    
     
    fetch(deleteURL, opciones)
    .then(texto=> texto.json())
    .then(() => this.cargaDatos())
    
  }
  editar(cliente){
    console.log("editando cliente: ", cliente.nombre);
    this.setState({
      cliente_id: cliente.cliente_id,
      nombre: cliente.nombre,
      apellidos:cliente.apellidos,
      telefono:cliente.telefono,
      email: cliente.email,
      domicilio:cliente.domicilio,
      cuentaBancaria:cliente.cuentaBancaria,
      abierto:!this.state.abierto
      
    })}
  actualizaInputs = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
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
      method:  "PATCH",
      headers: HEADERS,
      body: JSON.stringify(cliente)
    };
    const desarURL =  API_URL+'/'+this.state.cliente_id
      
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
      abierto:!this.state.abierto
    }))
    .catch(error => console.log("se ha producido un error: ", error));

  }

  cerrar(){
    this.setState({

      abierto:!this.state.abierto

    })}



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
 
  render() {
    if (this.state.llista.length === 0) {
      return <h3>Cargando...</h3>
    }

    const filas = this.state.llista.map((el, i) => (
            <tr key={i}>
              <td>{el.nombre}</td>
              <td>{el.apellidos}</td>
              <td>{el.telefono}</td>
              <td>{el.email}</td>
              <td>{el.domicilio}</td>
              <td>{el.cuentaBancaria}</td>
              <td><Button color="danger"  onClick={()=>this.eliminar(el.cliente_id)}>Eliminar</Button></td>
              <td><Button color="primary" onClick={()=>this.editar(el)}>Editar</Button></td>
              

            </tr>
        ));


        function goNuevo(){ 
          window.location.href='http://localhost:3001/nuevo'  
      }
    return (
      <>


        <br />
        <br />
   
        <br />
        <Link to="/menu" style={{color:'white'}}> <p>Volver al menu principal</p></Link>
        <br />
        <br />

        <Table style={{color:'white'}}>
          <thead>
            <tr>


              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Telefono</th>
              <th>Email</th>
              <th>Domicilio</th>
              <th>Cuenta Bancaria</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filas}
          </tbody>
        </Table>
       <Modal isOpen={this.state.abierto}>
         <ModalHeader>
           Modificación
         </ModalHeader>
         <ModalBody>
          <FormGroup>
            <Label>Nombre</Label>
            <Input type='text' value={this.state.nombre} name="nombre" onChange={this.actualizaInputs}></Input>
          
          </FormGroup>
          <FormGroup>
            <Label>Apellidos</Label>
            <Input type='text' value={this.state.apellidos} name="apellidos" onChange={this.actualizaInputs}></Input>
          </FormGroup>
         
         <FormGroup>
            <Label>Teléfono</Label>
            <Input type='text' value={this.state.telefono} name="telefono" onChange={this.actualizaInputs}></Input>
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input type='text' value={this.state.email} name="email" onChange={this.actualizaInputs}></Input>
          </FormGroup>
          <FormGroup>
            <Label>Domicilio</Label>
            <Input type='text' value={this.state.domicilio} name="domicilio" onChange={this.actualizaInputs}></Input>
          </FormGroup>
          <FormGroup>
            <Label>Cuenta Bancaria</Label>
            <Input type='text' value={this.state.cuentaBancaria} name="cuentaBancaria" onChange={this.actualizaInputs}></Input>
          </FormGroup>
          </ModalBody>
         <ModalFooter>

           <Button color='success'  onClick={this.guardar}>Guardar</Button>
           <Button color='danger'  onClick={this.cerrar} >Cancelar</Button>


         </ModalFooter>
       </Modal>
        <br></br>


        <Button color='success'  onClick={goNuevo}>
         Añadir paciente
        </Button>






      </>
    )
  }
}
export default Pacientes;