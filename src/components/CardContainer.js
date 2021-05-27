import React, { useEffect, useState } from "react"
import randomizer from "./randomizer"
import Card from './Card'
import './Container.css'

function CardContainer(props){
    const gameLogic = props.gameLogic
    const score = props.score
    const highScore = props.highScore

    let cardInfo = [
        {
            name: 'HBOX',
            url: 'https://nerdbot.com/wp-content/uploads/2019/04/alternate.jpg',
            id: 1
        },
        {
            name: 'Mango',
            url: 'https://cdn1.dotesports.com/wp-content/uploads/2019/10/07034701/ef2ae42cbd31b9caec0a0d2b241fdda3.jpg', 
            id: 2 
        },
        {
            name: 'Esam',
            url: 'https://daily.upcomer.com/wp-content/uploads/2019/10/baldguy.jpg',
            id: 3
        },
        {
            name: 'Reggie',
            url: 'https://gamingtrend.com/wp-content/uploads/2014/04/ReggieLaser.jpg',
            id: 4
        },
        {
            name: 'Mew2King',
            url: 'https://i.ytimg.com/vi/tcs-4EuRsVg/maxresdefault.jpg',
            id: 5
        },
        {
            name: 'Nairo',
            url: 'https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/dataimagejpegbase649j4AAQSkZJRgABAQAASABIAAD4gI0SU-b741e83d8a90f8e9923519c4b3081fae.jpg',
            id: 6
        },
        {
            name: 'Ken',
            url: 'https://img.redbull.com/images/c_fill,w_1500,h_1000,g_auto,f_auto,q_auto/redbullcom/2015/11/11/1331758926666_2/liquid-ken-the-king-of-smash',
            id: 7
        },
        {
            name: 'Armada',
            url: 'http://static1.squarespace.com/static/55ef0e29e4b099e22cdc9eea/55ef1423e4b030b646dd5fc2/5971fb9fd1758efb6ea226a4/1514943576490/armada-and-android-officially-registered-for-gametyrant-expo-social.jpg?format=1500w',
            id: 8
        },
        {
            name: 'Leffen',
            url: 'http://pm1.narvii.com/7199/ab11b1fd1e8251660b6f5d1577de57a493013b1dr1-334-334v2_uhq.jpg',
            id: 9
        },
        {
            name: 'Chudat',
            url: 'https://ssb.wiki.gallery/images/c/cd/Chudat.png',
            id: 10
        },
        {
            name: 'Axe',
            url: 'https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2019/07/04/15f99578-e104-4e15-a86a-3b39914d91fa/jeffrey-axe-williamson-smash-bros',
            id: 11
        },
        {
            name: 'Dark Wizzy',
            url: 'https://media.eventhubs.com/images/2020/06/24-dark-wizzy-releases-his-top-25-tier-list-super-smash-bros-ultimat.jpg',
            id: 12
        },
    ]
    let [cards, setCard] = useState(cardInfo)


    useEffect(() => {
        const newCards = [...cards]
        randomizer(newCards)
        setCard(newCards)
    }, [score, highScore])

    return(
        <div className = 'container'>
            {cards.map((card) => (
                <Card name = {card.name} url = {card.url} key = {card.id} gameLogic = {gameLogic}></Card>
            ))}
        </div>
    )
}
export default CardContainer