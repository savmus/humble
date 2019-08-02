import React from 'react';
import { Link } from 'react-router-dom';

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (id, e) {
        e.preventDefault();

        this.props.deletePost(id);
    }

    render() {
        return (
            <div>
                {this.props.posts.map((post, idx) => {
                    return (
                        <div key={idx}>
                            <li>
                                <h2>{post.title}</h2>
                                <p>{post.url}</p>
                                <p>{post.caption}</p>
                                <p>{post.summary}</p>
                                <p>{post.description}</p>
                                <p>{post.publish_date}</p>
                            </li>
                            <button onClick={this.handleClick.bind(this, post.id)}>Delete Post</button>
                            <Link to={`/edit/${post.post_type}/${post.id}`}>Edit Post</Link>
                        </div>
                    );
                })}
            </div>
        );
    }
};

export default PostIndexItem;