import React from 'react';
import PostIndexItem from './post_index_item';
import { Link } from 'react-router-dom';

class Post extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.user) {
            this.props.fetchUserPosts(this.props.user);
        } else {
            this.props.fetchPosts(); // temporary
        }
    }

    render() {
        if (!this.props.posts) {
            // dashboard
            return (
                <div>
                    <Link to='/new/text'>Text</Link>
                    <Link to='/new/photo'>Photo</Link>
                    <Link to='/new/quote'>Quote</Link>
                    <Link to='/new/link'>Link</Link>
                    
                    <ul>
                        <PostIndexItem posts={this.props.allPosts} deletePost={this.props.deletePost} />
                    </ul>
                </div>
            )
        } else {
            return (
                <div>
                    <ul>
                        <PostIndexItem posts={this.props.posts} deletePost={this.props.deletePost} />
                    </ul>
                </div>
            )
        }
    }
}

export default Post;