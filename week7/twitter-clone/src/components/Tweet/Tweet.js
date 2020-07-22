import React from 'react';
import './tweet.css';


const Tweet = ({ index, userName, tag, textArea, handleDelete }) => {


    return (
        <div className="tweet-container">
            <div className="tweet-body">
                <div className="inner-body">
                    <img className="picture" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="person"/>
                    <div className="body">
                    <div className="inner-body">
                        <p className="name">{userName}</p>
                        <p className="handle">{tag}</p>
                    </div>
                        <p className="tweet">{textArea}</p>
                    </div>
                        <button className="delete-button" onClick={() => handleDelete (index) }> Delete </button>
                </div>
            </div>
        </div>
    );
}

export default Tweet;