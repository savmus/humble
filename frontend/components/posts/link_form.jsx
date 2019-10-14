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
            url: "",
            description: ""
        });

        // let close = document.getElementById('close-link');
        // close.click();

        document.getElementById('close-link').click();
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
                        <label htmlFor='link-url'>
                            <input
                                type="url"
                                id='link-url'
                                onChange={this.update("url")}
                                placeholder="URL goes here"
                                value={this.state.url || ""}
                            />
                        </label>

                        <label htmlFor='link-description'>
                            <textarea
                                id='link-description'
                                onChange={this.update("description")}
                                placeholder="Add a descripton, if you want"
                                value={this.state.description || ""}
                            />
                        </label>

                        <a
                            id='close-link' 
                            href='#/dashboard'
                            onClick={this.props.handleClose}
                        >Close</a>
                        <button disabled={!this.state.url} >Post</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(LinkForm);