import React, { Component } from 'react';
import './Message.css';

class Message extends Component {
    render() {
        return (
            <div className="Message">
                {this.props.allGuessed
                ? <div className="Winner">
                    <h1>🎉 YOU WIN! 🎉</h1>
                    <h2>YOU GUESSED IT -> <u>{this.props.word}</u> 😎</h2>
                </div>
                : <div className="Loser">
                    <h1>😭 YOU LOSE! 😭</h1>
                    <h2>THE CORRECT WORD WAS <u>{this.props.word}</u> 💔</h2>
                </div>
                }
            </div>
        )
    }
}

export default Message;