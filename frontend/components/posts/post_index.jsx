import React from 'react';
import PostIndexItem from './post_index_item';
import { Link, Redirect } from 'react-router-dom';
import NewTextContainer from './new_text_container';
import NewPhotoContainer from './new_photo_container';
import NewQuoteContainer from './new_quote_container';
import NewLinkContainer from './new_link_container';

class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            textShow: false,
            photoShow: false,
            quoteShow: false,
            linkShow: false
        };

        this.showTextModal = this.showTextModal.bind(this);
        this.hideTextModal = this.hideTextModal.bind(this);
        this.showPhotoModal = this.showPhotoModal.bind(this);
        this.hidePhotoModal = this.hidePhotoModal.bind(this);
        this.showQuoteModal = this.showQuoteModal.bind(this);
        this.hideQuoteModal = this.hideQuoteModal.bind(this);
        this.showLinkModal = this.showLinkModal.bind(this);
        this.hideLinkModal = this.hideLinkModal.bind(this);
    }

    componentDidMount() {
        if (!this.props.posts) {
            this.props.fetchPosts();
            this.props.fetchUser(this.props.currentUser.id);
        }
    }

    componentDidUpdate (prevProps) {
        if (!this.props.posts) {
            if (this.props.allPosts.length > prevProps.allPosts.length) {
                this.props.fetchPosts();
            };
        }
    }

    showTextModal (e) {
        e.preventDefault();

        this.setState({
            textShow: true,
            photoShow: false,
            quoteShow: false,
            linkShow: false
        });
    }

    hideTextModal(e) {
        e.preventDefault();

        this.setState({
            textShow: false,
            photoShow: false,
            quoteShow: false,
            linkShow: false
        });
    }

    showPhotoModal(e) {
        e.preventDefault();

        this.setState({
            textShow: false,
            photoShow: true,
            quoteShow: false,
            linkShow: false
        });
    }

    hidePhotoModal(e) {
        e.preventDefault();

        this.setState({
            textShow: false,
            photoShow: false,
            quoteShow: false,
            linkShow: false
        });
    }

    showQuoteModal(e) {
        e.preventDefault();

        this.setState({
            textShow: false,
            photoShow: false,
            quoteShow: true,
            linkShow: false
        });
    }

    hideQuoteModal(e) {
        e.preventDefault();

        this.setState({
            textShow: false,
            photoShow: false,
            quoteShow: false,
            linkShow: false
        });
    }

    showLinkModal(e) {
        e.preventDefault();

        this.setState({
            textShow: false,
            photoShow: false,
            quoteShow: false,
            linkShow: true
        });
    }

    hideLinkModal(e) {
        e.preventDefault();

        this.setState({
            textShow: false,
            photoShow: false,
            quoteShow: false,
            linkShow: false
        });
    }

    render() {
        if (!this.props.posts) {
            if (this.props.allPosts.length === 0) {
                return null
            }

            // dashboard
            return (
                <div className='post-index'>
                    <ul className='post-links'>
                        <li>
                            <a 
                                href='#' 
                                onClick={this.showTextModal} 
                            ><i className="material-icons post-icons text">text_fields</i></a>
                            <a 
                                href='#' 
                                onClick={this.showTextModal} 
                                className='text-link' 
                            >Text</a>
                            <NewTextContainer 
                                show={this.state.textShow} 
                                handleClose={this.hideTextModal} 
                            />
                        </li>
                        <li>
                            <a 
                                href='#' 
                                onClick={this.showPhotoModal} 
                            ><i className="material-icons post-icons photo">photo_camera</i></a>
                            <a 
                                href='#' 
                                onClick={this.showPhotoModal} 
                                className='text-link'
                            >Photo</a>
                            <NewPhotoContainer 
                                show={this.state.photoShow} 
                                handleClose={this.hidePhotoModal} 
                            />
                        </li>
                        <li>
                            <a 
                                href='#' 
                                onClick={this.showQuoteModal} 
                            ><i className="material-icons post-icons quote">format_quote</i></a>
                            <a 
                                href='#' 
                                onClick={this.showQuoteModal} 
                                className='text-link'
                            >Quote</a>
                            <NewQuoteContainer
                                show={this.state.quoteShow}
                                handleClose={this.hideQuoteModal}
                            />
                        </li>
                        <li>
                            <a 
                                href='#' 
                                onClick={this.showLinkModal} 
                            ><i className="material-icons post-icons link">insert_link</i></a>
                            <a 
                                href='#' 
                                onClick={this.showLinkModal} 
                                className='text-link'
                            >Link</a>
                            <NewLinkContainer
                                show={this.state.linkShow}
                                handleClose={this.hideLinkModal}
                            />
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
                <div className='blog'>
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