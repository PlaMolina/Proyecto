import React from 'react';
import { Form, Label, Button, Input } from 'reactstrap';

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: []
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
                        <Button onClick={() => window.location.href = 'http://localhost:3001/menu'} className="btn btn-lg btn-primary btn-block">Sign in</Button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2019/2020</p>
                </Form>
            </div>
            </>
        )
    }
}