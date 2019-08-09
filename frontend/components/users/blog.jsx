import React from 'react';
import PostIndex from '../posts/post_index';

class Blog extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        this.props.fetchUserPosts(this.props.match.params.userId);
        this.props.fetchUser(this.props.currentUser.id);
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
                user={this.props.user} 
                createFollow={this.props.createFollow} 
                deleteFollow={this.props.deleteFollow} 
                createLike={this.props.createLike} 
                deleteLike={this.props.deleteLike} 
            />
        )
    }
};

export default Blog;