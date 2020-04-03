import React, { Component } from 'react';
import './App.css';

import { Login } from './Login'
import { Main } from './Main'
import { proxy } from './Proxy';

export class App extends Component {
  state = { logged_in: false };
  constructor(props) {
    super(props);
    proxy.addEventListener("login", () => {
      this.setState({ logged_in: true });
    });
  }

  render() {
    return (
      <div className="app">
        {this.state.logged_in ? <Main /> : <Login />}
      </div>
    );
  }
}

