import React from 'react';

function Spot(props) {


   
    
    // if (props.timeToGo === "spring"){
    //     vaca.backgroundColor = "blue"
    // }
    // if (props.price < 500) {
    //    return "$"
    // }
    // console.log(props.price)
    return (
        <div style={{backgroundColor: props.timeToGo === "Spring" ? "red" : "none"}} style={{ backgroundColor: props.timeToGo === "Winter" ? "blue" : "none"}}>
            <h3>DESTINATION: {props.place}</h3>
            <h3>PRICE: {props.price}</h3>
            <h3 >BEST TIME TO GO: {props.timeToGo}</h3>
        </div>
    )
}

export default Spot