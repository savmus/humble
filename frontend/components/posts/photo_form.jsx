import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class PhotoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.post;

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    update(field) {
        return (e) => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        let post = Object.assign({}, this.state);
        this.props.action(post);

        this.setState({
            image_url: ""
        });

        this.props.history.push('/dashboard');
    }

    handleClick(e) {
        e.preventDefault();

        this.props.history.push('/dashboard');
    }

    render() {
        return (
            <div className='post-form'>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='photo-url'>
                        <input
                            type="url"
                            id='photo-url'
                            onChange={this.update("image_url")}
                            placeholder="URL goes here"
                            value={this.state.image_url || ""}
                        />
                    </label>

                    <Link to='/dashboard'>Close</Link>
                    <button>Post</button>
                </form>
            </div>
        );
    }
}

export default withRouter(PhotoForm);