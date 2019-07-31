import React from 'react';
import PostIndexItem from './post_index_item';

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
        debugger;
        let posts;

        if (!this.props.posts) {
            posts = this.props.allPosts;
        } else {
            posts = this.props.posts;
        }

        return (
            <div>
                <ul>
                    <PostIndexItem posts={posts} />
                </ul>
            </div>
        )
    }
}

export default Post;