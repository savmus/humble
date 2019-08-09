import React from 'react';

class Explore extends React.Component {
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

        return (
            <div className='post-index'>
                <ul className='posts'>
                    <div>
                        {this.props.posts.map((post, idx) => {
                            return (
                                <div key={idx}>
                                    <div className='post blog-post'>
                                        <li>
                                            <a
                                                href={`#/blogs/${post.author_id}`}
                                                className='username'
                                            >{post.user.username}</a>
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
                                </div>
                            );
                        })}
                    </div>
                </ul>
            </div>
        )
    }
}

export default Explore;