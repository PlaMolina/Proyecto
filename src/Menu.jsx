import React from 'react';
import { Button } from 'reactstrap';
import './styles/Boton.css'



function Menu (){
    function goUrl(){
        window.location.href='http://localhost:3001/pacientes'  
    }
    function goUrl2(){
        window.location.href='http://localhost:3001/calendario'  
    }
    function goUrl3(){
        window.location.href='http://localhost:3001/consulta'  
    }
    return (
        <div>
            
            <Button size="lg" block onClick={goUrl}>Pacientes</Button>{' '}
            <Button size="lg" block onClick={goUrl2}>Calendario</Button>{' '}
            <Button size="lg" block onClick={goUrl3}>Consultas</Button>{' '}
            
        </div>
    
    )
}

export default Menu;
