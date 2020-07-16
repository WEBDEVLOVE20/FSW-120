import React from 'react';


const YourTweet = ({ firstName, lastName, email, placeOfBirth, phone, favoriteFood, textArea }) => {

    return (
        <div>
            <div className="container">
                <p className="badge-text">{firstName} {lastName}</p>
                <p className="badge-text">{phone}</p>
                <p className="badge-text">{placeOfBirth}</p>
                <p className="badge-text">{favoriteFood}</p>
                <p className="badge-text">{email}</p>
                <p></p>
                <p className="box">{textArea}</p>
            </div>
        </div>
    );
}

export default YourTweet;