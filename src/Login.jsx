import React from 'react';
import { Form, Label, Button, Input } from 'reactstrap';

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: []
        }
        this.validar = this.validar.bind(this);
    }
  
    validar(){
        //Funcion para validar el login de la app de momento solo
        //se hace aqui en el front end Proceso en stand by
        var name = document.getElementById('InputEmail').value;
        var psswd = document.getElementById('InputPassword').value;

        function hashCode(str) {
            //Funcion que genera el hash de la contarseña introducida
            var hash = 0;
            if (str.length === 0) { 
                return hash;
            }
            for (var i = 0; i < str.length; i++) {
                var char = str.charCodeAt(i);       
                hash = ((hash<<5)-hash)+char;     
                hash = hash & hash; // Convert to 32bit integer
            }
            return hash;
        }
        var hash = hashCode("adriatroll");
        
        if (name === "" || hash === ""){

            alert("Ingrese credenciales");

        }else if(name === "Alejandro@gmail.com" && hashCode(psswd) === hash){

            window.location.href = 'http://localhost:3001/menu';

        }else{
            //document.getElementById('InputEmail').value = "";
            alert("CREDENCIALES INCORRECTAS");
            document.getElementById('InputEmail').value = "";
            document.getElementById('InputPassword').value = "";
        }
    }


    render() {
        return (
            <>
                <div>
                    <Form className="Form-signin">
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <Input type="email" id="InputEmail" className="Form-control" placeholder="Email address" required autoFocus />
                        <br />
                        <Input type="password" id="InputPassword" className="Form-control" placeholder="Password" required />
                        <div className="checkbox mb-3">
                            <Label style={{ fontSize: "15px" }}>
                                <Input type="checkbox" value="remember-me" /> Remember me
                        </Label>
                        </div>
                        <Button onClick={this.validar} className="btn btn-lg btn-primary btn-block">Sign in</Button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2019/2020</p>
                </Form>
            </div>
            </>
        )
    }
}