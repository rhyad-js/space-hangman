import React, { Component } from 'react';
import { randomWord } from './Words';
import Message from './Message';
import img0 from './a.png';
import img1 from './b.png';
import img2 from './c.png';
import img3 from './d.png';
import img4 from './e.png';
import img5 from './f.png';
import img6 from './g.png';
import './Hangman.css';


class Hangman extends Component {
    static defaultProps = {
        maxWrong: 7,
        images: [img0, img1, img2, img3, img4, img5, img6]
    }
    constructor(props) {
        super(props);
        this.state = {
            disabled: false,
            word: "hello",
            // word: randomWord(),
            nWrong: 0,
            guessesLeft: 7,
            guessedLetters: new Set(),
        };
    }
    generateWord = () => {
        return this.state.word.split("").map(ltr => (this.state.guessedLetters.has(ltr) ? ltr : " _ "))
    }
    generateButtons = () => {
        let alphabet = "abcdefghijklmnopqrstuvwxyz";
        let buttons = alphabet.split("").map(ltr => 
            <button
                className="Hangman-button"
                value={ltr}
                key={ltr}
                onClick={this.handleGuess}
                disabled={this.state.guessedLetters.has(ltr)}
            >{ltr}</button>)
        return buttons
    }
    handleGuess = (e) => {
        let value = e.target.value;
        this.setState(st => ({
            guessedLetters: st.guessedLetters.add(value),
            nWrong: st.nWrong + (st.word.includes(value) ? 0 : 1),
            guessesLeft: st.guessesLeft - (st.word.includes(value) ? 0 : 1)
        }))
    }
    resetGame = () => {
        this.setState({
            disabled: false,
            word: randomWord(),
            nWrong: 0,
            guessesLeft: 7,
            guessedLetters: new Set(),
            allGuessed: false
        })
    }
    render() {
        const winner = this.generateWord().join("") === this.state.word;
        const loser = this.props.maxWrong === this.state.nWrong;
        return(
            <div className="Hangman">
                {winner || loser
                    ? <Message word={this.state.word.toUpperCase()} allGuessed={winner} /> 
                    : <div>
                        <h1>SPACE HANGMAN</h1>    
                        <img src={this.props.images[this.state.nWrong]} />
                        <p className="Hangman-guess">{this.state.guessesLeft} WRONG GUESSES REMAINING</p>
                        <p className="Hangman-word">{this.generateWord()}</p>
                        <p>{this.generateButtons()}</p>
                    </div>}      
                <button className="Hangman-reset" onClick={this.resetGame}>RESET</button>
            </div>
        )
    }
}

export default Hangman;