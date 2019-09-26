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

        const likedBtn = document.getElementById(`${this.props.idx}-liked`);
        const unlikedBtn = document.getElementById(`${this.props.idx}-unliked`);

        if (this.state.liked) {
            likedBtn.disabled = true;
            this.props.deleteLike(this.props.post.id).then(() => {
                this.setState({
                    liked: false
                });
            });
        } else {
            unlikedBtn.disabled = true;
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
                            id={`${this.props.idx}-liked`} 
                            onClick={this.handleLike} 
                            className={`like-btn ${this.props.post.author_id === this.props.user.id ? "like-hide" : "reveal"}`}
                        ><i className="fa fa-heart"></i></button>
                        <strong>{this.props.post.likes} notes</strong>
                    </div>
                ) : (
                    <div>
                        <button
                            id={`${this.props.idx}-unliked`} 
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