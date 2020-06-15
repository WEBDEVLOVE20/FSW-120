import React from 'react'
import './blogpost.css';

function BlogPost(props) {

    return (
        <div className="blogContainer">
            <h2 className="blogTitle">{props.title}</h2>
            <h3 className="blogSubtitle">{props.subtitle}</h3>
            <span className="blogAuthor">Posted by <strong>{props.author}</strong></span>
            <span className="blogDate"> on {props.date}</span>
            <hr/>
        </div>
    )
}

export default BlogPost