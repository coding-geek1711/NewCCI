import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {MdWeb, MdAndroid, MdArtTrack} from 'react-icons/md'
import './cards.css'

const displayIcon = (iconName) => {
    if(iconName === 'web'){
        return <MdWeb className='card-icon'></MdWeb>
    } else if(iconName === 'android'){
        return <MdAndroid className='card-icon'></MdAndroid>
    } else if(iconName === 'ui'){
        return <MdArtTrack className='card-icon'></MdArtTrack>
    }
}

export default function card(props) {
    return (
        <div>
            <div className='container'>
            <Card className='card-parent'>
                {/* <MdWeb className='card-icon'/>    */}
                {displayIcon(props.icon)}
                {/* <Card.Img variant="top" src="" /> */}
                <Card.Body>
                    <Card.Title className='card-title'>{props.title}</Card.Title>
                    <Card.Text className='card-content' style={{fontSize:"1.5rem"}}>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
            </div>
        </div>
    )
}
