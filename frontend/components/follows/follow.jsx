import React from 'react';

class Follow extends React.Component {
    constructor(props) {
        super(props);

        if (!this.props.user.followed_by_current_user) {
            this.state = {
                followed: false
            }
        } else {
            this.state = {
                followed: true
            }
        };

        this.handleFollow = this.handleFollow.bind(this);
    }

    handleFollow(e) {
        e.preventDefault();

        if (this.props.user.followed_by_current_user) {
            this.props.refetch();

            this.props.deleteFollow(this.props.user.id).then(() => {
                this.setState({
                    followed: false
                });
            });
        } else {
            this.props.refetch();

            this.props.createFollow(this.props.user.id).then(() => {
                this.setState({
                    followed: true
                });
            });
        }
    }

    render() {
        return (
            <div className='follow'>
                {(this.props.user.followed_by_current_user) ? (
                    <button
                        id={`${this.props.user.username}`}
                        onClick={this.handleFollow}
                        className='blog-unfollow'
                    >Unfollow</button>
                ) : (
                    <button
                        id={`${this.props.user.username}`} 
                        onClick={this.handleFollow} 
                        className='blog-follow' 
                    ><i className="material-icons follow-icon">add_box</i></button>
                    )}
            </div >
        )
    }
}

export default Follow;