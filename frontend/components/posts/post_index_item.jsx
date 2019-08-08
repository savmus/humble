import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleFollow = this.handleFollow.bind(this);
        this.handleUnfollow = this.handleUnfollow.bind(this);
        this.handleLike = this.handleLike.bind(this);
        this.handleUnlike = this.handleUnlike.bind(this);
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

    handleLike (id, e) {
        e.preventDefault();

        this.props.createLike(id);
    }

    handleUnlike(id, e) {
        e.preventDefault();

        this.props.deleteLike(id);
    }

    render() {
        if (!this.props.blog) {
            if (!this.props.user || this.props.posts.length === 0) {
                return null
            };

            debugger;

            if (!this.props.user.follows) {
                return null;
            }

            let follows = this.props.user.follows.map((follow) => {
                return follow.followee_id
            });

            let allPosts = [];

            for (let i = 0; i < this.props.posts.length; i++) {
                if (follows.includes(this.props.posts[i].author_id)) {
                    allPosts.push(this.props.posts[i]);
                };
            };

            return (
                <div>
                    {allPosts.map((post, idx) => {
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
                                            className={post.author_id === this.props.user.id ? "reveal" : "hide"}
                                        >Edit</Link>
                                        <button
                                            onClick={this.handleClick.bind(this, post.id)}
                                            id='delete-post'
                                            className={post.author_id === this.props.user.id ? "reveal" : "hide"} 
                                        >Delete</button>
                                        <button 
                                            onClick={post.liked_by_current_user ? this.handleUnlike.bind(this, post.id) : this.handleLike.bind(this, post.id)} 
                                            className={`like-btn ${post.author_id === this.props.user.id ? "like-hide" : "reveal"}`} 
                                        >{post.liked_by_current_user ? <i className="fa fa-heart"></i> : <i className="fa fa-heart-o"></i>}</button>
                                        <strong>{post.likes} notes</strong>
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

            return (
                <div>
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
                        className={`blog-follow ${follows.includes(this.props.blog.id) && this.props.blog.id !== currentUser.id ? "reveal" : "hide"}`}
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
                                <div className='post-options'>
                                    <button 
                                        onClick={post.liked_by_current_user ? this.handleUnlike.bind(this, post.id) : this.handleLike.bind(this, post.id)} 
                                        className={`like-btn ${post.author_id === currentUser.id ? "hide" : "reveal"}`} 
                                    >{post.liked_by_current_user ? <i className="fa fa-heart"></i> : <i className="fa fa-heart-o"></i>}</button>
                                    <strong>{post.likes} notes</strong>
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