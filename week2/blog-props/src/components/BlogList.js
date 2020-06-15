import React from 'react'
import BlogPost from './BlogPost'
import blogInfo from './blogInfo'
import './blogList.css'

function BlogList() {

    const blogPostComps = blogInfo.map(blog => <BlogPost key={blog.id} title={blog.title} subtitle={blog.subtitle} author={blog.author} date={blog.date} />)

    return (
        <div>
            {blogPostComps}
            <button>Older Posts &rarr;</button>
        </div>
    )
}

export default BlogList