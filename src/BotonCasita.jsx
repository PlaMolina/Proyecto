import React from 'react';
import './styles/Botonesmenu.css';
import botonhome from './img/botonhome.svg'


function BotonCasita (){
    
    if(window.location.href.indexOf("/menu") > -1){
      return null;
    }
   

    return (
        
        <div>
            
            <button id= 'botonsito' className= 'Miniboton' block onClick={()=>window.location.href='/menu'}><img className='imagen' src={botonhome} alt='Pacientes' /></button>{' '}
  
     
        </div>


    
    )
}

export default BotonCasita;
