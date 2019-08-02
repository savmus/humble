import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class LinkForm extends React.Component {
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
            url: ""
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
                    <label htmlFor='link-url'>
                        <input
                            type="url"
                            id='link-url'
                            onChange={this.update("url")}
                            placeholder="URL goes here"
                            value={this.state.url || ""}
                        />
                    </label>

                    <Link to='/dashboard'>Close</Link>
                    <button>Post</button>
                </form>
            </div>
        );
    }
}

export default withRouter(LinkForm);