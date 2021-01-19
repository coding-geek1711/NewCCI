import React from 'react';
import Card from './Cards/card'

import './services.css'

const styles = {
    fontSize:"5rem",
    // borderTop: "1px solid darkblue",
    padding: "10px"
}


const Services = () => {
    return (
        <div className='container'>
            <h1 style={styles}>Our Services</h1>
            <div className='services-box'>
                <Card title="Web Development" icon='web' className='cardBox'/>           
                <Card title="Android Development" icon='android' className='cardBox'/>
                <Card title="UI/UX Design" icon='ui' className='cardBox'/>             
            </div>
        </div>
    );
}

export default Services;
