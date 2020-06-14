import React from 'react'

function ColoredBoxes(props) {

    const styles = {
        backgroundColor: props.boxColor
    }
    
    return (
        <div style ={styles}>
            <h1>{props.boxes.title}</h1>
            <h3>{props.boxes.subtitle}</h3>
            <p>{props.boxes.info}</p>
        </div>
    );
}

export default ColoredBoxes