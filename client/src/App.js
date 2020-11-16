import './App.css';
import Town from './Town';
import { Component } from 'react';
import io from 'socket.io-client';
class App extends Component {
  constructor() {
    super();
    this.state = {
      socketConn: null
    }
  }

  componentDidMount() {
      const socket = io("http://localhost:5000/");
      this.setState({ socketConn: socket });
  }

  render() {
    return (
      this.state.socketConn ? <Town conn={this.state.socketConn}/> : "Loading.."
    )
  }
}

export default App;
