import React from 'react';
import './superhero.css';


function SuperHero(props) {
  
 
    return (
        <div>
            <h1>{props.item.name}</h1>
            <img src={props.item.imageName} alt="images" />
        </div>
    )
}

export default SuperHero