import React from 'react';
import Login from './Login'
import LOGO from "./img/LOGO.png";

class Vista extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            current: []
        }
    }
    render() {
        return (
            <div>
                <img src={LOGO} className="App-logo" alt="logo" />
                <Login />
            </div>
        )
    }
}

export default Vista;