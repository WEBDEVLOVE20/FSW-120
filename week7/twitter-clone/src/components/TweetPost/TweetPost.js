  
import React, { Component } from 'react';
import TweetsList from '../TweetsList/TweetsList';
import './tweet-post.css';
import FeedList from "../FeedList/FeedList";

class TweetPost extends Component {
    constructor() {
        super()
        this.state = {
            userName: "",
            tag: "",
            textArea: "",
            tweets: []
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name] : value})
    }

    handleDelete = (i) => {
        let removeTweet = this.state.tweets
        removeTweet.splice(i, 1)
        this.setState( { tweets: removeTweet })
    }

    handleEdit = (i, changes) => {
        this.setState(prevState => {
        let editedTweets = prevState.tweets
        const index = editedTweets.findIndex(tweet => tweet.id === i)
        const updatedTweet = Object.assign(editedTweets[index], changes)
        return ({ updatedTweet })})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let newTweet = {
            userName: this.state.userName,
            tag: this.state.tag,
            textArea: this.state.textArea
        }
        this.setState({ 
            tweets : [ newTweet, ...this.state.tweets ], 
            userName: "",
            tag: "",
            textArea: ""
        })
    }

    render() {
        return (
            <div>
                <form className="post-wrapper" id="tweetArea" onSubmit={this.handleSubmit}>
                    <input
                        className="user-name"
                        type="text"
                        name="userName"
                        value={this.state.userName} 
                        placeholder="UserName" 
                        onChange={this.handleChange}
                        minLength="3"
                        required={true}
                    />
                    <input
                        className="tag-name"
                        type="text"
                        name="tag"
                        value={this.state.tag} 
                        placeholder="@TagName" 
                        onChange={this.handleChange}
                        minLength="3"
                        required={true}
                    />
                    <button className="tweet-button">Tweet</button>
                    <div className="text-area">
                        <textarea
                            className="text-box"
                            form="tweetArea"
                            name="textArea"
                            placeholder="What's Happening?"
                            value={this.state.textArea}
                            rows="8"
                            cols="62"
                            onChange={this.handleChange}
                            minLength="3"
                            required={true}
                        />
                    </div>
                </form>
                <TweetsList
                    tweets={this.state.tweets}
                    handleEdit={(i, edits) => {
                        this.handleEdit(i, edits)}}
                    handleDelete={this.handleDelete}  
                />
                <FeedList />
            </div>
        );
    }
}


export default TweetPost;