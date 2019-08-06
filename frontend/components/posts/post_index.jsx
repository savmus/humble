import React from 'react';
import PostIndexItem from './post_index_item';
import { Link } from 'react-router-dom';

class Post extends React.Component {
    constructor(props) {
        super(props);

        if (window.localStorage) {
            if (!localStorage.getItem('firstLoad')) {
                localStorage['firstLoad'] = true;
                window.location.reload();
            }
            else
                localStorage.removeItem('firstLoad');
        }
    }

    componentDidMount() {
        if (!this.props.posts) {
            this.props.fetchPosts();
            this.props.fetchUser(currentUser.id);
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.blog) {
            if (this.props.posts !== nextProps.posts) {
                return false
            };
        } else {
            return true
        };
    }

    render() {
        if (!this.props.posts) {
            // dashboard
            return (
                <div>
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
                            currentUser={this.props.currentUser} 
                        />
                    </ul>
                </div>
            )
        } else {
            // blog
            // debugger;
            return (
                <div>
                    <ul>
                        <PostIndexItem 
                            posts={this.props.posts} 
                            blog={this.props.blog} 
                            currentUser={this.props.currentUser} 
                            createFollow={this.props.createFollow} 
                            deleteFollow={this.props.deleteFollow} 
                        />
                    </ul>
                </div>
            )
        }
    }
}

export default Post;