import React from 'react';


const Feed = (props) => {

    return (
        <div className="tweet-container">
        <div className="tweet-body">
            <div className="inner-body">
                <img className="picture" src={props.item.imageName} alt="person"/>
                <div className="body">
                <div className="inner-body">
                    <p className="name">{props.item.name}</p>
                    <p className="handle">{props.item.tag}</p>
                </div>
                    <p className="tweet">{props.item.message}</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Feed;