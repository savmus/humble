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

        document.getElementById('close-quote').click();
    }

    handleClick(e) {
        e.preventDefault();

        this.props.history.push('/dashboard');
    }

    render() {
        return (
            <div className={this.props.show ? "modal display-block" : "modal display-none"}>
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

                        <a
                            id='close-quote'
                            href='#'
                            onClick={this.props.handleClose}
                        >Close</a>
                        <button disabled={!this.state.caption || !this.state.summary} >Post</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(QuoteForm);