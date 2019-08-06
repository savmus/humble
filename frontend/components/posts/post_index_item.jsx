import React from 'react';
import { Link } from 'react-router-dom';

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleFollow = this.handleFollow.bind(this);
        this.handleUnfollow = this.handleUnfollow.bind(this);
    }

    handleClick (id, e) {
        e.preventDefault();

        this.props.deletePost(id);
    }

    handleFollow (follow, e) {
        e.preventDefault();

        this.props.createFollow(follow);
    }

    handleUnfollow (id, e) {
        e.preventDefault();

        this.props.deleteFollow(id);
    }

    render() {
        if (!this.props.blog) {
            return (
                <div>
                    {this.props.posts.map((post, idx) => {
                        return (
                            <div key={idx}>
                                <img
                                    src={post.user.avatar}
                                    className='dash-avatar'
                                />
                                <div className='post'>
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
                            </div>
                        );
                    })}
                </div>
            );
        } else {
            let follows = this.props.currentUser.follows.map((follow) => {
                return follow.followee_id
            });
            debugger;
            return (
                <div>
                    <Link 
                        to='/dashboard' 
                        className='to-dash' 
                    >h</Link>
                    <Link 
                        to={`/blogs/${this.props.blog.id}/edit`} 
                        className={`blog-edit ${this.props.blog.id === currentUser.id ? "reveal" : "hide"}`} 
                    >Edit appearance</Link>
                    <button 
                        onClick={this.handleFollow.bind(this, {
                            user_id: currentUser.id,
                            followee_id: this.props.blog.id
                        })} 
                        className={`blog-follow ${follows.includes(this.props.blog.id) ? "hide" : "reveal"}`}
                    >Follow</button>
                    <button
                        onClick={this.handleUnfollow.bind(this, this.props.blog.id)}
                        className={`blog-follow ${follows.includes(this.props.blog.id) ? "reveal" : "hide"}`}
                    >Unfollow</button>
                    <img 
                        src={this.props.blog.avatar} 
                        className='blog-avatar' 
                    />
                    <h1 className='blog-title'>{this.props.blog.blog_title}</h1>
                    <span className='blog-description'>{this.props.blog.blog_description}</span>

                    {this.props.posts.map((post, idx) => {
                        return (
                            <div key={idx} className='post'>
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
                </div>
            );
        }
    }
};

export default PostIndexItem;