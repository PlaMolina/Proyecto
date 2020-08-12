import React from 'react';
import { Form, Label, Button, Input } from 'reactstrap';
import LOGO from "./img/LOGO.png";

class Vista extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            current: []
        }
    }

    goUrl() {
        window.location.href='http://localhost:3000/menu'
    }
    render() {
        return (
            <div>
                <img src={LOGO} className="App-logo" alt="logo" />



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
                    <Button onClick={this.goUrl} className="btn btn-lg btn-primary btn-block">Sign in</Button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2019/2020</p>
                </Form>
            </div>
        )
    }
}

export default Vista;