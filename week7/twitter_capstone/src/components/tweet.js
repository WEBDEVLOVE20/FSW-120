import React from 'react';
import YourTweet from './YourTweet';

const TweetBox = (props) => {
  return(
    <div className="tweet-body">
      {props.children}
    </div>
  )
}

const Image = (props) => {
  return(
    <img src={props.image} alt="Logo" className="picture">
    </img>
  )
}




const Handle = (props) => {
  return(
    <div className="handle">
      {props.handle}
    </div>
  )
}

const Name = (props) => {
  return(
    <div className="name">
      {props.name}
    </div>
  )
}



const Tweet = (props) => {
  return(
    <div className="tweet">
      {props.tweet}
    </div>
  )
}



const TweetBody = (props) => {
  return(
    <div>
    <TweetBox>
      <div className="inner-body">
        <Image image={props.image}/>
        <div className="body">
          <div className="inner-body">
            <Name name={props.name}/>
            <Handle handle={props.handle}/>
          </div>
          <Tweet tweet={props.tweet}/>
        </div>
      </div>
    </TweetBox>
    <TweetBox>
    <div className="inner-body">
      <Image image={props.image}/>
      <div className="body">
        <div className="inner-body">
          <Name name={props.name}/>
          <Handle handle={props.handle}/>
        </div>
        <Tweet tweet={props.tweet}/>
      </div>
    </div>
  </TweetBox>
  <TweetBox>
  <div className="inner-body">
    <Image image={props.image}/>
    <div className="body">
      <div className="inner-body">
        <Name name={props.name}/>
        <Handle handle={props.handle}/>
      </div>
      <Tweet tweet={props.tweet}/>
    </div>
  </div>
</TweetBox>
<div>
  <YourTweet />
</div>
</div>

  )
}

export { TweetBody }