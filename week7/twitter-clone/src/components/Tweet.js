import React from 'react';
import './tweet.css'

const Tweet = ({ index, userName, tag, textArea, handleDelete }) => {

    return (
        <div className="tweet-body">
            <div className="inner-body">
                <img className="picture" src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="person"/>
                <div className="body">
                <div className="inner-body">
                    <p className="name">{userName}</p>
                    <p className="handle">{tag}</p>
                </div>
                    <p className="tweet">{textArea}</p>
                </div>
                <button onClick={() => handleDelete(index)}> Delete </button>
            </div>
        </div>
    );
}

export default Tweet;