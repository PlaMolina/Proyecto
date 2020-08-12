import React from 'react';
//import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';



function Pacientes() {
    return (
        
        <div>
            <Link to="/menu">
                    <h1>Volver al menu principal</h1>
                </Link>
            <li>Lunes</li>
            <li>Martes</li>
            <li>Miercoles</li>
            <li>Jueves</li>
            <li>Viernes</li>
            
                
            
            
        </div>
    )
}

export default Pacientes;