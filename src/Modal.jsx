/*import React, { useState } from 'react';
import "./styles/App.css";
//import { render } from 'react-dom';
import { Button } from 'reactstrap';
import Modal from "react-bootstrap/Modal";
import ModalBody from 'react-bootstrap/Modal.Body';
import ModalHeader from 'react-bootstrap/Modal.Header';
import ModalFooter from 'react-bootstrap/Modal.Footer';
import ModalTitle from 'react-bootstrap/Modal.Title';
import ModalFooter from 'react-bootstrap/Modal.Footer';



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
                <ModalHeader closeButton>
                    <ModalTitle>Cabecera</ModalTitle>
                </ModalHeader>

                <ModalBody>bla bla</ModalBody>
                <ModalFooter>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Guardar
                    </Button>
                </ModalFooter>

            </Modal>
        </>
    )
    
}
export default Modal;*/