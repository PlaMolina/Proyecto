import React from 'react';
import { Form, Button, FormGroup, FormLabel, FormControl } from 'reactstrap';

class Counter extends Component {
    render() {

        return(
            <Form>
                <FormGroup controlId="exampleForm.ControlInput1">
                    <FormLabel> Nombre: </FormLabel>
                    <FormControl type="text"/>
                </FormGroup>
                <FormGroup controlId="exampleForm.ControlSelect1">
                    <FormLabel>Tipo: </FormLabel>
                    <FormControl as="select">
                        <option>Fisioterapia</option>
                        <option>Ejemplo 1</option>
                        <option>Ejemplo 2</option>
                        <option>Falkjdhfnaldshfa</option>
                        <option>adjkfblaksdhnfa</option>
                    </FormControl>
                </FormGroup>
                <FormGroup controlId="exampleForm.ControlSelect2">
                    <FormLabel>Especialista: </FormLabel>
                    <FormControl as="select">
                        <option>Especialista 1</option>
                        <option>Especialista 2</option>
                        <option>Especialista 3</option>
                        <option>Especialista 4</option>
                        <option>Especialista 5</option>
                    </FormControl>
                </FormGroup>
                <FormGroup controlId="exampleForm.ControlTextarea1">
                    <FormLabel>Comentario para la consulta:</FormLabel>
                    <FormControl as="textarea" rows="5" />
                </FormGroup>
                <FormGroup>
                    <Button> Crear Consulta </Button>
                </FormGroup>
            </Form>
        )
    }
}
export default Counter;