import React from 'react';
import PostIndexItem from '../posts/post_index_item';

class LikesIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        if (this.props.posts.length === 0) {
            return null
        };

        let likedPosts = [];

        for (let i = 0; i < this.props.posts.length; i++) {
            if (this.props.posts[i].liked_by_current_user) {
                likedPosts.push(this.props.posts[i]);
            }
        };

        return (
            <div className='post-index'>
                <ul className='posts'>
                    {likedPosts.map((post, idx) => {
                        return (
                            <div key={idx} className='post blog-post'>
                                <li>
                                    <h2>{post.title}</h2>
                                    <img
                                        src={post.image_url}
                                        className='pictures'
                                    />
                                    <a href={post.url}>{post.url}</a>
                                    <p className={post.post_type === 'quote' ? 'post-quote' : 'post-caption'}>{post.caption}</p>
                                    <p className={post.summary ? 'post-source' : 'post-summary'}>{post.summary}</p>
                                    <p className='post-description'>{post.description}</p>
                                </li>
                            </div>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default LikesIndex;