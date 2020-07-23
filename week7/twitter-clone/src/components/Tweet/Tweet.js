  
import React, { useState } from 'react';
import './tweet.css';
import EditTweet from '../EditTweet/EditTweet'


const Tweet = ({ i, userName, tag, textArea, handleDelete, handleEdit }) => {
const [edit, setEdit] = useState({ editing: false, id: 0 })

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
                    <div className='button-container'>
                        <button className="edit-button" onClick={() => setEdit({ makeEdits: true, id: i })}> Edit </button>
                        <button className="delete-button" onClick={() => handleDelete (i) }> Delete </button>
                        </div>
                </div>
                    {edit.makeEdits ? <EditTweet
                    i = {i}
                    handleEdit={(i, edits) => {
                    handleEdit(i, edits)
                    setEdit({makeEdits: false, id: i})
                    }}/>: <p></p> }
            </div>
        </div>
    );
}

export default Tweet;