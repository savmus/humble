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

        const button = document.getElementById(`${this.props.idx}`);
        button.disabled = true;

        this.props.refetch();

        this.props.createFollow(this.props.user.id).then(() => {
            this.setState({
                followed: true
            });
        });
    }

    render() {
        return (
            <div className='follow'>
                {(this.props.user.followed_by_current_user) ? (
                    <div></div>
                ) : (
                    <button
                        id={`${this.props.idx}`} 
                        onClick={this.handleFollow} 
                        className='blog-follow' 
                    ><i className="material-icons follow-icon">add_box</i></button>
                    )}
            </div >
        )
    }
}

export default Follow;