import React from 'react';
import { Button } from 'reactstrap';
import './styles/Boton.css'



function Menu (){
    function goUrl(){
        window.location.href='http://localhost:3000/pacientes'  
    }
    return (
        <div>
            
            <div className="Boton" onClick={goUrl}>Pacientes</div>{' '}
            <div className="Boton">Calendario</div>{' '}
            <div className="Boton">Consultas</div>{' '}
            
        </div>
    
    )
}

export default Menu;
