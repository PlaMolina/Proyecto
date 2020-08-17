import React from 'react';
import './styles/Botonesmenu.css';

import iconopacientes from './img/iconopacientes.png'
import iconocalendario from './img/iconocalendario.png'
import iconoconsultas from './img/iconoconsultas.png'

function Menu (props){
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
            
            <button className= {props.clase} block onClick={goPacientes}><img src={iconopacientes} alt='Pacientes' /></button>{' '}
            <button className= {props.clase} block onClick={goCalendario}><img src={iconocalendario} alt='Calendario' /></button>{' '}
            <button className= {props.clase} block onClick={goConsultas}><img src={iconoconsultas} alt='Consultas' /></button>{' '}


        </div>


    
    )
}

export default Menu;
