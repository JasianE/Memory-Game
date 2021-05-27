import React from 'react'
import './Card.css'
 function Card(props){
    const name = props.name
    const url = props.url
    const gameLogic = props.gameLogic

    return(
        <div className = 'card' onClick={gameLogic.bind(this, name)}>
            <h1>{name}</h1>
            <img src={url} alt = {name}></img>
        </div>
    )
}
export default Card