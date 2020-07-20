import React from 'react';
import './tweet.css'

const Tweet = ({ userName, tag, textArea }) => {

    return (
        <div>
            <div className="tweet-body">
                <img className="picture" src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="woman"/>
                <p className="badge-text">{userName}</p>
                <p className="badge-text">{tag}</p>
                <p></p>
                <p className="box">{textArea}</p>
            </div>
        </div>
    );
}

export default Tweet;