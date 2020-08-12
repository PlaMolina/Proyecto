import React, { Component } from 'react';
import { Table } from 'reactstrap';

const MODEL = 'consulta';

const API_URL = "http://localhost:3000/api/" + MODEL;

const HEADERS = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
});

class Consulta extends Component {
    constructor(props) {
        super(props);

        this.state = {
            llista: []
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
                <td>{el.comentario}</td>
                <td>{el.precio}</td>
                <td>{el.fecha}</td>
                <td>{el.pago}</td>
                <td>{el.lesion}</td>
                <td>{el.comentario}</td>
                <td>{el.estado}</td>

            </tr>
        ));



        return (
            <>
                <h1>{MODEL}</h1>
                <Table>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Precio</th>
                            <th>Fecha</th>
                            <th>Pago</th>
                            <th>Tipo de Lesión</th>
                            <th>Comentario</th>
                            <th>Estado consulta</th>
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