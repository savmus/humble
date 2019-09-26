import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Like from '../likes/like';

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

        this.props.changeState();
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
            if (!this.props.user || this.props.posts.length === 0) {
                return null
            };

            if (!this.props.user.follows) {
                return null;
            }

            let follows = this.props.user.follows.map((follow) => {
                return follow.followee_id
            });

            let allPosts = [];

            for (let i = 0; i < this.props.posts.length; i++) {
                if (follows.includes(this.props.posts[i].author_id) && this.props.posts[i].user) {
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
                                        <Like 
                                            idx={idx} 
                                            post={post} 
                                            deleteLike={this.props.deleteLike} 
                                            createLike={this.props.createLike} 
                                            user={this.props.user} 
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            );
        } else {
            if (!this.props.user) {
                return null;
            }

            let follows = this.props.user.follows.map((follow) => {
                return follow.followee_id
            });

            return (
                <div>
                    <Link 
                        to={`/blogs/${this.props.blog.id}/edit`} 
                        className={`blog-edit ${this.props.blog.id === this.props.user.id ? "reveal" : "hide"}`} 
                    >Edit appearance</Link>
                    <img 
                        src={this.props.blog.avatar} 
                        className='blog-avatar' 
                    />
                    <h1 className='blog-title'>{this.props.blog.blog_title}</h1>
                    <span className='blog-description'>{this.props.blog.blog_description}</span>

                    {this.props.posts.map((post, idx) => {
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
                </div>
            );
        }
    }
};

export default PostIndexItem;