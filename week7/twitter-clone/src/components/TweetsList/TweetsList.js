import React, { Component } from 'react';
import Tweet from '../Tweet/Tweet';


class TweetsList extends Component {
    
    render() {
    const mappedTweets = this.props.tweets.map((tweet, i) =>  { 
        return (
            <div>
            <Tweet 
                key={i}
                index={i}
                userName={tweet.userName}
                tag={tweet.tag}
                textArea={tweet.textArea}
                handleDelete={this.props.handleDelete}
            />
            </div>
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