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
        if (!this.props.blog) {
            return (
                <div>
                    {this.props.posts.map((post, idx) => {
                        return (
                            <div key={idx} className='post'>
                                <li>
                                    <img src={post.user.avatar} />
                                    <a href={`#/blogs/${post.author_id}`}>{post.user.username}</a>
                                    <h2>{post.title}</h2>
                                    <img src={post.image_url} />
                                    <a href={post.url}>{post.url}</a>
                                    <p>{post.caption}</p>
                                    <p>{post.summary}</p>
                                    <p>{post.description}</p>
                                </li>
                                <div className='post-options'>
                                    <Link
                                        to={`/edit/${post.post_type}/${post.id}`}
                                        id='edit-post'
                                        className={post.author_id === currentUser.id ? "reveal" : "hide"}
                                    >Edit</Link>
                                    <button
                                        onClick={this.handleClick.bind(this, post.id)}
                                        id='delete-post'
                                        className={post.author_id === currentUser.id ? "reveal" : "hide"}
                                    >Delete</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            );
        } else {
            return (
                <div>
                    <Link to='/dashboard'>t</Link>
                    <Link to={`/blogs/${this.props.blog.id}/edit`}>Edit</Link>
                    <img src={this.props.blog.avatar} />
                    <h1>{this.props.blog.blog_title}</h1>
                    <span>{this.props.blog.blog_description}</span>

                    {this.props.posts.map((post, idx) => {
                        return (
                            <div key={idx} className='post'>
                                <li>
                                    <h2>{post.title}</h2>
                                    <img src={post.image_url} />
                                    <a href={post.url}>{post.url}</a>
                                    <p>{post.caption}</p>
                                    <p>{post.summary}</p>
                                    <p>{post.description}</p>
                                </li>
                                <div className='post-options'>
                                    <Link
                                        to={`/edit/${post.post_type}/${post.id}`}
                                        id='edit-post'
                                        className={post.author_id === currentUser.id ? "reveal" : "hide"}
                                    >Edit</Link>
                                    <button
                                        onClick={this.handleClick.bind(this, post.id)}
                                        id='delete-post'
                                        className={post.author_id === currentUser.id ? "reveal" : "hide"}
                                    >Delete</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            );
        }
    }
};

export default PostIndexItem;