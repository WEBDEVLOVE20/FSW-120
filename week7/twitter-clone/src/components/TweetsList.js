import React, { Component } from 'react';
import Tweet from './Tweet';

class TweetsList extends Component {

    render() {
    const mappedTweets = this.props.tweets.map( tweet => {
        return (
            <Tweet 
                userName={tweet.userName}
                tag={tweet.tag}
                textArea={tweet.textArea}
            />
        );
    })
        return (
            <div>
                {mappedTweets}
            </div>
        );
    }
}

export default TweetsList;