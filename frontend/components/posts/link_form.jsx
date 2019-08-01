import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

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

        this.props.action(this.state);
    }

    handleClick(e) {
        e.preventDefault();

        this.props.history.push('/dashboard');
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input
                            type="url"
                            onChange={this.update("url")}
                            placeholder="URL goes here"
                        />
                    </label>

                    <button>Post</button>
                </form>
                <button onClick={this.handleClick}>Close</button>
            </div>
        );
    }
}

export default withRouter(LinkForm);