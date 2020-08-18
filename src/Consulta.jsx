import React, { Component } from 'react';
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
export default Consulta;