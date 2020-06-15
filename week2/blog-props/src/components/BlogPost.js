import React from 'react'

function BlogPost(props) {

    return (
        <div>
            <h3>{props.title}</h3>
            <h3>{props.subTitle}</h3>
            <h3>Posted by {props.author}</h3>
            <h3>on {props.date}</h3>
            <button>Older Posts</button>
            <hr/>
        </div>
    )
}

export default BlogPost