import React from 'react';
import PostIndexItem from './post_index_item';
import { Link } from 'react-router-dom';

class Post extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.blog) {
            this.props.fetchBlogPosts(this.props.blog);
        } else {
            this.props.fetchPosts(); // temporary
        }
    }

    render() {
        let posts;

        if (!this.props.posts) {
            // dashboard
            posts = this.props.allPosts;

            return (
                <div>
                    <Link to='/new/text'>Text</Link>
                    <Link to='/new/photo'>Photo</Link>
                    <Link to='/new/quote'>Quote</Link>
                    <Link to='/new/link'>Link</Link>
                    <Link to='/new/chat'>Chat</Link>
                    <Link to='/new/audio'>Audio</Link>
                    <Link to='/new/video'>Video</Link>
                    
                    <ul>
                        <PostIndexItem posts={posts} />
                    </ul>
                </div>
            )
        } else {
            posts = this.props.posts;

            return (
                <div>
                    <ul>
                        <PostIndexItem posts={posts} />
                    </ul>
                </div>
            )
        }
    }
}

export default Post;