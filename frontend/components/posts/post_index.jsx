import React from 'react';
import PostIndexItem from './post_index_item';
import { Link, Redirect } from 'react-router-dom';

class Post extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (!this.props.posts) {
            this.props.fetchPosts();
            this.props.fetchUser(this.props.currentUser.id);
        }
    }

    // shouldComponentUpdate (nextProps, nextState) {
    //     if (!this.props.posts) {
    //         if (this.props.user) {
    //             if (this.props.user.follows && !nextProps.user.follows) {
    //                 return false;
    //             } else {
    //                 return true
    //             };
    //         } else {
    //             return true
    //         };
    //     }
    // }

    render() {
        if (!this.props.posts) {
            if (this.props.allPosts.length === 0) {
                return null
            }

            debugger;

            // dashboard
            return (
                <div className='post-index'>
                    <ul className='post-links'>
                        <li>
                            <a href='#/new/text'><i className="material-icons text">text_fields</i></a>
                            <Link to='/new/text' className='text-link'>Text</Link>
                        </li>
                        <li>
                            <a href='#/new/photo'><i className="material-icons photo">photo_camera</i></a>
                            <Link to='/new/photo' className='text-link'>Photo</Link>
                        </li>
                        <li>
                            <a href='#/new/quote'><i className="material-icons quote">format_quote</i></a>
                            <Link to='/new/quote' className='text-link'>Quote</Link>
                        </li>
                        <li>
                            <a href='#/new/link'><i className="material-icons link">insert_link</i></a>
                            <Link to='/new/link' className='text-link'>Link</Link>
                        </li>
                    </ul>
                    
                    <ul className='posts'>
                        <PostIndexItem 
                            posts={this.props.allPosts} 
                            deletePost={this.props.deletePost} 
                            user={this.props.user} 
                            createLike={this.props.createLike} 
                            deleteLike={this.props.deleteLike} 
                        />
                    </ul>
                </div>
            )
        } else {
            // blog
            return (
                <div>
                    <ul>
                        <PostIndexItem 
                            posts={this.props.posts} 
                            blog={this.props.blog} 
                            user={this.props.user} 
                            createFollow={this.props.createFollow} 
                            deleteFollow={this.props.deleteFollow} 
                            deleteUser={this.props.deleteUser} 
                            createLike={this.props.createLike}
                            deleteLike={this.props.deleteLike} 
                        />
                    </ul>
                </div>
            )
        }
    }
}

export default Post;