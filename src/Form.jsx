import React, { Component } from 'react';


class Form extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            genero:""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {   //funcion que se utiliza cuando el valor del input cambia
        const {name, value, type, checked}=event.target
        type === "checkbox" ? this.setState({ [name]: checked}) : this.setState({ [name]:value})
        //this.setState({
           // [event.target.name]: event.target.value  //coge el valor del elemento dnd sucede el evento=el onchange
           // [name]:value  //lo mismo que lo de arriba
        
    }
    //falta la funcion del submit y relacionarlo con la API
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.firstName}
                    name="firstName"
                    placeholder="First Name" onChange={this.handleChange} />
                <br />
                <input
                    type="text"
                    value={this.state.lastName}
                    name="lastName"
                    placeholder="Last Name" onChange={this.handleChange} />
                <h1>{this.state.firstName} {this.state.lastName}</h1>

                <label>
                    <input
                        type="radio"
                        name="genero"
                        value="hombre"
                        checked={this.state.genero === "hombre"}
                        onChange={this.handleChange}
                    
                    /> Hombre
                </label>
                <br/>
                <label>
                    <input
                        type="radio"
                        name="genero"
                        value="mujer"
                        checked={this.state.genero === "mujer"}
                        onChange={this.handleChange}

                    /> Mujer
                </label>
                <br/>
                
                <select
                    value={this.state.nationality}
                    name="Nacionalidad"
                    onChange={this.handleChange}
                >
                    <option value="">-- Introduzca su pais de origen --</option>
                    <option value="spain">España</option>
                    <option value="france">Francia</option>
                    <option value="germany">Alemania</option>
                    <option value="portugal">Portugal</option>
                    <option value="uk">Reino Unido</option>
                </select>
                <br/>
                <br/>
                <button >Guardar</button>
            </form>
        )
    }
}

export default Form;