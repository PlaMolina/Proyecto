/*import React, { Component } from 'react';
import {Table,Input,Label,Button,Modal,ModalBody,ModalHeader,ModalFooter,FormGroup} from 'reactstrap';
import { Link } from 'react-router-dom';

const MODEL = 'client_tratamiento_consulta';
const API_URL = "http://localhost:3000/api/" + MODEL;

const HEADERS = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
});

class Consulta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            llista: [],   
            consulta_id:'',    
            comentario:'',
            abierto:false,
        }
        this.cargaDatos = this.cargaDatos.bind(this);
       

    }
    componentDidMount() {
        this.cargaDatos();
    }
    cargaDatos() {
        const opcions = {
            method: "GET",
            headers: HEADERS
        };
        fetch(API_URL, opcions)
            .then(texto => texto.json())
            .then(datos => this.setState({ llista: datos }))
            .catch(error => console.log(error))
    }
    
    render() {
        if (this.state.llista.length === 0) {
            return <h3>Cargando...</h3>
        }
        //el .map convierte la llista en una nueva lista li
        const filas = this.state.llista.map((el, i) => (
            <tr key={i}>
                <td>{el.nombre}</td>
                <td>{el.nom}</td>
                <td>{el.tipo}</td>
                <td>{el.precio}</td>
                <td>{el.fecha}</td>
                <td>{el.lesion}</td>
               
            
            </tr>
        ));
        return (

            <>


            <br></br>
            <br></br>
            <br></br>
            <br></br>
                <Link to="/menu" style={{color:'white'}}>
                    <p>Volver al menu principal</p>
                </Link>


            <br></br>


                <Table style={{color:'white'}}>
                    <thead>
                        <tr>
                            <th>Cliente</th>
                            <th>Tratamiento</th>
                            <th>Tipo de terapia</th>
                            <th>Precio</th>
                            <th style={{width:'200px'}}>Fecha</th>
                            <th>Lesión</th>
                           
                        
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
export default Consulta;*/


import React, { Component } from 'react';
import {Table,Input,Label,Button,Modal,ModalBody,ModalHeader,ModalFooter,FormGroup} from 'reactstrap';
import { Link } from 'react-router-dom';
import iconoperfil from './img/iconoperfil.png';

const MODEL = 'client_tratamiento_consulta';
const API_URL = "http://localhost:3000/api/" + MODEL;

const HEADERS = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
});

class Consulta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            llista: [],
            consulta_id: '',
            comentario: '',
            abierto: false,
        }
        this.cargaDatos = this.cargaDatos.bind(this);
        this.cerrar=this.cerrar.bind(this);
        this.abrir=this.abrir.bind(this);


    }
    abrir(){
        this.setState({
    
          abierto:!this.state.abierto
    
        })}
    cerrar(){
        this.setState({
    
          abierto:!this.state.abierto
    
        })}

    componentDidMount() {
        this.cargaDatos();
    }
    cargaDatos() {
        const opcions = {
            method: "GET",
            headers: HEADERS
        };
        fetch(API_URL, opcions)
            .then(texto => texto.json())
            .then(datos => this.setState({ llista: datos }))
            .catch(error => console.log(error))
    }

    render() {
        if (this.state.llista.length === 0) {
            return <h3>Cargando...</h3>
        }
        //el .map convierte la llista en una nueva lista li
        const filas = this.state.llista.map((el, i) => (
            <tr key={i}>
                <td>{el.nombre}</td>
                <td>{el.nom}</td>
                <td>{el.tipo}</td>
                <td>{el.precio}</td>
                <td>{el.fecha}</td>
                <td>{el.lesion}</td>
                <td><Button color='info' onClick={this.abrir}>Expediente</Button></td>


            </tr>
        ));
        return (

            <>


                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <center><h2> Consultas </h2></center>

                <br></br>
                <br></br>

                <Table style={{ color: 'white' }}>
                    <thead>
                        <tr>
                            <th>Cliente</th>
                            <th>Tratamiento</th>
                            <th>Tipo de terapia</th>
                            <th>Precio</th>
                            <th style={{ width: '200px' }}>Fecha</th>
                            <th>Lesión</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {filas}
                    </tbody>
                </Table>
                <Modal isOpen={this.state.abierto}>
                    <ModalHeader>
                        Expediente: Lucía Barrera Cruz
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <img src={iconoperfil} alt=''></img>

                        </FormGroup>
                        <FormGroup>
                            <b><Label>Nombre: </Label></b> {" "}
                            <Label>  Lucía </Label>

                        </FormGroup>
                        <FormGroup>
                            <b><Label>Apellidos: </Label></b> {" "}
                            <Label> Barrera Cruz</Label>
                        </FormGroup>

                        <FormGroup>
                            <b><Label>Teléfono: </Label></b> {" "}
                            <Label> 672361700 </Label>
                        </FormGroup>
                        <FormGroup>
                            <b><Label>Email: </Label></b> {" "}
                            <Label> Lucia@gmail.com </Label>
                        </FormGroup>
                        <FormGroup>
                            <b> <Label>Domicilio: </Label></b> {" "}
                            <Label> C/Valentin escalas </Label>
                        </FormGroup>
                        <FormGroup>
                           <b> <Label>Cuenta Bancaria: </Label> </b>
                            <Label> 200 345 789 235 </Label>
                        </FormGroup>
                        <hr></hr>
                        <FormGroup>
                           <b> <Label>Informe Médico: </Label> </b>
                           <Link> InformeMedico.pdf </Link>
                        </FormGroup>
                        <FormGroup>
                           <b> <Label>Informe Consulta: </Label> </b>
                           <Link> InformeConsulta.pdf </Link>
                        </FormGroup>
                        <FormGroup>
                           <b> <Label>Radiografias: </Label> </b>
                           <Link> Radiografias.png </Link>
                        </FormGroup>
                        <FormGroup>
                           <b> <Label>Tratamiento: </Label> </b>
                           <Link> Tratamiento.pdf </Link>
                        </FormGroup>
                        <FormGroup>
                            <b><Label>Rehabilitación: </Label> </b> {"  "}
                            <select>
                                <option>Si</option>
                                <option>No</option>
                            </select>
                             
                        </FormGroup>
                        <FormGroup>
                           <b> <Label>Estadisticas: </Label> </b>
                           <Link> Estadisticas.xlsx </Link>
                        </FormGroup>
                        <FormGroup>
                           <b> <Label>Gráficos evolución: </Label> </b>
                           <Link> Graficos.xlsx </Link>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>

                        
                        <Button color='info' onClick={this.cerrar}>OK</Button>


                    </ModalFooter>
                </Modal>

            </>
        )
    }
}
export default Consulta;