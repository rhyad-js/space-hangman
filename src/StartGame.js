import React, { Component } from 'react';
import './StartGame.css';
import galaxy from './galaxy.png';

class StartGame extends Component {
    handleClick = () => {
        this.props.start();
    }
    render() {
        return (
            <div className="StartGame">
                <h1 className="StartGame-header">SPACE HANGMAN</h1>
                <img src={galaxy} alt="Galaxy" />
                {/* <h2>Have you ever played Hangman in outer-space?</h2> */}
                <div>
                    <button onClick={this.handleClick}>PLAY NOW</button>
                </div>
            </div>
        )
    }
}

export default StartGame;