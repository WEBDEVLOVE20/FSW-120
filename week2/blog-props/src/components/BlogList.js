import React from 'react'
import BlogPost from './BlogPost'
import blogInfo from './blogInfo'

function BlogList(props) {

    const blogPostComps = blogInfo.map(blogList => <blogList key={blogList.id} title={blogList.title} subTitle={blogList.subTitle} author={blogList.author} date={blogList.date} />)

    return (
        <div>
            {blogPostComps}
            <BlogPost />
        </div>
    )
}

export default BlogList