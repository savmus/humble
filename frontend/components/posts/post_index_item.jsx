import React from 'react';
import { Link, Redirect } from 'react-router-dom';

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
            let that = this;
            return (
                <div>
                    {this.props.posts.map((post, idx) => {
                        return (
                            <div key={idx} className='post'>
                                <li>
                                    <img src={that.props.users[post.author_id - 1].avatar} />
                                    <a href={`#/blogs/${post.author_id}`}>{that.props.users[post.author_id - 1].username}</a>
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
                    <img src={this.props.blog.avatar} />
                    <span>{this.props.blog.username}</span>

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