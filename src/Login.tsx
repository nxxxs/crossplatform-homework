


import React, { Component } from 'react';

import { proxy } from './Proxy';

import { TextInput } from './TextInput';

export class Login extends Component {
    state = { email: "string", password: "123string456", displayName: "", register: false };
    displayNameTextInput = React.createRef<TextInput>();
    render() {
        return (
            <div className="login">
                <img src="logo512.png" width="256" />
                <TextInput type="email" placeholder="Email (someone@example.com)" value={this.state.email} onChange={e => this.emailChange(e) } onEnter={ () => this.onClick() } autofocus={ true } />
                <TextInput type="password" placeholder="Password" value={this.state.password} onChange={e => this.setState({ password: e })} onEnter={ () => this.onClick() } autofocus={ true }/>
                {this.state.register &&
                    <TextInput type="text" ref={this.displayNameTextInput} placeholder="Display Name (Agent Smith)" value={this.state.displayName}
                        onChange={e => this.setState({ displayName: e })} onEnter={ () => this.onClick() } autofocus={ true } />}
                <button type="button" onClick={() => this.onClick()}>
                    {this.state.register ? "Register" : "Login"}
                </button>
                <p>{this.state.register ? "Switch back to " : "Have no account yet? Go and "}
                    <a href="" onClick={e => { e.preventDefault(); this.setState({ register: !this.state.register }); }}>
                        {this.state.register ? "Login" : "Register"}
                    </a>
                </p>
                <a href="https://www.google.hu/search?q=privacy">Privacy Policy</a>
            </div>);
    }

    emailChange(newEmail) {
        this.setState({ email: newEmail });
        if(newEmail === "HCNIQ7") {
            this.displayNameTextInput.current?.setState({ value: "Petya"});
        }
    }

    onClick() {
        if (this.state.register)
            proxy.sendPacket({
                type: "register", email: this.state.email, password: this.state.password,
                displayName: this.state.displayName, staySignedIn: false
            });
        else
            proxy.sendPacket({
                type: "login", email: this.state.email, password: this.state.password,
                staySignedIn: false
            });
    }
}