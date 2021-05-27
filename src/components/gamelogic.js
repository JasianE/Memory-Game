import React, { useState } from "react"
import CardContainer from './CardContainer'

function Game(){
    const [score, setScore] = useState(0)
    const [highScore, setHighScore] = useState(0)
    const [clickedCards, setClickedCards] = useState([])

    const handleScore = () =>{
        setScore(prevScore => prevScore + 1)
    }
    const handleHighScore = () =>{
        const newScore = (score > highScore) ? score : highScore
        setHighScore(newScore)
    }
    const reset = () => {
        setScore(0)
        setClickedCards([])
    }
    const addCard = (cardName) => {
        setClickedCards((prevCards) => [...prevCards, cardName])
    }

    const gameLogic = (cardName) => {
        if(clickedCards.includes(cardName) === false){
            addCard(cardName)
            handleScore()
        }
        else{
            handleHighScore()
            reset()
        }
    }
    return(
        <div>
            <h1 className = 'title'>Memory Game</h1>
            <h2 className = 'score'>Current Score: {score}</h2>
            <h2 className = 'highscore'>High Score: {highScore}</h2>
            <CardContainer gameLogic = {gameLogic} score = {score} highScore = {highScore} />
        </div>
    )
}
export default Game