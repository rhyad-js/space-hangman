import React, { Component } from 'react';
import Hangman from './Hangman';
import StartGame from './StartGame';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startGame: true
    }
  }
  start = () => {
    this.setState({startGame: false});
  }
  render() {
    return (
      <div className="App">
        {this.state.startGame ? <StartGame start={this.start} /> : <Hangman />}
      </div>
    )
  }
}


export default App;
