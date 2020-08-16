import React from 'react';
import { Button } from 'reactstrap';
import './styles/Boton.css';
import Logoempresa from './img/Logoempresa.png';
import iconopacientes from './img/iconopacientes.png'
import iconocalendario from './img/iconocalendario.png'
import iconoconsultas from './img/iconoconsultas.png'
import NavBar from './NavBar'
function Menu (){
    function goPacientes(){ 
        window.location.href='http://localhost:3001/pacientes'  
    }
    function goCalendario(){
        window.location.href='http://localhost:3001/calendario'  
    }
    function goConsultas(){
        window.location.href='http://localhost:3001/consulta'  
    }
    return (
        
        <div>
            <NavBar nombre='Alfonso' apellido= 'Martinez'/>
            <button className= 'Boton' block onClick={goPacientes}><img src={iconopacientes} alt='Pacientes' /></button>{' '}
            <button className= 'Boton' block onClick={goCalendario}><img src={iconocalendario} alt='Calendario' /></button>{' '}
            <button className= 'Boton' block onClick={goConsultas}><img src={iconoconsultas} alt='Consultas' /></button>{' '}

        </div>


    
    )
}

export default Menu;
