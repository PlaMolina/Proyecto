
import React, { Component } from 'react';
import {Table,Input,Label,Button} from 'reactstrap';

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
      cuentaBancaria:''
    }
    this.cargaDatos = this.cargaDatos.bind(this);
    this.eliminar=this.eliminar.bind (this);
 
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

 

  render() {
    if (this.state.llista.length === 0) {
      return <h3>Cargando...</h3>
    }

    const filas = this.state.llista.map((el, i) => (
            <tr key={i}>
              <td>{el.cliente_id}</td>
              <td>{el.nombre}</td>
              <td>{el.apellidos}</td>
              <td>{el.telefono}</td>
              <td>{el.email}</td>
              <td>{el.domicilio}</td>
              <td>{el.cuentaBancaria}</td>
              <td><Button color="danger"  onClick={()=>this.eliminar(el.cliente_id)}>Eliminar</Button></td>
              <td><Button color="primary" >Editar</Button></td>

            </tr>
        ));
        
    return (
      <>
     
       
        <br />
        <br />
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Telefono</th>
              <th>Email</th>
              <th>Domicilio</th>
              <th>Cuenta Bancaria</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filas}
          </tbody>
        </Table>
       
      </>
    )

  }
}


export default Pacientes;