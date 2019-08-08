import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

class TextForm extends React.Component {
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
            title: "",
            description: ""
        })

        this.props.history.push('/dashboard');
    }

    handleClick(e) {
        e.preventDefault();

        this.props.history.push('/dashboard');
    }

    render() {
        return (
            <div className='post-form'>
                <form 
                    onSubmit={this.handleSubmit}
                >
                    <label htmlFor='text-title'>
                        <input
                            type="text"
                            id='text-title'
                            onChange={this.update("title")}
                            placeholder="Title"
                            value={this.state.title || ""}
                        />
                    </label>

                    <label htmlFor='text-description'>
                        <textarea
                            id='text-description'
                            onChange={this.update("description")}
                            placeholder="Text goes here"
                            value={this.state.description || ""}
                        />
                    </label>

                    <Link to='/dashboard'>Close</Link>
                    <button>Post</button>
                </form>
            </div>
        );
    }
}

export default withRouter(TextForm);