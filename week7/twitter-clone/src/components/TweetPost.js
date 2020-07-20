  
import React, { Component } from 'react';
import TweetsList from './TweetsList';
import './tweet-post.css';


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
                            className="input-left"
                            type="text"
                            name="userName"
                            value={this.state.userName} 
                            placeholder="UserName" 
                            onChange={this.handleChange}
                            minLength="3"
                            required={true}
                        />
                        <input
                            className="input-left"
                            type="text"
                            name="tag"
                            value={this.state.tag} 
                            placeholder="@TagName" 
                            onChange={this.handleChange}
                            minLength="3"
                            required={true}
                        />
                        <div className="text-area">
                            <textarea
                                className="text-box"
                                form="tweetArea"
                                name="textArea"
                                placeholder="What's Happening?"
                                value={this.state.textArea}
                                rows="10"
                                cols="100"
                                onChange={this.handleChange}
                                minLength="3"
                                required={true}
                            />
                            <button className="tweet-button">Tweet</button>
                        </div>
                    </form>
                <TweetsList
                    tweets={this.state.tweets}     
                />
            </div>
        );
    }
}


export default TweetPost;