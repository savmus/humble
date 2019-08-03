import React from 'react';
import PostIndex from '../posts/post_index';

class Blog extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        this.props.fetchUser(this.props.match.params.userId);
    }

    render () {
        if (!this.props.blog) {
            return null;
        }

        return (
            <PostIndex 
                posts={this.props.blog.posts} 
                blog={this.props.blog} 
                fetchUserPosts={this.props.fetchUserPosts} 
            />
        )
    }
};

export default Blog;