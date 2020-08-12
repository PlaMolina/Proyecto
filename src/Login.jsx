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
                    <Form class="Form-signin">
                        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <Input type="email" id="InputEmail" class="Form-control" placeholder="Email address" required autofocus />
                        <br />
                        <Input type="password" id="InputPassword" class="Form-control" placeholder="Password" required />
                        <div class="checkbox mb-3">
                            <Label style={{ fontSize: "15px" }}>
                                <Input type="checkbox" value="remember-me" /> Remember me
                    </Label>
                        </div>
                        <Button onClick="location.href='http://localhost:3000/menu'" class="btn btn-lg btn-primary btn-block" type="submit">Sign in</Button>
                        <p class="mt-5 mb-3 text-muted">&copy; COVID-19/2020</p>
                    </Form>
                </div>
            </>
        )
    }
}