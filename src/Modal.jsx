import React, { useState } from 'react';
import "./styles/App.css";
//import { render } from 'react-dom';
import { Button } from 'reactstrap';



function Modal() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button onClick={handleShow}>
                Añadir nuevo
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Cabecera</Modal.Title>
                </Modal.Header>

                <Modal.Body>bla bla</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Guardar
                    </Button>
                </Modal.Footer>

            </Modal>
        </>
    )
    
}
export default Modal;