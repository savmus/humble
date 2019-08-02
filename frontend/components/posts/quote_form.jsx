import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class QuoteForm extends React.Component {
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
            summary: "",
            caption: ""
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
                    <label htmlFor='quote-caption'>
                        <textarea
                            id='quote-caption'
                            onChange={this.update("caption")}
                            placeholder="Quote"
                            value={this.state.caption || ""}
                        />
                    </label>

                    <label htmlFor='quote-summary'>
                        <input
                            type="text"
                            id='quote-summary'
                            onChange={this.update("summary")}
                            placeholder="Source"
                            value={this.state.summary || ""}
                        />
                    </label>

                    <Link to='/dashboard'>Close</Link>
                    <button>Post</button>
                </form>
            </div>
        );
    }
}

export default withRouter(QuoteForm);