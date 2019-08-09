import React from 'react';

class Like extends React.Component {
    constructor (props) {
        super(props);

        if (!this.props.post.liked_by_current_user) {
            this.state = {
                liked: false
            }
        } else {
            this.state = {
                liked: true
            }
        };

        this.handleLike = this.handleLike.bind(this);
    }

    handleLike (e) {
        e.preventDefault();

        if (this.state.liked) {
            this.props.deleteLike(this.props.post.id).then(() => {
                this.setState({
                    liked: false
                });
            });
        } else {
            this.props.createLike(this.props.post.id).then(() => {
                this.setState({
                    liked: true
                });
            });
        };
    }
        
    render () {
        return (
            <div className="like-button">
                {(this.state.liked) ? (
                    <div>
                        <button
                            onClick={this.handleLike} 
                            className={`like-btn ${this.props.post.author_id === this.props.user.id ? "like-hide" : "reveal"}`}
                        ><i className="fa fa-heart"></i></button>
                        <strong>{this.props.post.likes} notes</strong>
                    </div>
                ) : (
                    <div>
                        <button
                            onClick={this.handleLike} 
                            className={`like-btn ${this.props.post.author_id === this.props.user.id ? "like-hide" : "reveal"}`}
                        ><i className="fa fa-heart-o"></i></button>
                        <strong>{this.props.post.likes} notes</strong>
                    </div>
                    )}
            </div >  
        )
    }
}

export default Like;