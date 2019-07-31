import React from 'react';
import PostIndexContainer from '../posts/post_index_container';

class Blog extends React.Component {
    constructor (props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount () {
        this.props.fetchBlog(this.props.match.params.blogId);
    }

    handleClick (e) {
        e.preventDefault();

        this.props.deleteBlog(this.props.blog.id);
    }

    render () {
        if (!this.props.blog) {
            return null;
        }
        return (
            <div>
                <h1>{this.props.blog.title}</h1>
        
                <ul>
                    <PostIndexContainer posts={this.props.blog.posts} blog={this.props.blog} />
                </ul>
        
                <button onClick={this.handleClick}>Delete Blog</button>
            </div>
        )
    }
}

export default Blog;