import React from 'react';
import PostIndex from '../posts/post_index';

class Blog extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        this.props.fetchUsers();
        this.props.fetchUser(this.props.match.params.userId);
    }

    render () {
        if (!this.props.blog) {
            return null;
        }

        debugger;

        return (
            <PostIndex 
                posts={this.props.blog.posts} 
                blog={this.props.blog} 
                fetchUserPosts={this.props.fetchUserPosts} 
                currentUser={this.props.currentUser} 
                createFollow={this.props.createFollow} 
                deleteFollow={this.props.deleteFollow} 
            />
        )
    }
};

export default Blog;